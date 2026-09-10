---
title: Runbooks
status: active
updated: 2026-09-06
read_when: you need to run, deploy, seed, rotate, or debug something — not to understand it
---

# Runbooks

## Local development

| Service | Command | Port | Notes |
|---|---|---|---|
| Web app | `cd Grupchat-Landing && npm run dev` | 3000 | Turbopack. `NEXT_PUBLIC_API_URL=http://localhost:4000`. |
| Backend | `cd gc-payments && npm start` | 4000 | nodemon. Needs Admin credential (see Rotate) and provider keys in `.env`. |

**Do not run `next build` while `next dev` is running.** Both write to `.next`; the build's manifests get clobbered and you'll see `Could not find files for /_error in .next/build-manifest.json` or a phantom `/favicon.ico/route`. Verify changes against the dev server (`curl -s -o /dev/null -w '%{http_code}' localhost:3000/home`) or stop dev first.

**Killing servers:** by port, never by pattern — `pkill -f "next start"` matches the shell that runs it.
```sh
lsof -ti :3000 | xargs kill      # or :4000
```

## Firebase emulators (P0.5)
```sh
cd Grupchat-Landing
firebase emulators:start --only auth,firestore --project <project-id>
NEXT_PUBLIC_USE_EMULATOR=1 npm run dev
cd ../gc-payments && FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 npm run firebase:seed
```

## Rules and indexes (P0.3+)
Files (versioned since 2026-09-06): `Grupchat-Landing/firebase/firestore.rules` (deny-all until 21 ships), `firebase/firestore.indexes.json`, `firebase.json`, `.firebaserc`.

**Index tooling (gc-payments, uses the Admin credential):**
- `npm run indexes:probe` — runs every composite query shape in the code; prints `MISSING` + the console link for each.
- `npm run indexes:sync` — regenerates `firestore.indexes.json` from the live project + known gaps.
- `npm run indexes:create` — would create what the file lists and the project lacks, **but the backend service account gets 403** (`datastore.indexes.create` missing). Use `cd Grupchat-Landing && npx firebase login && npx firebase deploy --only firestore:indexes` instead, or paste the console links `indexes:probe` prints. Indexes build in minutes; `indexes:probe` shows `ok` once READY.
When a screen throws *"The query requires an index"*: add the shape to `scripts/index-probe.js` and to `wanted` in `index-sync.js`, then `sync` → `create`. Don't click console links ad hoc — they leave the file behind.
```sh
npm i -D firebase-tools @firebase/rules-unit-testing
npx firebase login
npx firebase deploy --only firestore:rules,firestore:indexes --project <project-id>
```
Test before deploy: `npx firebase emulators:exec --only firestore "node firebase/rules.test.mjs"`. Missing-index errors in the console include a one-click link; **add the index to the JSON too** or it's lost on the next deploy.

## Rotate the Admin SDK credential (P0.1)
1. Firebase console → Project settings → Service accounts → Generate new private key.
2. Store: `FIREBASE_SERVICE_ACCOUNT_B64=$(base64 -i key.json)` in the backend's secret store; locally in `.env`.
3. Update `lib/firebase-config.js` per 24 §Credential handling; delete `firebase-service-account.json`; add `firebase-service-account*.json` to `.gitignore`.
4. Console → delete the **old** key. Restart backend; confirm a Firestore read works.
5. Purge history: `git filter-repo --path firebase-service-account.json --invert-paths`, then force-push (coordinate — everyone re-clones).

## Deleting things
There is no hard delete. `softDeleteDoc(ref, { actorUid, action, entity, planId, reason })` or `stageSoftDelete(batch, ref, uid)`; filter reads with `omitDeleted(snap)` / `activeItems(arr)`. Before pushing backend changes: `npm run check:no-hard-delete`.

## A payout needs review (`needsReview`)
Failed, timed-out or rejected B2C transfers — and any still unconfirmed after 30 min — are parked (audit `payout.review_required`); the hold stays. Work them from `/admin/payouts`: **Refund to pool** releases the full amount (owner can retry); **Mark as sent** needs the portal receipt. Check the M-Pesa org portal for the B2C transfer `WITHDRAW_<txId>`: confirmed → `POST /v2/payouts/<txId>/resolve { "outcome": "success", "receipt": "<TransactionReceipt>" }`; absent/failed → `{ "outcome": "failed", "reason": "…" }`. Both are audited as `payout.resolved` and settle exactly like the callback would.

## Ledger
`cd gc-payments && npm run ledger:verify` — every plan's ledger balance vs `currentBalance`; exits 1 on drift. `npm run ledger:backfill [--dry]` — posts entries for transactions settled before the ledger existed (idempotent). Drift means a balance moved outside `settlementService`/`payout` — find the write, then post an audited `adjustment` (not yet tooled).

