# ADR-003

Title

Enrollment Lifecycle

Status

Accepted

---

## Context

Enrollment is the core operational entity connecting Student and Class.

Future modules such as Attendance, Payment, Certificate and Reporting depend on it.

---

## Decision

Enrollment has its own lifecycle.

Initial Status depends on Tuition.

Tuition = 0

↓

Enrolled

Tuition > 0

↓

Pending Payment

---

Allowed States

Pending Payment

↓

Enrolled

↓

Completed

↓

Failed

Cancelled

Withdrawn

---

Enrollment Date

Automatically generated.

Immutable.

---

Session Conflict

Enrollment is rejected if any Session overlaps with another active Enrollment.

---

Capacity

Enrollment is rejected when Class Capacity is full.

Waiting List is deferred to a future phase.

---

Consequences

Positive

Simple workflow.

Easy future Payment integration.

Easy Certificate generation.

Supports Attendance.

Supports Reporting.

---

Related Use Cases

UC-006

Attendance

Certificate

Payment