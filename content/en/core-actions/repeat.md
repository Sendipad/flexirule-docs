---
title: Repeat
description: Perform a series of steps for every item in a list.
weight: 60
---

# Repeat

The **Repeat** action allows you to perform the same set of steps multiple times, once for each item in a list. This is perfect for processing child tables (like items in an order) or a list of documents you found using a search.

## When to Use It
- **Process Items**: Update the status of every item in a Sales Order.
- **Bulk Notifications**: Send an individual email to every person on a mailing list.
- **Calculations**: Add up values from a list of records manually if a simple "Sum" isn't enough.

## How it Works

1. **Pick the List**: Tell the block which list of items to work through (e.g., the "Items" table in your document or the results of a "Query Records" search).
2. **Design the "Loop"**: Connect the blocks you want to run for each item.
3. **Finish**: Once every item has been processed, the rule will continue to the next block connected after the Repeat cycle.

## Working with the "Current Item"
Inside the Repeat cycle, you can access information from the specific item currently being looked at. For example, if you are repeating through a list of "Tasks", you can use `item.status` to check the status of *that specific task* in each step.

## Tips for Success
- **Keep it Focused**: Only include the steps that *must* happen for every item inside the Repeat cycle.
- **Small Lists are Fast**: Try to filter your lists (using a Query or a Check) before repeating through them to keep your rule running quickly.
- **Check Your Connections**: Make sure the end of your repeat sequence connects back to the Repeat block or is clearly marked as the end of the cycle.
