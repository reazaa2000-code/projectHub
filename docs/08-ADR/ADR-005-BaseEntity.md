# ADR-005 — Base Entity

Project: ProjectHub

Status: Accepted

Version: 1.0

---

# Context

Most entities share the same audit information.

Duplicating audit fields increases maintenance cost and causes inconsistency.

---

# Decision

A common BaseEntity shall be introduced.

Every persistent entity inherits from BaseEntity.

---

# BaseEntity

Id

CreatedAt

UpdatedAt

CreatedBy

UpdatedBy

---

# Deferred Fields

DeletedAt

DeletedBy

IsDeleted

RowVersion

---

# Rationale

Benefits

- Removes duplication
- Standardizes audit information
- Simplifies EF Core configuration
- Simplifies repositories
- Easier maintenance

---

# Consequences

Positive

Consistent entity design

Cleaner code

Centralized auditing

Negative

One additional abstraction

This abstraction is considered beneficial.