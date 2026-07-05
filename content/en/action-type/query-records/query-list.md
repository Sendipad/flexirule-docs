---
title: Query List
description: Find multiple records matching specific criteria.
weight: 20
---

# Query List

The **Query List** mode is used to retrieve a collection of records. It is the standard choice when you need to perform actions on multiple related items, such as identifying all open tasks for a specific project.

---

## 1. When to Use

*   **Collection Gathering:** "Find all Sales Orders created by a specific user."
*   **Loop Preparation:** "Gather all items that are below their reorder level."
*   **Summarization:** "Identify all transactions that occurred today."

---

## 2. Configuration

*   **Table (DocType):** Choose the source of the data (e.g., *Sales Order*, *Task*).
*   **Filters:** Define criteria to narrow down the result set (e.g., `Status` equals `Open`).
*   **Fields:** Select which pieces of information to retrieve for each record.
*   **Sorting:** Define the order of the results (e.g., "Creation Date Descending").
*   **Result Limit:** Set a maximum number of records to return (e.g., 50).

---

## 3. Output

This mode returns a **List of Records**.

To use the data inside these records, you typically follow this block with a **Loop** block to process each item individually.

---

## 4. Example

**Scenario:** A project manager needs a list of all "Urgent" tasks that are not yet assigned.

*   **Table:** `Task`
*   **Filters:** `Priority` equals `Urgent` AND `Status` equals `Open` AND `Assigned To` is empty.
*   **Sorting:** `Creation Date` (Ascending)
*   **Result Limit:** 20
*   **Output Variable:** `urgent_tasks`

---

## 5. Performance Notes

*   **Mandatory Filtering:** Searching large tables without filters will cause performance degradation.
*   **Limit Your Results:** Always set a **Result Limit**. This protects the rule from attempting to load thousands of records, which can cause timeouts.
*   **Optimized Fetching:** Selecting only the specific fields required (rather than the entire record) significantly reduces the data load.

---

## 6. Common Mistakes

*   **Missing a Loop:** A "List" cannot be updated directly. You must use a **Loop** block to iterate through the results.
*   **Broad Filters:** Failing to use specific filters on high-volume tables (like *Stock Ledger*) can slow down the entire system.
