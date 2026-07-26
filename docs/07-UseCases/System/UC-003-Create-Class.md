# UC-003 — Create Class

Version: 0.1
Status: Approved
Sprint: Sprint 1
Priority: Critical

---

# Goal

Allow an Education Officer to create a new operational Class based on an existing Course.

A Class represents an actual execution of a Course during a specific Academic Term.

---

# Primary Actor

Education Officer

---

# Supporting Actors

None

---

# Preconditions

- User is authenticated.
- User has the Education Officer role.
- The selected Course exists.
- At least one Instructor exists.
- The Academic Term exists.

---

# Trigger

The Education Officer selects **Create Class** from the Class Management page.

---

# Main Flow

1. User opens Class Management.
2. User selects **Create Class**.
3. System displays the Create Class form.
4. User selects the Course.
5. System loads default Course information.
6. User enters Class information.
7. User assigns one or more Instructors.
8. User selects the Academic Term.
9. User configures the schedule.
10. User selects the Delivery Type.
11. User defines the Capacity.
12. User specifies the Tuition Fee.
13. User saves the Class.
14. System validates the entered information.
15. System creates the Class with **Draft** status.
16. System displays a success message.

---

# Alternative Flows

## AF-01

Selected Course does not exist.

System displays an error.

---

## AF-02

Validation fails.

System displays validation errors.

---

## AF-03

Assigned Instructor is unavailable.

System displays scheduling conflict.

---

# Business Decisions

## Instructor Assignment

A Class may have one or more Instructors.

Business Rule (MVP):

Every Class must have at least one Instructor.

---

## Tuition

Tuition belongs to the Class.

Course never stores Tuition.

---

## Capacity

Capacity may be updated after the Class has been created.

---

## Initial Status

Every newly created Class starts in **Draft** status.

Students cannot enroll until the status changes to **Open for Enrollment**.

---

## Class Status

Supported statuses:

- Draft
- Open for Enrollment
- Full
- In Progress
- Completed
- Cancelled

---

# Editable Fields

| Field | Required |
|--------|----------|
| Course | Yes |
| Academic Term | Yes |
| Instructors | Yes |
| Capacity | Yes |
| Tuition | Yes |
| Delivery Type | Yes |
| Schedule | Yes |
| Status | Automatically Draft |

---

# Validation Rules

- Course must exist.
- Academic Term must exist.
- At least one Instructor is required.
- Capacity must be greater than zero.
- Tuition must be zero or greater.
- Delivery Type is required.

---

# Business Rules

- BR-011
- BR-012
- BR-013
- BR-014
- BR-015
- BR-016
- BR-017
- BR-018
- BR-019
- BR-023
- BR-027

---

# Postconditions

- Class is created.
- Class status is Draft.
- No student is enrolled.
- Sessions have not yet been generated.

---

# User Story

US-003

As an Education Officer,

I want to create a Class,

So that students can later enroll in it.

---

# Acceptance Criteria

- Class must reference an existing Course.
- Class must have at least one Instructor.
- Capacity must be positive.
- Tuition cannot be negative.
- Initial status must be Draft.
- Class appears in the Class list after creation.

---

# Related Entities

- Class
- Course
- AcademicTerm
- Instructor
- ClassInstructor

---

# Notes

A Class is an operational entity.

Operational data must never be stored in Course.