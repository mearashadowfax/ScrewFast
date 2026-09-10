---
title: Email — verification and transactional notifications (MVP)
status: active
updated: 2026-09-10
read_when: you are implementing or reviewing anything that sends an email, or the sign-up verification flow
---

# Email (MVP) — approved 2026-09-10 (D-027)

Scope rule: transactional only, one email per event, one layout. No digests, no marketing, no welcome mail.

## What exists
- Backend `services/emailService.js` on **Resend** (`RESEND_API_KEY`), sending as `GrupChat <noreply@resend.dev>` — Resend's sandbox sender, which delivers **only to the account owner's address**. Four V1 templates (invitation, transaction, membership, general) in the old purple-gradient style; no V2 code calls them.
- Firebase Auth already sends **password reset** (customisable in the console). `emailVerified` is not read anywhere.

## Prerequisite (M0)
Verify `grupchat.net` on Resend (DKIM/SPF DNS records) and send as **`GrupChat <hello@grupchat.net>`**, reply-to `info@grupchat.net`. Until then nothing reaches real users.

## Proposed items

| # | Email | Trigger (server) | To | Contents |
|---|---|---|---|---|
| M1 | **Verify your email** | sign-up (client: Firebase `sendEmailVerification`, continue URL `/verify-email`) | new user | Firebase-hosted link; template text set in the Firebase console |
| M2 | You're invited to *{plan}* | `invite.issued` when the invitee is known (invite-by-username → their email) | invitee | inviter, plan name, date, one button → `/invite/{code}` |
| M3 | Payment received | `payment.settled` (contribution or curated payment) | payer **and plan owner** | amount, plan, M-Pesa receipt / card ref, link to the plan |
| M4 | Withdrawal sent | `payout.settled` | plan owner | gross, fee, net, recipient, receipt |
| M5 | *(ops)* Payout needs review | `payout.review_required` | all admins | plan, amount, reason, link to `/admin/payouts` |

Explicitly **not** in MVP: welcome email, invite accepted, plan locked / reminders (in-app exists), contribution notices to the owner (in-app exists), digests.

## Verification flow (M1)
1. Sign-up → after `updateProfile` and the backend session, `sendEmailVerification(user, { url: <origin>/verify-email?redirect=/home })`; continue to Home as today (soft — nothing is blocked on it).
2. Home shows a quiet banner while `!user.emailVerified`: *"Verify your email to withdraw funds · Resend link"*. Dismissible per session.
3. `/verify-email`: reloads the user; shows *Verified* + continue, or *Resend* with a 60s cooldown. Google sign-ins arrive verified.
4. **Hard gate — withdrawals only.** `firebaseAuthMiddleware` exposes `emailVerified: decodedToken.email_verified`; `POST /v2/plans/:id/payout` returns 403 *"Verify your email to withdraw"* if false. Contributions stay open (conversion).

## Sending rules
- Send **after** the write commits; never block a settlement or a response on email. Failures are audited, not surfaced to users.
- One shared layout: white, system font stack, `#9333ea` button, footer "You're receiving this because you use GrupChat · info@grupchat.net". Always a text alternative.
- Idempotent per event: `emails/{type}:{entityId}` write-once doc; a replayed callback sends nothing twice.
- Audit: `email.sent { type, entityId, messageId }` / `email.failed { type, entityId, reason }`. Recipient addresses are not stored in audit (PII).

## Effort (rough)
M0 ½h (DNS, yours) · M1 ½ day · M2–M4 ~½ day each incl. the shared layout · M5 1h.

## Decisions (2026-09-10)
Sender `GrupChat <hello@grupchat.net>` (reply-to `info@grupchat.net`) · verification gates **withdrawals only** · M5 admin alert **in** · M3 receipt to **payer and owner**.

## Implementation
- Backend: `services/emailService.js` → `renderEmail` (shared layout), `sendOnce` (write-once `emails/{type}:{entityId}`, audits `email.sent` / `email.failed`, never throws), `emailsForUids`, `adminEmails`. Emits: `settleSuccess` → receipt; `settlePayoutSuccess` → payout; `holdPayoutForReview` (callbacks and the 30-min job) → admin alert. `firebaseAuthMiddleware` exposes `emailVerified`; `payout` returns 403 `email-unverified` without it.
- Frontend: sign-up calls `sendEmailVerification` (continue URL `/verify-email`); `/verify-email` reloads the user and confirms or resends (one send per page view — no client timers, D-023; Firebase rate-limits beyond that); Home shows `VerifyEmailBanner` for unverified password accounts (session-dismissible); the Withdraw sheet shows the verify prompt instead of the form.
- Ops: `npm run email:domain` (Resend domain + DNS record status), `npm run email:test <address>` (send the layout to yourself).
- M2: `inviteByUsername` now stores an `inviteCode` (same 16-hex shape as link invites) and emails the invitee when their account is known; the button opens `/invite/{code}`, where only the intended invitee can accept.
- Links are built from `FRONTEND_URL` (falls back to `https://www.grupchat.net`); `EMAIL_FROM` / `EMAIL_REPLY_TO` override the sender.
- The Resend key is send-only, so `email:domain` probes by sending to Resend's sink address `delivered@resend.dev` and reports Resend's verdict.
