---
title: Query Records
description: Find and retrieve data from other parts of the system.
weight: 10
aliases:
  - /docs/actions/query-records/
---

# Query Records

The **Query Records** block lets you "look up" information that isn't already in the record that started the rule.

## When to use it
- **Find Details**: Get a customer's address from their record when you're processing an order.
- **Check for Others**: Look for other unpaid invoices for the same customer.
- **Get Totals**: Calculate the total amount of all orders placed today.

## Ways to Find Information

| Way to Find | What it gives you | Best for... |
| :--- | :--- | :--- |
| **Find Single** | One specific record | Getting details from one item (e.g., a specific Customer). |
| **Find Many** | A list of records | Finding multiple things to work with (e.g., all "Draft" invoices). |
| **Check if Exists** | A Yes or No | Simple checks (e.g., "Is there already a record with this ID?"). |
| **Calculate Total** | A single number | Getting a Count, Sum, or Average. |

## How to Set it Up

### 1. Choose the Record Type
Pick what you are looking for (e.g., "Sales Invoice" or "Supplier").

### 2. Set the Filters
Filters tell FlexiRule exactly which records you want.
- **Fixed Filter**: `Status` is "Draft".
- **Matching Filter**: `Customer` matches the `Customer` on the current order.
- **Time Filter**: Find records from the "Last 7 Days".

### 3. Refresh Data (Important)
Once you've set your filters, click **Refresh Schema**. This tests your lookup and makes all the information it finds available for you to use in the next blocks of your map.

## Simple Tips
- **Be Specific**: Always use filters so the system doesn't have to look through every single record, which keeps things fast.
- **One vs. Many**: If you only need one specific record (like a Customer), use **Find Single** (Query Doc). If you need a list to work through, use **Find Many** (Query List).
