---
title: Repeat
weight: 30
description: Process lists of items or child table rows one by one.
---

# Repeat

The **Repeat** block (internally known as Loop) allows you to perform actions multiple times, typically once for each item in a list or each row in a child table.

## How to Use

1. Add a **Repeat** block to your canvas.
2. Select the **List to Repeat** (e.g., the "Items" table in a Sales Order).
3. Define the actions you want to take for each item by connecting them to the **Loop** port.
4. Define what happens after the repetition finishes by connecting to the **Completed** port.

## Key Concepts

-   **Loop Port**: This is the "body" of the repeat. Every block connected here will run for every item in your list.
-   **Current Item**: Inside the repeat loop, you can access the specific item currently being processed. This allows you to perform row-specific checks or updates.
-   **Completed Port**: Once the block has finished processing all items in the list, the automation flow continues from this port.

## Common Uses

-   **Updating Child Rows**: Loop through all items in an invoice to apply a specific discount or update a custom field.
-   **Validation**: Check every row in a table to ensure specific data requirements are met.
-   **Aggregation**: Sum up values from child rows to update a total on the parent document.

## Safety Limits

To prevent your system from getting stuck, FlexiRule has built-in limits on how many times a loop can run. If your list is exceptionally large, the automation may stop to protect system performance.
