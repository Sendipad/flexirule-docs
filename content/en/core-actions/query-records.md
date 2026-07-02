---
title: Query Records
description: Search for data across your entire system.
weight: 50
---

# Query Records

The **Query Records** block allows your rule to look up information from other parts of the system. Use this when you need data that isn't on the document that triggered the rule.

## Common Uses
- **Find a Manager**: Look up the Manager's email for a specific department.
- **Check History**: See if a customer has any other open orders.
- **Bulk Action**: Find all overdue tasks to send a summary report.

## How it Works

### 1. What to Search For
Pick the **DocType** (the type of record) you want to find (e.g., `Customer`, `User`, or `Project`).

### 2. Filters
Define your search criteria. This works just like the filters in a Frappe Report or List View.
- **Field**: The field to check (e.g., `status`).
- **Condition**: The comparison (e.g., `equals`).
- **Value**: What to look for. This can be a fixed value or dynamic (e.g., `doc.department`).

### 3. Save the Results
You must give the result a name (a **Variable**) so you can use it in later steps.
- **Query One**: Finds only the first matching record. Useful for looking up a single setting or person.
- **Query Many**: Finds every record that matches your filters. This is usually followed by a **Repeat** block to process each result.

---

## Pro Tips
- **Performance**: Always use filters. Searching for "all Sales Invoices" without a filter will slow down your rule if you have thousands of records.
- **No Results**: If no records are found, the result variable will be empty. You can use a **Check** block after a query to see if anything was found before proceeding.
- **Limit and Sort**: You can limit the number of results (e.g., "Find the top 5 most recent orders") and sort them by date or value.
