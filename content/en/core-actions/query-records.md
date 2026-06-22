---
title: Query Records
description: Retrieve data from the system using filters and aggregations.
weight: 10
aliases:
  - /docs/actions/query-records/
---

# Query Records

The **Query Records** action allows your rule flows to fetch information from the database. It is the primary way to make decisions based on data that isn't already present in your current document.

## When to Use
- **Data Enrichment**: Fetching related fields (e.g., getting a Customer's "Territory").
- **Validation**: Checking for duplicates or conflicting records.
- **Aggregations**: Calculating totals across multiple documents (e.g., "Sum of all unpaid invoices").

## Query Modes

| Mode | Returns | Best For |
| :--- | :--- | :--- |
| **Query List** | List of Records | Finding multiple records to loop over. |
| **Query Doc** | Single Record | Fetching detailed info from a specific record. |
| **Exist Record** | Yes/No | Simple validation and existence checks. |
| **Aggregations** | Number | Totals, counts, and averages (Sum, Min, Max). |
| **Group By** | List of Totals | Summary data grouped by a category (e.g., Sales by Territory). |

## Advanced Querying

### Aggregations
Use this mode when you only need a single number.
- **Count**: How many records match the filter.
- **Sum**: The total of a specific numeric field.
- **Average/Min/Max**: Standard statistical calculations.

### Group By
Use this to summarize data into "buckets".
- **Example**: Get the total sales amount for each individual salesperson in the last month.

## How to Configure

### 1. Select the DocType
Choose the type of record you want to find (e.g., "Sales Invoice").

### 2. Define Filters
Filters tell FlexiRule exactly which records to find.
- **Static Filters**: `status = "Draft"`
- **Dynamic Filters**: `customer = doc.customer` (matches the customer from the current document).
- **Date Formulas**: Use the formula builder for rolling windows like "Last 7 Days".

### 3. Refresh Schema (Important)
After setting your query, click the **Refresh Schema** button. This performs a live test and makes the resulting fields available to use in later steps of your rule.

## Common Tips
- **Always Filter**: Avoid searching the entire database without filters to keep your rules fast.
- **Check the Result**: Remember that **Query List** always returns a list of items, even if it only finds one. Use **Query Doc** if you only need one specific record.
