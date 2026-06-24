---
title: Query Records
description: Retrieve data from the system using filters and aggregations.
weight: 10
aliases:
  - /docs/actions/query-records/
---

# Query Records

Use the **Query Records** block to find information from elsewhere in your system. It's the best way to get data you need to make decisions or update other records.

## Common Uses
- **Find Details**: Get a customer's address or a product's price.
- **Check Records**: See if a similar record already exists before creating a new one.
- **Calculate Totals**: Add up all unpaid invoices for a specific client.

## Ways to Search

| Search Type | What it finds | Best For |
| :--- | :--- | :--- |
| **Find List** | A group of records | Getting many items to process one by one. |
| **Find One** | A single record | Getting specific details from one item. |
| **Check Existence** | A "Yes" or "No" | Simple checks (e.g., "Does this customer exist?"). |
| **Totals & Math** | A single number | Counting items or adding up values (Sum, Average). |

## How to Set Up

### 1. Choose What to Find
Pick the type of record you are looking for (e.g., "Sales Invoice").

### 2. Set Your Filters
Filters tell FlexiRule exactly which records to look for.
- **Simple**: Find records where `Status` is "Draft".
- **Smart**: Find records that match your current document (e.g., "Find invoices for *this* customer").
- **Time-Based**: Find records from "Last 7 Days" using the built-in date builder.

### 3. Test and Refresh
Click **Refresh Schema**. This runs a quick test to make sure your search works and lets FlexiRule know which fields will be available for you to use in the next steps.

## Pro Tips
- **Be Specific**: Use filters to narrow down your search. Searching everything can slow down your rule.
- **Pick the Right Type**: If you only need one specific record, use **Find One**. If you need to process a whole list, use **Find List**.
