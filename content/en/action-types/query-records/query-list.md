---
title: Query List
description: Find multiple items at once to process them in bulk.
weight: 20
---

# Query List

The **Query List** mode is used when you want to find a collection of items that share something in common. It is the best choice when you need to perform an action on many records at once, such as sending reminders to all customers with overdue payments.

---

## When to use it?

*   **To find multiple related items:** "Find all Sales Orders for this Customer."
*   **To prepare for a Loop:** "Find all items that need to be restocked so I can create a Purchase Order for each one."
*   **To generate summaries:** "Find all Tasks completed this week."

---

## How to Configure

1.  **Select the Table (DocType):** Choose which part of the system you want to search (e.g., *Sales Order*, *Customer*, *Task*).
2.  **Define Filters:** Add conditions to narrow down the search.
    *   *Example:* `Status` equals `Open` AND `Due Date` is `Before Today`.
3.  **Choose Fields:** Pick the specific pieces of information you need from each record (e.g., *ID*, *Customer Name*, *Total Amount*).
    *   **Performance Tip:** Selecting only the fields you actually need makes the rule run faster.
4.  **Set Sorting (Optional):** Decide the order of the results, such as "Newest First" or "Alphabetical by Name."
5.  **Set a Limit:** Decide the maximum number of items to find (e.g., 50).
    *   **Performance Tip:** Setting a limit is **highly recommended** to prevent the rule from slowing down if there are thousands of matching items.

---

## What you get (The Output)

This mode returns a **List of Records**.

Because you get multiple items, you will usually follow this block with a **Loop** block. The Loop will take the list and perform your desired actions on each item one by one.

---

## Real-World Example

**Scenario:** A manager wants a rule that finds all "High Priority" support tickets that haven't been touched in 24 hours and assigns them to a supervisor.

*   **Table:** `Support Ticket`
*   **Filters:** `Priority` equals `High` AND `Status` equals `Open` AND `Last Modified` was `Before Yesterday`.
*   **Mode:** `Query List`
*   **Result Handling:** We save the list as `urgent_tickets` and then use a **Loop** to reassign each one.

---

## Performance Guidance

*   **Avoid "Find All":** Always use filters. Searching through every single record in a large table (like *Stock Ledger*) without filters can make your rules very slow.
*   **Set a Limit:** If you only need to process the most recent items, set a limit (like 20 or 100). This keeps the rule "lightweight" and responsive.
*   **Fetch Only Necessary Fields:** Don't load the entire record if you only need the ID and the Owner. This reduces the amount of data the system has to move around.

---

## Common Mistakes

*   **Forgetting a Loop:** If you find 10 items, you can't just "Update" them directly in the next block. You must use a **Loop** to tell the system *which* item in the list to update.
*   **No Filters:** Searching without filters is like trying to find a needle in a haystack by looking at every single piece of straw. It takes a long time!
