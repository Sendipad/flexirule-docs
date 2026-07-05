---
title: Exist Record
description: Check if a record exists without retrieving data.
weight: 30
---

# Exist Record

The **Exist Record** mode is an efficient way to verify the presence of a record in the system. It returns a simple Yes/No result based on whether any record matches your specified criteria.

---

## 1. When to Use

*   **Duplicate Prevention:** "Check if a Lead with this email address already exists."
*   **Presence Validation:** "Verify if a specific item is in the system before proceeding."
*   **Dependency Checks:** "Confirm an active Contract exists for this Customer."

---

## 2. Configuration

*   **Table (DocType):** Choose which part of the system to check.
*   **Filters:** Define the conditions that must be met (e.g., `Reference ID` equals `doc.ref_id`).

---

## 3. Output

This mode returns a **Boolean** (`True` if a match is found, `False` if not).

This result is commonly used as a condition in a subsequent **Check** block.

---

## 4. Example

**Scenario:** A rule ensures that a Sales Order cannot be submitted unless a valid "Customer PO" reference is provided and hasn't been used before.

*   **Table:** `Sales Order`
*   **Filters:** `Customer PO` equals `doc.po_no` AND `Status` is not `Cancelled`.
*   **Output Variable:** `already_used`
*   **Logic:** If `vars.already_used` is **True**, the rule triggers an error message.

---

## 5. Performance Notes

*   **Optimized Path:** This is the most efficient check available. The system stops searching as soon as it finds one match.
*   **No Data Load:** Because no field data is retrieved, this mode uses minimal system resources.
*   **Automatic Pushdown:** The search is performed entirely at the database level.

---

## 6. Common Mistakes

*   **Using Query Doc Instead:** Do not use **Query Doc** if you only need to know if something exists. Loading a full document is significantly slower than an "Exist" check.
*   **Incomplete Filters:** If your filters are too broad, you may get a "True" result for a record that isn't the specific one you intended to check.
