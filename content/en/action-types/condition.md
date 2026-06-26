---
title: Condition
description: Evaluate complex logic gates to determine the execution path.
weight: 40
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
---

# Condition Action (Check)

The **Condition** action (referred to as **Check** in user-first documentation) is the primary decision-making node in FlexiRule. it evaluates one or more logical expressions and directs the flow to either the **True** (Success) or **False** (Failure) branch.

## Purpose

Use the Condition action to:
- Validate data before proceeding (e.g., "Is the Sales Order date in the future?").
- Branch logic based on field values (e.g., "If Category is 'Electronics', go to Step A, else go to Step B").
- Evaluate complex business rules involving multiple fields and child tables.

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Nested Groups** | ✅ Yes | Support for recursive AND/OR logic groups. |
| **Collection Logic**| ✅ Yes | Check if **Any**, **All**, or **None** of the rows in a child table meet a criteria. |
| **Fast Execution** | ✅ Yes | Conditions are pre-compiled into optimized Python strings. |
| **Cross-Context** | ✅ Yes | Compare `doc` fields against `vars`, `session` user, or global constants. |

## Configuration

### 1. Condition Groups
Conditions are organized into groups. Each group has a logical operator:
- **ALL (AND)**: Every condition in the group must be true.
- **ANY (OR)**: At least one condition in the group must be true.
- **NONE (NOT)**: No conditions in the group can be true.

### 2. Simple Conditions
A simple condition consists of:
- **Field/Subject**: The value being checked (e.g., `doc.status`).
- **Operator**: The comparison logic (e.g., `Equals`, `Contains`, `Is Set`, `Matches Regex`).
- **Value/Object**: The criteria to check against.

### 3. Collection Evaluations (New in V2)
You can now evaluate child tables (collections) directly:
- **Target**: A child table field (e.g., `doc.items`).
- **Evaluation**: "At least one row matches", "Every row matches", "No rows match".
- **Criteria**: A nested set of conditions applied to each row in the collection.

## Execution Semantics

1.  **Evaluation**: The engine evaluates the compiled expression against the current context.
2.  **Branching**:
    - If `True`: The engine follows the connection labeled **True** (next_step_if_true).
    - If `False`: The engine follows the connection labeled **False** (next_step_if_false).
3.  **Default Behavior**: If a branch is not connected, the rule execution finishes successfully at that node.

## Best Practices

- **Flatten Logic**: While FlexiRule supports deeply nested groups, keeping conditions shallow makes them easier for others to read.
- **Check for "Set"**: Before comparing a field value, use the "Is Set" operator if the field might be empty, to avoid unexpected results.
- **Visual Feedback**: During a Test Run, FlexiRule highlights the path taken, allowing you to see exactly why a condition evaluated the way it did.

## Common Mistakes

- **Comparing Strings and Numbers**: Ensure the types match. Comparing a string "100" to a number 100 might fail depending on the operator.
- **Empty Groups**: An empty "ALL" group typically evaluates to `True`, while an empty "ANY" group evaluates to `False`.
