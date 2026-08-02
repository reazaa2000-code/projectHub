# Data Dictionary — Session

| Column | SQL Type | Null | Key | Source | Description |
|----------|-----------|------|------|--------|-------------|
| Id | bigint | No | PK | BaseEntity | Internal identifier |
| ClassId | bigint | No | FK | Session | Parent Class |
| InstructorId | bigint | Yes | FK | Session | Assigned Instructor |
| SessionNumber | int | No | | Session | Order inside Class |
| SessionDate | date | No | | Session | Teaching date |
| StartTime | time | No | | Session | Start time |
| EndTime | time | No | | Session | End time |
| Status | tinyint | No | | Session | Session status |
| Location | nvarchar(200) | Yes | | Session | Classroom or virtual room |
| CreatedAt | datetime2 | No | | BaseEntity | Audit |
| UpdatedAt | datetime2 | Yes | | BaseEntity | Audit |
| CreatedBy | bigint | Yes | FK | BaseEntity | Audit |
| UpdatedBy | bigint | Yes | FK | BaseEntity | Audit |