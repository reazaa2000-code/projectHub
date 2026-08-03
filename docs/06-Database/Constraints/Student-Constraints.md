# Constraints — Student

Primary Key

PK_Student

Id

---

Unique

StudentCode

NationalCode

---

Required

StudentCode

FirstName

LastName

NationalCode

Mobile

Gender

Status

---

Foreign Keys

UserId

→ User

CreatedBy

→ User

UpdatedBy

→ User

---

Delete Rule

Physical Delete is prohibited.

Student records remain for historical purposes.

---

Business Constraints

NationalCode cannot be edited by Education Officer.