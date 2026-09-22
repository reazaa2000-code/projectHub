# UC-006 — Create Enrollment
**Version:** 1.0.0  
**Status:** Approved Baseline  
**Sprint:** Sprint 1  
**Priority:** Critical  

## 1. Goal
Register an existing Student into an existing Class.

Enrollment creates the official academic relationship between Student and Class.

## 2. Actors
- **Primary Actor:** Education Officer
- **Supporting Actor:** System

## 3. Preconditions
- User is authenticated.
- User has Education Officer role.
- Student exists.
- Class exists.
- Class Status = `Open`.
- Sessions have been generated.

## 4. Trigger
Education Officer selects **Create Enrollment**.

## 5. Main Flow
1. Open Enrollment Management.
2. Select Student.
3. Select Class.
4. System validates enrollment rules.
5. System checks duplicate enrollment.
6. System checks Class capacity.
7. System checks Session time conflicts.
8. System creates the Enrollment.
9. System sets Enrollment Status to `Registered`.
10. System generates Enrollment Date automatically.
11. System stores audit information.
12. System displays a success message.

## 6. Alternative Flows

### AF-01 — Duplicate Enrollment
If the Student is already enrolled in the selected Class:
- Registration is rejected.

### AF-02 — Capacity Reached
If Class capacity has been reached:
- Registration is rejected.

### AF-03 — Session Overlap
If any Session of the selected Class overlaps with a Session belonging to another active Enrollment of the Student:
- Registration is rejected.

### AF-04 — Class Not Open
If Class Status is not `Open`:
- Registration is rejected.

## 7. Business Rules
- BR-001
- BR-002
- BR-003
- BR-004
- BR-005
- BR-006
- BR-007

## 8. Enrollment Status
Canonical v1 values:

- Registered
- Studying
- Completed
- Cancelled
- Dropped
- Failed

The initial status created by this use case is always `Registered`.

Payment state is intentionally not represented by Enrollment Status in v1. A future Payment module will own payment status.

## 9. Validation Rules
- Student must exist.
- Class must exist.
- Class Status must be `Open`.
- Enrollment must be unique for `(StudentId, ClassId)`.
- Class capacity must not be exceeded.
- Session overlap must be rejected.
- Enrollment Date is generated automatically.
- Initial Enrollment Status must be `Registered`.

## 10. Postconditions
- Enrollment is created.
- Enrollment Date is stored.
- Enrollment Status is `Registered`.
- Audit information is stored.

## 11. User Story
**US-006:** As an Education Officer, I want to enroll a Student into a Class, so that the Student can attend Sessions.

### Acceptance Criteria
- Student exists.
- Class exists.
- Class is `Open`.
- Capacity is available.
- No Session conflict exists.
- Duplicate enrollment is rejected.
- New Enrollment has status `Registered`.
- Enrollment Date is generated automatically.

## 12. Related Entities
`Student`, `Class`, `Enrollment`, `Session`

Future related entities:
`Payment`, `Attendance`, `Certificate`, `ExamResult`
