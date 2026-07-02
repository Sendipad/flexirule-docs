---
title: Repeat
description: Perform actions multiple times, once for each item in a list.
weight: 30
---

# Repeat

The **Repeat** block (formerly *Loop*) allows you to run the same set of actions for every item in a list. This is perfect for processing child tables (like items in an order) or the results of a search.

## How it Works

1. **The List**: You pick a list of items (e.g., `doc.items` or the results of a "Query Records" block).
2. **The Sequence**: You connect the actions you want to repeat. These actions will run over and over until every item in the list has been processed.
3. **The Current Item**: For each "lap" of the repeat block, you have access to the specific item being handled right now.

## Common Uses
- **Update All Items**: Change the status or warehouse for every item in a Sales Order.
- **Bulk Notifications**: Send an email for every overdue invoice found in a search.
- **Calculations**: Sum up specific values from a list.

## Configuration

### 1. Source List
Select the list you want to iterate through. This is usually a child table on your document or a list of records found by a search.

### 2. Item Name (Variable)
Give a name to the item currently being processed (e.g., `current_item`). You can then use this name in following blocks to access that specific record's data.

---

## Pro Tips
- **Performance**: Try to filter your lists *before* they reach the Repeat block so you aren't processing more items than necessary.
- **Visual Path**: During a **Test Run**, you can see the repeat block "pulse" as it iterates through items.
- **Finished Path**: Once every item has been processed, the rule will continue from the "Finished" port of the Repeat block.
