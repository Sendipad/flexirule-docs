---
title: Group By
description: Summarize and categorize data into grouped results.
weight: 90
---

# Group By

The **Group By** mode is used to organize summarized data into categories. Instead of a single total, it provides a breakdown of values based on a specific field, such as "Total Sales by Region" or "Count of Tickets by Priority."

---

## 1. When to Use

*   **Categorized Summaries:** "Show me the count of Tasks organized by their 'Status'."
*   **Performance breakdowns:** "Calculate the total sales amount grouped by 'Sales Person'."
*   **Inventory Audits:** "Find the total stock quantity grouped by 'Warehouse'."

---

## 2. Configuration

*   **Table (DocType):** Choose the source data.
*   **Filters:** Define which records to include in the analysis.
*   **Group By Field:** Choose the category field (e.g., *Warehouse*, *Status*, *Sales Person*).
*   **Aggregate Field:** Choose the numeric or ID field to calculate.
*   **Aggregate Function:**
    *   **Count:** Count the number of items in each group.
    *   **Sum:** Total a numeric field for each group.
    *   **Avg:** Calculate the average for each group.

---

## 3. Output

This mode returns a **List of Summaries**.

Each item in the list follows a standardized format:
*   The grouping field (e.g., `Status`) contains the category name.
*   The `value` field contains the calculated result for that category.

**Example Output Shape:**
```json
[
  { "status": "Open", "value": 12 },
  { "status": "Pending", "value": 5 }
]
```

---

## 4. Example

**Scenario:** A rule runs nightly to build a summary of Sales Orders placed today, categorized by their current status.

*   **Table:** `Sales Order`
*   **Group By Field:** `Status`
*   **Aggregate Field:** `ID` (Name)
*   **Function:** `Count`
*   **Filters:** `Posting Date` is `Today`.
*   **Output Variable:** `status_summary`

---

## 5. Performance Notes

*   **Efficient Categorization:** Using **Group By** is a database-level optimization. It is significantly faster than fetching thousands of individual records and grouping them within the rule logic.
*   **Reduced Data Transfer:** By only returning the summarized categories and their values, the system avoids loading unnecessary record details.

---

## 6. Common Mistakes

*   **Grouping by Unique Fields:** Do not group by a field that is unique for every record (like *ID* or *Creation Time*). This will result in every group having a value of 1, providing no useful summary.
*   **Missing Numeric Field for Sum/Avg:** Ensure the field you are aggregating is numeric if you are using Sum or Average functions.
