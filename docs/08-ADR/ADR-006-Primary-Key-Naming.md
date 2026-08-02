# ADR-006 — Primary Key Naming Convention

Project: ProjectHub

Status: Accepted

Version: 1.0

---

# Context

Different naming conventions exist for entity primary keys.

Examples:

CourseId

StudentId

EnrollmentId

or

Id

A single convention is required for consistency.

---

# Decision

Every persistent entity shall use

Id

as its Primary Key.

Foreign Keys shall reference the related entity name.

Examples

Course

Id

Student

Id

Class

Id

Enrollment

Id

Foreign Keys

CourseId

StudentId

ClassId

InstructorId

---

# Rationale

Benefits

- EF Core friendly

- Generic Repository friendly

- Generic Services

- Consistent naming

- Easier Reflection

- Easier AutoMapper configuration

- Cleaner code

---

# Examples

Course

Id

Title

...

----------------

Class

Id

CourseId

AcademicTermId

Capacity

...

---

# Consequences

Positive

Consistent architecture

Simpler implementation

Cleaner code

Future proof

---

# Related Documents

ERD

Entity Specifications

Data Dictionary

Coding Standards