## Recording a journey
`scripts/record-journey.js` drives the dev server with Playwright against installed Chrome (`npm i -D playwright-core` once, not in package.json): fresh test account → sign-up → Home → create a self-managed plan → one checklist item, at phone (390×844) and desktop sizes. Output `.webm` → `ffmpeg … -c:v libx264` → `docs/media/journey-{mobile,desktop}.mp4`. Test accounts are `test.<label>.<ts>@example.com` / `DemoPass!2026` and are left in place (no hard deletes).

## Email
`cd gc-payments && npm run email:domain` — probes Resend by sending to its sink address (the key is send-only); exit 0 = domain verified. Run occasionally while DNS propagates. `npm run email:test you@example.com` — sends the shared layout to one address. Failed sends are in the audit trail as `email.failed` with the Resend reason. Verification mail itself comes from Firebase Auth (template in the Firebase console → Authentication → Templates).

## Grant admin
Before pushing backend changes that touch routes: `npm run check:admin-guards` (alongside `check:no-hard-delete`).
`cd gc-payments && npm run admin:grant -- you@example.com` (or a uid). Revoke with `npm run admin:revoke -- …`. The user must have signed in once (a `users/{uid}` doc must exist). Frontend reads the same `role` via `useAuth().isAdmin`.

## Seed data
`cd gc-payments && npm run firebase:seed` (`scripts/firebase-seed-cli.js`). Writes catalogue items and sample plans. Point at the emulator with `FIRESTORE_EMULATOR_HOST` to avoid touching production.

## Image uploads fail ("Failed to upload image")
Cloud Storage **writes** need an active billing account on the GCP project (`grupchat-prod-3ab64`; bucket `grupchat-prod-3ab64.firebasestorage.app` — new default buckets require Blaze). Reproduce from gc-payments with the server's credentials:
```sh
node --input-type=module -e 'import { firebaseService } from "./services/firebaseService.js"; const f = firebaseService.bucket.file("uploads/_probe/x.txt"); await f.save(Buffer.from("x")).then(()=>console.log("ok"), e=>console.log(e.message)); process.exit(0)'
```
`The billing account for the owning project is disabled…` ⇒ billing on the GCP project (seen 2026-09-06, resolved). Firestore keeps working meanwhile; the catalogue form also accepts a pasted image URL. Never import `lib/firebase-config.js` before `services/firebaseService.js` in server code — both now pass `storageBucket`, but init order still decides which app wins.

## Debugging a payment
1. Client: `localStorage.setItem("gc.debug","1")`, reload. `[api]` lines show the exact request body and the server's error payload; `[journey/*]` lines show flow decisions.
2. Find the transaction: Firestore console → `transactions` → filter `paystackReference` / `darajaCheckoutRequestId`.
3. `status: pending` for > 15 min ⇒ callback never arrived: check provider dashboard (Paystack → Webhooks; Daraja → callback URL reachability). Until P4.1 exists, settle by re-sending the webhook from the Paystack dashboard.
4. Common causes seen: `"Plan does not have pooling enabled"` — plan created without `poolMode: pool`; `"Invitation ID required"` — client sent `inviteCode` where the endpoint wants `invitationId`.

## A payment settled but the page didn't update / callback hit `/core/deposit_callback`
Symptom in Railway logs: `POST /core/deposit_callback 500` + `Supabase query error: fetch failed` right after a V2 `contribute`. Cause: STK push carried the V1 `DEPOSIT_CALLBACK_URL`. Fixed 2026-09-06 (D-022): V2 pushes use `/v2/mpesa/stk-callback`; the V1 route bridges; reconciliation settles stragglers within ~3–5 min. To retire the bridge hop, re-register the Safaricom app's callback URLs to `/v2/mpesa/stk-callback` (and C2B URLs to `/v2/payments/paybill-*`). Verify a transaction by hand: `GET /v2/transactions/:id/verify` (auth) or `npm run` a one-off `reconcileTransaction` from `services/settlementService.js`.

## Webhooks locally
`ngrok http 4000`, set the Paystack webhook URL to `https://<ngrok>/v2/paystack/webhook` (test mode), and `DEPOSIT_CALLBACK_URL` etc. for Daraja sandbox.

## Environment variables
- **Web app** (`.env`, `.env.local`): `NEXT_PUBLIC_FIREBASE_*` (7 keys), `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_MAPBOX_TOKEN`, `NEXT_PUBLIC_KEVERD_TOKEN`, `NEXT_PUBLIC_EMAIL_*` (used by `lib/emailService.js` for bug-report/data routes). New: `NEXT_PUBLIC_DATA_SOURCE`, `NEXT_PUBLIC_USE_EMULATOR`.
- **Backend**: see 22 §Environment. New: `FIREBASE_SERVICE_ACCOUNT_B64`.
