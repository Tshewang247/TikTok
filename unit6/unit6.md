# Unit VI: Indexing and Query Processing

This unit explains how databases store data efficiently using indexes and how queries are processed and optimized for better performance.


# 6.1 Basic Concepts of Indexing

Indexing is a technique used to *speed up data retrieval* in a database.

### Why indexing is needed?
Without indexing, the database must scan every row (called full table scan), which is slow.

### Example:
Searching a student by ID:

Without index → slow  
With index → fast

### Types of Index:
- Primary Index
- Secondary Index
- Clustered Index
- Non-clustered Index



# 6.2 Indexing Structures

Index structures help organize data for fast access.

## Common structures:

### 1. B-Tree Index
- Balanced tree structure
- Used in most DBMS systems

### 2. B+ Tree Index
- Improved version of B-tree
- All data stored at leaf nodes

### 3. Hash Index
- Uses hash function
- Very fast for exact match queries



# 6.3 Ordered and Unordered Indices

## Ordered Index
- Data stored in sorted order
- Faster for range queries

Example:
Age BETWEEN 20 AND 25

## Unordered Index
- Data stored randomly
- Uses hashing

### Difference:

| Ordered Index | Unordered Index |
|--------------|----------------|
| Sorted data | Random data |
| Good for range search | Good for exact match |


# 6.4 Indexing of Temporal and Spatial Data

## Temporal Data Indexing
Data that changes over time.

Example:
- Student marks per semester
- Salary history

## Spatial Data Indexing
Used for location-based data.

Example:
- Maps
- GPS systems

### Structures used:
- R-tree
- Quad-tree



# 6.5 Indexing for Search

Used in search engines and large systems.

### Techniques:
- Full-text indexing
- Inverted index
- Keyword indexing

### Example:
Google search uses inverted indexing.


# 6.6 Query Processing and Optimization

Query processing is how DBMS executes SQL queries efficiently.
![alt text](image.png)

DBMS chooses the fastest way to execute it.


# 6.6.1 Measures of Query Cost

Query cost depends on:

- Disk I/O operations
- CPU usage
- Memory usage



# 6.6.2 Evaluation of Expression

SQL queries are converted into query execution plans.

### Steps:
1. Parse query
2. Convert to relational algebra
3. Optimize query
4. Execute query

### Example:
![alt text](image-1.png)

# 6.6.3 Choice of Evaluation Plans

DBMS selects the best way to execute a query.

### Example plans:
- Full table scan
- Using index
- Using join algorithms

### Goal:
Choose the fastest and cheapest execution plan.