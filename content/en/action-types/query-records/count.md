---
title: Count
description: Determine the total number of records matching your criteria.
weight: 50
---

# Count

The **Count** mode returns the total number of records that match your filters. It is a highly efficient way to measure volume or verify limits without retrieving actual record data.

---

## 1. When to Use

*   **Volume Monitoring:** "How many 'Open' support tickets are currently assigned to this user?"
*   **Threshold Verification:** "Count how many times this customer has ordered this year to determine their loyalty tier."
*   **Restriction Enforcement:** "Ensure a user doesn't exceed a daily document creation limit."

---

## 2. Configuration

*   **Table (DocType):** Select the table to search.
*   **Filters:** Define the criteria for the count (e.g., `Status` equals `Open`).

---

## 3. Output

This mode returns a **Number**.

---

## 4. Example

**Scenario:** A company limits customers to a maximum of 5 "Active" projects.

*   **Table:** `Project`
*   **Filters:** `Customer` equals `doc.customer` AND `Status` is `Active`.
*   **Output Variable:** `active_project_count`
*   **Logic:** A "Check" block ensures `vars.active_project_count` is less than 5 before allowing a new project to be created.

---

## 5. Performance Notes

*   **Database Math:** This mode uses database-level aggregation. It is significantly more efficient than fetching a list of records and counting them in the rule engine.
*   **Low Data Load:** Only a single number is returned, regardless of how many thousands of records were counted.

---

## 6. Common Mistakes

*   **Broad Filters on Large Tables:** While efficient, counting millions of records in a very large table (like *Activity Log*) without restrictive filters can still impact system performance.
