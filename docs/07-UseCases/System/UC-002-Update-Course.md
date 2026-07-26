# UC-002 — Update Course

Version: 0.1
Status: Approved
Sprint: Sprint 1
Priority: High

---

# Goal

Allow an Education Officer to update an existing Course.

Updating a Course shall affect future Classes only.
Existing Classes shall preserve their own operational data.

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

---

# Trigger

The Education Officer selects **Edit Course** from the Course Management page.

---

# Main Flow

1. User opens the Course list.
2. User selects a Course.
3. System loads Course information.
4. System displays the Edit Course form.
5. User modifies one or more editable fields.
6. User submits the changes.
7. System validates all entered values.
8. System updates the Course.
9. System records audit information.
10. System displays a success message.
11. Updated information is immediately visible in the Course list.

---

# Alternative Flows

## AF-01 — Course Not Found

If the selected Course no longer exists:

1. System displays an error message.
2. No update is performed.

---

## AF-02 — Validation Failed

If one or more validation rules fail:

1. System highlights invalid fields.
2. User corrects the data.
3. User submits again.

---

## AF-03 — Course Code Cannot Be Changed

If at least one Class has already been created for this Course:

1. Course Code becomes read-only.
2. User may update all other editable fields.

---

# Business Decision

Course Code may be edited **only until the first Class is created**.

After the first Class exists, the Course Code becomes permanent.

Reason:

Changing Course Code after operational data exists may cause inconsistencies in reports, enrollments and future integrations.

---

# Editable Fields

| Field | Editable |
|---------|----------|
| Code | Conditional |
| Title | Yes |
| Description | Yes |
| Category | Yes |
| Level | Yes |
| Duration | Yes |
| Default Session Count | Yes |
| IsActive | Yes |
| Prerequisites | Yes |

---

# Validation Rules

- Title is required.
- Category is required.
- Level is required.
- Duration must be greater than zero.
- Default Session Count must be greater than zero.
- Category must exist.
- Level must be valid.
- Course Code must remain unique.

---

# Business Rules

- BR-008
- BR-009
- BR-010

---

# Postconditions

- Course information has been updated.
- Existing Classes remain unchanged.
- Future Classes use the updated Course definition.
- Audit information is stored.

---

# User Story

US-002

As an Education Officer,

I want to update Course information,

So that future Classes use the latest educational information.

---

# Acceptance Criteria

- Existing Course information is displayed.
- Only authorized users may edit Courses.
- Validation rules are enforced.
- Course Code cannot be changed after the first Class has been created.
- Existing operational Classes are not modified.
- Successful updates appear immediately in the Course list.

---

# Related Entities

- Course
- Category
- CoursePrerequisite
- Class

---

# Related Business Rules

- BR-008
- BR-009
- BR-010

---

# Future Enhancements

- Course Versioning
- Approval Workflow
- Change History Viewer
- Restore Previous Version

---

# Notes

A Course represents an educational template.

Operational information belongs to Class and shall never be modified through this Use Case.