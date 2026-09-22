# Terminology Change Manifest v1.0

## Resolved inconsistencies

1. Enrollment Status
   - Canonical: Registered, Studying, Completed, Cancelled, Dropped, Failed
   - Removed from canonical lifecycle: Pending Payment, Enrolled, Withdrawn

2. Class Status
   - Canonical: Draft, Open, Full, InProgress, Completed, Cancelled
   - Removed from canonical lifecycle: Closed, Open for Enrollment

3. Student Status
   - Canonical: Active, Inactive
   - Deferred: Suspended, Graduated

4. Delivery Type
   - Canonical codes: InPerson, Online, Corporate, Hybrid
   - Legacy alternatives such as Physical / Virtual are not canonical v1 codes

5. Course
   - Added DefaultSessionCount to the Course data definition.

6. Payment
   - Payment status is separated from Enrollment Status and deferred to the future Payment module.

## Implementation consequence

The canonical values in this manifest must be used when implementing Domain enums and validation.
