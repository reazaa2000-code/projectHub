# ProjectHub
# Business Rules
Version: 0.2.0
Status: Approved
Owner: Product Owner
Author: Business Analyst

---

# 1. Purpose

This document defines the business rules governing the ProjectHub Training Management System.

Business Rules are independent of implementation and must be enforced regardless of the technology used.

---

# 2. Enrollment Rules

## BR-001
A student cannot enroll in a Class whose capacity has been reached.

---

## BR-002
A student cannot enroll in the same Class more than once.

---

## BR-003
A student cannot enroll in two Classes with completely overlapping schedules.

---

## BR-004
Enrollment belongs to a Class, not to a Course.

---

## BR-005
Enrollment is not completed until payment is successful.

Exception:
If the Class tuition is zero, enrollment is completed immediately.

---

## BR-006
A Class with zero tuition still requires a formal enrollment.

Capacity and all enrollment rules remain applicable.

---

## BR-007
A student may receive discounts according to institute policies.

Discount calculation rules will be implemented in future phases.

---

# 3. Course Rules

## BR-008
Each Course may have zero or more prerequisite Courses.

---

## BR-009
Prerequisites are advisory only.

Students may enroll without completing prerequisite Courses.

---

## BR-010
Each Course belongs to exactly one Category.

---

# 4. Class Rules

## BR-011
Each Class belongs to exactly one Course.

---

## BR-012
A Course may have multiple Classes.

---

## BR-013
Every Class starts in one Academic Term.

A Class may continue into later months.

---

## BR-014
Supported Delivery Types are:

- In-Person
- Online
- Organization
- Hybrid

Delivery Type is independent from Venue.

---

## BR-015
Every Class has a defined Capacity.

Capacity is configurable.

---

## BR-016
Online Classes may have very large capacities.

The system shall not impose a fixed maximum capacity.

---

## BR-017
A newly created Class is initially in Draft status.

Students cannot enroll until the Class is opened for enrollment.

---

## BR-018
A Class consists of one or more Sessions.

---

## BR-019
Sessions are automatically generated from the scheduling pattern.

Education Officer may edit generated Sessions.

---

# 5. Session Rules

## BR-020
Each Session has:

- Session Number
- Date
- Start Time
- End Time
- Status

---

## BR-021
Two Sessions belonging to the same Class cannot overlap.

---

## BR-022
Attendance is recorded for each Session.

---

# 6. Instructor Rules

## BR-023
An Instructor cannot teach two Classes at the same time.

---

## BR-024
An Instructor may upload learning materials only for assigned Classes.

---

## BR-025
An Instructor may view and manage only assigned Classes.

---

## BR-026
An Instructor may define available teaching times.

These availability records assist Education Officers during scheduling.

---

## BR-027
An Instructor may be replaced during the lifecycle of a Class.

The institute must preserve instructor assignment history.

---

# 7. Attendance Rules

## BR-028
Attendance percentage is calculated using Session attendance.

---

## BR-029
Minimum attendance required for certificate eligibility is 70%.

---

# 8. Assessment Rules

## BR-030
Final assessment is determined by the Instructor.

Assessment methods may include:

- Final Exam
- Final Project
- Both

---

## BR-031
Passing score is 12 out of 20.

---

# 9. Certificate Rules

## BR-032
Only students who successfully complete the Class may receive a Certificate.

---

## BR-033
Each Certificate must have a unique certificate number.

---

## BR-034
Each Certificate must be verifiable online.

---

# 10. Learning Material Rules

## BR-035
Learning materials are accessible only to students enrolled in the corresponding Class.

---

# 11. Academic Calendar Rules

## BR-036
The Academic Calendar may contain holidays and institute closure dates.

Calendar validation assists scheduling but does not automatically prevent Session creation.

---

# 12. Future Phase Rules

The following rules are intentionally deferred to future phases:

- Automatic refund processing
- Automatic class cancellation
- Organization contracts
- Financial workflows
- Approval workflows
- Branch management
- Group enrollment
- Online examinations
- Assignment management
- Advanced reporting

---

# Rule Management

Every Business Rule shall have a unique identifier.

Business Rules may be referenced from:

- Business Use Cases
- System Use Cases
- User Stories
- Acceptance Criteria
- Test Cases
- Source Code
- Architecture Decision Records (ADR)

---

# Version History

| Version | Date | Description |
|----------|------|-------------|
| 0.2.0 | 2026 | Initial Business Rules |