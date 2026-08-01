# ADR-004 — Identity and Domain Separation

Project: ProjectHub

Status: Accepted

Version: 1.0

---

# Context

ProjectHub requires authentication for multiple types of users:

- Education Officer
- Instructor
- Student (Future)
- Manager (Future)

Authentication concerns should not be mixed with business domain entities.

---

# Decision

Authentication shall be separated from the Domain Model.

A dedicated User entity is responsible only for:

- Authentication
- Authorization
- Username
- Password
- Roles
- Lock Status

Business information shall remain inside:

- Employee
- Instructor
- Student

Each business entity may optionally reference one User account.

---

# Domain Model

                User
        (Authentication)

      ┌────────┼─────────┐
      │        │         │
      ▼        ▼         ▼

 Employee  Instructor  Student

---

# Rationale

This design:

- separates Identity from Domain
- supports ASP.NET Identity
- simplifies future portal development
- avoids future database redesign
- supports external authentication providers

---

# Consequences

Positive

- Clean Architecture compatible
- Domain Driven Design compatible
- Future proof

Negative

- One additional table
- One additional relationship

The benefits outweigh the additional complexity.

---

# Related Artifacts

ERD v1.0

Use Cases

Security Architecture

Database Design
