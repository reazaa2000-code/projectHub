# ProjectHub — Domain Terminology & Status Baseline

Version: 1.0.0  
Status: Approved Baseline  
Purpose: Resolve terminology inconsistencies before implementation.

---

# 1. Canonical Values

## Enrollment Status

```text
Registered
Studying
Completed
Cancelled
Dropped
Failed
```

Initial value on Create Enrollment: `Registered`.

`Pending Payment` is not an Enrollment status in v1.

## Class Status

```text
Draft
Open
Full
InProgress
Completed
Cancelled
```

`Open` means available for enrollment.

`Full` means current capacity has been reached and may revert to `Open` if capacity becomes available.

`Closed` is not a canonical v1 Class status.

## Student Status

```text
Active
Inactive
```

`Suspended` and `Graduated` are not canonical v1 Student statuses.

## Delivery Type

| Code | Display |
|---|---|
| InPerson | In-Person |
| Online | Online |
| Corporate | Corporate / Organization |
| Hybrid | Hybrid |

The terms `Physical`, `Virtual`, `Organization`, and `Physical+Virtual` may appear in legacy documentation, but they are not canonical v1 codes.

---

# 2. Course

Course contains:

```text
CourseCode
Title
Description
CategoryId
Level
DurationHours
DefaultSessionCount
IsActive
```

`DefaultSessionCount` is a default/template value used during Class creation. It is not the actual Session count of a Class.

---

# 3. Naming Policy

New code and documentation must use the canonical names above.

Human-facing labels may be more descriptive, but persisted enum/code values should remain stable.

---

# 4. Migration Guidance

Legacy documents should not be deleted merely because their terminology is old.

When a legacy document is still needed for history, retain it and mark it as superseded.

For active documents, update terminology to this baseline before using them as implementation references.

---

# 5. Implementation Gate

This baseline should be treated as the terminology contract for:

- Domain enums
- Entity validation
- Application validation
- EF Core configuration
- Database migrations
- API DTOs
- Unit tests
- Acceptance tests
