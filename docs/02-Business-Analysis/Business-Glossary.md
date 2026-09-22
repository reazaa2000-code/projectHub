# ProjectHub
# Business Glossary
Version: 1.0.0
Status: Approved Baseline
Owner: Product Owner
Author: Business Analyst

---

# 1. Purpose

This document is the canonical business terminology baseline for ProjectHub.
All business analysis, use cases, domain models, database documentation, source code and tests should use these terms consistently.

---

# 2. Business Terms

| Term | Definition |
|---|---|
| Student | A person who enrolls in one or more Classes offered by the institute. |
| Guest Visitor | A visitor who can browse courses and verify certificates without logging in. |
| Education Officer | An employee responsible for managing students, courses, classes and enrollments. |
| Instructor | A teacher assigned to Sessions for delivering educational content. |
| System Administrator | A user responsible for managing users, roles and system configuration. |
| Employee | A staff member working in the institute. Education Officers are a type of Employee. |

---

# 3. Academic Structure

## Course

Course is the reusable educational definition of a subject.

A Course includes:

- Title
- Description
- Learning Objectives
- Duration (Hours)
- Default Session Count
- Category
- Level
- Prerequisites

A Course does not include:

- Instructor assignment
- Schedule
- Capacity
- Tuition
- Start Date
- Delivery information

A Course may be offered many times as different Classes.

## Class

Class is one operational offering/execution of a Course during an Academic Term.

A Class contains:

- Course
- Academic Term
- Capacity
- Tuition
- Delivery Type
- Status
- Sessions
- Enrollments

## Academic Term

AcademicTerm represents an educational period to which Classes belong.

A Class belongs to exactly one Academic Term.

## Session

Session is one teaching meeting belonging to a Class.

Each Session contains:

- Session Number
- Date
- Start Time
- End Time
- Status
- Instructor assignment
- Optional Location

Instructor assignment is managed at Session level.

---

# 4. Enrollment

Enrollment represents a Student's registration in a specific Class.

A Student enrolls in a Class, not directly in a Course.

## Canonical Enrollment Statuses

- Registered
- Studying
- Completed
- Cancelled
- Dropped
- Failed

`Registered` is the initial registration state.

Payment is intentionally outside Enrollment Status in the current baseline. A future Payment module may have its own payment status.

---

# 5. Delivery Type

Delivery Type specifies how a Class is delivered.

## Canonical values

| Code | Display name |
|---|---|
| InPerson | In-Person |
| Online | Online |
| Corporate | Corporate / Organization |
| Hybrid | Hybrid |

Delivery Type is independent from Venue/Location.

The more detailed terms `Physical`, `Virtual`, and `Physical+Virtual` are not canonical values for the current domain model.

---

# 6. Venue / Location

Location represents where a Session is held or hosted.

Examples:

- Classroom
- Microsoft Teams
- Google Meet
- Customer Organization

Location is operational information and is not part of Course.

---

# 7. Student Status

Canonical Student Status values:

- Active
- Inactive

Student participation in individual Classes is represented by Enrollment Status, not by additional global Student statuses.

---

# 8. Class Status

Canonical Class Status values:

- Draft
- Open
- Full
- InProgress
- Completed
- Cancelled

`Open` means the Class is available for enrollment.

`Full` indicates that the current capacity has been reached. It may return to `Open` if capacity becomes available.

---

# 9. Prerequisite

A recommended Course that may help a Student succeed in another Course.

Prerequisites are advisory in the current phase and are not mandatory enrollment conditions.

---

# 10. Business Principle

ProjectHub is a professional training center rather than a university.

Therefore:

- Prerequisites are advisory.
- Practical skills are prioritized.
- A Student may possess prior knowledge acquired outside the institute.
- Completion of one Class does not make the Student globally `Graduated`.

---

# 11. Terminology Rules

The following mappings are mandatory for new documentation:

| Avoid as canonical domain value | Use |
|---|---|
| Open for Enrollment | Open |
| In Progress | InProgress |
| Closed | Completed or Cancelled, depending on business meaning |
| Enrolled | Registered |
| Withdrawn | Dropped |
| Pending Payment | Payment status in future Payment module |
| Suspended | Not a Student Status in v1 |
| Graduated | Not a Student Status in v1 |
| Organization | Corporate (code); Corporate / Organization (display) |
