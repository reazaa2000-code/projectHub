# Constraints — Enrollment

Primary Key

PK_Enrollment

Id

---

Unique

(StudentId, ClassId)

---

Required

StudentId

ClassId

EnrollmentDate

Status

---

Foreign Keys

StudentId

→ Student

ClassId

→ Class

CreatedBy

→ User

UpdatedBy

→ User

---

Business Constraints

CurrentEnrollment < Class.Capacity

One Student cannot enroll twice in one Class.