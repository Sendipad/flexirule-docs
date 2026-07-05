---
title: Action Settings
description: Learn how to configure individual blocks in your rule.
weight: 60
---

# Action Settings

When you select a block on the canvas, the **Action Settings** panel slides out from the right side of the screen. This is where you define the specific behavior for that step in your rule.

## Common Interface Elements

While every action has different options, they all share a consistent design:

-   **Block Title**: At the top, you can see and edit the name of the block.
-   **Description**: A brief explanation of what the action does.
-   **Configuration Fields**: The main area where you input data, select options, and define logic.

## Smart Value Fields

Most settings in FlexiRule use "Smart" fields. These fields allow you to provide data in three different ways: static text, variables, or dynamic functions.

To learn more about the logic behind these fields, see the [Smart Value System]({{< relref "smart-value-system.md" >}}).

### Quick Access
In any Smart Value field, you can use these shortcuts:

1.  **Static Input**: Just type a value directly into the field.
2.  **Variable Picker (@)**: Type `@` or click the variable icon to see a list of available data, such as `@doc.customer_name` or `@rule.total_count`.
3.  **Advanced Resolvers (/)**: Type `/` or click the magic wand icon to access tools like math, text formatting, and date calculations.

## Field Types

In the settings panel, you will encounter different types of input controls:

-   **Dropdowns**: Choose from a fixed list of options.
-   **Checkboxes**: Toggle settings on or off.
-   **Data Grids**: Used for actions like "Set Value," where you need to map multiple fields at once. Each row in the grid uses a Smart Value field for the value column.
-   **Multi-Select**: Pick one or more tags or items from a list.

## Context Awareness

The settings panel is "Smart." It knows where the block is located in your flow.
-   **Available Variables**: In the `@` menu, you will only see variables that have actually been defined *before* the current block.
-   **Validation**: Required fields are marked, and the panel will alert you if your configuration is incomplete or contains errors.

## Saving Changes

Changes in the Action Settings panel are usually drafted immediately. However, you must **Save** the entire rule using the button at the top of the canvas to commit your changes to the system.

{{< tip >}}
**Keep it Readable**: Use the title field at the top of the settings panel to give each block a business-friendly name. Instead of "Set Value 1," use "Calculate Discounted Total."
{{< /tip >}}
