---
title: Query Records
description: Find and retrieve information from your database.
weight: 10
---

# Query Records

The **Query Records** action allows you to find information from any part of your system. You can use it to check for existing records, fetch details from a related document, or calculate totals.

## When to Use It
- **Check for Duplicates**: See if a record with the same name already exists.
- **Get Related Data**: Find a customer's total balance or a project's end date.
- **Calculate Totals**: Add up the value of all unpaid invoices for a specific client.
- **Find a List**: Get a list of all overdue tasks to send reminders.

## How to Find Data
You can search for records using **Filters**. For example, you can search for all "Sales Invoices" where the "Status" is "Overdue" and the "Customer" is the one you are currently looking at.

### Common Filters
- **Exact Match**: `Status` is `Open`.
- **Comparison**: `Total Amount` is `greater than` `5000`.
- **Date Range**: `Posting Date` is within the `Last 30 Days`.

## Result Types
Depending on what you need, you can choose how the information is returned:

1. **Single Record**: Get all the details of one specific document (e.g., a specific Customer's profile).
2. **List of Records**: Get a list of multiple documents (e.g., all Items in an Order). Use this when you want to use a **Repeat** block later.
3. **Calculations (Sum, Count, Average)**: Get a single number, like the total number of orders or the sum of all payments.
4. **Check if Exists**: Simply find out if a matching record exists (Yes/No).

## Best Practices
- **Be Specific**: Use as many filters as possible to find exactly what you need. This keeps your rule fast.
- **Use "Check if Exists" for speed**: if you only need to know if something exists (and don't need its details), this is the fastest way.
- **Update your available fields**: After setting up your query, click the **Refresh** button in the sidebar so that other blocks in your rule can "see" the data you just found.
