# UC-006 — Create Enrollment

Version: 0.1
Status: Approved
Sprint: Sprint 1
Priority: Critical

---

# Goal

Register an existing Student into an existing Class.

Enrollment creates the official relationship between Student and Class.

---

# Primary Actor

Education Officer

---

# Supporting Actors

System

---

# Preconditions

- User is authenticated.
- User has Education Officer role.
- Student exists.
- Class exists.
- Class Status = Open for Enrollment.
- Sessions have been generated.

---

# Trigger

Education Officer selects "Create Enrollment".

---

# Main Flow

1. Open Enrollment Management.
2. Select Student.
3. Select Class.
4. System validates enrollment rules.
5. System checks duplicate enrollment.
6. System checks class capacity.
7. System checks session time conflicts.
8. System determines Tuition.
9. If Tuition = 0
   → Status = Enrolled.
10. Otherwise
   → Status = Pending Payment.
11. System creates Enrollment.
12. Enrollment Date is generated automatically.
13. Audit information is stored.
14. Success message is displayed.

---

# Alternative Flows

AF-01

Student already enrolled.

Result:
Registration rejected.

---

AF-02

Class capacity reached.

Result:
Registration rejected.

---

AF-03

Session overlap detected.

Result:
Registration rejected.

---

AF-04

Class is closed.

Result:
Registration rejected.

---

# Business Rules

BR-001

BR-002

BR-003

BR-004

BR-005

BR-006

BR-007

---

# Enrollment Status

Pending Payment

Enrolled

Cancelled

Completed

Failed

Withdrawn

---

# Validation Rules

Student must exist.

Class must exist.

Enrollment must be unique.

Session overlap is prohibited.

Capacity must not exceed maximum.

Enrollment Date is generated automatically.

---

# Postconditions

Enrollment created.

Enrollment Date stored.

Enrollment Status assigned.

Audit Log created.

---

# User Story

As an Education Officer,

I want to enroll a Student into a Class,

So that the Student can attend Sessions.

---

# Acceptance Criteria

✓ Student exists.

✓ Class exists.

✓ Class is open.

✓ Capacity available.

✓ No Session conflict.

✓ Enrollment successfully created.

---

# Related Entities

Student

Class

Enrollment

Session

Payment (Future)

Attendance (Future)