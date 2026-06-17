---
title: Loop
description: Repeat actions for every item in a list or table.
weight: 80
---

# Loop Action

The **Loop** action allows you to repeat a series of steps for every item in a list. This is most commonly used for processing rows in a child table (like the "Items" table in a Sales Order) or multiple records found by a [Query Records]({{< relref "query-records.md" >}}) action.

## How it Works

A Loop node has two exit points:
1. **For Each**: The path to follow for every item in your list. The rule will go down this path, complete the actions, and then come back to the loop for the next item.
2. **After Last**: The path to follow once the rule has finished processing everything in the list.

### Loop Information (`vars.loop`)
While the loop is running, FlexiRule keeps track of a few helpful details that you can use in your actions:
- `vars.loop.index`: Which item are we on? (Starts at 0).
- `vars.loop.length`: How many items are there in total?
- `vars.loop.first`: Is this the first item?
- `vars.loop.last`: Is this the final item?

## When to Use

- **Updating Every Row**: "Set the warehouse for every item in this Sales Order."
- **Batch Tasks**: "For every overdue invoice we found, create a ToDo for the sales person."
- **Summaries**: "Count how many items in this order are 'Service' items."

## Configuration

| Field | Description |
| :--- | :--- |
| **Iterator** | The list you want to loop over (e.g., `doc.items`). |
| **Item Alias** | The name you want to use for the "current item" (defaults to `item`). Inside the loop, you can use `vars.item.name`, `vars.item.amount`, etc. |

## Example: Validating Order Items
**Goal**: Check every item in a Sales Order. If any item is missing a Warehouse, send an alert.

1. **Action**: Add a **Loop** node.
   - Iterator: `doc.items`.
   - Item Alias: `line`.
2. **Action (For Each Path)**: Add a **Condition**.
   - Check: `vars.line.warehouse` is not set.
   - **True**: Add a **Notify** action to show a warning.
3. **Action (After Last Path)**: Add the next step of your rule (e.g., "Submit Order").
4. **Result**: The rule checks each line one by one. If it finds a problem, it alerts the user, but continues checking the rest of the lines.

## Tips for Success

- **Unique Aliases**: If you have a loop inside another loop (nested loops), give them different names like `parent_item` and `child_item` so you don't get confused.
- **Empty Lists**: If the list is empty, the rule will skip the "For Each" path and go straight to "After Last."
- **Keep it Simple**: Try not to put too many complex actions inside a loop, as it can slow down the rule execution if you have hundreds of items.

---

*Next: Learn how to handle multiple outcomes with the [Switch Action]({{< relref "switch.md" >}}).*
