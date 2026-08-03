# ADR-001 — Course vs Class

**Project:** ProjectHub

**Status:** Accepted

**Version:** 1.0

**Date:** 2026-08-03

---

# Context

During domain analysis, it was necessary to determine whether educational content and course execution should be represented by a single entity or separated into two entities.

Many educational systems incorrectly combine these concepts, making reporting, scheduling and historical tracking difficult.

---

# Decision

The domain separates **Course** from **Class**.

Course represents the educational definition.

Class represents one execution of that Course.

```
Course

↓

Class

↓

Session
```

---

# Responsibilities

## Course

Stores:

* Educational content
* Title
* Description
* Duration
* Prerequisites

Does NOT store:

* Capacity
* Tuition
* Schedule
* Instructor
* Students

---

## Class

Stores:

* Capacity
* Tuition
* Academic Term
* Status
* Delivery Type
* Start Date
* End Date

Does NOT duplicate Course information.

---

# Consequences

Advantages

* Unlimited classes per course
* Historical data preserved
* Tuition varies by class
* Instructor varies by class
* Easier reporting

Trade-off

Requires one additional entity.

---

# Status

Approved

This decision is mandatory for all future development.
