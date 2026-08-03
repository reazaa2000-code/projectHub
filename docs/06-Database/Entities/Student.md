# Entity Specification — Student

Version: 1.0

Status: Approved

Sprint: Sprint 1

---

# Purpose

Student represents a person who participates in educational courses.

Student stores only personal information.

Course participation is managed through Enrollment.

---

# Responsibilities

Student is responsible for:

- Personal information
- National identification
- Contact information
- Student code
- Account linkage (optional)

---

# Relationships

Student (1) ------ (N) Enrollment

Student (0..1) --- (1) User

Certificate (Future)

Payment (Future)

---

# Business Rules

- Every Student has a unique StudentCode.
- NationalCode must be unique.
- NationalCode cannot be edited by Education Officer.
- Physical deletion is not allowed.
- Student status only represents overall activity.
- Course status is stored inside Enrollment.
- Mobile number is mandatory.
- Email is optional.
- Address is optional.
- BirthDate is optional.
- UserId is optional.