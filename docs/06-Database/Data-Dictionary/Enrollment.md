# Data Dictionary — Enrollment

| Column | SQL Type | Null | Key | Description |
|----------|-----------|------|------|-------------|
| Id | bigint | No | PK | Internal identifier |
| StudentId | bigint | No | FK | Student |
| ClassId | bigint | No | FK | Class |
| EnrollmentDate | datetime2 | No | | Registration date |
| Status | tinyint | No | | Enrollment status |
| CreatedAt | datetime2 | No | | Audit |
| UpdatedAt | datetime2 | Yes | | Audit |
| CreatedBy | bigint | Yes | FK | Audit |
| UpdatedBy | bigint | Yes | FK | Audit |