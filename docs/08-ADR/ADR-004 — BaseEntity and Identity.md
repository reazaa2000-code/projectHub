# ADR-004 — BaseEntity and Identity

**Project:** ProjectHub

**Status:** Accepted

**Version:** 1.0

**Date:** 2026-08-03

---

# Context

All business entities require common audit information.

Duplicating these fields in every entity would increase maintenance cost and reduce consistency.

---

# Decision

Every Core Domain entity inherits from BaseEntity.

BaseEntity contains:

```
Id

CreatedAt

UpdatedAt

CreatedBy

UpdatedBy
```

Business entities do not redefine these attributes.

---

# Identity Strategy

Primary keys use:

```
long (bigint)
```

Identity values are generated automatically by the database.

Business codes such as:

* CourseCode
* ClassCode
* StudentCode

are not primary keys.

They exist only for business usage.

---

# Benefits

* Consistent audit model
* Cleaner entity definitions
* Easier EF Core configuration
* Uniform repository implementation
* Simpler maintenance

---

# Trade-offs

All entities depend on a shared base class.

This dependency is accepted because audit information is mandatory throughout the system.

---

# Status

Approved

This decision is mandatory for every future Core Domain entity.
