# ProjectHub
# Business Use Cases
Version: 0.2.0
Status: Approved
Owner: Product Owner
Author: Business Analyst

---

# 1. Purpose

This document defines the Business Use Cases of the ProjectHub Training Management System.

Business Use Cases describe business goals and interactions between business actors and the organization. They intentionally avoid implementation details.

---

# 2. Business Actors

| Actor | Description |
|--------|-------------|
| Student | A person who enrolls in educational classes. |
| Guest Visitor | A visitor who can browse courses and verify certificates without authentication. |
| Education Officer | Employee responsible for managing students, courses, classes and enrollments. |
| Instructor | Teacher responsible for delivering assigned classes. |
| System Administrator | Responsible for user management, roles and permissions. |

---

# 3. Student Business Use Cases

## BUC-001 — Register Account

**Primary Actor**
Student

**Goal**
Create a personal account.

---

## BUC-002 — Login

**Primary Actor**
Student

**Goal**
Authenticate into the system.

---

## BUC-003 — Manage Profile

**Primary Actor**
Student

**Goal**
View and update personal information.

---

## BUC-004 — Browse Courses

**Primary Actor**
Student

**Goal**
Browse available courses.

---

## BUC-005 — Search Courses

**Primary Actor**
Student

**Goal**
Search courses using filters.

---

## BUC-006 — View Course Details

**Primary Actor**
Student

**Goal**
View complete course information.

---

## BUC-007 — Enroll in Class

**Primary Actor**
Student

**Goal**
Register in an available Class.

Business Rules

- BR-001
- BR-002
- BR-003
- BR-004
- BR-005
- BR-006

---

## BUC-008 — Pay Tuition

**Primary Actor**
Student

**Goal**
Complete tuition payment.

---

## BUC-009 — View Weekly Schedule

**Primary Actor**
Student

**Goal**
View enrolled class schedule.

---

## BUC-010 — View Attendance

**Primary Actor**
Student

**Goal**
View attendance history.

---

## BUC-011 — View Final Result

**Primary Actor**
Student

**Goal**
View final score and completion status.

---

## BUC-012 — Download Certificate

**Primary Actor**
Student

**Goal**
Download issued certificate.

---

## BUC-013 — Verify Certificate

**Primary Actor**
Student

**Goal**
Verify certificate authenticity.

---

## BUC-014 — Access Learning Materials

**Primary Actor**
Student

**Goal**
Access educational resources.

---

## BUC-015 — View Announcements

**Primary Actor**
Student

**Goal**
Read institute announcements.

---

## BUC-016 — Submit Support Request

**Primary Actor**
Student

**Goal**
Create a support request.

---

# 4. Education Officer Business Use Cases

## BUC-017 — Manage Students

Goal

Create, update and maintain student information.

Main Capabilities

- Register Student
- Update Student
- View Student
- Search Student

Business Rules

- BR-001
- BR-002

---

## BUC-018 — Manage Courses

Goal

Manage educational courses.

Main Capabilities

- Create Course
- Update Course
- Archive Course
- Manage Prerequisites

Business Rules

- BR-008
- BR-009
- BR-010

---

## BUC-019 — Manage Classes

Goal

Create and manage operational classes.

Main Capabilities

- Create Class
- Assign Instructor
- Configure Delivery Type
- Configure Capacity
- Configure Tuition
- Generate Sessions
- Edit Sessions
- Open Enrollment

Business Rules

- BR-011
- BR-012
- BR-013
- BR-014
- BR-015
- BR-016
- BR-017
- BR-018
- BR-019

---

## BUC-020 — Manage Enrollments

Goal

Manage student enrollments.

Main Capabilities

- Register Student
- Verify Enrollment Rules
- Confirm Enrollment
- View Enrollment
- Cancel Enrollment (Future Phase)

Business Rules

- BR-001
- BR-002
- BR-003
- BR-004
- BR-005
- BR-006
- BR-007

---

# 5. Instructor Business Use Cases

## BUC-021 — Manage Assigned Classes

Goal

View assigned classes and students.

---

## BUC-022 — Manage Attendance

Goal

Record attendance for each Session.

Business Rules

- BR-022
- BR-028
- BR-029

---

## BUC-023 — Manage Learning Materials

Goal

Upload educational resources.

Business Rules

- BR-024
- BR-035

---

## BUC-024 — Manage Final Assessment

Goal

Record final grades.

Business Rules

- BR-030
- BR-031
- BR-032

---

## BUC-025 — Manage Availability

Goal

Maintain teaching availability.

Business Rules

- BR-026
- BR-027

---

# 6. Guest Visitor Business Use Cases

## BUC-026 — Browse Courses

---

## BUC-027 — View Course Details

---

## BUC-028 — Verify Certificate

---

# 7. System Administrator Business Use Cases

## BUC-029 — Manage Users

Goal

Maintain system users.

---

## BUC-030 — Manage Roles & Permissions

Goal

Maintain authorization policies.

---

# 8. MVP Scope

Included

✔ Student Portal

✔ Education Officer Portal

✔ Instructor Portal

✔ Course Management

✔ Class Management

✔ Enrollment

✔ Attendance

✔ Learning Materials

✔ Certificate Verification

Excluded

✖ Financial Accounting

✖ Organization Contracts

✖ Employee HR

✖ Online Exams

✖ Assignment Management

✖ Branch Management

✖ Reporting Dashboard

✖ Workflow Engine

---

# 9. Traceability

Each Business Use Case shall later be traced to:

- Business Rules
- System Use Cases
- User Stories
- Acceptance Criteria
- Test Cases

---

# Version History

| Version | Description |
|----------|-------------|
| 0.2.0 | Initial Business Use Cases |