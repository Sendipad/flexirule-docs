---
title: Query Report
description: Retrieve data using an existing system report.
weight: 40
---

# Query Report

The **Query Report** mode allows rules to leverage existing reports defined in the system. This is useful for reusing complex data logic or pulling from custom SQL reports without rebuilding the logic in the rule builder.

---

## 1. When to Use

*   **Complex Logic Reuse:** "Use the logic in the 'Overdue Payments' report to find targets for notifications."
*   **Built-in Summaries:** "Fetch stock availability from a standard inventory report."
*   **SQL-Based Data:** Retrieve results from a complex SQL report that cannot be easily recreated using standard filters.

---

## 2. Configuration

*   **Report Name:** Select any report available in your system.
*   **Report Filters:** Provide values for the filters expected by the report (e.g., *Date Range*, *Company*, *Territory*).

---

## 3. Output

This mode returns a **List of Records**. Each row from the report output becomes a record in the list.

You will typically follow this block with a **Loop** block to process the results.

---

## 4. Example

**Scenario:** A rule runs every Monday to find all Sales Orders that are "Pending" according to a specific custom report.

*   **Report:** `Custom Pending Orders Report`
*   **Filters:** `Posting Date` set to "Last Week."
*   **Output Variable:** `report_data`
*   **Logic:** A **Loop** iterates through `vars.report_data` to send summary emails.

---

## 5. Performance Notes

*   **Black-Box Execution:** A report is treated as a single, opaque query.
*   **Dependency:** The performance of this block depends entirely on the efficiency of the underlying report implementation. A slow report will result in a slow rule.
*   **Filter Scope:** Always provide as many filters as possible to the report to reduce the volume of data processed.

---

## 6. Common Mistakes

*   **Running Heavy Reports:** Using reports that analyze millions of rows in a real-time rule can cause timeouts.
*   **Variable Names:** Ensure you use the correct internal fieldnames from the report columns when referencing the results in later blocks.
