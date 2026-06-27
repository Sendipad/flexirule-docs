---
title: Find Many Records (Query List)
weight: 20
description: Retrieve a list of records matching your criteria.
---

# Find Many Records

The **Find Many Records** block (internally called Query List) allows you to search for and retrieve multiple records at once.

## When to use it
- To find all **Active Employees** in a specific department.
- To get a list of all **Overdue Invoices** for a customer.
- To find all **Available Stock** for an item across multiple warehouses.

## Configuration

### 1. Select the Type of Record
Choose the **DocType** you want to search (e.g., "Sales Invoice", "Task", "Stock Ledger Entry").

### 2. Set Your Filters
Define the rules for which records should be included.
- Example: `Status` is `Open` AND `Customer` is `{{ doc.customer }}`.

### 3. Sorting and Limits
- **Sort By**: Decide the order (e.g., "Date Created" from newest to oldest).
- **Limit**: How many records should we fetch? (e.g., "Top 5" or "All").

### 4. Storage (Alias)
Just like the "Find One" block, give this list a name (e.g., `overdue_invoices`). You can then use this list in a **Repeat** (Loop) block to perform actions on each record.

## Advanced: Dynamic Filters
You can use powerful "Timespan" keywords in your filters, such as:
- `Last Month`
- `Next Week`
- `Today`
