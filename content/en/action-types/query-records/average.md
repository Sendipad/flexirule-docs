---
title: Average
description: Calculate the mean value of a numeric field.
weight: 70
---

# Average

The **Average** mode calculates the mean value of a numeric field across all records matching your filters. It is used to determine typical values or benchmark performance.

---

## 1. When to Use

*   **Benchmarking:** "Find the average order value for this customer over the last 12 months."
*   **Performance Monitoring:** "What is the average rating given to this support agent?"
*   **Price Analysis:** "Calculate the average purchase price for this item across all suppliers."

---

## 2. Configuration

*   **Table (DocType):** Choose the source table.
*   **Filters:** Define the scope of records to analyze.
*   **Field to Aggregate:** Select the numeric field to average (e.g., *Price*, *Score*, *Amount*).

---

## 3. Output

This mode returns a **Number**.

---

## 4. Example

**Scenario:** A rule flags any Sales Order where the discount percentage is significantly higher than the customer's historical average.

*   **Table:** `Sales Order`
*   **Field to Aggregate:** `Discount Percentage`
*   **Filters:** `Customer` equals `doc.customer` AND `Status` is `Completed`.
*   **Output Variable:** `avg_discount`

---

## 5. Performance Notes

*   **Database Math:** Like Sum and Count, this uses database-level aggregation to ensure high performance even on large datasets.
*   **Lightweight:** The engine only processes a single result value.

---

## 6. Common Mistakes

*   **Averaging Zeroes:** Records with a value of `0` are included in the average and will lower the result. If zeroes should be ignored, add a filter (e.g., `Field` is `Greater than 0`).
