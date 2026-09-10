---
title: Data model — Firestore collections as written by the code
status: active
updated: 2026-09-06
read_when: you are reading or writing any Firestore document from either repo, or writing a rule or index for one
supersedes: ../V2_FIRESTORE_MODELS.md (partially — this file reflects what gc-payments actually writes today)
---

# Data model

Source of truth for shapes is **the code that writes them** (`gc-payments/controllers/**`).
Fields marked ⚙ are **backend-owned**: clients may read, never write. Timestamps are Firestore
`Timestamp`. All docs carry `createdAt`, `updatedAt`.

## Ownership matrix

| Collection | Client may create | Client may update | Backend writes | Notes |
|---|---|---|---|---|
| `users/{uid}` | own doc | own doc | — | `usernames` guards uniqueness |
| `usernames/{username}` | create-only, own uid | — | — | doc id = username |
| `plans/{planId}` | yes (owner) | owner: metadata fields | ⚙ `currentBalance`, `lastActivityAt`, `status: locked`, `platformFeeRate` | |
| `planMembers/{id}` | self (via invite accept / commit) | own `commitmentStatus` | ⚙ `paymentStatus`, `amountPaid`, `currency` | |
| `invitations/{id}` | plan owner/member | invitee: `status`, `inviteeUserId`; inviter: `revoked` | — | |
| `milestones/{id}` | plan member | plan member (own tick for `everyone` items) | — | `scope` group\|everyone; `completions` map (D-024) |
| `planCatalogue/{id}` | admin claim | admin claim | — | curated inventory |
| `transactions/{id}` | **no** | **no** | ⚙ everything | read: own `userId`, or member of `planId` |
| `notifications/{id}` | no | own: `read` | backend creates | |
| `notificationPreferences/{uid}` | own | own | — | |
| `feedback/{id}` | own | — | — | |
| `images`, `planImages` | uploader | uploader | — | Storage path in `images` |
| `checkins`, `planMemories` | plan member | — | — | feed |
| `adminUsers/{uid}` | no | no | admin script | mirrors custom claim |
| `mpesa_logs`, `processedEvents` | no | no | ⚙ | audit / idempotency |
| `emails/{type}:{entityId}` | no | no | ⚙ | write-once send guard (KB 28) |
| `ledgerEntries/{txId:n}` | **no** | **no** | ⚙ | money journal (D-025); read: admin, or plan members via `/v2/ledger/plans/:id` |

Community collections (`communityGroups`, `communityGroupMembers`, `communityGoals`,
`communityInvites`, `goalCompletionEvents`) exist in the backend; **Community is deprecated
in the product** (nav removed 2026-09). Leave read-only; no new writes; remove in P5.

## Soft deletion (D-019)
Every soft-deletable doc may carry `deletedAt Timestamp`, `deletedBy uid`, `deleteReason string|null`. Array items (`plans.resources[]`) carry `removedAt`, `removedBy`. Absent = live. Readers filter (`omitDeleted`, `activeItems`) — no index needed. Nothing is ever hard-deleted, including Storage files.

## Shapes

### `plans/{planId}`
```
ownerId          uid
name             string
description      string
category         string
status           "active" | "locked" ⚙ | "completed" | "archived"
planType         "free" | "premium"
poolMode         "coordinate" | "pool" | "both"   (premium defaults to "pool" since D-016; legacy premium docs have null)
catalogueItemId  string | null                     (premium)
targetDate       Timestamp | null
lockDate         Timestamp | null                  (premium: derived from targetDate)
targetAmount     number | null
currency         "KES" | …
currentBalance   number  ⚙   ← net of platformFee; incremented by callbacks; debited when a payout is confirmed
heldBalance      number  ⚙   ← payouts awaiting M-Pesa confirmation (D-026); available = currentBalance − heldBalance
platformFeeRate  number  ⚙
membersCount     number      (denormalised; incremented on join)
resources        [{ id, title, url, type, removedAt?, removedBy? }]   (arrayUnion; removal = mark, never arrayRemove)
visibility       "private" | …
lastActivityAt   Timestamp ⚙
```
**Naming:** the code writes `currentBalance`. `MVP_USER_JOURNEYS.md` says `currentAmount`. `currentBalance` is authoritative (D-003).

### `planMembers/{id}`
```
planId, userId
role              "owner" | "member"
commitmentStatus  "in" | "tentative" | "watching"
paymentStatus     "paid" | "unpaid" ⚙          (premium)
amountPaid        number ⚙
currency          string ⚙
joinedAt
```
Uniqueness on `(planId, userId)` is by convention — queries use `limit(1)`. Consider doc id `${planId}_${userId}` in P3 (D-011).

### `milestones/{id}` (plan checklist, D-024)
```
planId, title, description | null, dueDate Timestamp | null
scope        "group" | "everyone"
completed    boolean        (group: the shared tick; everyone: all active members ticked)
completedAt  Timestamp | null
completions  { [uid]: Timestamp }   (everyone items)
order        number
createdBy    uid
```

