# Entity Specification — Session

Version: 1.0

Status: Approved

Sprint: Sprint 1

---

# Purpose

Session represents a single teaching meeting within a Class.

Each Class consists of one or more Sessions.

Attendance, teaching progress and future educational activities are recorded per Session.

---

# Responsibilities

Session is responsible for:

- Teaching schedule
- Meeting date
- Start time
- End time
- Assigned Instructor
- Session status
- Optional location

---

# Relationships

Class (1) -------- (N) Session

Instructor (1) --- (N) Session

Attendance (Future)

SessionMaterial (Future)

Assignment (Future)

Exam (Future)

---

# Business Rules

- Every Session belongs to exactly one Class.
- Every Session has a Session Number.
- Session Number must be unique within the same Class.
- Every Session has a Session Date.
- StartTime must be earlier than EndTime.
- Instructor may differ between Sessions.
- Location is optional.
- Cancelled Sessions are not counted as completed sessions.
- Postponed Sessions keep their Session Number.

---

# Notes

Session is the smallest operational unit of education.

Future modules such as Attendance, Assignments and Exams will reference Session.