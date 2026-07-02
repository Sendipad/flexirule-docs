---
title: Set Value
description: Update document fields or store temporary information.
weight: 10
---

# Set Value

The **Set Value** block is used to change data. It is the primary way to update fields on your document or save information to use later in the rule.

## Common Uses
- **Update Status**: Change a Sales Order from `Draft` to `Open`.
- **Calculations**: Calculate a discount and save it to a field.
- **Store Data**: Save the result of a search (like a Manager's email) into a temporary variable to use in a later step.

## How to Configure

The Set Value block uses a simple table where each row represents one change.

### 1. Target (Where to save)
Choose where you want to save the data:
- `doc.field_name`: This updates a field on the document that triggered the rule (e.g., `doc.status`).
- `vars.my_variable`: This saves data into a temporary "bucket" that exists only while this rule is running. Use this for intermediate steps. {#context-variables-vars}

### 2. Operator (How to change)
- **Set**: Replaces the old value with a new one.
- **Clear**: Empties the field.
- **Increment / Decrement**: Adds or subtracts a number (great for counters or totals).
- **Append**: Adds an item to a list.

### 3. Value (The new data)
You can enter a fixed value (like `100` or `Approved`) or use the **Selector** to pick data from:
- Other fields on the document.
- Results from previous blocks (like a Query).
- Mathematical formulas.

### 4. Only If (Conditional updates)
You can add a condition to each row so that the update only happens if certain criteria are met (e.g., "Set status to VIP *only if* grand total is > 5000").

---

## Pro Tips
- **Top to Bottom**: Updates happen in order from the top row to the bottom.
- **Before vs After**: If you want to update fields on the current document, make sure your rule is set to trigger **Before Save**.
- **Variables are Temporary**: Anything saved to `vars.` disappears once the rule finishes running. If you need to keep the data permanently, save it to a `doc.` field.
