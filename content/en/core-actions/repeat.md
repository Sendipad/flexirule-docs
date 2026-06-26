---
title: Repeat
description: Repeat a sequence of actions for each item in a list.
weight: 60
aliases:
  - /docs/actions/loop/
---

# Repeat

The **Repeat** block (internally called Loop) allows you to perform the same set of actions for every item in a list. This is essential when working with multiple records, such as those found using a [Query Records]({{< relref "query-records" >}}) block.

## How it Works

1. **Select the List**: Choose the list of items you want to process.
2. **Define the Flow**: Any blocks connected to the repeat output will run once for every item in that list.
3. **Access Current Item**: Inside the loop, you can work with the specific item being processed at that moment.

## Example
**Scenario**: Send an alert for every overdue invoice.
1. **Query Records**: Find all "Invoices" that are "Overdue".
2. **Repeat**: Connect the results to a **Repeat** block.
3. **Notify**: Add a notification block inside the flow. It will run for each overdue invoice found.

## Best Practices
- **Stay Efficient**: Use filters in your query to only find the items you actually need to repeat over.
- **Keep it Simple**: If your logic inside the repeat block becomes too complex, consider moving it to a [Sub-rule]({{< relref "sub-rule" >}}).
