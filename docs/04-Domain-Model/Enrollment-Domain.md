# Domain Model — Enrollment
**Version:** 1.1.0  
**Aggregate Root:** Enrollment  

## 1. Attributes
| Attribute | Type | Description |
|---|---|---|
| Id | Guid | Unique identifier |
| StudentId | Guid | Reference to Student |
| ClassId | Guid | Reference to Class |
| EnrollmentDate | DateTime | Immutable registration timestamp (UTC) |
| Status | EnrollmentStatus | Current lifecycle state |
| CreatedAt | DateTime | Audit field |
| UpdatedAt | DateTime | Audit field |

## 2. Enrollment Statuses (Single Source of Truth)
| Status | Description | Is Terminal? |
|---|---|---|
| **Pending Payment** | Awaiting payment confirmation | No |
| **Enrolled** | Officially registered and active | No |
| **Cancelled** | Cancelled before class starts | Yes |
| **Withdrawn** | Voluntarily withdrew after enrollment | Yes |
| **Completed** | Successfully passed (Attendance ≥ 70% & Grade ≥ 12) | Yes |
| **Failed** | Did not pass the class | Yes |

## 3. Lifecycle (State Machine)
```text
[Create] → Pending Payment → Enrolled → Completed (Terminal)
                  ↓              ↓
              Cancelled      Withdrawn (Terminal)
              (Terminal)
                  
                  Enrolled → Failed (Terminal)