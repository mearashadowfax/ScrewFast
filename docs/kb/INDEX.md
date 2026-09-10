# GrupChat Knowledgebase — Index

**Read this file first, then only the documents you need.** Each entry is one line;
the detail lives in the linked file. Never paste document content here.

## How to use
1. Find the topic below. `status` tells you how much to trust it.
2. Open only that document. Each starts with `read_when` — if it doesn't match your task, close it.
3. Changed something? Follow the update protocol in [CONVENTIONS.md](CONVENTIONS.md).

## Documents

| ID | Document | One line | Status |
|---|---|---|---|
| — | [CONVENTIONS.md](CONVENTIONS.md) | How this KB is written, sized, and updated | active |
| 00 | [00-system-overview.md](00-system-overview.md) | Components, responsibility split, current vs target state | active |
| 10 | [10-workplan.md](10-workplan.md) | Phases: UX build-out first (REST), migration last; done/rollback per slice | active |
| 11 | [11-checklist.md](11-checklist.md) | Trackable line items A–Z; tick continuously | active |
| 20 | [20-spec-data-model.md](20-spec-data-model.md) | Firestore collections as the code writes them; ownership matrix; indexes | active |
| 21 | [21-spec-security-rules.md](21-spec-security-rules.md) | Rules for client-direct access to the V2 schema | draft |
| 22 | [22-spec-payments.md](22-spec-payments.md) | Initiation → callback → reconciliation; idempotency; realtime | active |
| 23 | [23-spec-frontend-data-layer.md](23-spec-frontend-data-layer.md) | `lib/db` design, hooks, data-source flag, what stays on REST | draft |
| 24 | [24-spec-backend-surface.md](24-spec-backend-surface.md) | What gc-payments keeps, deletes, and runs as jobs | active |
| 25 | [25-spec-design-system.md](25-spec-design-system.md) | Apple-centric design rules: type, colour, geometry, motion, patterns | active |
| 26 | [26-spec-invites.md](26-spec-invites.md) | Invite links incl. signed-out preview; accept/decline flow | active |
| 27 | [27-spec-audit.md](27-spec-audit.md) | Audit events and the admin view | active |
| 28 | [28-spec-email.md](28-spec-email.md) | Email verification + transactional notifications (MVP) | active |
| 30 | [30-decisions.md](30-decisions.md) | Append-only decision log (ADR-lite) | active |
| 40 | [40-runbooks.md](40-runbooks.md) | Local dev, emulators, deploying rules, rotating credentials, debugging payments | active |
| 90 | [90-legacy-docs.md](90-legacy-docs.md) | Every pre-KB document in both repos and what supersedes it | active |

## Start here for…
- **"What are we building?"** → 00, then `../MVP_USER_JOURNEYS.md` (product journeys, still authoritative)
- **Picking up the next slice of work** → 11 (line items), then 10 (why this order)
- **Building or reviewing a screen** → 25
- **Touching Firestore from the frontend** → 20 → 21 → 23
- **Anything with money in it** → 22 (and 24 for what the backend owns)
- **Running things locally / deploying rules** → 40
- **"Why is it like this?"** → 30
- **Found an old `.md` and unsure if it's true** → 90

## Repos
- `Grupchat-Landing` — Next.js 15 fullstack app (landing, auth, product UI, inventory writes). This KB lives here.
- `gc-payments` (package name `gc-gateway`) — Express service: payment initiation, provider callbacks, transaction processing, scheduled jobs.
