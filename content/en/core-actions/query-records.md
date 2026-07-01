---
title: Query Records
description: Fetching data from the system for use in your rules.
weight: 10
aliases:
  - /docs/action-types/query-records/query-doc/
  - /docs/action-types/query-records/query-list/
---

# Query Records

The **Query Records** block allows you to find and retrieve data from any DocType in the system. You can fetch a single specific record or a list of multiple records based on your criteria.

## Why use it?
Use this block whenever your rule needs information that isn't directly available in the current document. For example, if you are processing a **Sales Order** but need to check the **Customer's** credit limit or find all **Previous Orders** for that customer.

## Modes

### 1. Fetch a Single Record (Doc)
Use this when you need specific details from one unique record.
- **Example**: Get the details of the `Customer` linked to the current `Sales Order`.
- **Result**: A single object. You can access its fields directly using your return variable (e.g., `vars.customer_info.credit_limit`).

### 2. Fetch Multiple Records (List)
Use this when you need to find all records that match your filters.
- **Example**: Find all `Overdue Tasks` for the current `Project`.
- **Result**: A list of objects. You typically use a **Repeat** (Loop) block to process these records one by one.

## Configuration

1.  **DocType**: Choose the type of record you want to find (e.g., `Customer`, `Item`, `Task`).
2.  **Filters**: Define the criteria to find the right records.
    - You can use values from the current document: `name` Equals `{{ doc.customer }}`.
3.  **Fields**: (Optional) Specify only the fields you need (e.g., `credit_limit, customer_name`) to make the rule run faster.
4.  **Return Variable**: Give the result a name (e.g., `customer_data`). This is how you will refer to the fetched information in later blocks.

## Pro Tips
- **Performance**: Only fetch the fields you actually need. Fetching "all fields" for a large list of records can slow down your rule.
- **Data Availability**: Once fetched, the data is stored in `vars`. Remember to use the `vars.` prefix when referencing it in other blocks.
