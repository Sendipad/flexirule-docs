---
title: Check
description: Split your logic into different paths based on conditions.
weight: 40
---

# Check

The **Check** action is how FlexiRule makes decisions. It looks at the data in your document and decides which path the rule should follow next.

## When to Use It
- **Validate Data**: Check if a field is filled out correctly before continuing.
- **Route Logic**: For example, "If the total is over $1,000, send for approval; otherwise, process it immediately."
- **Check Tables**: See if any item in a child table meets a certain criteria (e.g., "Are any items out of stock?").

## How to Configure It
A Check block has two output paths: **True** (Green) and **False** (Red).

### 1. Setting Up Conditions
You can add one or multiple conditions to a single Check block.
- **Field**: Choose the field you want to check (e.g., `Grand Total`).
- **How to Compare**: Choose an operator (e.g., `is greater than`, `equals`, `contains`).
- **Value**: Enter the value you are looking for.

### 2. Combining Multiple Checks
If you have more than one condition, you can choose how they work together:
- **All (AND)**: Every single condition must be true for the whole block to be "True".
- **Any (OR)**: If even one condition is true, the whole block is "True".

### 3. Checking Lists (Child Tables)
You can also check items in a list. For example, you can check if **Every row** in an order has a quantity greater than zero, or if **At least one** item is a "Service" type.

## Tips for Success
- **Keep it Simple**: Try to break complex decisions into a few simple Check blocks rather than one giant, complicated one. It's much easier to read later!
- **Follow the Path**: During a **Test Run**, the path your document took will be highlighted in green, so you can see exactly why a Check was true or false.
- **Check for Empty Fields**: If you're not sure if a field will have a value, use the `is set` operator first to make sure it's not empty.
