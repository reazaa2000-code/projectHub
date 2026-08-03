# Data Dictionary v1.0

**Project:** ProjectHub

**Version:** 1.0

**Status:** Approved Baseline

**Sprint:** Sprint 1

---

# Purpose

This document defines the approved data dictionary for the Core Domain.

Only business entities are included.

Infrastructure entities (User, Role, Permission, Authentication) are intentionally excluded and will be introduced during Sprint 0.

---

# Common BaseEntity

The following attributes are inherited by all Core Domain entities.

| Column    | Type      | Null | Description                  |
| --------- | --------- | ---- | ---------------------------- |
| Id        | bigint    | No   | Primary Key                  |
| CreatedAt | datetime2 | No   | Creation timestamp           |
| UpdatedAt | datetime2 | Yes  | Last update timestamp        |
| CreatedBy | bigint    | Yes  | User who created the record  |
| UpdatedBy | bigint    | Yes  | User who modified the record |

---

# Category

| Column      | Type          | Null | Key | Description   |
| ----------- | ------------- | ---- | --- | ------------- |
| Name        | nvarchar(100) | No   | UQ  | Category name |
| Description | nvarchar(500) | Yes  |     | Description   |
| IsActive    | bit           | No   |     | Active flag   |

---

# Course

| Column        | Type          | Null | Key | Description       |
| ------------- | ------------- | ---- | --- | ----------------- |
| CategoryId    | bigint        | No   | FK  | Parent Category   |
| Code          | nvarchar(30)  | No   | UQ  | Course Code       |
| Title         | nvarchar(200) | No   |     | Course title      |
| Description   | nvarchar(max) | Yes  |     | Description       |
| DurationHours | int           | No   |     | Educational hours |
| IsActive      | bit           | No   |     | Active flag       |

---

# CoursePrerequisite

| Column               | Type   | Null | Key | Description         |
| -------------------- | ------ | ---- | --- | ------------------- |
| CourseId             | bigint | No   | FK  | Main Course         |
| PrerequisiteCourseId | bigint | No   | FK  | Prerequisite Course |

Business Rule

Duplicate prerequisite pairs are not allowed.

---

# AcademicTerm

| Column    | Type          | Null | Key | Description |
| --------- | ------------- | ---- | --- | ----------- |
| Name      | nvarchar(100) | No   | UQ  | Term name   |
| StartDate | date          | No   |     | Start date  |
| EndDate   | date          | No   |     | End date    |
| IsActive  | bit           | No   |     | Active flag |

---

# Class

| Column         | Type          | Null | Key | Description      |
| -------------- | ------------- | ---- | --- | ---------------- |
| CourseId       | bigint        | No   | FK  | Parent Course    |
| AcademicTermId | bigint        | No   | FK  | Academic Term    |
| Code           | nvarchar(30)  | No   | UQ  | Class code       |
| Capacity       | int           | No   |     | Maximum capacity |
| Tuition        | decimal(18,2) | No   |     | Tuition          |
| DeliveryType   | tinyint       | No   |     | Delivery method  |
| Status         | tinyint       | No   |     | Class status     |
| StartDate      | date          | No   |     | Start date       |
| EndDate        | date          | No   |     | End date         |

---

# Session

| Column        | Type          | Null | Key | Description                       |
| ------------- | ------------- | ---- | --- | --------------------------------- |
| ClassId       | bigint        | No   | FK  | Parent Class                      |
| InstructorId  | bigint        | Yes  | FK  | Assigned instructor               |
| SessionNumber | int           | No   |     | Order in Class                    |
| SessionDate   | date          | No   |     | Teaching date                     |
| StartTime     | time          | No   |     | Start time                        |
| EndTime       | time          | No   |     | End time                          |
| Status        | tinyint       | No   |     | Session status                    |
| Location      | nvarchar(200) | Yes  |     | Optional classroom / virtual room |

Business Rule

(ClassId, SessionNumber) must be unique.

---

# Student

| Column       | Type          | Null | Key | Description           |
| ------------ | ------------- | ---- | --- | --------------------- |
| StudentCode  | nvarchar(30)  | No   | UQ  | Internal student code |
| FirstName    | nvarchar(100) | No   |     | First name            |
| LastName     | nvarchar(100) | No   |     | Last name             |
| NationalCode | nvarchar(20)  | No   | UQ  | National ID           |
| BirthDate    | date          | Yes  |     | Birth date            |
| Gender       | tinyint       | No   |     | Gender                |
| Mobile       | nvarchar(20)  | No   |     | Mobile phone          |
| Phone        | nvarchar(20)  | Yes  |     | Phone                 |
| Email        | nvarchar(200) | Yes  |     | Email                 |
| Address      | nvarchar(500) | Yes  |     | Address               |
| Status       | tinyint       | No   |     | Student status        |
| UserId       | bigint        | Yes  | FK  | Linked user account   |

Business Rules

* NationalCode cannot be edited by Education Officer.
* Physical deletion is prohibited.

---

# Enrollment

| Column         | Type      | Null | Key | Description       |
| -------------- | --------- | ---- | --- | ----------------- |
| StudentId      | bigint    | No   | FK  | Student           |
| ClassId        | bigint    | No   | FK  | Class             |
| EnrollmentDate | datetime2 | No   |     | Registration date |
| Status         | tinyint   | No   |     | Enrollment status |

Business Rules

* (StudentId, ClassId) must be unique.
* Class capacity must not be exceeded.

---

# Enumerations

## Class Status

* Draft
* Open
* Full
* Closed
* Cancelled
* Completed

## Delivery Type

* InPerson
* Online
* Corporate
* Hybrid

## Session Status

* Scheduled
* Completed
* Cancelled
* Postponed

## Student Status

* Active
* Inactive

## Enrollment Status

* Registered
* Studying
* Completed
* Cancelled
* Dropped
* Failed

## Gender

* Male
* Female
* PreferNotToSay

---

# Core Domain Summary

| Entity             | Status   |
| ------------------ | -------- |
| Category           | Approved |
| Course             | Approved |
| CoursePrerequisite | Approved |
| AcademicTerm       | Approved |
| Class              | Approved |
| Session            | Approved |
| Student            | Approved |
| Enrollment         | Approved |

This document is the official data dictionary for Sprint 1 and serves as the basis for EF Core entities, Fluent API configuration, and database migrations.
