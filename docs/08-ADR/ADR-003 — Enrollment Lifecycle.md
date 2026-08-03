# ADR-003 — Enrollment Lifecycle

**Project:** ProjectHub

**Status:** Accepted

**Version:** 1.0

**Date:** 2026-08-03

---

# Context

Enrollment is the central business entity connecting Students and Classes.

The lifecycle of an enrollment needed a standard definition.

---

# Decision

Enrollment uses the following lifecycle:

```
Registered

↓

Studying

↓

Completed

OR

Cancelled

OR

Dropped

OR

Failed
```

---

# Definitions

Registered

Student successfully registered before classes begin.

Studying

Student is actively participating.

Completed

Student successfully finishes the class.

Cancelled

Registration cancelled before or at the beginning of the course.

Dropped

Student leaves after starting the course.

Failed

Student completes the course but does not satisfy completion requirements.

---

# Business Rules

* Student cannot enroll twice in one Class.
* Status changes must follow the lifecycle.
* Attendance and Exam modules may affect status in future sprints.

---

# Status

Approved

This lifecycle is the official enrollment workflow for Sprint 1.
