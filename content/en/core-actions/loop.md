---
title: Repeat (Loop)
description: Do the same steps for every item in a list.
weight: 60
aliases:
  - /docs/actions/loop/
---

# Repeat (Loop)

The **Repeat** block lets you perform the same set of actions multiple times. This is useful when you have a list of items (like a list of overdue invoices) and need to handle each one individually.

## How it Works

1. **The List**: You pick a list of items to work through (usually found using a **Query Records** block).
2. **The Steps**: Any blocks you connect to the Repeat block will run once for every item in that list.
3. **The Current Item**: While inside the repeat cycle, you can look at the specific details of the item currently being handled.

## Example
**Scenario**: You want to send a reminder for every overdue invoice you found.
1. **Find Records**: Use a **Query Records** block to find all "Invoices" that are "Overdue".
2. **Repeat**: Connect that list to a Repeat block.
3. **Notify**: Connect a Notify block to the Repeat block. The system will now send a separate notification for *each* overdue invoice.

## Simple Tips
- **Keep it Short**: Only repeat over the items you actually need. Use filters when finding your records to keep the list small.
- **Organization**: If you find yourself adding many blocks inside a repeat cycle, consider using a **Sub-rule** to keep your main map clean.
