# Architecture

**Project:** ProjectHub

**Version:** 1.0

**Status:** Approved

**Sprint:** Sprint 0

---

# Purpose

This document defines the software architecture of ProjectHub.

It establishes the architectural principles, project structure, dependency rules, coding standards, and technical decisions that will guide the implementation of the system.

---

# Architectural Style

ProjectHub is built using **Clean Architecture**.

Business rules remain independent from frameworks, databases, UI, and infrastructure.

```text
Presentation (API)
        │
        ▼
Application
        │
        ▼
Domain
        ▲
        │
Infrastructure
```

Dependency direction is always toward the Domain.

---

# Technology Stack

| Layer          | Technology            |
| -------------- | --------------------- |
| Framework      | ASP.NET Core 9        |
| Language       | C#                    |
| ORM            | Entity Framework Core |
| Database       | SQL Server            |
| Authentication | JWT Bearer            |
| Logging        | Serilog               |
| Validation     | FluentValidation      |
| Documentation  | Swagger / OpenAPI     |
| Testing        | xUnit                 |

---

# Solution Structure

```text
ProjectHub.sln

src/
│
├── ProjectHub.Domain
├── ProjectHub.Application
├── ProjectHub.Infrastructure
├── ProjectHub.Persistence
└── ProjectHub.API

tests/
│
├── ProjectHub.UnitTests
└── ProjectHub.IntegrationTests

docs/
```

---

# Layer Responsibilities

## Domain

Contains only business concepts.

Examples:

* Entities
* Value Objects
* Domain Services
* Domain Events
* Interfaces
* Business Rules

The Domain must not reference any external framework.

---

## Application

Contains application use cases.

Examples:

* Commands
* Queries
* DTOs
* Validators
* Interfaces
* Mapping
* Use Case orchestration

Application references Domain only.

---

## Infrastructure

Contains external integrations.

Examples:

* Email
* File Storage
* SMS
* Logging
* Authentication services

Infrastructure implements interfaces defined by Application or Domain.

---

## Persistence

Contains database implementation.

Examples:

* DbContext
* Entity Configurations
* Migrations
* Repository implementations

---

## API

Contains presentation logic.

Examples:

* Controllers
* Middleware
* Authentication
* Dependency Injection
* Swagger
* Exception Handling

API never contains business logic.

---

# Dependency Rules

Allowed dependencies:

```text
API
 ↓
Application
 ↓
Domain

Infrastructure
 ↓
Application

Persistence
 ↓
Application
 ↓
Domain
```

Forbidden:

* Domain → Infrastructure
* Domain → EF Core
* Domain → ASP.NET Core
* Application → API

---

# Domain Principles

Business entities inherit from BaseEntity.

Business logic belongs inside the Domain whenever possible.

Entities should protect their own invariants.

---

# Persistence Strategy

* Entity Framework Core
* Code First
* Fluent API configuration
* SQL Server Identity columns (bigint)
* One migration history

---

# Identity Strategy

Authentication is separated from the business domain.

Infrastructure entities:

* User
* Role
* Permission
* RefreshToken

Business entities may optionally reference User (e.g., Student.UserId).

---

# Validation Strategy

Validation occurs in two levels:

1. Input validation (FluentValidation)
2. Business validation (Domain)

---

# Exception Handling

Global exception middleware is used.

The API never exposes internal exception details.

Standard error responses are returned to clients.

---

# Logging

Serilog is the standard logging framework.

Logs are categorized into:

* Information
* Warning
* Error
* Fatal

---

# API Standards

* RESTful endpoints
* Versioned APIs
* Swagger enabled
* JSON only
* CamelCase serialization

---

# Naming Conventions

Classes:

PascalCase

Properties:

PascalCase

Methods:

PascalCase

Private fields:

_camelCase

Interfaces:

IExample

Database tables:

Singular

Examples:

* Course
* Student
* Enrollment

Primary Keys:

Id

Foreign Keys:

EntityNameId

Examples:

CourseId

StudentId

InstructorId

---

# Git Strategy

Main branch:

main

Development:

develop

Feature branches:

feature/<feature-name>

Commit format:

Sprint-0 T01 Create Solution

Sprint-0 T02 Add Domain Layer

Sprint-1 T01 Create Course API

---

# Testing Strategy

Unit Tests

Application and Domain.

Integration Tests

Persistence and API.

Business rules must always be covered by tests.

---

# Non-Goals

The following are intentionally excluded from Sprint 0:

* CQRS
* MediatR
* Event Sourcing
* Microservices
* Distributed Transactions

The architecture should remain simple unless business requirements justify additional complexity.

---

# Architectural Principles

1. Business first.
2. Simplicity over unnecessary patterns.
3. Framework independence.
4. Testability.
5. Maintainability.
6. Clear separation of concerns.
7. Incremental evolution through ADRs.

---

# Future Evolution

Future architectural decisions must be documented as ADRs.

Architecture changes are not made directly in this document without an approved ADR.

---

# Status

Approved.

This document serves as the architectural baseline for ProjectHub starting from Sprint 0.
