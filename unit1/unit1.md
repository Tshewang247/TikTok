# Unit I: Introduction to Database Systems

## 1.1 View of Data

A database stores information in an organized way so that users can easily access and manage it. Different users see the data differently depending on their needs. 

### Levels of Data Abstraction

### 1. Physical Level
- The lowest level of abstraction.
- Describes how data is actually stored in the computer.
- Used by database administrators and system developers.

*Example:*
Data is stored on a hard disk using files and indexes.

### 2. Logical Level
- Describes what data is stored and the relationship between the data.
- Users do not need to know how the data is physically stored.

*Example:*
A student table contains:
- Student ID
- Name
- Department
- Semester

### 3. View Level
- The highest level of abstraction.
- Each user only sees the information they are allowed to access.

*Example:*
A teacher can see students' marks, while a librarian can only see book records.

### Advantages
- Hides complex details.
- Improves security.
- Makes the database easier to use.



# 1.2 Purpose of Database Systems

A Database Management System (DBMS) is used to store, organize, and manage data efficiently.

### Why do we need a DBMS?

Before databases, data was stored in files, which caused many problems such as duplication and inconsistency.

### Main Purposes

### 1. Reduce Data Redundancy
Avoids storing the same information multiple times.

### 2. Improve Data Consistency
Ensures that all users see the same updated information.

### 3. Data Sharing
Multiple users can access the same database at the same time.

### 4. Data Security
Only authorized users can access sensitive information.

### 5. Backup and Recovery
Protects data from accidental loss.

### 6. Data Integrity
Keeps the data accurate and valid.

### 7. Easy Data Access
Users can quickly search, update, and delete records.



# 1.3 History of Database Systems

Database technology has changed a lot over time.

### 1. File Processing System (1950s–1960s)
- Data stored in separate files.
- Difficult to maintain.
- High data duplication.

### 2. Hierarchical Database (1960s)
- Data arranged like a tree.
- One parent can have many children.

### 3. Network Database (1970s)
- More flexible than hierarchical databases.
- A child can have multiple parents.

### 4. Relational Database (1970s–Present)
- Data stored in tables.
- Uses rows and columns.
- Easy to manage using SQL.

### 5. Object-Oriented Database
- Stores objects instead of only tables.
- Used in software development.

### 6. NoSQL Database
- Designed for handling large amounts of unstructured data.
- Used by modern web applications like social media.



# 1.4 Database-System Applications

Databases are used almost everywhere.

### Banking
- Customer accounts
- Transactions
- ATM services

### Education
- Student records
- Attendance
- Results

### Hospitals
- Patient information
- Doctor schedules
- Medical history

### E-commerce
- Product details
- Orders
- Payments

### Airlines
- Ticket booking
- Flight schedules

### Social Media
- User profiles
- Messages
- Photos

### Government
- Citizen records
- Tax systems
- Passport information



# 1.5 Database Languages

Database languages help users communicate with the database.

## 1. DDL (Data Definition Language)

Used to create and modify database structures.

Common commands:
- CREATE
- ALTER
- DROP
- TRUNCATE

Example:


CREATE TABLE Student(
    StudentID INT,
    Name VARCHAR(50)
);




## 2. DML (Data Manipulation Language)

Used to insert, update, delete, and retrieve data.

Commands:
- INSERT
- UPDATE
- DELETE

Example:


INSERT INTO Student VALUES(1,'Pelden');




## 3. DQL (Data Query Language)

Used to retrieve information.

Command:


SELECT * FROM Student;




## 4. DCL (Data Control Language)

Used to control user permissions.

Commands:
- GRANT
- REVOKE



## 5. TCL (Transaction Control Language)

Used to manage transactions.

Commands:
- COMMIT
- ROLLBACK
- SAVEPOINT



# 1.6 Database Design

Database design is the process of planning how data will be stored.

### Steps

### 1. Requirement Analysis
Understand what information the users need.

### 2. Conceptual Design
Create an ER Diagram showing entities and relationships.

### 3. Logical Design
Convert the ER diagram into tables.

### 4. Physical Design
Decide how the database will be stored on disk.

### Good Database Design
- Reduces duplication
- Improves performance
- Makes maintenance easier



# 1.7 Database Engine

A database engine is the software component that performs database operations.

### Responsibilities

- Stores data
- Retrieves data
- Updates records
- Deletes records
- Manages transactions
- Controls multiple users

### Example

When you run:


SELECT * FROM Student;


The database engine searches the table and returns the requested data.


# 1.8 Database and Application Architecture

Database architecture explains how users, applications, and databases communicate.

## One-Tier Architecture

- User works directly with the database.
- Mostly used for testing.

Example:
A developer using MySQL on their own computer.



## Two-Tier Architecture

Client ↔️ Database

- The client sends requests directly to the database.
- Common in small applications.



## Three-Tier Architecture

Client → Application Server → Database

- Most common architecture.
- More secure.
- Easier to maintain.
- Better performance.

Example:
Online shopping websites.


# 1.9 Database Users and Administrators

Different people use a database for different purposes.

## Database Administrator (DBA)

Responsible for managing the entire database.

Responsibilities:
- Install DBMS
- Manage users
- Backup and recovery
- Security
- Performance tuning


## Database Designers

- Design tables
- Create relationships
- Plan database structure



## Application Programmers

Develop software that interacts with the database.

Example:
A student management application.



## End Users

People who use the application.

Examples:
- Students
- Teachers
- Bank customers
- Hospital staff