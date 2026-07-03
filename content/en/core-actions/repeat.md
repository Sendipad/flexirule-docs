---
title: Repeat
description: Perform a sequence of actions for every item in a list.
weight: 60
---

# Repeat (Loop)

The **Repeat** block allows you to perform the same task multiple times—once for every item in a list. This is useful when you want to process child table rows (like items in an invoice) or a list of records you found using a "Query Records" block.

## How it Works

1.  **Select the List**: You tell the block which list of items it should process.
2.  **The Loop Flow**: You connect the **Loop** output to the actions you want to repeat.
3.  **Completion**: Once the block has finished processing every item in the list, it continues to whatever is connected to its **Finished** output.

## Using the "Current Item"

While the rule is inside a Repeat block, it keeps track of which specific item it is currently looking at. You can access this item in subsequent blocks using the name you give it in the configuration (usually `item`).

### Example: Emailing Overdue Invoices
1.  Use **Query Records** to find all overdue invoices.
2.  Connect the results to a **Repeat** block.
3.  Connect the Repeat block to an **Email** block.
4.  In the Email block, use `{{ item.customer_email }}` to send the email to the specific customer of that invoice.

## Best Practices

-   **Filter Your Lists**: To keep your rule fast, try to filter your list *before* it gets to the Repeat block (e.g., using filters in a Query Records block) so you only process the items you actually need.
-   **Nested Loops**: You can put a Repeat block inside another Repeat block, but be careful—this can make your rule run slowly if the lists are very long.
