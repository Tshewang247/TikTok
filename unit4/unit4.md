# Unit IV: Intermediate and Advanced SQL

This unit covers advanced SQL features used in real-world database systems like combining tables, controlling data, writing procedures, and managing complex queries.


# 4.1 Join Expressions

JOIN is used to combine rows from two or more tables based on a related column.

## Example Tables

### Student
| StudentID | Name | DeptID |
|----------|------|--------|
| 101 | Tshewang| 1 |
| 102 | Sonam | 2 |

### Department
| DeptID | Department |
|--------|------------|
| 1 | CSE |
| 2 | IT |



## INNER JOIN

Returns only matching records from both tables.

![alt text](image.png)



## LEFT JOIN

Returns all records from left table + matching from right.

![alt text](image-1.png)

# 4.2 Views

A VIEW is a virtual table created from a query.

## Create View

![alt text](image-2.png)

## Use View

![alt text](image-3.png)



# 4.3 Transactions

A transaction is a group of SQL operations executed together.

## Commands
- COMMIT → Save changes
- ROLLBACK → Undo changes

## Example
![alt text](image-4.png)

# 4.4 Integrity Constraints

Constraints ensure data accuracy and reliability.

## Types

### PRIMARY KEY
Uniquely identifies each row.

### FOREIGN KEY
Connects two tables.

### NOT NULL
Prevents empty values.

### UNIQUE
No duplicate values allowed.



# 4.5 SQL Data Types and Schemas

## Common Data Types
- INT → Numbers
- VARCHAR → Text
- DATE → Date values
- FLOAT → Decimal numbers

## Schema Example

![alt text](image-5.png)



# 4.6 Index Definition in SQL

An INDEX improves search speed.

## Create Index

![alt text](image-6.png)



# 4.7 Authorization

Used to control user permissions.

## GRANT

![alt text](image-7.png)
## REVOKE
![alt text](image-8.png)




# 4.9 Functions and Stored Procedures

## Function Example

![alt text](image-9.png)
## Stored Procedure

![alt text](image-10.png)

# 4.10 Triggers

A trigger runs automatically when an event happens.

## Example

![alt text](image-11.png)