---
title: Query Records
description: Retrieve data from the system using filters and aggregations.
weight: 10
aliases:
  - /docs/actions/query-records/
---

# Query Records

The **Query Records** action allows your rules to fetch information from the database. It is the primary way to make decisions based on data that isn't already present in your current document.

## When to Use
- **Data Enrichment**: Fetching related information (e.g., getting a Customer's "Region").
- **Validation**: Checking for duplicates or conflicting records.
- **Calculations**: Finding totals across multiple documents (e.g., "Sum of all unpaid invoices").

## Query Modes

| Mode | Returns | Best For |
| :--- | :--- | :--- |
| **Query List** | List of Records | Finding multiple records to [Repeat]({{< relref "repeat" >}}) over. |
| **Query Doc** | Single Record | Fetching detailed info from a specific record. |
| **Exist Record** | Yes/No | Simple validation and existence checks. |
| **Aggregations** | Number | Totals, counts, and averages (Sum, Min, Max). |
| **Group By** | List of Totals | Summary data grouped by a category (e.g., Sales by Region). |

## How to Configure

### 1. Select the Type of Record
Choose the DocType you want to find (e.g., "Sales Invoice").

### 2. Define Filters
Filters tell FlexiRule exactly which records to find.
- **Simple Filters**: Find records where `status` is "Draft".
- **Matching Filters**: Match fields from the current document, like `customer` is `doc.customer`.
- **Date Filters**: Use the guided UI to set time windows like "Last 30 Days".

### 3. Use the Results
After setting your query, click **Refresh Schema**. This makes the resulting fields available to use in later steps of your rule (e.g., in a [Check]({{< relref "check" >}}) or [Set Value]({{< relref "set-value" >}}) block).

## Common Tips
- **Be Specific**: Always use filters to keep your rules fast and accurate.
- **List vs. Single**: If you only need one record, use **Query Doc**. If you might find many, use **Query List**.
