---
title: Decision log
status: active
updated: 2026-09-05
read_when: you want to know why something is the way it is, or you are about to make a choice that others will need to understand later
---

# Decision log

Append-only. Newest at the bottom. To reverse a decision, add a new entry that names the one it supersedes.
Format: `D-nnn · date · title` → **Decision** · **Why** · **Consequences**.

---

### D-001 · 2026-09-05 · Firestore is the sole database
**Decision.** Firestore (one Firebase project, shared by both repos) is the system of record. Supabase/Postgres is removed.
**Why.** V2 already writes everything to Firestore; V1's Supabase path is unused by the current frontend; two databases means two truths.
**Consequences.** P5 deletes V1 + Supabase. Joins are denormalised (counters, membership docs). Security moves to rules (D-004).

### D-002 · 2026-09-05 · Write ownership: web app owns inventory, backend owns money
**Decision.** Clients write plans/members/invites/catalogue/users; only gc-payments writes `transactions`, `plans.currentBalance`, `planMembers.paymentStatus/amountPaid`, `status: locked`.
**Why.** Money mutations must be idempotent, signed, and auditable; provider callbacks can only land on a server. Everything else is CRUD that a rules-guarded client does more simply.
**Consequences.** 20 §Ownership is the contract; 21 enforces the client half; backend half is by review.

### D-003 · 2026-09-05 · `plans.currentBalance` is the field name
**Decision.** Keep `currentBalance` (what the code writes). `MVP_USER_JOURNEYS.md`'s `currentAmount` is a doc error.
**Why.** Renaming a live, incremented field for a doc is risk without benefit.
**Consequences.** Update the journeys appendix (P4.3).

### D-004 · 2026-09-05 · Client-direct Firestore replaces REST for inventory
**Decision.** Frontend reads/writes inventory with the Firestore SDK behind `NEXT_PUBLIC_DATA_SOURCE`, collection by collection.
**Why.** Removes a hop and a whole class of endpoints; gives realtime for free; the backend shrinks to what only a server can do.
**Consequences.** Rules become the authorisation layer — P1 precedes any client write. Composite indexes must ship with each query.

### D-005 · 2026-09-05 · `onSnapshot` replaces socket.io
**Decision.** Realtime via Firestore listeners on `transactions/{id}` and `plans/{id}`. socket.io removed from both repos.
**Why.** The backend already writes terminal status to Firestore; a second realtime channel is redundant and unauthenticated.
**Consequences.** P2.8 client, P4.5 backend, P5.3 removal.

### D-006 · 2026-09-05 · KB lives in `Grupchat-Landing/docs/kb`, indexed by `INDEX.md`
**Decision.** One versioned KB in the product repo; `gc-payments/CLAUDE.md` points at it. One topic per file, ≤250 lines, frontmatter with `read_when`, append-only decisions.
**Why.** Optimises for repeated partial reading as it grows; avoids the 15 overlapping summary docs that preceded it (90).
**Consequences.** CONVENTIONS.md governs edits. Legacy docs are mapped, not deleted, in 90.

### D-007 · 2026-09-05 · Post-login routes: `/home`, `/plans`, `/plans/new`, `/discover`
**Decision.** New route names for the rebuilt UX; `/dashboard*` 307s to `/home` (`next.config.mjs`).
**Why.** Clean slate; REST-ish nouns; old bookmarks don't 404.
**Consequences.** Journeys doc's "Homepage" = `/home`.

