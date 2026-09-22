# ProjectHub
# Business Glossary
Version: 0.2.0
Status: Approved
Owner: Product Owner
Author: Business Analyst

---

# 1. Purpose

This document defines the common business terminology used throughout the ProjectHub system.
All stakeholders, analysts, developers, testers, and future team members must use these definitions consistently.

---

# 2. Business Terms

| Term | Definition |
|-------|------------|
| Student | A person who enrolls in one or more classes offered by the institute. |
| Guest Visitor | A visitor who can browse courses and verify certificates without logging in. |
| Education Officer | An employee responsible for managing students, courses, classes and enrollments. |
| Instructor | A teacher assigned to one or more classes for delivering educational content. |
| System Administrator | A user responsible for managing users, roles and system configuration. |
| Employee | A staff member working in the institute. Education Officers are a type of Employee. |

---

# Academic Structure

## Course

An educational template describing a subject.

A Course includes:

- Title
- Description
- Learning Objectives
- Duration (Hours)
- Standard Number of Sessions
- Category
- Level
- Prerequisites

A Course DOES NOT include:

- Instructor
- Schedule
- Capacity
- Tuition
- Start Date
- Delivery Information

A Course may be offered many times as different Classes.

---

## Class

A real execution of a Course.

Each Class belongs to exactly one Course.

A Class contains operational information such as:

- Academic Term
- Instructor
- Capacity
- Tuition
- Delivery Type
- Sessions
- Enrollment

Example:

Course:
Programming with C#

↓

Class A (Summer 1405)

↓

Class B (Autumn 1405)

---

## Session

A single teaching meeting belonging to a Class.

Each Session contains:

- Session Number
- Date
- Start Time
- End Time
- Status

Attendance is recorded per Session.

---

## Academic Term

Represents the starting period of a Class.

A Class starts in one Academic Term but may continue into later months.

Example:

Summer 1405

Start:
Shahrivar

End:
Bahman

---

# Enrollment

Enrollment represents a student's registration in a specific Class.

A Student enrolls in a Class, NOT in a Course.

One Student may have multiple Enrollments.

Possible Enrollment Statuses:

- Pending Payment
- Enrolled
- In Progress
- Completed
- Failed
- Cancelled
- Withdrawn

---

# Attendance

Attendance is recorded for each Session.

Attendance Percentage determines eligibility for certificate issuance.

Minimum required attendance:

70%

---

# Certificate

A certificate issued after successful completion of a Class.

Every certificate must have:

- Unique Certificate Number
- Verification Code
- Online Verification

---

# Learning Material

Educational resources uploaded by an Instructor for a specific Class.

Examples:

- PDF
- PowerPoint
- Source Code
- Video
- Exercise Files

Only students enrolled in the corresponding Class may access these materials.

---

# Delivery Type

Specifies how a Class is delivered.

Supported values:

- In-Person
- Online
- Organization
- Hybrid

Delivery Type is independent from Venue.

---

# Venue

Represents where a Session is held.

Examples:

- Classroom
- Microsoft Teams
- Google Meet
- Customer Organization

---

# Category

Logical grouping of Courses.

Examples:

- Programming
- Database
- Networking
- Accounting
- Languages

Each Course belongs to exactly one Category.

---

# Prerequisite

A recommended Course that helps students succeed in another Course.

Prerequisites are NOT mandatory.

Students may enroll without completing them.

---

# Waiting List

A queue of students when Class capacity is full.

Education Officer may increase capacity and move students into the Class.

---

# Draft Class

A Class that has been created but is not yet available for enrollment.

Students cannot view or enroll in Draft Classes.

---

# Active Class

A Class that is open for enrollment.

---

# Completed Class

A Class whose educational sessions have finished.

---

# Business Principle

The institute is a professional training center rather than an academic university.

Therefore:

- Prerequisites are advisory.
- Practical skills are prioritized.
- Students may possess prior knowledge acquired outside the institute.

---

# Glossary Version History

| Version | Date | Description |
|----------|------|-------------|
| 0.2.0 | 2026 | Initial Business Glossary |