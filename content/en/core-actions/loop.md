---
title: Loop
description: Iterate over lists of records to perform actions on each one.
weight: 60
aliases:
  - /docs/actions/loop/
---

# Loop Action

The **Loop** action allows you to perform the same set of actions for every item in a list. It is almost always used immediately after a **Query Records** action that returns multiple items.

## When to Use
- **Bulk Updates**: Find all "Overdue" invoices and send a reminder for each one.
- **Data Consolidation**: Loop through child items (like Sales Order Items) to calculate a custom total.
- **Record Creation**: For every "Selected Item" in a wizard, create a new corresponding task.

## How it Works

A Loop node has a special "Loop Body" path. The rule flow will enter this path once for every item in your list. When the list is finished, the rule continues from the bottom of the Loop node.

## Configuration

1.  **Input List**: Select the list you want to loop over (e.g., the results of your "Query List" step).
2.  **Item Name**: Give each item a name (e.g., `invoice`). Inside the loop, you can refer to the current item's fields like `invoice.grand_total`.
3.  **Parallel vs. Sequential**:
    - **Sequential (Default)**: Process one item at a time. Safe and predictable.
    - **Parallel**: Process multiple items at once. Much faster for large lists, but requires caution if items depend on each other.

## Best Practices
- **Keep it Lean**: Don't put too many heavy actions (like complex queries) inside a loop if your list is very large.
- **Clear Labels**: Name your loop based on what it's doing, e.g., "Loop Over Overdue Invoices".

---
**Advanced**: For technical details on execution semantics and performance, see [Loop Architecture]({{< relref "advanced-reference/architecture/actions/loop.md" >}}).
