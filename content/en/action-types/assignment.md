---
title: Assignment
description: Perform sequential batch state mutations on document fields and context variables.
weight: 50
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType", "Context Variable"]
---

# Assignment Action

The **Assignment** action (formerly *Set Value*) is the primary mechanism for state mutation in FlexiRule. It allows you to define a sequence of mutations—**Batch Assignments**—that are executed in order to update document fields or manage internal rule state.

## Purpose

Use the Assignment action when you need to:
- Update fields on the triggering document (e.g., change `status` to "Approved").
- Initialize or update context variables (`vars`) to store intermediate calculation results.
- Perform mathematical operations (Increment, Decrement) on numeric fields.
- Manage collections (Append to lists, Merge dictionaries).

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Batch Execution** | ✅ Yes | Execute multiple assignments in a single node. |
| **Conditional Rows** | ✅ Yes | Each assignment row can have its own `when` condition. |
| **Multi-Operator** | ✅ Yes | Supports Set, Clear, Increment, Decrement, Append, Merge, and Toggle. |
| **Data Normalization**| ✅ Yes | Integrated pipelines for cleaning and transforming data. |
| **Value Resolution** | ✅ Yes | Unified resolver for static values, formulas, and complex lookups. |

## Configuration

The Assignment action uses a grid-based interface where each row represents one mutation.

### 1. Target Path
Defines where the value will be stored.
- `doc.field_name`: Updates a field on the current document.
- `vars.variable_name`: Sets a temporary variable available for the rest of the rule execution.

### 2. Operator
Defines *how* the value is applied:
- **Set**: Replaces the current value with the new value.
- **Clear**: Removes the value (sets to `None` or empty).
- **Increment / Decrement**: Adds or subtracts from the current numeric value.
- **Append**: Adds a value to the end of a list/array.
- **Merge**: Merges a dictionary into the target dictionary.
- **Toggle**: Swaps a boolean value between `true` and `false`.

### 3. Value
The new value or operand. This can be:
- **Static Value**: A hardcoded string, number, or date.
- **Variable Path**: A reference to another field (e.g., `doc.base_amount`).
- **Formula**: A Python-based expression for calculations.
- **Data Pipeline**: A sequence of normalization steps (e.g., Trim → Uppercase).

### 4. Condition (When)
An optional expression that must evaluate to `true` for this specific assignment to run. This allows for complex "If-Else" logic within a single Assignment block.

## Best Practices

- **Use Variables for Clarity**: Instead of repeating a complex formula in multiple nodes, calculate it once and store it in a `vars.total_price` variable.
- **Sequential Logic**: Remember that assignments run from top to bottom. If row 2 depends on the result of row 1, it will work correctly.
- **Event Awareness**: FlexiRule prevents you from mutating `doc.*` fields during "After Save" or "On Submit" events to prevent database inconsistencies. Use "Before Save" for field updates.

## Common Mistakes

- **Incorrect Path**: Forgetting the `doc.` or `vars.` prefix. `status` will fail; `doc.status` will succeed.
- **Type Mismatch**: Trying to `Increment` a text field or `Append` to a number.
- **Infinite Loops**: Setting a field that triggers the same rule again (though FlexiRule has built-in cycle detection to catch this).
