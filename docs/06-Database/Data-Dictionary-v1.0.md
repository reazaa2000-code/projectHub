# Data Dictionary v1.0

# Global Database Standards

## Primary Key

All entities use:

Id

as the Primary Key.

## Foreign Keys

Foreign Keys use the referenced entity name.

Examples

CourseId

StudentId

InstructorId

EnrollmentId

AcademicTermId

## Core Entities

| Entity | Purpose |
|----------|----------|
| User | Authentication & Authorization |
| Employee | Employees of the institute |
| Instructor | Teaching information |
| Student | Student information |
| Course | Educational definition |
| CoursePrerequisite | Course prerequisites |
| AcademicTerm | Academic periods |
| Class | Operational execution of Course |
| Session | Individual class meetings |
| Enrollment | Student registration |
| ClassInstructor | Many-to-many relation between Class and Instructor |

This document defines the Core Domain only.

Detailed attributes will be introduced in ERD Level 2.