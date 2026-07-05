---
title: Repeat
description: Perform a sequence of actions for every item in a list.
weight: 60
---

# Repeat

The **Repeat** block (also known as a Loop) allows you to perform the same set of actions multiple times—once for every item in a list. This is useful when you have a collection of items, like rows in a table or a list of records found in a search.

## Purpose

Use the Repeat block when you need to:
- **Process Tables**: Run logic for every row in a child table (e.g., "Check every item in this Sales Order").
- **Handle Search Results**: Perform an action for every record found by a **Query Records** block.
- **Bulk Updates**: Update multiple related records at once.

## How it Works

1. **The List**: You choose the list of items you want to process (e.g., `doc.items`).
2. **The Cycle**: Any blocks connected to the **Loop** output will run repeatedly, once for each item in that list.
3. **The Current Item**: While the cycle is running, you can access the specific item being processed using the `item` reference.
4. **Completion**: Once every item has been processed, the rule continues from the **Completed** output of the Repeat block.

## Example: Stock Check
**Scenario**: You want to check the stock for every item in a Sales Order.
1. **Repeat**: Select `doc.items` as the list.
2. **Check**: Connect a Check block to the Repeat block to see if the `item.qty` is available in stock.
3. **Set Value**: If stock is low, update `item.status` to "Pending".
4. **Finish**: Once all items are checked, the rule moves on to the next major step (like notifying the manager).

## Tips for Success

- **Keep it Focused**: Only include the steps that actually need to repeat inside the loop.
- **Accessing Data**: Use `item.field_name` to get information from the specific row currently being processed.
- **Performance**: If you are processing thousands of items, consider if there is a way to filter the list first to keep the rule fast.
