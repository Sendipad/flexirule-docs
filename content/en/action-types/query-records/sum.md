---
title: Sum
description: Calculate the total of a numeric field across multiple records.
weight: 60
---

# Sum

The **Sum** mode calculates the total value of a specific numeric field across all records that match your filters. This is the standard way to calculate balances, totals, and accumulated values.

---

## 1. When to Use

*   **Balance Calculation:** "What is the total 'Unpaid Amount' for this customer?"
*   **Accumulation:** "Calculate the total 'Hours Logged' on a project across all timesheets."
*   **Financial Verification:** "Sum the total of all 'Payment Entries' for a specific Sales Order."

---

## 2. Configuration

*   **Table (DocType):** Choose the source table.
*   **Filters:** Define which records to include (e.g., `Status` equals `Paid`).
*   **Field to Aggregate:** Select the numeric field you want to total (e.g., *Grand Total*, *Amount*, *Quantity*).

---

## 3. Output

This mode returns a **Number**.

---

## 4. Example

**Scenario:** Before approving a new Purchase Order, the rule calculates the total expenditure for the department this month.

*   **Table:** `Purchase Order`
*   **Field to Aggregate:** `Total Amount`
*   **Filters:** `Department` equals `doc.department` AND `Date` is `This Month`.
*   **Output Variable:** `monthly_spend`
*   **Logic:** The rule compares `vars.monthly_spend` against the department's budget.

---

## 5. Performance Notes

*   **Database Math:** Calculations are performed directly at the database level. This avoids the overhead of loading data into the rule engine.
*   **Efficiency:** This is the most efficient way to generate totals for large datasets.

---

## 6. Common Mistakes

*   **Non-Numeric Fields:** Attempting to sum a field that contains text or non-numeric data will cause the rule to fail.
*   **Missing Status Filters:** Forgetting to filter by "Status" (e.g., excluding *Cancelled* records) can lead to incorrect totals.
