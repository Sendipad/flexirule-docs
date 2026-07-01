---
title: Set Value
description: Update fields and variables within your rule.
weight: 50
aliases:
  - /docs/action-types/assignment/
---

# Set Value

The **Set Value** block is the primary way to change information in your rule. You can use it to update fields on your document or save temporary information for later use.

## Why use it?
- Automatically update a field (e.g., change the status to "Approved").
- Perform math (e.g., calculate a total or increment a counter).
- Save a calculation result to a variable so you can use it in a later block.

## How it works
You define one or more "Assignments." Each assignment tells the system: "Put **this** value into **that** place."

1.  **Target**: Where the value should go.
    - Use `doc.field_name` to update the current document.
    - Use `vars.my_variable` to save a temporary value.
2.  **Operation**: How to apply the value.
    - **Set**: Replace the old value with the new one.
    - **Increment / Decrement**: Add to or subtract from a number.
    - **Clear**: Remove the value.
3.  **Value**: What the new value is. This can be a fixed text/number, another field, or a formula.

## Pro Tips
- **Batch Updates**: You can update multiple fields in a single "Set Value" block. They will be updated in order from top to bottom.
- **Conditional Updates**: You can add a "When" condition to each row. For example: "Only set the *Status* to *High Priority* **if** the *Amount* is greater than 10,000."
- **Stay Organized**: Using temporary variables (`vars.`) helps keep complex rules clean by breaking down big calculations into smaller steps.
