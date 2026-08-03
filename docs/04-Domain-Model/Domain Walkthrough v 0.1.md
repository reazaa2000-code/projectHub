# Domain Walkthrough v1.0

**Project:** ProjectHub
**Version:** 1.0
**Status:** Approved
**Sprint:** Sprint 1 – Core Domain

---

# Purpose

This document validates the business domain by walking through the complete lifecycle of the educational process.

The objective is to ensure that all core entities participate correctly in the business workflow before implementation begins.

---

# Business Flow

```text
Category
    │
    ▼
Course
    │
    ▼
Class
    ▲
    │
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
Attendance (Future)
    │
    ▼
Certificate (Future)
```

---

# Step 1 – Define Category

A Category groups educational courses.

Examples:

* Programming
* Network
* Accounting
* Language

One Category may contain many Courses.

---

# Step 2 – Define Course

A Course represents the educational definition of a subject.

Examples:

* C#
* CCNA
* ICDL

A Course contains educational information only.

It does not contain scheduling or operational information.

---

# Step 3 – Create Academic Term

AcademicTerm represents an educational period.

Examples:

* Spring 2026
* Summer 2026
* Fall 2026

AcademicTerm is independent of Course.

A Course may be offered in many Academic Terms.

---

# Step 4 – Create Class

A Class is a specific offering of a Course within an Academic Term.

Examples:

Course:
C#

Academic Term:
Fall 2026

Class:
C#-1405-01

Properties:

* Capacity
* Tuition
* Delivery Type
* Status
* Start Date
* End Date

A Class belongs to exactly one Course.

A Class belongs to exactly one Academic Term.

---

# Step 5 – Generate Sessions

Each Class consists of one or more Sessions.

Example:

Session 1

Saturday

16:00–18:00

Session 2

Monday

16:00–18:00

Sessions define the actual teaching schedule.

---

# Step 6 – Register Student

Student information is recorded independently.

A Student is not automatically enrolled in any Class.

---

# Step 7 – Create Enrollment

Enrollment connects a Student to a Class.

This entity records:

* Registration Date
* Enrollment Status
* Tuition Status (Future)
* Notes (Future)

Enrollment represents participation in a Class.

---

# Step 8 – Attendance (Future)

Attendance will be recorded for each Session.

Example:

Student

↓

Session

↓

Present / Absent / Late

---

# Step 9 – Certificate (Future)

After successful completion of a Class, a Certificate may be issued.

Certificate generation depends on business rules that will be implemented in later phases.

---

# Domain Principles

* Category classifies Courses.
* Course defines educational content.
* AcademicTerm defines the educational period.
* Class is the operational execution of a Course.
* Session represents individual teaching meetings.
* Student exists independently of Classes.
* Enrollment connects Students and Classes.
* Attendance belongs to Sessions.
* Certificate belongs to completed Enrollments.

---

# Scope

This walkthrough represents the approved Core Domain for Sprint 1.

Future modules such as Finance, Payments, Exams, Certificates, SMS Notifications, Multi-Branch Support and Reporting are intentionally excluded from this version.

---

# Approval

Status: Approved

This document represents the baseline business workflow for the implementation of Sprint 1.
