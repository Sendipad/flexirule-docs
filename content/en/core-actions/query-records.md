---
title: Query Records
description: Find and retrieve information from other records in your system.
weight: 70
---

# Query Records

The **Query Records** block allows you to look up information from anywhere in your system. Whether you need to find a single specific record (like a Customer's profile) or a list of records (like all overdue Invoices), this block helps you gather the data you need for your rule.

## Purpose

Use Query Records when you need to:
- **Fetch Details**: Get information from a related document (e.g., "Find the Sales Manager for this Customer").
- **Gather a List**: Find all records that match certain criteria (e.g., "Find all open Tasks for this Project").
- **Perform Checks**: See if a record exists before taking an action.

## How to Configure

### 1. What to look for (DocType)
Select the type of record you want to find (e.g., "Invoice", "Item", "Employee").

### 2. How to find it (Filters)
Set up filters to narrow down your search. You can compare fields in the records you are searching against values in your current document.
- *Example*: Find **Invoices** where the `customer` matches `doc.customer`.

### 3. One or Many? (Query Mode)
- **Single Record**: Use this when you only need one result (e.g., a specific configuration setting).
- **List of Records**: Use this when you want to find everything that matches (e.g., all items currently on backorder).

### 4. Where to store the result (Return Variable)
Give a name to the information you found (e.g., `vars.found_invoices`). You can then use this name in later blocks to access the data.

## Working with the Results

- **If you found a Single Record**: You can access its fields directly, like `vars.my_record.status`.
- **If you found a List**: You will typically connect a **Repeat** block next to process each item in that list one by one.

## Example: Overdue Reminder
**Scenario**: You want to find all overdue invoices for a customer and notify them.
1. **Query Records**: Search for "Invoice" where `status` is "Overdue" and `customer` is `doc.customer`.
2. **Store as**: `vars.overdue_list`.
3. **Repeat**: Use the Repeat block to go through `vars.overdue_list`.
4. **Notify**: Inside the repeat cycle, send an email for each invoice found.

## Tips for Success

- **Be Specific**: Use as many filters as possible to make sure you only find exactly what you need. This keeps the rule fast and accurate.
- **Check for Results**: After a query, you can use a **Check** block to see if anything was actually found before trying to use the data.
- **Accessing Fields**: When you look at a found record, make sure you use the correct field names from that DocType.
