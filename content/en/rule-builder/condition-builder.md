---
title: Condition Builder
description: Learn how to create logical branches in your rules.
weight: 50
---

# Condition Builder

The **Condition Builder** is a visual interface used to define "Yes/No" logic. It is most commonly found inside the **Check** block, but it is also used for filters and trigger conditions.

## How it Looks

Instead of writing complex code, you build conditions using a structured, row-based interface. Each row represents a single logical check.

![Condition Builder Example](/images/demo-condition-and-query.webm)

## Building a Condition

A single condition row consists of three main parts:

1.  **Field/Value**: What you are checking (e.g., `Status` or `Grand Total`).
2.  **Operator**: How you are checking it (e.g., `is`, `is not`, `is greater than`, `contains`).
3.  **Comparison Value**: What you are checking against (e.g., `Open` or `1000`).

### Powered by the Smart Value System
For both the first and third parts of a condition, you use the [Smart Value System]({{< relref "smart-value-system.md" >}}). This allows you to:
-   Pick fields directly from the document using `@doc`.
-   Use variables calculated earlier in the rule using `@rule`.
-   Enter static text or numbers.
-   Use resolver functions with `/` for complex comparisons.

## Grouping Logic (AND / OR)

Rules often require checking more than one thing at a time. The Condition Builder uses **Groups** to handle this.

-   **AND Groups**: All conditions in the group must be true for the whole group to be true. (e.g., "Status is Open" **AND** "Total > 1000").
-   **OR Groups**: Only one condition in the group needs to be true for the whole group to be true. (e.g., "Customer is VIP" **OR** "Order is Urgent").

### Nested Groups
You can add groups inside of other groups to create complex logic. The UI represents this with indented boxes, making it easy to see which conditions belong together.

## Visual Structure

-   **Add Condition**: Click the `+ Condition` button to add a new row to the current group.
-   **Add Group**: Click the `+ Group` button to create a new nested AND/OR block.
-   **Toggle Logic**: Click the **AND/OR** label at the top of a group to switch the logic for all rows within that group.
-   **Delete**: Use the trash icon next to any row or group to remove it.

## Example: Complex Approval Logic
Imagine you want a rule to run if:
*(The Order is from a VIP Customer)* **AND** *(The Total is over $5,000 **OR** the Order is marked as "Urgent")*

In the Condition Builder, this would look like:
- **Group (AND)**
  - Row: `Customer Type` is `VIP`
  - **Group (OR)**
    - Row: `Grand Total` > `5000`
    - Row: `Priority` is `Urgent`

## Validation
As you build, FlexiRule checks your logic. If you leave a value empty or use an operator that doesn't make sense for the field type (like using "Greater Than" on a text field), the builder will highlight the error so you can fix it before saving.
