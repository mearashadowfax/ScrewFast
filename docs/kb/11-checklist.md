---
title: Build checklist — trackable line items
status: active
updated: 2026-09-05
read_when: you are doing or reporting implementation work; tick items here as they complete
---

# Build checklist

Small, verifiable line items. Ticked continuously, not at the end. IDs are stable — reference
them in commits and decisions. `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked (say why).
**Data source for A–H is the existing REST API** (`lib/api.js` → gc-payments V2). Phase I flips it (D-013).

## A · Design system foundation
- [x] A1 Motion tokens `lib/motion.js` (EASE, STAGGER, `useRevealVariants`)
- [x] A2 App shell + auth gate `components/app/AppShell.js`
- [x] A3 Auth primitives `components/auth/AuthShell.js`
- [x] A4 Charts `components/home/Charts.js` (ring, bars, sparkline, count-up)
- [x] A5 `components/ui/Form.js` — move `FieldGroup`/`Field`/`PasswordField`/buttons out of AuthShell; AuthShell re-exports
- [x] A6 `components/ui/ListGroup.js` — `ListGroup`, `Row` (title, footnote, trailing, href/onClick, chevron)
- [x] A7 `components/ui/Sheet.js` — bottom sheet <640, centred dialog ≥640; focus trap; Esc; scrim
- [x] A8 `components/ui/Segmented.js`
- [x] A9 `components/ui/EmptyState.js`, `Tag.js`, `Avatar.js`, `ProgressBar.js`, `Stepper.js`
- [x] A10 `components/ui/StickyAction.js` — sticky bottom primary action under 640px, safe-area padding
- [x] A11 `lib/format.js`
- [x] A15 Sticky translucent header + bottom tab bar on phones (Home · Plans · Discover · Alerts); sticky actions sit above it
- [x] A14 Pull-to-refresh on touch devices (`PullToRefresh`, `PageFrame onRefresh`, `overscroll-behavior: contain`) wired into Home, Plans, Plan details, Discover (+item), Notifications, Admin (console, audit, catalogue list/edit)
- [x] A13 `components/app/PageFrame.js` (`PageFrame`, `Reveal`, `Section`), `lib/useAsync.js`, `lib/data/shape.js` — `money(amount, currency)`, `date(ts)`, `relative(ts)`, `initials(name)`; Firestore `Timestamp`/`_seconds` tolerant
- [ ] A12 Design review pass against 25 §Accessibility on every new screen (running item)

## B · Home (real data)
- [x] B1 `lib/data/home.js` — `getHomeSummary()` composing `plansAPI.getPlans`, `invitationsAPI.getPending`, `usersAPI.getInsights` with per-source fallbacks
- [x] B2 Replace `SAMPLE` in `app/home/page.js`: pooled % from plans' `currentBalance/targetAmount`; contributions from plan transactions; invites count
- [x] B3 Remove the "Sample" tag once B2 renders real values
- [x] B4 Action cards show live counts ("3 plans", "2 invites")
- [x] B5 Loading skeletons (hairline blocks, no spinners) and error line per stat
- [ ] B6 Mobile check ≤375px (needs a device/browser pass — not verifiable via curl): cards stack, sparkline 1:1, greeting wraps

## C · Your plans
- [x] C1 `app/plans/page.js` — list via `plansAPI.getPlans({limit, page})`; `ListGroup` rows: name, footnote (type · members · date), trailing progress or status `Tag`
- [x] C2 Segmented filter: All · Mine · Joined (client-side on `ownerId`)
- [x] C3 Pagination "Show more"
- [x] C4 Empty state → primary "Create a plan", outline "Discover"

## D · Plan details
- [x] D1 `app/plans/[planId]/page.js` — `plansAPI.getPlan`, `getPlanMembers`, `getPlanTransactions`
- [x] D2 Header: large title, meta line, `Ring` progress (pooled) or paid/unpaid (premium)
- [x] D3 Sections: Members · Resources · Activity (transactions) · About — hairline separated
- [x] D4 Primary action by state: pooled free → "Contribute"; premium unpaid → "Pay"; owner → "Invite" as outline
- [x] D5 Contribute `Sheet`: amount + phone (M-Pesa) / amount (Paystack) → `premiumAPI.contribute*`; pending state; tx polling via `plansAPI.getPlanTransactions` every 5s until terminal (interim for onSnapshot)
- [x] D6 Invite `Sheet`: `plansAPI.generateInvite` → shareable link `/invite/{code}` with copy button
- [x] D7 "Home" back link always visible (journeys rule); sticky action bar on mobile
- [x] D8 Owner-only: edit name/description inline via `plansAPI.updatePlan`

## E · Create a plan (self-managed)
- [x] E1 `app/plans/new/page.js` — 3-step `Stepper`: Basics (name, category, description) → Money (pool mode, target, currency) → Review
- [x] E2 `plansAPI.createPlan({ planType:'free', poolMode, targetAmount, currency })`
- [x] E3 Success → Plan details (journeys routing rule), toast via `sonner`
- [x] E4 Validation: name required; target > 0 when pooled; inline `FormError`

## F · Discover + curated join
- [x] F1 `app/discover/page.js` — `catalogueAPI.list({status:'active', category})`; category `Segmented`; cover cards
- [x] F2 `app/discover/[itemId]/page.js` — detail: venue, dates, price/person, "Start a plan" primary
- [x] F3 Start plan → `plansAPI.createPlan({ planType:'premium', catalogueItemId, targetDate })` → Plan details
- [x] F4 Premium pay from Plan details (D4/D5) via `premiumAPI.joinPaystack` / `joinMpesa`

## G · Invites (incl. signed-out)
- [x] G0 Backend: public `GET /v2/invites/:code/preview`; by-code now returns `plan`, `host`, `invitationId`; `/join/:code` → `/invite/:code` redirect
- [x] G1 `app/invite/[code]/page.js` — **public** preview: plan name, host, date, member count (see 26); CTA "Sign in to join" → `/sign-in?redirect=/invite/{code}`
- [x] G2 Signed-in: accept → `invitationsAPI.accept({ invitationId })` (id from the by-code lookup; fixes the earlier "Invitation ID required")
- [x] G3 Decline path; already-member path → straight to plan
- [x] G4 `/notifications` → "Invites & alerts": pending invites list with accept/decline rows
- [x] G6 Dead-session reset to sign-in with clean state (D-020)
- [x] G5 Redirect param honoured after sign-in/sign-up

## H · Audit system + admin view
- [x] H1 Spec written (26/27) · [x] H2 backend `auditService.log()` · [x] H3 `POST/GET /v2/audit/events` (live, verified 401 unauth) · [x] H4 18 emits: plan create/update/lock, invite issue/accept/decline/revoke, member commit, payment initiated/settled/failed, payout, catalogue create/update · [x] H5 `app/admin/audit/page.js` (admin-gated, filters, detail sheet) · [x] H6 `app/admin/page.js` index · [x] H7 Admin card on Home (admins only, live counts) + console stats header and latest activity · [x] H9 Soft-delete convention (D-019): `softDelete.js`, 3 hard deletes converted, `getPlan` hides removed resources, guard script; [x] H9b `deletedAt` filtered in `getPlanMilestones` / `getPlanImages` (links and image docs) · [x] H8 Curated-plan management `/admin/catalogue` (list live/paused, new, edit, pause/relaunch, cover upload, dates, links) via `POST/PUT /v2/catalogue` — audited as `catalogue.created/updated`

## K · Checklists (D-024)
- [x] K1 Backend: `scope` + `completions` on milestones; per-member toggle · [x] K2 Plan details: Checklist section (add sheet with Group/Everyone, tick, remove), coordinate-only hero ring shows checklist progress

## M · Email (MVP) — approved 2026-09-10 (D-027)
- [~] M0 Verify `grupchat.net` on Resend; sender `GrupChat <hello@grupchat.net>` *(DNS propagating — `npm run email:domain`)*
- [x] M1 Email verification on sign-up: send on sign-up, `/verify-email` page with resend, Home banner while unverified, **withdrawals gated** on `email_verified` (server + sheet)
- [x] M2 Invitation email on invite-by-username when the invitee's account is known → `/invite/{code}`; username invitations now carry an `inviteCode`
- [x] M3 Payment receipt to payer **and owner** on `payment.settled`
- [x] M4 Withdrawal confirmation to the owner on `payout.settled`
- [x] M5 Payout-needs-review alert to admins (callbacks + reconciliation)
- [x] M6 Shared minimal layout + `emails/{type}:{id}` idempotency + `email.sent/failed` audit (V1 templates retire with P5)

## W · Withdrawals (D-026)
- [x] W1 Payout with hold (`heldBalance`), 2% fee, member/custom recipient, B2C V2 result/timeout + V1 bridges, review flag, admin resolve · [x] W2 Plan details: Withdraw sheet (fee preview, recipient picker, awaits confirmation), hold shown in hero · [x] W3 `/admin/payouts`: parked payouts with Refund-to-pool / Mark-as-sent · [x] W4 Failures park for review (no auto-release); no user-facing hold wording

## L · Ledger + pagination (D-025)
- [x] L1 `ledgerEntries` posted atomically with settlement; payout debit at initiation · [x] L2 `GET /v2/ledger`, `/verify/:planId`, `/plans/:planId` · [x] L3 `/admin/ledger` (filters, totals, verify, Show more) · [x] L4 `ledger:backfill` / `ledger:verify` scripts · [x] L5 Cursor pagination: audit trail, console Latest activity; Show more on Plan Activity and Notifications

## P · Payments hardening (workplan P4)
- [x] P4.1 Reconciliation job · [x] P4.3 journeys doc `currentBalance` · [x] P4.4 verify endpoint + post-redirect verification on Plan details · [x] P4.5 socket emits retired · [ ] P4.2 idempotency guard doc + raw-body signature

## I · Firebase-direct data layer — **last, before test release** (D-013)
- [ ] I0 Rotate + purge Admin key (manual, security; can happen any time)
- [x] I1 P0.3 Firebase config versioned (`firebase.json`, `.firebaserc`, deny-all rules, index file = the project's 20). Deploy via CLI not yet exercised.
- [ ] I2–I5 = KB 10 P0.2, P0.4–P0.5, P1, P2, P3, P4, P5 in that order

## Z · Release readiness
- [ ] Z1 All screens pass 25 §Accessibility · [ ] Z2 ≤375px and ≥1280px walkthrough · [ ] Z3 `MVP_USER_JOURNEYS.md` acceptance criteria ticked · [ ] Z4 KB rows `updated` within the release week

## Log (newest first)
- 2026-09-10 · Email MVP approved and built (D-027): verification gate, receipts, payout + admin-alert emails, `email:domain` / `email:test`. M0 awaiting DNS (probe: not verified as of 17:10 UTC).
- 2026-09-10 · Email MVP proposed (spec 28, section E) — awaiting approval; nothing built.
- 2026-09-06 · Sign-up name race fixed both ways (explicit `updateMe` after session; `getMe` self-heals placeholders); recordings re-cut.
- 2026-09-06 · Journey recordings (sign-up → self-managed plan) at phone and desktop sizes in `docs/media/`; found and fixed profile display-name creation (backend `getMe`), sign-up token refresh, dev badge hidden.
- 2026-09-06 · Mobile navigation: sticky header and iOS-style bottom tab bar (A15).
- 2026-09-06 · Admin guard audited: all admin routes server-guarded; `ledger/plans/:id` admin path fixed; denials audited; `check:admin-guards` gate added.
- 2026-09-06 · Payout failures now park for admin review; refund releases the full hold; `/admin/payouts`; hold wording removed from the UI.
- 2026-09-06 · Withdrawals with hold-until-confirmation, 2% fee, member/custom recipients (D-026).
- 2026-09-06 · Ledger (D-025) and list pagination shipped.
- 2026-09-06 · Plan checklists (D-024): group tasks and everyone-does-this items on all plan types; coordinate-only plans now have a purpose.
- 2026-09-06 · `/plans/new`: removed "Both" pool mode (self-managed pools are M-Pesa/KES only, D-017); currency fixed to KES; buttons gained horizontal padding and Continue fills the Back/Continue row.
- 2026-09-06 · D-023: all client payment timers replaced by awaited `verify?wait`; `createPlan` now persists `targetAmount`/`currency`, `updatePlan` accepts them; Plan details shows pooled balance + Set-a-target when no target.
- 2026-09-06 · Production test found: STK callbacks routed to the V1 URL (fixed, D-022), C2B handlers 500ing (now always-ack + `mpesa_logs`), Plan details lacked a pending-payment watcher (added), and `createPlan` dropped `targetAmount`/`currency` (ring showed 0%) — fix in progress.
- 2026-09-06 · P4.1/P4.3/P4.4/P4.5 shipped (D-021): `settlementService`, `reconciliationService`, `GET /v2/transactions/:id/verify`, socket emits removed, journeys doc aligned.
- 2026-09-06 · Pull-to-refresh (A14) on all data screens; billing-specific upload message reverted.
- 2026-09-06 · Fixed button width conflicts (`tailwind-merge` in Form.js) that squeezed the Dates/Links add-rows on `/admin/catalogue/[id]`. Upload failure traced to **GCP billing disabled** (Storage writes refused) — endpoint now returns a clear 503; runbook added. Billing since restored; the billing-specific 503 message was removed (generic handling).
- 2026-09-06 · Session handling (D-020): `resetSession` replaces the "User not authenticated" throw; 401 → reset; sign-in shows the reason and honours `redirect`; `AppShell` gate carries `redirect`.
- 2026-09-06 · No-hard-delete policy (D-019) implemented in the live backend + guard; Discover empty state → partner invitation (`info@grupchat.net`; the landing footer has no email — socials are `#` placeholders).
- 2026-09-06 · Admin catalogue management shipped (H8): `components/admin/CatalogueForm.js`, `/admin/catalogue`, `/new`, `/[itemId]`. Pause = `status: inactive` (hidden from Discover), reversible.
- 2026-09-06 · Removed 3 backend query paths that needed absent indexes (insights recent users, notifications `unreadOnly`, catalogue `city`) — D-018; index file now equals the project (20). Admin card on Home + console stats (H7).
- 2026-09-06 · Index audit: 20 live indexes verified READY (all `/plans`, `/home`, `/discover`, `/notifications` shapes covered); 4 missing shapes identified (creation via Admin API denied 403 — needs `firebase deploy` with a user login); `firebase/` config versioned; notifications `readAt` fix.
- 2026-09-06 · B–H built on REST and compiling on the dev server (13 routes 200). Backend: premium plans pool (D-016), rails enforced (D-017), fee `??` fix, 18 audit emits, admin:grant script. Open: B6/A12 device pass, Z.
- 2026-09-05 · A5–A11 primitives (`components/ui/{Form,ListGroup,Sheet,Segmented,Bits}.js`, `lib/format.js`); backend audit service + public invite preview live; H4 emit sites located (14 anchors) but not inserted — paused for pending decisions.
- 2026-09-05 · Checklist created; A1–A4 already done from the scaffold work.
