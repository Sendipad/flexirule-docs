---
title: Repeat
description: Perform a sequence of actions multiple times for a list of items.
weight: 60
aliases:
  - /docs/action-types/loop/
---

# Repeat

The **Repeat** block (also known as a Loop) allows you to perform the same set of actions for every item in a list.

## Why use it?
Use this whenever you have a collection of things and want to do something to each one.
- **Process Items**: For every item in a Sales Order, check its stock levels.
- **Send Notifications**: For every overdue invoice found by a **Query Records** block, send a reminder email.
- **Data Cleanup**: For every row in a table, update a specific field.

## How it works

1.  **Select the List**: Tell the block which list of items you want to process (e.g., `doc.items` or a list you found using `vars.query_results`).
2.  **Define the Loop**: Connect the "Loop" output to the sequence of actions you want to repeat.
3.  **Process One by One**: FlexiRule will automatically run that sequence of actions for the first item, then the second, and so on, until the list is finished.

## Accessing the Current Item
While inside the repeat sequence, you can access the specific item currently being processed. This allows your actions to be dynamic for each step of the loop.

## Pro Tips
- **Efficiency**: If you only need to process certain items, try to filter your list *before* it gets to the Repeat block.
- **Completion**: You can connect an action to the "Finished" output of the Repeat block. This action will run only once, after all items in the list have been processed.
