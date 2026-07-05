---
title: Min / Max
description: Find the lowest or highest value in a group of records.
weight: 80
---

# Min / Max

The **Min** (Minimum) and **Max** (Maximum) modes are used to find the smallest or largest value in a specific field across a group of records. They are perfect for finding the "Best Price," the "Earliest Date," or the "Highest Score."

---

## When to use it?

*   **To find the best/worst:** "Find the **lowest** price offered by any supplier for this item."
*   **To find time limits:** "Find the **earliest** start date across all tasks in this project."
*   **To check records:** "What is the **highest** amount ever invoiced to this customer?"

---

## How to Configure

1.  **Select the Table (DocType):** Choose where to look (e.g., *Supplier Quotation*, *Task*, *Sales Invoice*).
2.  **Choose the Mode:** Select **Min** for the lowest value or **Max** for the highest value.
3.  **Define Filters:** Narrow down the records.
    *   *Example:* `Item Code` equals `doc.item_code` AND `Status` is `Active`.
4.  **Choose the Field to Aggregate:** Pick the field you want to compare (e.g., *Price*, *Date*, *Amount*).

---

## What you get (The Output)

This mode returns a single **Number** or **Date**.

---

## Real-World Example

**Scenario:** When a project is updated, a rule finds the latest "Completion Date" of all its sub-tasks and updates the project's own "Estimated End Date."

*   **Table:** `Task`
*   **Mode:** `Max`
*   **Field to Aggregate:** `Expected End Date`
*   **Filters:** `Project` equals the current project.
*   **Next Step:** A **Set Value** block takes this "Max" date and saves it to the Project record.

---

## Performance Guidance

*   **Efficient Searching:** This mode is an **automatic optimization**. The database is designed to find these values instantly without having to read every single detail of every record.
*   **Fast and Focused:** It is significantly faster than fetching a sorted list and looking at the first item.

---

## Common Mistakes

*   **Incorrect Filters:** If you use **Max** on a date field without filtering for "Incomplete" tasks, you might get a date from a task that was cancelled or is irrelevant.
