---
title: Query Report
description: Reuse your existing system reports directly inside your rules.
weight: 40
---

# Query Report

The **Query Report** mode allows you to use the power of reports you've already built in your system. Instead of rebuilding complex logic in the rule builder, you can simply "run" a report and use its results to drive your rule.

---

## When to use it?

*   **To reuse complex logic:** "Run the 'Aged Overdue Invoices' report to find which customers to notify."
*   **To leverage built-in summaries:** "Get the results from the 'Stock Availability' report to check if items are ready for shipping."
*   **To use custom SQL reports:** If you have a highly complex report that requires custom database queries, you can pull its data into a rule easily.

---

## How to Configure

1.  **Select the Report:** Choose from any of the Reports available in your system.
2.  **Set Report Filters:** Once you select a report, FlexiRule will show you the filters that the report normally asks for. You can fill these in with static values or dynamic data from your rule.
    *   *Example:* Set the report's `From Date` to `Yesterday`.

---

## What you get (The Output)

This mode returns a **List of Records**, just like the **Query List** mode. Each row in the report becomes one item in the list.

You will typically follow this with a **Loop** block to process each row of the report.

---

## Real-World Example

**Scenario:** Every Monday, a rule runs the "Sales Analytics" report to find any salesperson who exceeded their goal, then sends them a congratulatory email.

*   **Report:** `Sales Person Wise Transaction Summary`
*   **Mode:** `Query Report`
*   **Filters:** Set the date range to "Last Week."
*   **Next Step:** Use a **Loop** to look at each row and send an email if the "Total Amount" is above a certain threshold.

---

## Performance Guidance

*   **Report Efficiency:** The speed of this block depends entirely on how fast the original report is. If a report takes 30 seconds to run in the system, it will take 30 seconds to run in your rule.
*   **Filter Early:** Always provide as many filters as possible to the report. This ensures the system only processes the data you actually need.
*   **Recommended for Performance:** Using a report can sometimes be faster than building complex logic in a rule because reports are often optimized for summarizing large amounts of data.

---

## Common Mistakes

*   **Running "Heavy" Reports:** Avoid using reports that process millions of rows of data in real-time rules, as this can cause the rule to time out or slow down the user's experience.
*   **Column Names:** Make sure you know the exact names of the columns in the report so you can reference them correctly in later blocks (e.g., `vars.report_results.grand_total`).
