---
title: Query Records
description: Retrieve data from the system using filters and aggregations.
weight: 10
entity_kind: action_operation
category: data-operations
mutation: false
targets: ["Frappe DocType"]
---

# Query Records Action

The **Query Records** action is the data retrieval engine of FlexiRule. It allows you to fetch information from any DocType in the database, enabling logic that depends on records other than the one currently being processed.

## Purpose

Use the Query Records action when you need to:
- **Validate**: Check if a duplicate record exists before allowing a save.
- **Enrich**: Fetch a Customer's credit limit or a Supplier's lead time to use in calculations.
- **Aggregate**: Calculate the total value of all unpaid invoices for a specific customer.
- **Automate**: Find all overdue tasks and loop through them to send reminders.

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Multi-Mode** | ✅ Yes | Query List, Query Doc, Count, Sum, Average, Min, Max, Exist. |
| **Dynamic Filters** | ✅ Yes | Filter data using fields from the current context (`doc`, `vars`). |
| **Date Formulas** | ✅ Yes | Built-in support for "Last 30 Days", "Current Month", etc. |
| **Schema Refresh** | ✅ Yes | Automatically detects and maps resulting fields for use in later nodes. |
| **Cached Lookups** | ✅ Yes | Support for `use_cached_doc` to improve performance. |

## Query Modes

### 1. Query Doc
Retrieves a single record based on filters. Returns an **Object (Dictionary)**.
- **Best For**: Getting the full details of a specific master record (e.g., Sales Person info).

### 2. Query List
Retrieves multiple records. Returns a **List of Objects**.
- **Best For**: Finding all child records or multiple related documents to use in a **Loop**.

### 3. Aggregations (Count, Sum, Avg, etc.)
Performs a calculation on the database side and returns a **Number**.
- **Example**: `Sum` of `base_grand_total` where `customer = doc.customer`.

### 4. Exist Record
A lightweight check that returns **True** if at least one matching record exists, otherwise **False**.

## Configuration

### Filters
Filters are the heart of the query. You can combine multiple criteria using AND/OR logic:
- **Field Comparison**: `status` Equals `Open`.
- **Dynamic Context**: `customer` Equals `{{ doc.customer }}`.
- **Date Range**: `posting_date` is `Within` `Last 30 Days`.

### Field Selection
To optimize performance, you can specify exactly which fields you want to retrieve instead of fetching the whole document.

## Best Practices

- **Limit Your Results**: If you only need one record, use `Query Doc` or set a `Limit` of 1 in `Query List`.
- **Use "Exist" for Speed**: If you only need to know if a record is there (e.g., checking for duplicates), `Exist Record` is much faster than `Query List`.
- **Refresh Schema**: Always click **Refresh Schema** after updating your query. This tells the Rule Builder which fields are available so you can select them from the autocomplete in later steps.

## Common Mistakes

- **Heavy Queries**: Querying a large DocType (like Stock Ledger) without enough filters can slow down your system.
- **Mode Confusion**: Using `Query List` but expecting an Object. Remember that a list requires a **Loop** node to access individual field values.
