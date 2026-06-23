---
title: Query Records
description: Retrieve data from the system using filters and aggregations.
weight: 10
category: data-operations
entity_kind: action_operation
mutation: false
targets: ["Frappe DocType"]
aliases:
  - /docs/actions/query-records/
---

# Query Records

The **Query Records** action allows your rule flows to fetch information from the database. It is the primary way to make decisions based on data that isn't already present in your current document.

## When to Use
- **Data Enrichment**: Fetching related fields (e.g., getting a Customer's "Territory").
- **Validation**: Checking for duplicates or conflicting records (e.g., "Does a draft invoice already exist for this customer?").
- **Aggregations**: Calculating totals across multiple documents (e.g., "Sum of all unpaid invoices for this year").

## Query Modes

| Mode | Returns | Best For |
| :--- | :--- | :--- |
| **Query List** | List of Records | Finding multiple records to loop over. |
| **Query Doc** | Single Record | Fetching detailed info from a specific record. |
| **Exist Record** | Yes/No | Simple validation and existence checks. |
| **Aggregations** | Number | Totals, counts, and averages (Sum, Min, Max). |
| **Group By** | List of Totals | Summary data grouped by category (e.g., Sales by Territory). |

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
- **Performance**: Always use filters. Searching the entire database without filters can slow down your rules.
- **Single vs. List**: Remember that **Query List** always returns a "list" of items. Use **Query Doc** if you only need one specific record to make it easier to access its fields.

---
**Advanced**: For technical details on how filters are normalized or how the SQL is generated, see the [Query Records Architecture]({{< relref "advanced-reference/architecture/actions/query-records.md" >}}).
