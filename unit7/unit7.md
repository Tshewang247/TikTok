# Unit VII: Transactions, Concurrency Control and Recovery Systems

This unit explains how databases handle multiple users at the same time, ensure data correctness, and recover from failures.

# 7.1 Simple Transaction Models

A *transaction* is a group of SQL operations executed as a single unit.

### Example:
Bank transfer:
- Deduct money from Account A
- Add money to Account B

If one step fails → whole transaction fails.

### Transaction States:
- Active
- Partially Committed
- Committed
- Failed
- Aborted




# 7.2 Transaction Atomicity, Isolation and Durability

These are part of *ACID properties*.

## Atomicity
Either all operations happen or none.

## Consistency
Database remains valid before and after transaction.

## Isolation
Multiple transactions do not interfere with each other.

## Durability
Once committed, data is permanently saved.

### Example:
Power failure after payment → data still safe.


# 7.3 Transaction Isolation Levels

Isolation levels control visibility of data between transactions.

## Types:

### 1. Read Uncommitted
- Dirty reads allowed (lowest level)

### 2. Read Committed
- Only committed data is visible

### 3. Repeatable Read
- Prevents repeated read changes

### 4. Serializable
- Highest isolation level
- Fully safe but slow


# 7.4 Serializability

Serializability ensures that concurrent transactions produce the same result as sequential execution.

## Types:

### Conflict Serializability
Based on order of operations.

### View Serializability
Based on final database state.

### Goal:
Ensure correctness in multi-user systems.



# 7.5 Lock-based Protocols

Locks are used to control access to data.

## Types of Locks:

### Shared Lock (S Lock)
- Used for reading data

### Exclusive Lock (X Lock)
- Used for writing data

## Two-Phase Locking (2PL)
- Growing phase → acquire locks
- Shrinking phase → release locks

# 7.6 Deadlock Handling

A deadlock occurs when two transactions wait forever for each other.

### Example:
- T1 waits for T2
- T2 waits for T1

## Handling Methods:

### 1. Deadlock Prevention
Avoid deadlocks before they happen.

### 2. Deadlock Detection
Find and resolve deadlocks.

### 3. Deadlock Recovery
Abort one transaction.



# 7.7 Concurrency Control Mechanisms

Used to manage multiple transactions at the same time.

## Techniques:

- Lock-based protocol
- Timestamp ordering
- Optimistic control

### Goal:
Ensure consistency and isolation.



# 7.8 Recovery Algorithms

Recovery ensures database is restored after failure.

## Types:

### 1. Log-Based Recovery
Uses logs to restore data.

### 2. Shadow Paging
Keeps backup pages.

### 3. Checkpointing
Saves database state at intervals.

### Example:
System crash → DB restored using logs.



# 7.10 Remote Backup Systems

Used to protect data from disasters.

## Types:

### 1. Remote Backup Site
A copy of database stored in another location.

### 2. Hot Backup
Always active backup system.

### 3. Cold Backup
Backup activated only after failure.

### 4. Warm Backup
Partially active system.