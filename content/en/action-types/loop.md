---
title: Loop
description: Repeat a sequence of actions for each item in a list.
weight: 60
aliases:
  - /docs/actions/loop/
---

# Loop Action

The **Loop** action allows you to repeat a series of steps for multiple items. This is essential when you have a list of records (like those from a **Query Records** action) and need to perform the same task for each one.

## How it Works

1. **Input List**: Select the list of items you want to process.
2. **Loop Flow**: Any actions connected to the loop's output will be executed once for every item in the list.
3. **Current Item**: Inside the loop, you can access the specific item currently being processed.

## Example
**Scenario**: Send a notification for every overdue invoice found.
1. **Query Records**: Find all "Invoices" where `status` is "Overdue".
2. **Loop**: Connect the results to a Loop node.
3. **Notify**: Inside the loop, use the **Notify** action. It will run for each individual invoice.

## Best Practices
- **Efficiency**: Only loop over the items you need. Use filters in your query to keep the list small.
- **Complexity**: If your loop logic gets too complex, consider using a **Sub-rule**.
