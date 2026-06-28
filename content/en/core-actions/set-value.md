---
title: Set Value
weight: 10
description: Automatically update fields or variables within your automation.
---

# Set Value

The **Set Value** block (internally known as Assignment) is used to change data. You can use it to update fields on the document that triggered the rule, or to set internal variables for use later in the automation.

## How to Use

1. Add a **Set Value** block to your canvas.
2. In the configuration panel, you will see a list of assignments.
3. Click **Add Assignment** to create a new update rule.

## Configuration Options

Each assignment consists of two parts:

-   **Target**: The field or variable you want to change. You can select from the fields of the main document or define a custom variable.
-   **Value**: What you want to set the target to. This can be:
    -   A static value (e.g., setting a status to "Approved").
    -   A value from another field (e.g., copying the "Posting Date" to another field).
    -   A formula or transformation (using the **Value Resolver** for advanced cleaning or calculations).

## Common Uses

-   **Auto-filling Fields**: Set a default value for a field based on other selections.
-   **Status Management**: Automatically move a document to the next stage of your process.
-   **Calculations**: Perform math operations and store the result in a field.
-   **Data Normalization**: Clean up user input (e.g., forcing text to uppercase) before saving.

## Batch Assignments

You can add multiple assignments within a single **Set Value** block. They will be executed in order from top to bottom. This keeps your canvas clean by grouping related data changes together.
