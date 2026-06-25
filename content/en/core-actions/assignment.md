---
title: Set Value (Assignment)
description: Change values or save temporary information for later.
weight: 50
aliases:
  - /docs/actions/assignment/
---

# Set Value (Assignment)

The **Set Value** block is used to update information during your rule. You can use it to change fields on the current record or to save a temporary piece of information (a "Variable") to use in a later step.

## Types of Changes

### 1. Update the Current Record
Directly change a field on the record that started the rule.
- **Example**: Set the `Status` to "Review Required".

### 2. Save for Later (Variables) {#context-variables-vars}
Create a temporary piece of information that only exists while this rule is running. This is great for math or combining text.
- **Example**: Calculate a total with tax: `Total With Tax = Grand Total * 1.15`. You can then use this `Total With Tax` value in a **Notify** or **Update Record** block later on.

## Doing Multiple Things at Once
You can add several changes inside a single **Set Value** block. The system will process them one by one, from top to bottom.

## Cleaning and Fixing Data
You can also use "Pipelines" to clean up data as you set it.
- **Example**: Automatically remove extra spaces from a name or change text to ALL CAPS.
