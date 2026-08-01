# ERD Level 1

Version 1.0

Core Domain

---

Entities

User

Employee

Instructor

Student

Course

CoursePrerequisite

AcademicTerm

Class

ClassInstructor

Session

Enrollment

---

Relationships

User
 │
 ├──── Employee

 ├──── Instructor

 └──── Student

Course
 │
 ├──── CoursePrerequisite

 └──── Class

AcademicTerm
 │
 └──── Class

Class
 │
 ├──── Session

 ├──── Enrollment

 └──── ClassInstructor

Student
 │
 └──── Enrollment

Instructor
 │
 └──── ClassInstructor