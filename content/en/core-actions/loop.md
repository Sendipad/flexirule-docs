---
title: Loop
description: Repeat a sequence of actions for each item in a list.
weight: 60
aliases:
  - /docs/actions/loop/
---

# Loop

Use the **Loop** block when you need to perform the same action on a group of items. It's like going through a checklist and doing a task for every item on that list.

## How it Works

1. **The List**: Choose the group of items you want to process (usually from a **Query Records** block).
2. **The Action**: Connect any action you want to repeat to the Loop's output.
3. **The Result**: FlexiRule will run those actions once for every single item in your list.

## Simple Example
**Goal**: Send a reminder email for every overdue invoice.
1. **Find Records**: Use a **Query Records** block to find all "Overdue Invoices".
2. **Loop**: Connect that list to a **Loop** block.
3. **Notify**: Connect a **Notify** block to the Loop. It will send a separate email for every invoice found.

## Pro Tips
- **Be Selective**: Only loop through the items you really need to process. Use filters in your search to keep the list as short as possible.
- **Keep it Simple**: If your loop starts looking like a giant spiderweb, consider using a **Sub-rule** to keep things tidy.
