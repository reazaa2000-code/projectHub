# Entity Specification — Course

Version: 1.0

Status: Approved

Sprint: Database Design

---

# Purpose

Course represents the educational definition of a training program.

A Course is a reusable template that may be offered many times through different Classes.

Operational information is NOT stored in Course.

---

# Responsibilities

A Course is responsible for:

- Educational definition
- Course metadata
- Duration
- Level
- Category
- Prerequisites

---

# Relationships

Course (1) -------- (N) Class

Course (1) -------- (N) CoursePrerequisite

Category (1) ------ (N) Course

---

# Business Rules

- Course Code must be unique.
- Course Title is required.
- Duration must be greater than zero.
- Category is required.
- Level is required.
- A Course may have zero or many prerequisites.
- A Course cannot be its own prerequisite.
- A Course may be inactive.
- Inactive Courses cannot be used when creating new Classes.

---

# Notes

Course contains educational information only.

Schedules, instructors, tuition and capacity belong to Class.

# Attributes

Inherited from BaseEntity

- Id
- CreatedAt
- UpdatedAt
- CreatedBy
- UpdatedBy

Course Attributes

- CourseCode
- Title
- Description
- CategoryId
- Level
- DurationHours
- IsActive