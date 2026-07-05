---
title: Average
description: Calculate the average value of a numeric field instantly.
weight: 70
---

# Average

The **Average** mode calculates the mean (average) value for a specific numeric field across all matching records. It’s a great way to find typical values, such as the "Average Order Value" or "Average Support Response Time."

---

## When to use it?

*   **To find typical values:** "What is the average discount given to this customer over the last year?"
*   **To monitor performance:** "What is the average rating for this support agent?"
*   **To detect anomalies:** "Calculate the average price for this item so I can see if the current price is way too high."

---

## How to Configure

1.  **Select the Table (DocType):** Choose where the data is (e.g., *Sales Order*, *Feedback*, *Quotation*).
2.  **Define Filters:** Narrow down which records to average.
    *   *Example:* `Item Code` equals `doc.item_code` AND `Status` is `Completed`.
3.  **Choose the Field to Aggregate:** Pick the numeric field to calculate (e.g., *Price*, *Score*, *Amount*).

---

## What you get (The Output)

This mode returns a **Number**.

---

## Real-World Example

**Scenario:** A company wants to automatically flag any Sales Order that gives a discount significantly higher than the customer's usual average.

*   **Table:** `Sales Order`
*   **Mode:** `Average`
*   **Field to Aggregate:** `Discount Percentage`
*   **Filters:** `Customer` equals the current customer.
*   **Next Step:** A "Check" block compares the current order's discount to this calculated average.

---

## Performance Guidance

*   **Automatic Optimization:** Just like the Sum mode, the system does the math directly in the database. This is **much faster** than loading all records and calculating the average yourself.
*   **Lightweight:** It only returns one number, no matter how many thousands of records were analyzed to find the average.

---

## Common Mistakes

*   **Averaging Zeroes:** Be aware that if your filters include records with a value of `0`, those will be included in the average and will pull the result down. Use filters to exclude `0` values if they don't make sense for your math.
