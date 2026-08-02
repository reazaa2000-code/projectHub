# Constraints — Session

---

Primary Key

PK_Session

Id

---

Unique

UQ_Class_SessionNumber

(ClassId, SessionNumber)

---

Required

ClassId

SessionNumber

SessionDate

StartTime

EndTime

Status

---

Foreign Keys

ClassId

→ Class

InstructorId

→ Instructor

CreatedBy

→ User

UpdatedBy

→ User

---

Check Constraints

SessionNumber > 0

StartTime < EndTime

Status IN

1 Scheduled

2 Completed

3 Cancelled

4 Postponed

---

Delete Rule

Physical Delete NOT recommended.

Use business rules instead.