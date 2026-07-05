---
title: Sum
description: Automatically total up numeric values across many records.
weight: 60
---

# Sum

The **Sum** mode is used to add up all the values in a specific numeric field across multiple records. It allows you to quickly calculate totals, such as the "Total Sales this Month" or "Total Hours Logged on a Project," without doing any manual math.

---

## When to use it?

*   **To calculate totals:** "What is the total amount of all unpaid invoices for this customer?"
*   **To aggregate activity:** "How many total vacation days has this employee taken this year?"
*   **To verify balances:** "Add up all the payments received for this specific order."

---

## How to Configure

1.  **Select the Table (DocType):** Choose where the numbers are stored (e.g., *Sales Invoice*, *Timesheet*, *Payment Entry*).
2.  **Define Filters:** Tell the system which records to include in the math.
    *   *Example:* `Customer` equals `doc.customer` AND `Status` is `Unpaid`.
3.  **Choose the Field to Aggregate:** Select the specific numeric field you want to add up (e.g., *Grand Total*, *Hours*, *Amount*).

---

## What you get (The Output)

This mode returns a **Number**.

You can then use this number in a **Check** block to make a decision, or save it to a field using a **Set Value** block.

---

## Real-World Example

**Scenario:** Before approving a new Purchase Order, a rule calculates the total amount of all orders placed by the same department this month to ensure they haven't exceeded their budget.

*   **Table:** `Purchase Order`
*   **Mode:** `Sum`
*   **Field to Aggregate:** `Total Amount`
*   **Filters:** `Department` equals `doc.department` AND `Date` is `Within This Month`.
*   **Result:** The rule gets the total (e.g., $4,500) and compares it to the department's budget.

---

## Performance Guidance

*   **Database-Level Math:** This is an **automatic optimization**. Instead of your rule downloading every record and adding them up one by one, the system does the math directly in the database. This is **massively faster** and more reliable.
*   **Recommended for Performance:** Use this instead of fetching a **Query List** and using a Loop to calculate a total.

---

## Common Mistakes

*   **Choosing a Non-Numeric Field:** You cannot "Sum" a text field like *Name* or *Status*. Make sure the field you choose contains numbers or currency values.
*   **Missing Filters:** If you forget to filter by "Status" or "Date," you might accidentally add up years of old data, giving you an incorrect (and very large) total.
