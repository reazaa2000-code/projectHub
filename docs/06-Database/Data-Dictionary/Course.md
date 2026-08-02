# Data Dictionary — Course

| Column        | SQL Type      | Null | Key | Source     | Description          |
| ------------- | ------------- | ---- | --- | ---------- | -------------------- |
| Id            | bigint        | No   | PK  | BaseEntity | Internal identifier  |
| CourseCode    | nvarchar(30)  | No   | UQ  | Course     | Business code        |
| Title         | nvarchar(200) | No   |     | Course     | Course title         |
| Description   | nvarchar(max) | Yes  |     | Course     | Description          |
| CategoryId    | bigint        | No   | FK  | Course     | Category             |
| Level         | tinyint       | No   |     | Course     | Course level         |
| DurationHours | int           | No   |     | Course     | Educational duration |
| IsActive      | bit           | No   |     | Course     | Active flag          |
| CreatedAt     | datetime2     | No   |     | BaseEntity | Audit                |
| UpdatedAt     | datetime2     | Yes  |     | BaseEntity | Audit                |
| CreatedBy     | bigint        | Yes  | FK  | BaseEntity | Audit                |
| UpdatedBy     | bigint        | Yes  | FK  | BaseEntity | Audit                |
