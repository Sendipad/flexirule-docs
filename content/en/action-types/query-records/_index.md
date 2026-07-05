---
title: Query Records
description: Find and use information from your system to make smarter rules.
weight: 10
entity_kind: action_operation
category: data-operations
mutation: false
targets: ["Frappe DocType"]
---

# Query Records

The **Query Records** block is how your rules "read" information from your system. It allows a rule to look up data that isn't already part of the current task, like checking a customer's total balance, finding a specific item in stock, or counting how many orders were placed today.

Think of it as a specialized search engine for your rules. Instead of just working with the data in front of it, the rule can reach out and find exactly what it needs to make a decision.

---

## When to use it?

You should use a **Query Records** block whenever your rule needs to know something about the rest of your system.

*   **To check for duplicates:** "Does a record with this name already exist?"
*   **To find related information:** "What is the credit limit for this customer?"
*   **To perform calculations:** "What is the total value of all open invoices for this supplier?"
*   **To gather a list:** "Find all overdue tasks so I can send a reminder for each one."

---

## Choosing the Right Mode

To make your rules as fast and efficient as possible, FlexiRule provides different "Modes" for finding data. Choosing the right one helps your rules run quickly and reliably.

| If you want to... | Use this Mode | Why it’s great |
| :--- | :--- | :--- |
| **Check if something exists** | [Exist Record]({{< relref "exist-record.md" >}}) | **Fastest.** It just says "Yes" or "No" without loading extra data. |
| **Get one specific item** | [Query Doc]({{< relref "query-doc.md" >}}) | **Simple.** Gives you all the details for a single record. |
| **Get a list of items** | [Query List]({{< relref "query-list.md" >}}) | **Powerful.** Perfect for finding multiple records to work on. |
| **Count items** | [Count]({{< relref "count.md" >}}) | **Efficient.** Just gives you the number, avoiding slow data loading. |
| **Calculate totals/averages** | [Sum]({{< relref "sum.md" >}}), [Average]({{< relref "average.md" >}}) | **Automatic.** The system does the math for you instantly. |
| **Find highest/lowest** | [Min / Max]({{< relref "min-max.md" >}}) | **Smart.** Quickly finds the "best" or "worst" value in a list. |
| **Summarize data** | [Group By]({{< relref "group-by.md" >}}) | **Organized.** Bundles results by category (e.g., "Totals per Customer"). |
| **Use an existing Report** | [Query Report]({{< relref "query-report.md" >}}) | **Reusable.** Plugs directly into the reports you've already built. |

---

## Performance & Speed

FlexiRule includes **automatic optimizations** that make finding data fast without you having to change any settings.

*   **Smart Caching:** When you look up a record that was recently used, FlexiRule can often retrieve it instantly from memory instead of searching the database again.
*   **Direct Math:** Calculations like Sum and Average are performed directly where the data lives, which is much faster than bringing all the data into the rule to do the math.
*   **Lightweight Checks:** Using the **Exist Record** mode is highly recommended for performance because it avoids loading any unnecessary information.

---

## Common Tips

*   **Use Filters:** Always try to be as specific as possible. Instead of asking for "All Orders," ask for "Orders for Customer X from Today." This keeps your rules running at top speed.
*   **Select Only What You Need:** If you only need an email address, tell the rule to only fetch the "Email" field. This makes the rule "lighter" and faster.
*   **Set Limits:** If you are looking for a list, setting a "Limit" (like 20 or 50) prevents the rule from accidentally trying to process thousands of items at once.
