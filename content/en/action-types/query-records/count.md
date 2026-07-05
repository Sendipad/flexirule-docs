---
title: Count
description: Quickly find out how many items match your criteria.
weight: 50
---

# Count

The **Count** mode is used when you only need to know "how many" of something exist. It is a highly efficient way to get a total number without having to load any of the actual records.

---

## When to use it?

*   **To check volume:** "How many open Support Tickets does this customer have?"
*   **To verify progress:** "Count how many tasks in this project are marked as 'Completed'."
*   **To enforce limits:** "Check if the user has already created more than 5 documents today."

---

## How to Configure

1.  **Select the Table (DocType):** Choose what to count (e.g., *Invoice*, *Employee*, *Task*).
2.  **Define Filters:** Tell the system which items should be included in the count.
    *   *Example:* `Status` equals `Open` AND `Owner` is `doc.owner`.

---

## What you get (The Output)

This mode returns a **Number**.

You can use this number in a **Check** block (e.g., "If Count is greater than 10...") or in a **Set Value** block to update a field on your document.

---

## Real-World Example

**Scenario:** A company wants to limit customers to only 3 active "Warranty Claims" at a time.

*   **Table:** `Warranty Claim`
*   **Mode:** `Count`
*   **Filters:** `Customer` equals the current customer AND `Status` is `Open`.
*   **Next Step:** A "Check" block. If the count is 3 or more, the rule stops the user from creating a new claim and shows an error.

---

## Performance Guidance

*   **Faster than Query List:** Never use **Query List** just to count items. Using **Count** is an **automatic optimization**—the system performs the calculation directly in the database, which is much faster and uses far less memory than fetching a list.
*   **Recommended for Performance:** This mode is perfect for "Summary" logic because it avoids loading unnecessary data into your rule.

---

## Common Mistakes

*   **Counting Large Tables Without Filters:** Be careful when counting very large tables (like *Email Logs*) without restrictive filters, as even a count can take time if the search criteria are too broad.
