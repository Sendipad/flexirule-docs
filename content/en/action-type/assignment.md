---
title: Set Value (Assignment)
description: Perform sequential batch state mutations on document fields and context variables.
weight: 50
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType", "Context Variable"]
---

# Set Value (Assignment) Action

The **Set Value** action (internal handler: `Assignment`) is the primary mechanism for state mutation in FlexiRule. It allows you to define a sequence of mutations—**Batch Assignments**—that run sequentially to update document fields or store internal rule state.

---

## 1. When to Use

Use the Set Value action when you need to:
- Update fields on the triggering document (e.g., set `workflow_state` to `"Approved"` or `posting_date` to today).
- Initialize or update temporary context variables (`@vars`) to store intermediate calculation results for downstream blocks.
- Perform numeric calculations (Increment, Decrement) on fields or variables.
- Append items to list variables or merge dictionary objects.
- Normalize and sanitize incoming text fields before saving.

---

## 2. Configuration

The Set Value configuration panel uses a sequential grid where each row represents one mutation step:

### Row Configuration Fields
- **Target Path**: Destination path (`doc.fieldname` for document fields or `vars.variable_name` for temporary context variables).
- **Operator**:
  - `Set`: Overwrites target with resolved value.
  - `Clear`: Resets target to `None` or empty.
  - `Increment`: Adds numeric value to existing total.
  - `Decrement`: Subtracts numeric value from existing total.
  - `Append`: Appends item to a list/array variable.
  - `Merge`: Merges key-value dictionary into target object.
  - `Toggle`: Inverts boolean value (`true` <-> `false`).
- **Value Input**: Configured via the **Smart Value Selector** (`Static Value`, `@ Variable`, or `/ Resolver`).
- **Condition (`when`)**: Optional boolean expression evaluated before running the specific row mutation.

---

## 3. Output

- **Context Mutation**: Directly mutates `@doc` or `@vars` in the execution context.
- **Return Contract**: Returns a dictionary of applied mutations: `{"mutations": [{"target": "doc.status", "value": "Approved"}, ...]}`.
- **Next Node Execution**: Execution immediately proceeds down the primary outbound edge.

---

## 4. Example

### Scenario: Calculate Customer Discount and Loyalty Points

1. **Row 1**:
   - **Target**: `vars.discount_rate`
   - **Operator**: `Set`
   - **Value**: `/math_formula` (`doc.loyalty_points * 0.01`)
   - **When**: `doc.loyalty_points > 100`

2. **Row 2**:
   - **Target**: `doc.discount_amount`
   - **Operator**: `Set`
   - **Value**: `/math_formula` (`doc.grand_total * vars.discount_rate`)

3. **Row 3**:
   - **Target**: `doc.workflow_state`
   - **Operator**: `Set`
   - **Value**: `Discount Applied`

---

## 5. Performance Notes

- **In-Memory Operations**: Mutations to `@doc` and `@vars` occur strictly in-memory during rule execution and add zero database overhead.
- **Event Timing**: Mutating `@doc` during `Before Save` or `Validate` events automatically persists changes when Frappe saves the document without triggering additional database writes.
- **Batch Processing**: Multiple assignments in a single Set Value block execute sequentially in $O(N)$ time with minimal overhead.

---

## 6. Common Mistakes

- **Missing Prefix**: Omitting `doc.` or `vars.` (e.g., typing `status` instead of `doc.status`).
- **Mutating After Submit**: Attempting to update read-only `@doc` fields on `After Save` or `On Submit` events without using an **Update Record** block.
- **Uninitialized Variable Use**: Referencing `@vars.discount_rate` in row 2 when row 1 was skipped due to a false `when` condition.
