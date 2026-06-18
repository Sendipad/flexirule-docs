---
title: Query Records
description: Find and retrieve data from your system.
weight: 40
aliases:
  - /docs/actions/query-records/
---

# Query Records

The **Query Records** action allows you to find and retrieve information from any DocType in your system.

## Query List

Use **Query List** when you need to find multiple records at once, such as "all draft invoices" or "all items in a specific warehouse."

### How to Configure
- **Select Fields**: Choose exactly which information you need (e.g., ID, Status, Total).
- **Filters**: Define the criteria for finding records. You can use the Condition Builder to create complex filters without code.
- **Sorting**: Decide the order in which records are returned (e.g., by Date or Amount).
- **Limits**: Control how many records to fetch. You can get the first record, a custom number, or all matching records.

### Dynamic Date Filters
You can easily find records based on time, like "Invoices created in the last 7 days" or "Tasks due tomorrow," using the built-in date formula builder.

![Date Formula Configuration](/flexirule-docs/images/date-formula-configuration.png)

## Query Doc

Use **Query Doc** when you need to fetch a single, specific record in its entirety. This is useful when you have the ID of a record and need to see all its details, including child tables.

## Best Practices
- **Be Specific**: Use filters to only get the records you actually need.
- **Limit Your Results**: If you only need the most recent record, set the limit to "First Record" to save time and system resources.
- **Use with Loops**: If you fetch a list of records, use a **Loop** action to perform a task for each record found.
