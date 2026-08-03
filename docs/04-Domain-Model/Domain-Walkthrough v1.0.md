# Domain Walkthrough

**Project:** ProjectHub

**Version:** 1.0

**Status:** Approved Baseline

**Sprint:** Sprint 1

---

# Purpose

This document explains the Core Business Domain of ProjectHub.

Rather than describing database tables, this document explains how the business operates and how entities collaborate to deliver educational services.

---

# Core Business Flow

The educational process follows the sequence below:

```text
Category
    │
    ▼
Course
    │
    ▼
Class
   │ │
   │ └──────────────► AcademicTerm
   │
   ▼
Session

Student
    │
    ▼
Enrollment
    │
    ▼
Class
```

This represents the minimum business domain required for Sprint 1.

---

# Domain Overview

## Category

Category groups educational courses.

Examples:

* Programming
* Networking
* Languages
* Accounting

A Category exists only to organize Courses.

---

## Course

Course represents an educational definition.

It answers the question:

> What should be taught?

A Course contains:

* Title
* Educational content
* Duration
* Description
* Optional prerequisites

A Course never contains scheduling information.

One Course may be offered many times.

Relationship

```text
Category (1)

↓

Course (N)
```

---

## AcademicTerm

AcademicTerm represents an educational period.

Examples:

* Spring 2026
* Summer 2026
* Fall 2026

Classes always belong to one Academic Term.

Relationship

```text
AcademicTerm (1)

↓

Class (N)
```

---

## Class

Class represents one execution of a Course.

It answers the question:

> When and how is this Course delivered?

Class contains:

* Capacity
* Tuition
* Delivery Type
* Status
* Start Date
* End Date

A Class belongs to exactly one Course.

Relationship

```text
Course (1)

↓

Class (N)
```

---

## Session

Session is the smallest educational unit.

Each Class consists of one or more Sessions.

Session stores:

* Session Number
* Session Date
* Start Time
* End Time
* Status
* Instructor
* Optional Location

Relationship

```text
Class (1)

↓

Session (N)
```

Instructor assignment is performed at Session level to allow instructor replacement during a course.

---

## Student

Student represents a learner.

Student stores only personal information.

Examples:

* Student Code
* National Code
* Contact Information

Student does **not** store educational progress.

Educational progress belongs to Enrollment.

Relationship

```text
Student (1)

↓

Enrollment (N)
```

---

## Enrollment

Enrollment is the central business entity of the system.

It represents:

> A Student is registered in a specific Class.

Enrollment stores:

* Registration Date
* Enrollment Status

Enrollment does **not** contain:

* Payment information
* Exam scores
* Attendance

These modules will be introduced in later sprints.

Business Rule

A Student cannot register twice in the same Class.

---

# Business Lifecycle

The educational lifecycle is defined as follows:

```text
Course

↓

Class

↓

Session

↓

Student Enrollment

↓

Educational Progress

↓

Completion
```

---

# Enrollment Lifecycle

```text
Registered

↓

Studying

↓

Completed

OR

Cancelled

OR

Dropped

OR

Failed
```

Enrollment is responsible for tracking the student's academic progress.

---

# Architectural Boundaries

The Core Domain intentionally excludes infrastructure concerns.

The following concepts are **not part of the Core Business Domain**:

* User
* Role
* Permission
* Authentication
* Authorization
* JWT
* Refresh Token

These belong to Sprint 0 and the Infrastructure layer.

---

# Future Modules

The following entities are intentionally postponed:

* Employee
* Attendance
* Payment
* Invoice
* Certificate
* Assignment
* ExamResult
* Classroom
* Branch
* SMS Notification

Their omission does not affect the correctness of the Core Domain.

---

# Approved Core Domain

The following entities constitute the official Sprint 1 Core Domain:

* Category
* Course
* CoursePrerequisite
* AcademicTerm
* Class
* Session
* Student
* Enrollment

Any modification to these entities requires architectural review.

---

# Conclusion

The Core Domain has been completed using a Domain-Driven Design approach.

Business concepts have been separated from technical infrastructure, allowing the project to proceed into Sprint 0, where authentication, architecture, persistence, and application structure will be implemented without affecting the approved business model.
