# UC-006 — Create Enrollment
**Version:** 0.1.0  
**Status:** Approved  
**Sprint:** Sprint 1  
**Priority:** Critical  

## 1. Goal
Register an existing Student into an existing Class.  
Enrollment creates the official relationship between Student and Class.

## 2. Actors
- **Primary Actor:** Education Officer
- **Supporting Actors:** System

## 3. Preconditions
- User is authenticated.
- User has Education Officer role.
- Student exists.
- Class exists.
- Class Status = Open for Enrollment.
- Sessions have been generated.

## 4. Trigger
Education Officer selects "Create Enrollment".

## 5. Main Flow
1. Open Enrollment Management.
2. Select Student.
3. Select Class.
4. System validates enrollment rules.
5. System checks duplicate enrollment.
6. System checks class capacity.
7. System checks session time conflicts.
8. System determines Tuition.
   - If Tuition = 0 → Status = Enrolled.
   - Otherwise → Status = Pending Payment.
9. System creates Enrollment.
10. Enrollment Date is generated automatically.
11. Audit information is stored.
12. Success message is displayed.

## 6. Alternative Flows
- **AF-01 (Duplicate Enrollment):** Student already enrolled → Registration rejected.
- **AF-02 (Capacity Reached):** Class capacity reached → Registration rejected.
- **AF-03 (Session Overlap):** Session overlap detected → Registration rejected.
- **AF-04 (Class Closed):** Class is closed → Registration rejected.

## 7. Business Rules
BR-001, BR-002, BR-003, BR-004, BR-005, BR-006, BR-007

## 8. Enrollment Status
Pending Payment, Enrolled, Cancelled, Completed, Failed, Withdrawn

## 9. Validation Rules
- Student must exist.
- Class must exist.
- Enrollment must be unique.
- Session overlap is prohibited.
- Capacity must not exceed maximum.
- Enrollment Date is generated automatically.

## 10. Postconditions
- Enrollment created.
- Enrollment Date stored.
- Enrollment Status assigned.
- Audit Log created.

## 11. User Story
**US-006:** As an Education Officer, I want to enroll a Student into a Class, So that the Student can attend Sessions.

**Acceptance Criteria:**
- ✓ Student exists.
- ✓ Class exists.
- ✓ Class is open.
- ✓ Capacity available.
- ✓ No Session conflict.
- ✓ Enrollment successfully created.

## 12. Related Entities
`Student`, `Class`, `Enrollment`, `Session`, `Payment (Future)`, `Attendance (Future)`