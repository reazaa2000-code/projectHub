# Entity Specification — Enrollment

Version 1.0

Status Approved

Sprint Sprint 1

---

# Purpose

Enrollment represents the registration of a Student in a specific Class.

Enrollment is the central business entity of the educational process.

It connects Students to Classes and tracks the student's educational progress.

---

# Responsibilities

Enrollment is responsible for

- Student registration
- Registration date
- Enrollment status
- Educational lifecycle

Financial information is intentionally excluded from Sprint 1.

---

# Relationships

Student (1) -------- (N) Enrollment

Class (1) ---------- (N) Enrollment

Attendance (Future)

Certificate (Future)

Payment (Future)

ExamResult (Future)

---

# Business Rules

- A Student may register in many Classes.
- A Class may contain many Students.
- A Student cannot register twice in the same Class.
- RegistrationDate is mandatory.
- Enrollment Status controls educational progress.
- Capacity must be checked before registration.
- Prerequisites are informational only in Sprint 1.
- Financial validation is deferred to future sprints.

---

# Notes

Enrollment is the central business entity of ProjectHub.