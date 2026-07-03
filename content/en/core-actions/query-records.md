---
title: Query Records
description: Retrieve data from your system to use in your automation.
weight: 10
---

# Query Records (Data Retrieval)

The **Query Records** block is how your rule looks up information that isn't on the document that triggered the rule. For example, if a Sales Order is saved, you might use this block to look up the customer's total unpaid invoices or find the manager of a specific department.

## Common Uses

-   **Validation**: Check if another record with the same name already exists.
-   **Enrichment**: Look up a customer's credit limit to use in a calculation.
-   **Aggregation**: Count how many "Open" tasks a project has.
-   **Lists**: Find all overdue invoices so you can loop through them.

## How to Configure

### 1. Select the DocType
Choose the type of record you want to look for (e.g., "Customer", "Issue", "Sales Invoice").

### 2. Set Up Filters
Tell FlexiRule which specific records to find.
-   **Fixed Filters**: Find records where `Status` is "Open".
-   **Dynamic Filters**: Find records where `Customer` matches the customer on your current document (`{{ doc.customer }}`).

### 3. Choose the Mode
-   **Find One**: Returns the first record that matches your filters.
-   **Find All**: Returns a list of all matching records (great for using with a **Repeat** block).
-   **Aggregations**: Instead of getting records, get a single number like the **Sum** of a field, the **Average**, or simply a **Count** of how many records exist.
-   **Check if Exists**: A simple "Yes/No" check to see if any record matches your filters.

## Using the Results

After you configure a Query Records block, click **Refresh Schema**. This tells the rule builder which fields were found so you can easily select them in the next blocks (like in a "Set Value" or "Check" block).

## Performance Tips

-   **Be Specific**: Use as many filters as possible. Finding 1 record out of 1,000 is much faster than finding 500.
-   **Use "Exists"**: If you only need to know *if* a record is there (and don't need its data), the "Check if Exists" mode is the fastest option.
