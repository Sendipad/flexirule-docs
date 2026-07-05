---
title: Set Value
description: Update fields on your document or store information for later use.
weight: 50
---

# Set Value

The **Set Value** block is the most common action in FlexiRule. It allows you to change information on your document (like updating a status) or store temporary information to use later in your rule.

## Purpose

Use the Set Value block when you need to:
- **Update Fields**: Change a field on your document (e.g., set "Status" to "Processing").
- **Do Math**: Add or subtract from a numeric field (e.g., increment a "Retry Count").
- **Store Info**: Save a value into a temporary variable to use in a later step.
- **Clear Fields**: Remove the current value from a field.

## How to Configure

The Set Value block uses a simple list where you can add one or more updates.

### 1. Where to update (Target)
Choose where you want the new information to go:
- `doc.field_name`: Use this to update a field on the document that triggered the rule.
- `vars.variable_name`: Use this to store information for the duration of the rule execution.

### 2. How to update (Operator)
Choose how you want to apply the change:
- **Set**: Replace the current information with something new.
- **Clear**: Empty the field.
- **Add / Subtract**: Increase or decrease a number.
- **Append**: Add a value to the end of a list.

### 3. The New Value
Specify what the new information should be. You can type a value directly, refer to another field, or use a simple formula for calculations.

### 4. Only if... (Condition)
You can optionally set a condition so that an update only happens if certain criteria are met (e.g., only update "Priority" if "Amount" is greater than 1000).

## Examples

| Target | Operator | Value | Purpose |
| :--- | :--- | :--- | :--- |
| `doc.status` | Set | "Approved" | Updates the document status. |
| `doc.total_weight` | Add | `doc.item_weight` | Calculates a running total. |
| `vars.is_vip` | Set | `doc.customer_score > 50` | Stores a check result for later use. |

## Tips for Success

- **Top to Bottom**: Updates happen in the order they appear in the list.
- **Precise Paths**: Always start with `doc.` for document fields or `vars.` for temporary variables.
- **Keep it Simple**: Use temporary variables (`vars.`) to break down complex calculations into smaller, easier-to-read steps.
