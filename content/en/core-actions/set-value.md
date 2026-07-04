---
title: Set Value
description: Update fields on your document or manage temporary variables.
weight: 50
---

# Set Value

The **Set Value** action is the most common way to change data in FlexiRule. You can use it to update fields on your document or save temporary information to use later in the rule.

## When to Use It
- **Update Fields**: Change a document's status (e.g., set `Status` to "Approved").
- **Perform Math**: Add or subtract from a number (e.g., increase a "Revision Count").
- **Save Information**: Create a temporary variable (a "Var") to store a calculation you'll need in a later step.

## How to Configure It
The Set Value block uses a simple table where each row is one change.

### 1. What to Change (Target)
- **Document Field**: Use `doc.field_name` to update the document you are working on.
- **Temporary Variable**: Use `vars.my_variable` to save a value just for this rule run.

### 2. How to Change (Operator)
- **Set**: Replace the current value with a new one.
- **Clear**: Empty the field.
- **Add / Subtract**: Increase or decrease a number.
- **Add to List**: Add an item to a list or table.

### 3. The New Value
You can enter a fixed value (like "High Priority"), pick another field from your document, or use a simple formula for calculations.

### 4. Only When (Condition)
You can set a condition for each row so that the change only happens if certain criteria are met (e.g., only set status to "Urgent" if the "Grand Total" is over $10,000).

## Tips for Success
- **Top to Bottom**: The changes happen in order from the first row to the last.
- **Be Careful with Saves**: If you want to change a field on a document while it's being saved, make sure your rule is set to trigger "Before Save".
- **Naming Matters**: Always use the internal "Field Name" (like `status`) rather than the "Label" (like `Status`).
