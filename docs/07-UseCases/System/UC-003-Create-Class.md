# UC-003 — Create Class
**Version:** 1.0.0  
**Status:** Approved  
**Sprint:** Sprint 1  
**Priority:** Critical  

## 1. Goal
Allow an Education Officer to create a new operational Class based on an existing Course.  
A Class represents an actual execution of a Course during a specific Academic Term.

## 2. Actors
- **Primary Actor:** Education Officer
- **Supporting Actors:** None

## 3. Preconditions
- User is authenticated.
- User has the Education Officer role.
- The selected Course exists.
- At least one Instructor exists.
- The Academic Term exists.

## 4. Trigger
The Education Officer selects "Create Class" from the Class Management page.

## 5. Main Flow
1. User opens Class Management.
2. User selects "Create Class".
3. System displays the Create Class form.
4. User selects the Course.
5. System loads default Course information (Duration, Default Session Count).
6. User enters Class information.
7. **User selects a Default Instructor** (applied to all generated Sessions).
8. User selects the Academic Term.
9. User configures the weekly schedule pattern.
10. User selects the Delivery Type.
11. User defines the Capacity.
12. User specifies the Tuition Fee.
13. User saves the Class.
14. System validates the entered information.
15. System creates the Class with **Draft** status.
16. System displays a success message.

**Note:** Instructor assignment is performed at **Session level**. The Default Instructor selected here will be applied to all Sessions when they are generated (UC-004). Individual Sessions can later have their Instructor changed.

## 6. Alternative Flows

### AF-01 — Course Not Found
If the selected Course does not exist:
- System displays an error.
- Class is not created.

### AF-02 — Validation Failed
If validation fails:
- System displays validation errors.
- User corrects the data.

### AF-03 — Default Instructor Scheduling Conflict
If the selected Default Instructor has a scheduling conflict with another Class:
- System displays a warning about the conflict.
- Education Officer can:
  - Choose a different Instructor, OR
  - Proceed anyway (warning only, not blocking).

## 7. Business Decisions

### Instructor Assignment
- A Class has a **Default Instructor** that applies to all Sessions.
- **Instructor assignment is managed at Session level** (not Class level).
- This allows:
  - Replacing an Instructor for specific Sessions (e.g., illness, vacation).
  - Preserving instructor assignment history (BR-027).
  - Flexibility in scheduling.

### Business Rule (MVP)
- Every Class must have at least one Default Instructor.
- When Sessions are generated, each Session inherits the Default Instructor.
- Individual Sessions can later have their Instructor changed.

### Tuition
- Tuition belongs to the Class.
- Course never stores Tuition.

### Capacity
- Capacity may be updated after the Class has been created.

### Initial Status
- Every newly created Class starts in **Draft** status.
- Students cannot enroll until the status changes to **Open for Enrollment**.

### Class Status
Supported statuses:
- Draft
- Open for Enrollment
- Full
- In Progress
- Completed
- Cancelled

## 8. Editable Fields

| Field | Required | Editable After Creation |
|---|---|---|
| Course | Yes | No |
| Academic Term | Yes | No |
| Default Instructor | Yes | Yes |
| Capacity | Yes | Yes |
| Tuition | Yes | Yes |
| Delivery Type | Yes | Yes |
| Schedule Pattern | Yes | Yes (before Session generation) |
| Status | Auto (Draft) | Yes |

## 9. Validation Rules
- Course must exist.
- Academic Term must exist.
- At least one Default Instructor is required.
- Capacity must be greater than zero.
- Tuition must be zero or greater.
- Delivery Type is required.
- Schedule pattern must be valid.

## 10. Business Rules
- **BR-011:** Each Class belongs to exactly one Course.
- **BR-012:** A Course may have multiple Classes.
- **BR-013:** Every Class starts in one Academic Term.
- **BR-014:** Supported Delivery Types (In-Person, Online, Organization, Hybrid).
- **BR-015:** Every Class has a defined Capacity.
- **BR-016:** Online Classes may have very large capacities.
- **BR-017:** A newly created Class is initially in Draft status.
- **BR-018:** A Class consists of one or more Sessions.
- **BR-019:** Sessions are automatically generated from the scheduling pattern.
- **BR-023:** An Instructor cannot teach two Classes at the same time.
- **BR-027:** An Instructor may be replaced during the lifecycle of a Class. The institute must preserve instructor assignment history.

## 11. Postconditions
- Class is created.
- Class status is **Draft**.
- No student is enrolled.
- Sessions have **not yet been generated** (will be generated in UC-004).
- Default Instructor is assigned (will be applied to Sessions during generation).

## 12. User Story
**US-003:** As an Education Officer, I want to create a Class, So that students can later enroll in it.

### Acceptance Criteria
- ✓ Class must reference an existing Course.
- ✓ Class must have a Default Instructor.
- ✓ Capacity must be positive.
- ✓ Tuition cannot be negative.
- ✓ Initial status must be Draft.
- ✓ Class appears in the Class list after creation.
- ✓ Default Instructor will be applied to all Sessions when generated.

## 13. Related Entities
- `Class`
- `Course`
- `AcademicTerm`
- `Instructor`
- `Session` (will inherit Default Instructor)

## 14. Notes
- A Class is an **operational entity**.
- Operational data must never be stored in Course.
- **Instructor assignment is managed at Session level**, not Class level.
- The Default Instructor is a convenience for initial Session generation.
- Individual Sessions can have their Instructor changed later (see UC-004 notes).