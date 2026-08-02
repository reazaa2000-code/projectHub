# Data Dictionary — Course

| Column | SQL Type | Null | Key | Description |
|----------|------------|------|------|-------------|
| CourseId | bigint | No | PK | Internal identifier |
| CourseCode | nvarchar(30) | No | UQ | Business code |
| Title | nvarchar(200) | No | | Course title |
| Description | nvarchar(max) | Yes | | Description |
| CategoryId | bigint | No | FK | Category |
| Level | tinyint | No | | Course level |
| DurationHours | int | No | | Educational duration |
| IsActive | bit | No | | Active flag |
| CreatedAt | datetime2 | No | | Audit |
| UpdatedAt | datetime2 | Yes | | Audit |
| CreatedBy | bigint | Yes | FK | User |
| UpdatedBy | bigint | Yes | FK | User |