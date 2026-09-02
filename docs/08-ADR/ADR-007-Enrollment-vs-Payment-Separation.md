# ADR-007 — Separation of Enrollment and Payment Concepts

Project ProjectHub  
Status Accepted  
Version 1.0  
Date 2026-09-02

## Context
During domain modeling, it was necessary to decide whether payment status 
should be part of the Enrollment lifecycle or managed separately.

## Decision
Enrollment Status and Payment Status are separate concepts

- Enrollment Status represents the educational lifecycle of a student.
- Payment Status represents the financial lifecycle of a registration.

### Enrollment Status Values
- Registered
- Studying
- Completed
- Cancelled
- Dropped
- Failed

### Payment Status Values (Future - Phase 3)
- Pending
- Paid
- Failed
- Cancelled

## Rationale

### Benefits
1. Separation of Concerns Educational and financial concepts are independent.
2. Future-Proof Payment module can evolve without affecting Enrollment.
3. Cleaner State Machine Enrollment lifecycle focuses only on education.
4. DDD Compliance Each Aggregate has a single responsibility.
5. Flexibility Supports complex payment scenarios (installments, refunds, etc.).

### Trade-offs
- Requires coordination between Enrollment and Payment aggregates.
- Business Rule BR-005 needs careful interpretation.

## Impact on BR-005
Original Enrollment is not completed until payment is successful.

Interpretation
- Tuition = 0 → Enrollment starts as `Studying`
- Tuition  0 → Enrollment starts as `Registered`
- After payment confirmation → Enrollment transitions to `Studying`

## Status
Approved — This decision is mandatory for all future development.