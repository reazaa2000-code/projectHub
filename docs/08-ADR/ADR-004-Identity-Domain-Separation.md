# ADR-004 — Identity and Domain Separation

Project: ProjectHub

Status: Accepted

Version: 1.0

Date: 2026-08-03

Decision Makers:
- Product Owner
- Senior Business Analyst

---

# Context

ProjectHub is a real-world educational institute management system.

Different types of users interact with the system:

- Education Officer
- Instructor
- Student (Future Portal)
- Manager (Future)
- System Administrator

Authentication and Authorization are technical concerns, while Student, Instructor and Employee are business domain concepts.

Mixing security information with business information creates tight coupling, reduces flexibility, and makes future extensions difficult.

---

# Problem

Should authentication data be stored inside business entities, or should it be separated into an independent User entity?

---

# Decision

Authentication shall be separated from the Business Domain.

A dedicated **User** entity will be responsible only for identity and security.

Business information will remain inside independent domain entities.

```
                User
         (Authentication)

      ┌────────┼─────────┐
      │        │         │
      ▼        ▼         ▼

 Employee  Instructor  Student
```

Each business entity may optionally reference one User account.

---

# Responsibilities

## User

Responsible for:

- Username
- Password Hash
- Authentication
- Authorization
- Roles
- Account Status
- Lockout
- Security Policies

User contains **no business information**.

---

## Employee

Responsible for:

- Employee information
- Employment data
- Education Officer
- Managers
- Future staff

---

## Instructor

Responsible for:

- Instructor profile
- Biography
- Skills
- Teaching information

Instructor is **not required** to be an employee.

---

## Student

Responsible for:

- Student profile
- Educational information

Student may receive a User account in future versions.

In MVP, UserId is optional.

---

# Design Principles

Identity and Domain are independent.

Business entities never contain authentication logic.

Security can evolve without changing the domain model.

The domain model can evolve without affecting authentication.

---

# Rationale

This architecture provides:

- Separation of Concerns
- Clean Architecture compatibility
- Domain-Driven Design compatibility
- ASP.NET Core Identity compatibility
- Easier maintenance
- Better scalability
- Future portal support
- External authentication support (OAuth, Azure AD, Google, etc.)

---

# Alternatives Considered

## Alternative 1

Store Username and Password inside Student, Instructor and Employee.

Rejected.

Reason:

- Duplicate authentication logic
- Difficult maintenance
- Tight coupling
- Difficult future expansion

---

## Alternative 2

Make Instructor inherit from Employee.

Rejected.

Reason:

Many instructors in educational institutes are contract-based and are not employees.

The model would not represent the real business domain correctly.

---

## Alternative 3

Separate User from the Business Domain.

Accepted.

Reason:

Maximum flexibility.

---

# Consequences

## Positive

- Clean domain model
- Flexible authentication
- Supports future Student Portal
- Supports Instructor Portal
- Compatible with ASP.NET Identity
- Simplifies authorization
- Supports external identity providers

---

## Negative

- One additional table
- Additional foreign key relationships

The additional complexity is acceptable considering the long-term benefits.

---

# Implementation Notes

Primary Key:

Id

Relationships:

Employee.UserId

Instructor.UserId

Student.UserId (Nullable in MVP)

Future entities may also reference User.

---

# Related ADRs

ADR-001 — Course vs Class

ADR-005 — Base Entity

ADR-006 — Primary Key Naming Convention

---

# Related Use Cases

UC-001 — Create Course

UC-003 — Create Class

UC-005 — Register Student

UC-006 — Create Enrollment

Future:

- Login
- Student Portal
- Instructor Portal

---

# Decision Summary

Authentication is a technical concern.

Business entities represent business concepts.

User shall remain an independent entity responsible only for identity and security.

This decision is a foundational architectural principle of ProjectHub and shall be followed throughout the project.