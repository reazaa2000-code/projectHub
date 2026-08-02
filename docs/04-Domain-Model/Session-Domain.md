# Domain Model — Session

Version: 1.0

---

Aggregate

Class

---

Parent

Class

---

Attributes

Inherited from BaseEntity

- Id
- CreatedAt
- UpdatedAt
- CreatedBy
- UpdatedBy

Session Attributes

- SessionNumber
- SessionDate
- StartTime
- EndTime
- Instructor
- Status
- Location

---

Related Entities

Attendance (Future)

Assignment (Future)

Exam (Future)

Teaching Material (Future)

---

Lifecycle

Scheduled

↓

Completed

or

Cancelled

or

Postponed