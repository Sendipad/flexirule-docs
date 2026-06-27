---
title: Repeat (Loop)
weight: 50
description: Perform actions on a list of items.
---

# Repeat

The **Repeat** block (internally called Loop) allows you to perform the same set of actions for every item in a list.

## When to use it
- To check every **Item** in a Sales Order.
- To send an email to every **Contact** in a list you found.
- To update the status of multiple **Tasks**.

## How it works

1. **The Input**: You must provide a list of items (usually from a "Find Many Records" block or a child table like `doc.items`).
2. **The Inner Flow**: You connect blocks to the "Loop Start" port. These blocks will run once for every item in the list.
3. **The Current Item**: Inside the loop, you can access the specific item being processed using the `item` placeholder (e.g., `{{ item.item_name }}`).
4. **Completion**: Once all items have been processed, the flow continues from the "Finished" port on the Repeat block.

## Configuration
- **List Source**: Select the list you want to iterate over.
- **Alias**: (Optional) Rename `item` to something more descriptive like `order_item`.
