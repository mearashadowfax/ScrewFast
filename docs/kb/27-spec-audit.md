---
title: Audit trail and admin view
status: active
updated: 2026-09-05
read_when: you add an action that should be traceable, or you touch /admin/audit
---

# Audit trail

**Purpose.** Answer "who did what, to which plan, when" for support, dispute resolution and the
automation experiment's own review. Append-only; never edited or deleted from application code.

## Storage — `auditEvents/{id}` (Admin SDK only)
```
id, action, actorUid | null, actorRole ("user" | "admin" | "system"),
entity ("plan" | "invitation" | "member" | "transaction" | "catalogue" | null), entityId,
planId | null, meta { … sanitized }, source ("server" | "public" | "client"), at Timestamp
```
`meta` is sanitized in `services/auditService.js`: keys matching `/token|secret|password|phone|msisdn|otp|pin/i` are dropped; strings capped at 500 chars. **Phone numbers are never stored in audit.**

## Action taxonomy
| Source | Actions | Emitted from |
|---|---|---|
| server | `plan.created` `plan.updated` `plan.locked` | planController, autoLockService |
| server | `invite.issued` `invite.accepted` `invite.declined` `invite.revoked` | planExtController, invitationController |
| server | `member.committed` | planExtController |
| server | `payment.initiated` `payment.settled` `payment.failed` `payout.initiated` `payout.settled` `payout.failed` `payout.review_required` `payout.resolved` | premiumController, settlementService, reconciliationService |
| server | `catalogue.created` `catalogue.updated` | catalogueController |
| server | `milestone.deleted` `image.deleted` `resource.removed` | soft deletes via `services/softDelete.js` (D-019) |
| server | `admin.access_denied` | adminMiddleware — a signed-in non-admin hit an admin route |
| server | `email.sent` `email.failed` | `emailService.sendOnce` (KB 28) — no recipient addresses in meta |
| public | `invite.previewed` | invitesPublicController |
| client | `ui.plan_viewed` `ui.invite_previewed` `ui.checkout_opened` | web app via `auditAPI.emit` — **whitelist enforced server-side**; anything else is 400 |

Adding an action: register it in `AUDIT_ACTIONS`, emit with `auditService.log({...})` **after** the write succeeds, inside the handler's success path. Never `await` it in a way that can fail the response — `log()` already swallows errors.

## API
- `GET /v2/audit/events?action&planId&actorUid&entity&source&since&before&limit` — **admin**; `before` (ISO `at` of the last event seen) pages; response carries `nextCursor` (`users/{uid}.role == "admin"`). Newest first. Filters apply in memory over the latest 500 events (no composite index needed yet); response includes `matched`, `scanned`, `truncated` so the UI can say when a filter hit the window.
- `POST /v2/audit/events { action, entity?, entityId?, planId?, meta? }` — any signed-in user, `ui.*` only.

## Admin view — `/admin/audit`
- Gate: `useAuth().isAdmin` (mirrors backend). Non-admins get the standard scaffold "Nothing here".
- Layout (25 §Admin): large title · filter row (`Segmented` source: All/Server/Public/Client; action select; plan id; since) · dense `ListGroup` rows: `at` relative + absolute, `action` as `Tag`, actor (uid short), entity/plan links · tap → `Sheet` with the full JSON `meta`.
- `truncated: true` → footnote "Showing matches within the latest 500 events."
- `/admin` index links Audit and Catalogue.

## Migration phase (I)
Add composite indexes `auditEvents(action, at desc)`, `(planId, at desc)`, `(actorUid, at desc)` and switch `list()` to server-side filters + cursor pagination. Rules: `allow read: if isAdmin(); allow write: if false;`.

## Retention
Keep 12 months in Firestore; export older events to Storage (JSONL) via a monthly job — **proposed**, not built.
