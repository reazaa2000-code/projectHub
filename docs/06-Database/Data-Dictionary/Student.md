# Data Dictionary — Student

| Column | SQL Type | Null | Key | Source | Description |
|----------|----------|------|------|--------|-------------|
| Id | bigint | No | PK | BaseEntity | Internal identifier |
| StudentCode | nvarchar(30) | No | UQ | Student | Internal student code |
| FirstName | nvarchar(100) | No | | Student | First name |
| LastName | nvarchar(100) | No | | Student | Last name |
| NationalCode | nvarchar(20) | No | UQ | Student | National identifier |
| BirthDate | date | Yes | | Student | Birth date |
| Gender | tinyint | No | | Student | Gender |
| Mobile | nvarchar(20) | No | | Student | Mobile number |
| Phone | nvarchar(20) | Yes | | Student | Phone |
| Email | nvarchar(200) | Yes | | Student | Email |
| Address | nvarchar(500) | Yes | | Student | Address |
| Status | tinyint | No | | Student | Activity status |
| UserId | bigint | Yes | FK | Student | Login account |
| CreatedAt | datetime2 | No | | BaseEntity | Audit |
| UpdatedAt | datetime2 | Yes | | BaseEntity | Audit |
| CreatedBy | bigint | Yes | FK | BaseEntity | Audit |
| UpdatedBy | bigint | Yes | FK | BaseEntity | Audit |