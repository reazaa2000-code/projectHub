# Domain Model — Course

Version: 1.0

---

Aggregate

Course

---

Attributes

CourseId

CourseCode

Title

Description

DurationHours

Level

Category

IsActive

---

Child Entities

CoursePrerequisite

---

Parent

Category

---

Related Entities

Class

Session (Indirect)

Enrollment (Indirect)

---

Lifecycle

Create

↓

Update

↓

Deactivate

↓

Archive

Course is never physically deleted.