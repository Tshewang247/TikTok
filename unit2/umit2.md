# Unit II: Database Design

Database design is the process of planning how data will be stored, organized, and related inside a database. A well-designed database reduces duplication, improves performance, and makes the system easier to maintain.


# 2.1 Overview of the Design Process

Database design follows several steps to ensure the database meets user requirements.

## Steps in Database Design

### 1. Requirement Analysis
- Gather information from users.
- Identify what data needs to be stored.
- Understand business rules.

### 2. Conceptual Design
- Create an Entity-Relationship (ER) Diagram.
- Identify entities, attributes, and relationships.




### 3. Logical Design
- Convert the ER Diagram into relational tables.
- Define primary and foreign keys.

---

### 4. Physical Design
- Decide how data will be stored in the database.
- Create indexes and optimize storage.

---

# 2.2 Relational Modeling

Relational modeling represents data using tables (relations).

Each table contains:

- Rows (Tuples)
- Columns (Attributes)

Example:

| StudentID | Name | Department |
|-----------|------|------------|
| 101 | Tshewang | CSE |
| 102 | Sonam | IT |

Advantages:
- Easy to understand
- Reduces redundancy
- Supports SQL



# 2.3 The Entity-Relationship Model

The Entity-Relationship (ER) Model is used to visually represent the structure of a database before implementation.

## Main Components

### Entity
A real-world object.

Examples:
- Student
- Teacher
- Book

### Attribute
Describes an entity.

Example:

Student
- StudentID
- Name
- Age

### Relationship

Shows how entities are connected.

Example:

Student → Enrolls → Course

![alt text](image.png)
# 2.4 Complex Attributes

Attributes can have different types.

### Simple Attribute

Cannot be divided.

Example:
- Gender

### Composite Attribute

Can be divided into smaller parts.

Example:

Name
- First Name
- Middle Name
- Last Name

### Single-Valued Attribute

Stores only one value.

Example:
Date of Birth

### Multi-Valued Attribute

Stores multiple values.

Example:
Phone Numbers

### Derived Attribute

Calculated from another attribute.

Example:
Age (calculated from Date of Birth)


# 2.5 Mapping Cardinalities

Cardinality defines how many entities are related.

## One-to-One (1:1)

One student has one library card.

## One-to-Many (1:N)

One teacher teaches many students.

## Many-to-One (N:1)

Many students belong to one department.

## Many-to-Many (M:N)

Students enroll in many courses.

Courses have many students.



# 2.6 Primary Key

A Primary Key uniquely identifies each record in a table.

Characteristics:
- Unique
- Cannot be NULL
- One primary key per table

Example:

| StudentID | Name |
|-----------|------|
| 101 |Tshewang |

StudentID is the Primary Key.



# 2.7 Removing Redundant Attributes in Entity Sets

Redundant attributes store duplicate information.

Example:

StudentID | StudentName | DepartmentName | DepartmentHead

If DepartmentHead appears repeatedly, redundancy occurs.

Solution:
Store department information in a separate table.

Benefits:
- Saves storage
- Easier updates
- Improves consistency


# 2.8 Reducing E-R Diagrams to Relational Schemas

After creating an ER Diagram, convert it into tables.

Example

![alt text](image-1.png)



# 2.9 Extended E-R Features

Extended ER (EER) adds advanced concepts.



## Generalization

Combines multiple entities into one.

Example:

Car
Bike

↓

Vehicle



## Aggregation

Represents relationships as higher-level entities.

Useful for complex databases.


# 2.10 Entity-Relationship Design Issues

Common mistakes while designing databases.

### Redundant Data

Avoid storing duplicate information.

### Weak Entity

Depends on another entity.

Example:
Dependent of Employee.

### Choosing Correct Relationships

Ensure entities are connected properly.

### Selecting Primary Keys

Choose attributes that uniquely identify records.



# 2.11 Alternative Notations for Modeling Data

Different organizations use different diagram styles.

Examples:

- Chen Notation
- Crow's Foot Notation
- UML Class Diagram

All represent database structures differently but serve the same purpose.



# 2.12 Other Aspects of Database Design

Good database design should:

- Reduce redundancy
- Maintain data integrity
- Improve performance
- Be easy to maintain
- Support future expansion
- Ensure security

A well-designed database makes applications faster and easier to manage.



# 2.13 Atomicity, Consistency, Isolation and Durability (ACID)

ACID properties ensure reliable database transactions.

## Atomicity

A transaction is completed fully or not at all.

Example:

Money transfer

₹500 deducted

↓

₹500 added

If one step fails, everything is rolled back.


## Consistency

The database remains valid before and after a transaction.

Example:

Account balance should never become negative due to an incomplete transaction.


## Isolation

Multiple users can perform transactions without affecting each other.

Example:

Two customers withdrawing money simultaneously.


## Durability

Once a transaction is committed, it remains saved permanently, even if the system crashes.

Example:

After clicking "Pay", the payment remains successful even if electricity goes off.