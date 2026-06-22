# Unit V: Relational Database Design

This unit explains how to design a good relational database using normalization, functional dependencies, and decomposition techniques. The goal is to reduce redundancy and improve data consistency.


# 5.1 Features of Good Relational Designs

A good database design should:

- Avoid data duplication (redundancy)
- Maintain data consistency
- Be easy to update and maintain
- Save storage space
- Improve performance

### Example of bad design:
Student(ID, Name, DeptName, DeptHead)

 DeptHead repeats many times → redundancy problem

### Good design:
Student(ID, Name, DeptID)  
Department(DeptID, DeptName, DeptHead)



# 5.2 Decomposition Using Functional Dependencies

Decomposition means splitting a large table into smaller tables.

## Why decomposition?
- Removes redundancy
- Avoids update anomalies

### Example:

Student(ID, Name, DeptName)

Functional Dependency:
ID → Name, DeptName

After decomposition:

Student(ID, Name, DeptID)  
Department(DeptID, DeptName)



# 5.3 Normal Forms

Normalization improves database structure.

## 1NF (First Normal Form)
- No repeating groups
- Atomic values only

## 2NF (Second Normal Form)
- Must be in 1NF
- No partial dependency

## 3NF (Third Normal Form)
- Must be in 2NF
- No transitive dependency

## BCNF (Boyce-Codd Normal Form)
- Stronger version of 3NF

# 5.4 Functional Dependency Theory

A Functional Dependency (FD) shows relationship between attributes.

### Example:
ID → Name

Meaning:
If we know ID, we can find Name.

### Types:
- Trivial FD
- Non-trivial FD
- Fully functional dependency
- Partial dependency


# 5.5 Algorithms for Decomposition Using Functional Dependencies

Steps for decomposition:

1. Identify functional dependencies
2. Check normal form violations
3. Split tables
4. Ensure lossless join
5. Ensure dependency preservation

### Example:
Student(ID, Name, DeptName)

Decompose into:
Student(ID, Name)
Department(DeptName)



# 5.6 Decomposition Using Multivalued Dependencies

Multivalued dependency occurs when:

One attribute determines multiple independent attributes.

### Example:
Student →→ Hobbies

Meaning:
A student can have multiple hobbies.

Solution:
Split into separate tables.

Student(ID, Name)  
StudentHobby(ID, Hobby)



# 5.7 More Normal Forms

## 4NF (Fourth Normal Form)
- Removes multivalued dependencies

## 5NF (Fifth Normal Form)
- Removes join dependency issues

Used in highly complex databases.



# 5.8 Atomic Domains and First Normal Form

## Atomic Domain:
A value that cannot be divided further.

### Example:

Wrong:
Phone = 12345, 67890

Correct:
Each phone stored separately.

### First Normal Form (1NF):
- All values must be atomic
- No repeating groups


# 5.9 Database Design Process

Steps in database design:

1. Requirement Analysis
2. Conceptual Design (ER Diagram)
3. Logical Design (Tables)
4. Normalization
5. Physical Design

### Goal:
Build a clean, efficient database structure.



# 5.10 Modelling Temporal Data

Temporal data means data that changes over time.

### Example:
Student marks over semesters

| StudentID | Semester | Marks |
|----------|----------|-------|
| 101 | Sem 1 | 80 |
| 101 | Sem 2 | 85 |

### Types:
- Valid time (real-world time)
- Transaction time (database time)