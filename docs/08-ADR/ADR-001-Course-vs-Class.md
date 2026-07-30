# ADR-001 — Course vs Class

**Project:** ProjectHub  
**Status:** Accepted  
**Version:** 0.1  
**Date:** 2026-07-30  
**Decision Makers:** Product Owner, Business Analyst

---

# Context

During domain analysis, it was necessary to determine whether educational information and operational information should be stored in a single entity or separated into two entities.

Many simple training systems combine Course and Class into one object. While this simplifies the initial implementation, it creates problems when the same Course is offered multiple times with different schedules, instructors or tuition fees.

ProjectHub is intended to support repeated offerings of the same Course across different Academic Terms, delivery methods and instructors.

---

# Decision

The system shall separate **Course** and **Class** into two independent domain entities.

- **Course** represents the educational template.
- **Class** represents an operational execution of a Course.

A single Course may be offered through multiple Classes over time.

Relationship:

```
Course (1)
      │
      │
      ▼
Class (N)
```

---

# Responsibilities

## Course

A Course defines the academic content and remains relatively stable.

Typical attributes include:

- Course Code
- Title
- Category
- Level
- Description
- Duration (Hours)
- Default Session Count
- Prerequisites
- Active Status

A Course **does not** contain operational information.

---

## Class

A Class represents one actual delivery of a Course.

Typical attributes include:

- Academic Term
- Assigned Instructor(s)
- Schedule
- Capacity
- Tuition Fee
- Delivery Type
- Enrollment Status
- Operational Status

A Class **must** reference exactly one Course.

---

# Rationale

Separating Course and Class provides the following benefits:

- The same Course can be offered multiple times.
- Tuition may vary between Classes.
- Different instructors may teach different Classes.
- Different schedules may exist for the same Course.
- Historical Class information is preserved.
- Future reporting becomes simpler.
- Future ERP modules can reuse Course definitions.

---

# Consequences

## Positive

- Better domain model.
- Higher scalability.
- Supports future organizational training.
- Supports multiple Academic Terms.
- Simplifies reporting and analytics.
- Aligns with Domain-Driven Design principles.

## Negative

- Slightly more complex database design.
- Additional relationship between Course and Class.

The added complexity is considered acceptable because of the long-term flexibility it provides.

---

# Business Rules Affected

- BR-011
- BR-012
- BR-013
- BR-014

---

# Related Use Cases

- UC-001 — Create Course
- UC-002 — Update Course
- UC-003 — Create Class
- UC-004 — Generate Sessions

---

# Alternatives Considered

## Option 1 — Single Entity (Rejected)

Store all information in one table/entity.

Reasons for rejection:

- Duplicate Course information.
- Difficult maintenance.
- Poor historical tracking.
- Inconsistent tuition and scheduling.
- Weak support for future expansion.

---

## Option 2 — Separate Course and Class (Accepted)

Maintain Course as the educational definition and Class as the operational instance.

This approach provides better scalability, maintainability and aligns with the project's long-term vision.

---

# Impact on Domain Model

```
Course
   │
   │ 1
   ▼
Class
   │
   │ 1..*
   ▼
Session
```

---

# Decision Summary

**Accepted**

ProjectHub adopts a two-level educational model:

- **Course** = Educational Definition
- **Class** = Operational Execution

This decision forms a core architectural principle of the system and shall be followed in all future design and implementation activities.