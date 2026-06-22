# Unit III: Introduction to SQL

SQL (Structured Query Language) is the standard language used to communicate with relational databases. It allows users to create databases, store data, retrieve information, update records, and manage database security.


# 3.1 Overview of SQL Query Language

SQL stands for Structured Query Language. It is used to interact with databases and perform different operations on data.

### Features of SQL

- Easy to learn and use.
- Works with relational databases.
- Supports data retrieval and manipulation.
- Standard language accepted by most DBMSs.

### Categories of SQL Commands

- **DDL (Data Definition Language): Creates and modifies database objects.
- **DML (Data Manipulation Language): Inserts, updates, and deletes data.
- **DQL (Data Query Language)  Retrieves data using the SELECT statement.
- **DCL (Data Control Language):  Controls user permissions.
- **TCL (Transaction Control Language):  Manages database transactions.



![alt text](image.png)

# 3.2 SQL Data Definition

Data Definition Language (DDL) is used to define the structure of a database.

## CREATE DATABASE

![alt text](image-1.png)

## Use the Database

![alt text](image-2.png)

## CREATE TABLE

![alt text](image-3.png)

## ALTER TABLE

![alt text](image-4.png)

## DROP TABLE

![alt text](image-5.png)



# 3.3 Basic Structure of SQL Queries

SQL queries are mainly written using the SELECT statement.

## Insert Sample Data

![alt text](image-6.png)

## Display All Records
![alt text](image-7.png)

## Display Selected Columns

![alt text](image-8.png)

## Display Specific Student

![alt text](image-9.png)

# 3.4 Additional Basic Operations

SQL provides additional operations for sorting and filtering data.

## ORDER BY

![alt text](image-10.png)


## DISTINCT

![alt text](image-11.png)

## LIKE

![alt text](image-12.png)
## BETWEEN

![alt text](image-13.png)

# 3.5 Set Operations

Set operations combine results from multiple queries.

## UNION

![alt text](image-14.png)

## UNION ALL
![alt text](image-15.png)



# 3.6 Null Values

A *NULL* value represents missing or unknown data.

Example:

![alt text](image-16.png)

Find NULL values

![alt text](image-17.png)

Find NOT NULL values

![alt text](image-18.png)


# 3.7 Aggregate Functions

Aggregate functions perform calculations on multiple rows.

## COUNT()

![alt text](image-19.png)

## SUM()

![alt text](image-20.png)

## AVG()

![alt text](image-21.png)

## MAX()
![alt text](image-22.png)




# 3.8 Nested Subqueries

A subquery is a query inside another query.

Example:

Find students older than the average age.
![alt text](image-23.png)



# 3.9 Modification of the Database

DML commands modify database records.

## INSERT

![alt text](image-24.png)



## View Updated Table

![alt text](image-25.png)