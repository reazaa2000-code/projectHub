# UC-001 — Create Course

Version: 0.1
Status: Draft
Sprint: Sprint 1
Priority: High

---

# Goal

Allow an Education Officer to create a new Course that can later be offered as one or more Classes.

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
- Categories exist in the system.
- Levels have been configured.

---

# Trigger

Education Officer selects **Create Course** from the Course Management section.

---

# Main Flow

1. System displays the Create Course form.
2. User enters course information.
3. User optionally selects prerequisite courses.
4. User submits the form.
5. System validates the entered information.
6. System creates the Course.
7. System displays a success message.
8. The new Course appears in the Course list.

---

# Alternative Flows

### AF-01

If the course code already exists:

- System displays an error.
- Course is not created.

---

### AF-02

If validation fails:

- System highlights invalid fields.
- User corrects the information.

---

# Postconditions

- Course has been created.
- Course is available for future Class creation.
- No Class exists yet for this Course.

---

# Business Rules

- BR-008
- BR-009
- BR-010

---

# Data

| Field | Required |
|--------|----------|
| Code | Yes |
| Title | Yes |
| Category | Yes |
| Level | Yes |
| Duration | Yes |
| Default Session Count | Yes |
| Description | No |
| Active | Yes |
| Prerequisites | No |

---

# Validation Rules

- Course Code must be unique.
- Title is required.
- Category is required.
- Duration must be greater than zero.
- Default Session Count must be greater than zero.

---

# User Story

US-001

As an Education Officer

I want to create a Course

So that Classes can be scheduled for it.

---

# Acceptance Criteria

- Course Code is unique.
- Title is mandatory.
- Category is mandatory.
- Duration must be positive.
- Course appears in the Course list after creation.

---

# Related Entities

- Course
- Category
- CoursePrerequisite

---

# Future Enhancements

- Course Versioning
- Course Approval Workflow
- Archive History