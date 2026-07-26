# UC-005 — Register Student

Version: 0.1
Status: Approved
Sprint: Sprint 1
Priority: Critical

---

# Goal

Allow an Education Officer to register a new Student in the system.

A Student record is created once and may later enroll in multiple Classes.

---

# Primary Actor

Education Officer

---

# Supporting Actors

System

---

# Preconditions

- User is authenticated.
- User has the Education Officer role.
- Student does not already exist based on National ID.

---

# Trigger

Education Officer selects **Register Student**.

---

# Main Flow

1. User opens Student Management.
2. User selects **Register Student**.
3. System displays the registration form.
4. User enters student information.
5. User submits the form.
6. System validates the entered information.
7. System checks for duplicate National ID.
8. System creates the Student record.
9. System assigns a unique Student Number.
10. System stores audit information.
11. System displays a success message.

---

# Alternative Flows

## AF-01 — Duplicate National ID

If another Student already exists with the same National ID:

- System displays an error.
- Registration is cancelled.

---

## AF-02 — Validation Error

If required information is missing or invalid:

- System highlights invalid fields.
- User corrects the information.
- User submits again.

---

# Student Information

| Field | Required | Editable |
|--------|----------|----------|
| Student Number | Auto | No |
| National ID | Yes | No |
| First Name | Yes | Yes |
| Last Name | Yes | Yes |
| Birth Date | No | Yes |
| Gender | No | Yes |
| Mobile | Yes | Yes |
| Email | No | Yes |
| Address | No | Yes |
| Registration Date | Auto | No |
| Status | Auto | Yes |

---

# Student Status

Supported values:

- Active
- Inactive
- Suspended
- Graduated

> Note:
> A student's status is global. Their participation in individual Classes is managed through Enrollment Status.

---

# Validation Rules

- National ID is required.
- National ID must be unique.
- National ID cannot be edited after registration.
- First Name is required.
- Last Name is required.
- Mobile Number is required.
- Student Number is generated automatically.

---

# Business Rules

- BR-001
- BR-020 (National ID is immutable after registration)
- BR-021 (Students are never physically deleted)

---

# Postconditions

- Student is registered.
- Student Number is generated.
- Student can enroll in Classes.
- Audit information is recorded.

---

# User Story

US-005

As an Education Officer,

I want to register a new Student,

So that the Student can participate in future Classes.

---

# Acceptance Criteria

- National ID must be unique.
- Student Number is generated automatically.
- National ID cannot be edited after registration.
- Student appears in the Student list.
- Registration date is stored automatically.

---

# Related Entities

- Student
- Enrollment
- Certificate

---

# Notes

Students are never physically deleted.

Historical information must always remain available.