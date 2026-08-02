# Constraints — Course

---

Primary Key

PK_Course

CourseId

---

Unique

UQ_Course_Code

CourseCode

---

Required

CourseCode

Title

CategoryId

Level

DurationHours

IsActive

---

Check Constraints

DurationHours > 0

Level IN (1,2,3)

---

Foreign Keys

CategoryId

→ Category

CreatedBy

→ User

UpdatedBy

→ User

---

Delete Rule

Physical Delete NOT recommended.

Use IsActive instead.