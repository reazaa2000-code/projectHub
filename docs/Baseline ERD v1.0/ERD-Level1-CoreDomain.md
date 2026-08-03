# ERD Level 1 — Core Domain

**Project:** ProjectHub

**Version:** 1.0

**Status:** Approved Baseline

**Sprint:** Sprint 1

---

# Purpose

This document defines the approved Core Domain Entity Relationship Diagram (ERD) for ProjectHub.

It represents the minimum business entities required to operate an educational institute.

Infrastructure entities such as User, Role, Permission, Authentication and technical concerns are intentionally excluded from this document.

---

# Core Domain

```text
                    +----------------------+
                    |      Category        |
                    +----------------------+
                              |
                              | 1
                              |
                              | N
                    +----------------------+
                    |       Course         |
                    +----------------------+
                              |
                              | 1
                              |
                              | N
                    +----------------------+
                    |        Class         |
                    +----------------------+
                      |        |         |
                      |        |         |
                      |        |         |
                     1|       N|        N|
                      |        |         |
                      |        |         |
                      ▼        ▼         ▼

          +----------------+   +----------------+
          | Academic Term  |   |    Session     |
          +----------------+   +----------------+
                                     |
                                     |
                                     | N
                                     |
                                     | 1
                              +----------------+
                              |   Instructor   |
                              +----------------+

+----------------+
|    Student     |
+----------------+
        |
        |1
        |
        |N
+----------------------+
|     Enrollment       |
+----------------------+
        |
        |N
        |
        |1
+----------------------+
|        Class         |
+----------------------+
```

---

# Entity Overview

## Category

Represents a business grouping for educational courses.

Examples:

* Programming
* Networking
* Accounting
* Languages

Relationship

Category (1) → (N) Course

---

## Course

Represents the educational definition of a subject.

A Course contains:

* Educational content
* Description
* Duration
* Prerequisites

A Course does not contain scheduling information.

Relationship

Course (1) → (N) Class

---

## AcademicTerm

Represents an educational period.

Examples:

* Spring 2026
* Summer 2026
* Fall 2026

Relationship

AcademicTerm (1) → (N) Class

---

## Class

Represents one execution of a Course.

Contains operational information:

* Capacity
* Tuition
* Delivery Type
* Status
* Start Date
* End Date

Relationships

Course

AcademicTerm

Sessions

Enrollments

---

## Session

Represents one teaching meeting.

Contains:

* Session Number
* Session Date
* Start Time
* End Time
* Instructor
* Status
* Location

Relationship

Class (1)

Instructor (Optional)

---

## Student

Represents a learner.

Contains only personal information.

Educational progress is stored in Enrollment.

Relationship

Student (1)

Enrollment (N)

---

## Enrollment

Represents registration of one Student in one Class.

Contains:

* Enrollment Date
* Enrollment Status

Relationship

Student (1)

Class (1)

Business Rule

(StudentId, ClassId) must be unique.

---

# Future Domain (Not Included)

The following entities are intentionally excluded from Sprint 1:

* Attendance
* Certificate
* Payment
* Invoice
* Assessment
* ExamResult
* Assignment
* Classroom
* Branch
* SMS Notification

These entities will be introduced in later iterations.

---

# Infrastructure (Not Included)

The following technical entities are excluded from this ERD:

* User
* Role
* Permission
* Authentication
* Authorization
* RefreshToken

These belong to the Infrastructure Layer and will be introduced during Sprint 0.

---

# Core Business Flow

```text
Category
    │
    ▼
Course
    │
    ▼
Class
   ▲ │
   │ ▼
AcademicTerm
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

---

# Approved Core Domain

The following entities are considered stable for Sprint 1:

* Category
* Course
* AcademicTerm
* Class
* Session
* Student
* Enrollment

Changes to these entities require business approval.
