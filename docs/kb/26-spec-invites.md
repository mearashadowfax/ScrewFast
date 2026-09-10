---
title: Invites — links, signed-out preview, accept/decline
status: active
updated: 2026-09-05
read_when: you touch anything under /invite, invitation endpoints, or the future inviteLinks document
---

# Invites

## Flow
1. **Issue.** Owner or member on Plan details → `POST /v2/plans/:planId/invitations` → `{ inviteCode, inviteUrl, invitationId }`. The link is **`/invite/{code}`**. (Pre-rebuild links were `/join/{code}`; `next.config.mjs` 307s them.)
2. **Signed-out visitor opens the link.** `app/invite/[code]/page.js` calls the **public** `GET /v2/invites/:code/preview` → renders plan name, category, date, member count, host name and one CTA: *Sign in to join* → `/sign-in?redirect=/invite/{code}` (sign-up offered as the text alternative). Nothing else is shown.
3. **Signed-in.** Same page calls `GET /v2/invitations/code/:code` (auth) → invitation + `invitationId` + `plan` summary + `host`. Buttons: **Accept** → `POST /v2/invitations/accept { invitationId }` → Plan details; *Decline* → `PUT /v2/invitations/:id/decline` → Home. Already a member → straight to Plan details. `status ≠ pending` → "This invite is no longer active" + Home.
4. **Inbox.** `/notifications` lists pending invites (`GET /v2/invitations/pending`) with the same accept/decline rows.

## The invite doc (public projection)
Implemented today by `gc-payments/services/inviteService.js → publicProjection()` and served by the public route. **It is deliberately minimal:**
```
inviteCode, status,
plan: { name, category, planType, status, targetDate, membersCount },
host: { displayName, avatarUrl }
```
No ids, no money fields, no member identities, no inviter uid. Every preview is audited as `invite.previewed` (source `public`).

**Migration phase (I):** the same projection is written by the backend to **`inviteLinks/{code}`** when an invite is issued and updated when its status changes; rules `allow read: if true; allow write: if false;`. The public REST route is then removed. This resolves D-012 as option (c) — D-014.

## Endpoint contract changes made 2026-09-05
- `GET /v2/invitations/code/:code` now returns `{ ...invitation, invitationId, plan, host }` (was invitation only — the previous join page's plan lookup was always null).
- New public `GET /v2/invites/:code/preview` (rate-limited by the global limiter).
- Accept expects **`invitationId`**, never `inviteCode` (root cause of the earlier "Invitation ID required").

## Security notes
- Codes are generated server-side; treat them as capability tokens. Preview exposes nothing that isn't on a party invitation.
- Preview route has no auth by design; abuse surface = enumeration. Mitigation: global rate limit; audit log; codes are long and random. If enumeration is observed, add per-IP limiter on `/v2/invites`.

## Username invitations (M2)
Invite-by-username also stores an `inviteCode`; the invitee gets an email (KB 28) pointing at `/invite/{code}`. `acceptInvitation` still refuses anyone but `inviteeUserId`.
