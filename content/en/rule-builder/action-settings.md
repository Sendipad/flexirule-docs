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

## Smart Value Selector

The **Smart Value Selector** is the most important tool within the settings panel. It appears whenever you need to provide a value—whether it's a piece of text, a number, a date, or a reference to another field.

### How to Use It
Click into any field that supports the Smart Value Selector to see your options:

1.  **Static Input**: Just type a value (like "Hello World" or "100").
2.  **Variable Picker (@)**: Type `@` or click the variable icon to see a list of available data. This includes:
    -   **Document Fields**: Any field from the record that triggered the rule (e.g., `@doc.customer_name`).
    -   **Rule Variables**: Values created by earlier "Set Value" or "Query" blocks.
    -   **Global Constants**: System values like the current date or the current user.
3.  **Advanced Resolvers (/)**: Type `/` or click the magic wand icon to access specialized tools:
    -   **Formulas**: Perform math or combine text (e.g., `{{ @doc.first_name }} {{ @doc.last_name }}`).
    -   **Formatting**: Change how dates or numbers appear.
    -   **Logic**: Use "If/Else" statements to pick a value dynamically.

## Field Types

In the settings panel, you will encounter different types of input controls:

-   **Dropdowns**: Choose from a fixed list of options.
-   **Checkboxes**: Toggle settings on or off.
-   **Data Grids**: Used for actions like "Set Value," where you need to map multiple fields at once. Each row in the grid uses a Smart Value Selector for the value column.
-   **Multi-Select**: Pick one or more tags or items from a list.

## Context Awareness

The settings panel is "Smart." It knows where the block is located in your flow.
-   **Available Variables**: You will only see variables in the Smart Value Selector that have actually been defined *before* the current block.
-   **Validation**: Required fields are marked, and the panel will alert you if your configuration is incomplete or contains errors.

## Saving Changes

Changes in the Action Settings panel are usually drafted immediately. However, you must **Save** the entire rule using the button at the top of the canvas to commit your changes to the system.

{{< tip >}}
**Keep it Readable**: Use the title field at the top of the settings panel to give each block a business-friendly name. Instead of "Set Value 1," use "Calculate Discounted Total."
{{< /tip >}}
