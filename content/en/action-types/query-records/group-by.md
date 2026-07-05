---
title: Group By
description: Summarize and categorize data into useful groups.
weight: 90
---

# Group By

The **Group By** mode is used to summarize information and organize it into categories. Instead of getting one big total, you get totals for each category—for example, "Total Sales broken down by Region" or "Count of Support Tickets grouped by Status."

---

## When to use it?

*   **To see distributions:** "Show me how many tasks are in each 'Status' (Open, Pending, Closed)."
*   **To find top performers:** "Calculate the total sales amount grouped by 'Sales Person'."
*   **To summarize by category:** "Find the total stock quantity grouped by 'Warehouse'."

---

## How to Configure

1.  **Select the Table (DocType):** Choose the source data (e.g., *Sales Order*, *Task*, *Stock Ledger Entry*).
2.  **Define Filters:** Narrow down the records to analyze.
3.  **Set Group By Field:** Choose the category you want to group by (e.g., *Warehouse*, *Status*, *Sales Person*).
4.  **Set Aggregate Field:** Choose the field you want to calculate (e.g., *Qty*, *Amount*, *Name*).
5.  **Choose the Math (Aggregate Function):**
    *   **Count:** How many items are in each group.
    *   **Sum:** Total value for each group.
    *   **Avg:** Average value for each group.

---

## What you get (The Output)

This mode returns a **List of Summaries**. Each item in the list contains the category name and its calculated value.

*   *Example Result:*
    *   `{ "Warehouse": "Store A", "value": 150 }`
    *   `{ "Warehouse": "Store B", "value": 42 }`

---

## Real-World Example

**Scenario:** A rule runs every evening to find out how many Sales Orders were placed today, grouped by their Status, and then sends a summary message to Slack.

*   **Table:** `Sales Order`
*   **Mode:** `Group By`
*   **Group By Field:** `Status`
*   **Math:** `Count`
*   **Filters:** `Posting Date` equals `Today`.
*   **Next Step:** A **Loop** block processes each status group to build a summary message like: "Today: 5 Open, 2 Cancelled, 10 Drafts."

---

## Performance Guidance

*   **Massive Efficiency:** Using **Group By** is a powerful **automatic optimization**. It allows the database to do the heavy lifting of sorting and calculating, which is much faster than fetching thousands of records and trying to group them yourself inside the rule.
*   **Reduced Data Transfer:** Instead of loading 10,000 Sales Orders, the rule only receives a few small rows of summarized data, making the rule run incredibly fast.

---

## Common Mistakes

*   **Grouping by Unique Fields:** Don't group by a field that is unique for every record (like the *ID* or *Name*). You will just get a list where every group has a value of 1, which isn't very helpful!