### `invitations/{id}`
```
planId, inviterId
inviteeUserId     uid | null      (set on accept if it was an open-code invite)
inviteeUsername   string | null
inviteCode        string          (shareable)
status            "pending" | "accepted" | "declined" | "revoked"
respondedAt       Timestamp | null
```

### `planCatalogue/{id}`
```
title, description, category, city
venue             { name, address, city }
basePrice, listedPrice   number
currency          "KES"
coverUrl          string | null
resourceLinks     [string]
availableDates    [Timestamp]
maxGroupSize      number | null
status            "active" | "inactive"
```

### `transactions/{id}`  ⚙ entire document
```
id                = doc id
planId, userId
type              "contribution" | "premium-join" | "payout"
provider          "daraja" | "paystack"
amount            number      (major units, e.g. KES)
platformFee       number
currency          string
status            "pending" | "success" | "failed"      (terminal once final)
description       string
paystackReference, paystackTransactionId, paystackChannel      string | null
mpesaPhone        string | null   (no leading +)
darajaCheckoutRequestId, darajaReceiptNumber,
darajaConversationId, darajaOriginatorConversationId          string | null
processedAt       Timestamp | null
# payouts (D-026): netAmount, holdAmount, recipientType "member"|"custom", recipientUserId, recipientName, needsReview
```
Provider references are the idempotency keys: `paystackReference`, `darajaCheckoutRequestId`.

### `ledgerEntries/{txId:n}`  ⚙ (D-025)
```
id (= txId:n), txId, planId, userId
kind         "contribution" | "fee" | "premium-join" | "payout" | "adjustment"
direction    "credit" | "debit"
account      "plan:<planId>" | "platform:fees"
amount, currency
balanceAfter number | null      (plan account entries: pool balance after this entry)
provider, providerRef            (receipt / reference when known)
source       "settlement" | "initiation" | "backfill" | "adjustment"
memo, at
```

### `users/{uid}` · `usernames/{username}`
```
users:      email, displayName, username, avatarImageId | null, phone?
usernames:  username, userId, status "active"|"released", releasedAt | null
```

### `notifications/{id}`
```
userId, type, title, message, readAt Timestamp | null, planId | null, createdAt
```
`readAt` is the read marker (V1 used a boolean `read`; the UI tolerates both).
Types seen in code: `plan-locked`, payment reminders, invitation, contribution-received.

## Composite indexes (verified against the project, 2026-09-06)

Source of truth: `Grupchat-Landing/firebase/firestore.indexes.json` (20 entries — identical to the project), regenerated with
`cd gc-payments && npm run indexes:sync`; gaps found with `npm run indexes:probe` (currently none — unused query paths were removed rather than indexed, D-018). **Creation needs a human
credential** (`npx firebase deploy --only firestore:indexes` from Grupchat-Landing, or the console links) — the
backend service account can list indexes but not create them (403, verified 2026-09-06). Equality-only combinations need no composite index (Firestore merges
single-field indexes), so only `where + orderBy`, inequality and `in + orderBy` shapes appear here.

| Collection | Fields | Used by | State |
|---|---|---|---|
| `planMembers` | `userId ↑, joinedAt ↓` | `/plans` (getUserPlans) | READY |
| `transactions` | `planId ↑, createdAt ↓` | `/home`, `/plans/[id]` ledger, pay polling | READY |
| `notifications` | `userId ↑, createdAt ↓` | `/notifications` | READY |
| `planCatalogue` | `status ↑, createdAt ↓` · `category ↑, status ↑, createdAt ↓` | `/discover` | READY |
| `plans` | `planType ↑, createdAt ↓` | admin plans | READY |
| `plans` | `planType ↑, status ↑, lockDate ↑` | auto-lock job | READY |
| `milestones` | `planId ↑, order ↑` · `planId ↑, createdAt ↑` | milestones | READY |
| `planImages` | `planId ↑, position ↑` | plan images | READY |
| `checkins` | `planId ↑, createdAt ↓` | plan feed | READY |
| `planMemories` | `planId ↑, memoryDate ↓` | plot | READY |
| `usernames` | `status ↑, username ↑` | user search | READY |
| `invitations` | `inviteeEmail ↑, status ↑, createdAt ↓` | legacy (V1 email invites) | READY — drop in P5 |
| `notifications` | `read ↑, userId ↑, createdAt ↓` | legacy (V1 boolean `read`) | READY — drop in P5 |
| `members`, `poolMembers`, `pools`, `transactions(poolId…)` ×2 | — | V1 pools | READY — drop in P5 |

Webhook lookups (`paystackReference`+`status`, `darajaCheckoutRequestId`+`status`) and the pending-invite
query are equality-only and need nothing. `auditEvents` uses a single-field `orderBy(at)`.

## State machines
- plan: `active → locked` (job, premium) · `active → completed` (owner) · `* → archived` (owner)
- invitation: `pending → accepted | declined | revoked`
- transaction: `pending → success | failed` — terminal; a second transition is a bug