### D-008 · 2026-09-05 · Design language for the rebuilt app
**Decision.** White ground, Figtree, `purple-600` (the landing's "Open Web App" colour) for primary actions, `border-2 border-purple-600` outline for alternatives, `rounded-xl`, ease `[0.32,0.72,0,1]`, 16px inputs, ≥44pt touch targets, reduced-motion respected. Landing page itself is unchanged.
**Why.** Requested Apple-like minimalism tied to an existing brand colour; 16px avoids iOS focus-zoom; purple-600 on white is 5.38:1 (AA) both ways.
**Consequences.** `components/auth/AuthShell.js` and `components/app/AppShell.js` are the reference implementations. Supersedes the earlier gold (`#b5975a`) exploration.

### D-009 · 2026-09-05 · Sign-up consent is clickwrap, not a checkbox
**Decision.** "By creating an account, you agree to…" under the button; the required checkbox was removed.
**Why.** Matches the requested Apple-style form; industry norm.
**Consequences.** Flagged to product; revert is a five-line change in `app/sign-up/page.js` if explicit opt-in is required.

### D-010 · 2026-09-05 · `membersCount` may be incremented by the client (for now)
**Decision.** Accept-invite batch increments `plans.membersCount` from the client.
**Why.** A Cloud Function would be cleaner but adds a runtime; drift is cosmetic.
**Consequences.** Rules allow `membersCount` in the owner/member update whitelist **only** via `increment(1)` semantics — enforce with `request.resource.data.membersCount == resource.data.membersCount + 1`. Optional nightly recount job (24).

### D-011 · 2026-09-05 · Deterministic `planMembers` id `${planId}_${uid}`
**Decision.** New member docs use a composite id; rules use `exists()` on it for membership.
**Why.** Rules cannot run queries; `exists()` on a known path is the only cheap membership check. Also gives uniqueness for free.
**Consequences.** Backend `_getExistingMember` should read by id, falling back to the query for legacy docs; a one-off migration renames existing docs (P3 prerequisite).

### D-012 · 2026-09-05 · **Open:** invite-by-code lookup for signed-out visitors
**Options.** (a) keep `GET /v2/invitations/code/:code` on the backend; (b) Cloud Function; (c) make `invitations` readable by code via a separate public `inviteLinks/{code}` doc with minimal fields.
**Leaning.** (c) — no server runtime, tiny public surface. Decide before P3.2.

### D-013 · 2026-09-05 · Defer the Firestore-direct migration to the last step before test release
**Decision.** Build the product UX now against the existing REST API (`lib/api.js` → gc-payments V2). Execute P0.2–P5 only after the UX is tested and release-ready. P0.1 (credential rotation) is independent and may run any time.
**Why.** This build is an experiment in AI-driven delivery flow; the UX is the subject and the data layer is a confound. `lib/api.js` isolates the switch so it can be done once, late, with the UI stable.
**Consequences.** Realtime uses short polling of REST endpoints until P2.8. `23` stays `draft`. Checklist phase I holds the migration items. Anything in 20/21 remains the target contract.

### D-014 · 2026-09-05 · Signed-out invite preview via a public projection (resolves D-012 as option c)
**Decision.** A minimal, id-free projection of an invitation (`inviteService.publicProjection`) is served today by public REST `GET /v2/invites/:code/preview`, and in the migration phase by `inviteLinks/{code}` with `allow read: if true`.
**Why.** Party invitations need no login to read; nothing sensitive is in the projection; no Cloud Function runtime required.
**Consequences.** `/invite/[code]` page (checklist G1). Every preview audited. `/join/:code` redirects.

### D-015 · 2026-09-05 · Audit trail is append-only, backend-written, admin-readable
**Decision.** `auditEvents` written only via Admin SDK; clients may emit a whitelisted `ui.*` set through the backend; admins read via `/v2/audit/events` and `/admin/audit`.
**Why.** Traceability for support and for reviewing the automation experiment, without letting clients forge history. PII (phones) excluded by sanitizer.
**Consequences.** Every write handler gains a one-line `auditService.log` in its success path (checklist H4). In-memory filtering over the latest 500 until indexes land (phase I).

### D-016 · 2026-09-06 · Curated plans pool with custom amounts
**Decision.** `createPlan` keeps `poolMode` for premium plans (default `pool`); `contribute*` no longer require `planType == free`. Group total = listed price × people chosen at start; owner can adjust.
**Why.** Curated plans are admin-generated inventory; the journeys doc requires custom contributions for them too. Before this, `poolMode` was silently nulled and every contribution to a curated plan failed with "Plan does not have pooling enabled".
**Consequences.** `platformFeeRate ?? 0.01` (was `||`): premium plans' explicit `0` fee now stays `0` instead of becoming 1%. Legacy curated plans (no `poolMode`) still pay the listed price via `join-premium`.

### D-017 · 2026-09-06 · Payment rails follow plan type
**Decision.** Self-managed plans take **M-Pesa** contributions only; curated plans take **Paystack (card)** only. Enforced in the pay sheet (rail chosen from `planType`, no toggle) and server-side in `contribute` / `contributePaystack`.
**Why.** Matches `MVP_USER_JOURNEYS.md` §Payment Integration Boundaries; one rail per journey keeps copy, reconciliation and support simple.
**Consequences.** `joinPremiumMpesa` stays in the backend but is unreachable from the UI. Relaxing a rail is a one-line change in each place.

### D-018 · 2026-09-06 · Unused query paths are removed, not indexed
**Decision.** Three backend queries needing composite indexes the project lacks — insights "recent active users" (`planMembers planId in · lastActiveAt`), notifications `unreadOnly`, catalogue `city` filter — were deleted rather than indexed. `firestore.indexes.json` equals the live project (20).
**Why.** No shipped screen calls them; an index for dead code is maintenance without benefit; git history keeps the code.
**Consequences.** `npm run indexes:probe` is the gate: a new screen that needs an index adds it to `wanted` in `index-sync.js` and deploys via CLI (the service account cannot create indexes — 403).

### D-019 · 2026-09-06 · No hard deletes anywhere; soft delete with audit
**Decision.** Nothing in the system deletes a document, an array item, or a stored file. Deleting means `deletedAt`, `deletedBy`, optional `deleteReason` on the doc (array items: `removedAt`, `removedBy`); readers filter them out; every soft delete emits an audit event (`milestone.deleted`, `image.deleted`, `resource.removed`; catalogue uses `status: inactive`; invitations `status: revoked`; community already used `deletedAt`). Helper: `gc-payments/services/softDelete.js`. Guard: `npm run check:no-hard-delete` (greps the live backend for `.delete()`, `batch.delete`, `arrayRemove`, storage deletes).
**Why.** Auditability and reversibility beat storage savings at this scale; disputes about money and membership need history. One convention (`deletedAt`) keeps reads cheap: in-memory filtering, no index churn.
**Consequences.** Storage bytes for "deleted" images are kept (cost is negligible now; a retention job can archive later). Reads must use `omitDeleted` / `activeItems`. Rules (21) keep `allow delete: if false` on every collection. V1's five hard deletes go with the V1 code in P5. Admin "show deleted" views are a later addition — data is already there.

### D-020 · 2026-09-06 · A dead session resets to sign-in with clean state, never an error string
**Decision.** `lib/api.js` no longer throws "User not authenticated". When there is no user after `auth.authStateReady()`, when a token refresh fails with an `auth/*` error, or when the backend answers **401**, `resetSession(reason)` runs: Firebase `signOut`, `sessionStorage.clear()`, then a hard `location.replace("/sign-in?reason=…&redirect=<where you were>")`. Callers receive a `SessionError` (`code: auth/session-ended`) so nothing else runs. Sign-in shows a one-line notice from `reason` and returns the user via `redirect` after auth. `AppShell`'s gate also carries `redirect`.
**Why.** An error toast about authentication is a dead end; the only correct next step is signing in again, and a hard navigation is the cheapest way to guarantee no stale in-memory state.
**Consequences.** Idempotent under concurrent requests (single in-flight reset); no-op on auth pages (no loops) and on the server. `localStorage` (only `gc.debug`) is kept. Pages already gate requests on `user`, and `authStateReady()` guards the first-load race.

### D-021 · 2026-09-06 · One settlement path; reconciliation replaces in-process timers
**Decision.** `settlementService.js` is the sole writer of transaction outcomes and plan balances. Callbacks, the 5-minute reconciliation job and the verify endpoint all call it. Pending transactions are re-checked against the provider after 15 min and failed after 48 h without confirmation. The in-process `setTimeout` that used to fail STK pushes is deleted.
**Why.** Three code paths booking money three ways is how double-increments and stuck transactions happen; a restart must not lose a payment's fate.
**Consequences.** `settleSuccess` re-reads inside the transaction and no-ops unless still `pending` — replays are safe. The job queries `status == pending` only and filters age in memory (no new index, D-018). Daraja needs `STK_QUERY_URL` or derives it from `STK_PUSH_URL`.

### D-022 · 2026-09-06 · V2 STK callbacks go to the V2 route; V1 callback routes bridge and always acknowledge
**Decision.** V2 STK pushes set `CallBackURL` to `mpesaService.stkCallbackUrlV2()` (`STK_CALLBACK_URL`, else `/v2/mpesa/stk-callback` on `DEPOSIT_CALLBACK_URL`'s origin). `/core/deposit_callback` (V1) first checks Firestore for the `CheckoutRequestID` and, if found, delegates to the V2 handler. `/core/paybill-*` (C2B) persist the raw payload to `mpesa_logs` and always return 200.
**Why.** Incident 2026-09-05 22:39Z: a V2 contribution's STK result was delivered to the V1 URL (still in `DEPOSIT_CALLBACK_URL`), whose Supabase lookup failed → 500 ×3; the transaction sat pending until the reconciliation job settled it 18 min later. Safaricom retries non-200 acknowledgements, and C2B confirmations for V2 payments never match a V1 pool.
**Consequences.** No env change needed in production. Reconciliation now runs every 2 min for transactions ≥3 min old. Re-registering the Safaricom callback URLs to `/v2/...` is still worthwhile (removes the bridge hop) — see 40.

### D-023 · 2026-09-06 · Clients await settlement; no timers
**Decision.** No `setInterval`/polling on the client for payment state. The pay sheet, the Plan-details pending watcher and the post-redirect check all `await premiumAPI.verifyTransaction(id, { wait: 25 })`, which the server holds on a Firestore listener until the transaction leaves `pending` (then asks the provider once). Loops are bounded by attempts, not clocks.
**Why.** Timers guess; an awaited listener knows. It is also the REST-era shape of D-005's `onSnapshot`, so phase I swaps the transport without touching the UI.
**Consequences.** `waitForTerminal` in `settlementService.js`; `?wait` capped at 25s per request to stay under proxy limits. Reconciliation's cadence stays timer-based — that is server infrastructure, not UX.

### D-024 · 2026-09-06 · Plan checklists live on `milestones` with a scope
**Decision.** The journeys doc's "checkpoints" are the existing `milestones` collection, extended with `scope: "group" | "everyone"` and, for `everyone`, a `completions: { [uid]: Timestamp }` map. A group item is one shared tick; an everyone item is ticked per member and is `completed` once every active member has. Available on coordinate-only and pooled plans alike; coordinate-only plans use checklist progress as their hero ring.
**Why.** Coordinate-only plans had no purpose beyond membership; a checklist is the smallest thing that makes them worth opening. Reusing `milestones` keeps one collection, its indexes, soft delete and audit.
**Consequences.** `POST /v2/plans/:id/milestones { title, scope, dueDate?, description? }`; `PUT …/:milestoneId { completed }` toggles the caller's own tick for `everyone` items and the shared state for `group` items. `plans.progress` keeps counting `completed` items.

### D-025 · 2026-09-06 · An independent, append-only ledger of money movements
**Decision.** `ledgerEntries` is a journal written only by the backend: settlement entries are staged inside the same Firestore transaction that books `plans.currentBalance`; payout debits are posted at initiation (when the balance moves). Entry ids are deterministic (`<txId>:<n>`) so re-posting is a no-op. Accounts: `plan:<id>`, `platform:fees`. `verifyPlan` compares the ledger's balance with `plans.currentBalance` and reports drift; `npm run ledger:backfill` posts entries for transactions settled before the ledger existed (`source: backfill`, running balances rebuilt in time order).
**Why.** `transactions` records provider intent and outcome; it is not a statement of account. Support, disputes and the automation review need a journal that cannot disagree with the balance and that survives provider quirks (e.g. a missing receipt).
**Consequences.** Admin `/admin/ledger` with cursor pagination and per-plan verify; members can read their plan's journal (`GET /v2/ledger/plans/:id`). Never edited or deleted; corrections are `adjustment` entries (future, audited). Indexes: single-field `at`; filters in memory over ≤500 (D-018) until phase I.

### D-026 · 2026-09-06 · Withdrawals hold the pool until M-Pesa confirms; 2% fee; member or custom recipient
**Decision.** A payout request puts the gross amount on `plans.heldBalance` (available = `currentBalance − heldBalance`, re-checked inside the transaction) and sends `gross − 2%` by B2C to a plan member (number from profile or their last M-Pesa contribution) or a custom name + number. Only the B2C **result** debits the pool and posts the ledger (payout debit + fee credit). **Nothing releases a hold automatically**: a failed, timed-out or rejected transfer is parked for review (`needsReview`, hold kept, no journal entry), and an admin either **refunds the full amount to the pool** (`outcome: failed`) so the owner can withdraw again, or marks it sent with the receipt. The hold is internal — users are never shown "on hold"; funds awaiting confirmation are simply not offered for withdrawal.
**Why.** Debiting on initiation double-counts a failed transfer and needs a reversal nobody wrote. A hold is honest: the money is neither available nor gone until Daraja says so.
**Consequences.** `/v2/mpesa/b2c-result`, `/v2/mpesa/b2c-timeout`; the V1 `withdrawal_callback`/`queue_timeout` routes bridge on `OriginatorConversationID = WITHDRAW_<txId>`. Plan details has an owner-only Withdraw sheet that awaits confirmation (D-023) and reports a parked transfer as "we couldn't complete it — the amount will be restored so you can try again". Admin screen: `/admin/payouts`.

### D-027 · 2026-09-10 · Email MVP: verification gates withdrawals; five transactional emails
**Decision.** Sender `GrupChat <hello@grupchat.net>` via Resend (domain verification is the prerequisite). Email verification is sent at sign-up and gates **withdrawals only** — contributions never wait on it. Transactional set: invitation (known invitee), payment receipt (payer + owner), withdrawal confirmation (owner), payout-needs-review alert (admins). One shared minimal layout; every send is idempotent per event and audited; failures never block a settlement.
**Why.** MVP: only the emails that carry money or access. Gating contributions would cost payments to protect the payer from nothing; gating withdrawals protects the pool.
**Consequences.** Until the domain verifies, sends fail and are audited as `email.failed` (Resend's sandbox sender delivers only to the account owner). No marketing, digests or welcome mail.
