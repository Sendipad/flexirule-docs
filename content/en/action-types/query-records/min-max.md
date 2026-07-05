---
title: Min / Max
description: Retrieve the smallest or largest value from a group of records.
weight: 80
---

# Min / Max

The **Min** (Minimum) and **Max** (Maximum) modes are used to identify the lowest or highest value in a specific field across a group of matching records.

---

## 1. When to Use

*   **Price Discovery:** "Identify the **lowest** price offered for this item across all active Supplier Quotations."
*   **Timeline Analysis:** "Find the **earliest** start date and **latest** end date for all tasks in a project."
*   **Record Highs:** "Find the **highest** amount ever invoiced to a specific customer."

---

## 2. Configuration

*   **Table (DocType):** Choose the source table.
*   **Mode:** Choose **Min** for the lowest value or **Max** for the highest.
*   **Filters:** Define which records to analyze.
*   **Field to Aggregate:** Select the field to compare (e.g., *Price*, *Date*, *Quantity*).

---

## 3. Output

This mode returns a single **Number** or **Date**.

---

## 4. Example

**Scenario:** A rule automatically updates a Project's "Estimated End Date" based on the latest end date of its sub-tasks.

*   **Table:** `Task`
*   **Mode:** `Max`
*   **Field to Aggregate:** `Expected End Date`
*   **Filters:** `Project` equals `doc.name` AND `Status` is not `Cancelled`.
*   **Output Variable:** `last_task_date`

---

## 5. Performance Notes

*   **Optimized Search:** Database-level optimization allows the system to find these values without reading the full details of every record.
*   **Efficiency:** This is significantly faster than retrieving a sorted list and selecting the first result.

---

## 6. Common Mistakes

*   **Ignoring Status:** Forgetting to filter out *Cancelled* or *Draft* records can result in picking a "Max" value that is no longer valid.
