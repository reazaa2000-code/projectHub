# ADR-002 — Student Identity

**Project:** ProjectHub

**Status:** Accepted

**Version:** 1.0

**Date:** 2026-08-03

---

# Context

The project required deciding whether Student should own authentication information or remain a pure business entity.

Future requirements include Student Portal, Employee Portal and Instructor Portal.

---

# Decision

Student remains a pure business entity.

Authentication belongs to User.

Relationship:

```
User (0..1)

↓

Student
```

UserId inside Student is optional.

Students may exist without login credentials.

---

# Business Principles

Student stores:

* Personal information
* Contact information
* Student Code

Student does NOT store:

* Password
* Username
* Roles
* Authentication data

---

# Benefits

* Domain remains independent.
* Authentication can evolve separately.
* Portal features can be introduced later.
* Business model remains clean.

---

# Status

Approved

Sprint 0 will introduce User and Authentication.
