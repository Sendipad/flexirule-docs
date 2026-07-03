---
title: Set Value
description: Update fields on your document or set temporary variables.
weight: 50
---

# Set Value (Assignment)

The **Set Value** block is how you change data. You can use it to update fields on your document (like changing a status) or to store temporary information (variables) to use later in the rule.

## Common Uses

-   **Update a Field**: Change the `Status` of a record to "Processed".
-   **Calculate a Value**: Set a `Total Discount` field based on a formula.
-   **Store Information**: Save a calculation result in a temporary variable (`vars.my_result`) to use in a later "Check" or "Email" block.

## How to Configure

The Set Value block uses a simple table where each row is one change.

### 1. Target (Where to save)
This is where the new value will go.
-   `doc.field_name`: Updates a field on the record that triggered the rule (e.g., `doc.status`).
-   `vars.variable_name`: Sets a temporary variable that only exists while this rule is running.

### 2. Operator (How to change)
-   **Set**: Replaces the current value with the new one.
-   **Clear**: Empties the field.
-   **Increment / Decrement**: Adds to or subtracts from a number.
-   **Append**: Adds an item to the end of a list.

### 3. Value (What to save)
You can enter a fixed value (like "Approved"), pick another field from the document, or use a formula for complex calculations.

### 4. When (Optional)
You can add a condition to each row. The change will only happen if the condition is met. This lets you handle multiple "if-then" scenarios inside a single block.

## Important Note: "Before Save" vs "After Save"
If you want to update fields on the document that triggered the rule (the `doc`), make sure your rule is set to trigger **Before Save**. If you use **After Save**, the document is already stored in the database, and field changes made in the builder might not be saved.
