---
title: "Assignment"
description: "Batch state mutation and variable management."
weight: 20
aliases:
  - /docs/actions/assignment/
capabilities:
  category: data
  mutation: read-write
  targets:
    - document
    - context
  triggers:
    - any
  flow: linear
  transaction:
    - transactional
badges:
  - core
---

# Assignment Action

Keywords: assignment, mutation, state change, variables, context, increments

## Audience
- Configuration Users
- Business Analysts
- Developers

## Concept & Purpose

The **Assignment** action is the primary mechanism for mutating state within a rule. It allows you to update fields on the current document (`doc.*`) or manage temporary variables (`vars.*`) used for logical flow control and data transformation.

Unlike simple field-setting, the Assignment action supports **batch operations**, allowing multiple mutations to be executed sequentially within a single node.

{{< info >}}
**Migration Note:** The "Assignment" action type fully replaces the legacy **Set Value** node from older versions. Existing "Set Value" configurations will automatically map to the `Set` operator.
{{< /info >}}

---

## Configuration Guide

The Assignment UI is organized into a list of sequential mutation rows. Each row consists of the following fields:

### 1. Target
The path to the field or variable being updated.
- **Document Fields**: Must start with `doc.` (e.g., `doc.status`, `doc.total_amount`).
- **Context Variables**: Must start with `vars.` (e.g., `vars.is_qualified`, `vars.counter`).
- **Validation**: System paths (e.g., `meta.*`, `frappe.*`, `rule.*`) are protected and cannot be mutated.

### 2. Operator
Defines the logic used to apply the new value. See the [Operators & Data Types](#operators--data-types) section for details.

### 3. Value
The data to be applied via the operator. This field uses the **Unified Value Resolver**, supporting:
- **Static Values**: Fixed strings, numbers, or booleans.
- **Variable Mapping**: Linking to another `doc` or `vars` path.
- **Formula Resolver**: No-code mathematical or date transformations.
- **Jinja Templates**: Dynamic string interpolation with full context access.

### 4. Run If (Optional)
A row-level execution guard. If provided, the specific assignment row will only execute if this Python expression evaluates to `True`.

---

## Operators & Data Types

The engine enforces strict type safety for specific operators to ensure data integrity.

| Operator | Label | Supported Target Types | Description |
| :--- | :--- | :--- | :--- |
| `set` | **Set Value** | All | Replaces the target with the new value. |
| `clear` | **Clear** | All | Resets the target (None, `""`, `[]`, or `{}`). |
| `increment` | **Increment By** | Numeric (Int, Float, Currency) | Adds the operand to the current value. |
| `decrement` | **Decrement By** | Numeric (Int, Float, Currency) | Subtracts the operand from the current value. |
| `append` | **Append To List** | Tables, Lists | Adds an item to the end of a collection. |
| `merge` | **Merge Object** | JSON, Objects, `vars` | Merges keys from a dictionary into the target. |
| `toggle` | **Toggle Boolean** | Check (Boolean) | Flips a truthy value to `0` and falsy to `1`. |

---

## Execution Lifecycle

### Conceptual Flow
1. **Trigger**: The node is reached in the rule graph.
2. **Iteration**: The engine iterates through each assignment row defined in the configuration.
3. **Guard Check**: If a "Run If" condition exists, it is evaluated. If `False`, the row is skipped.
4. **Resolution**: The "Value" is resolved using the execution context (e.g., calculating a formula).
5. **Mutation**: The selected "Operator" applies the resolved value to the "Target" path.
6. **Logging**: Each successful mutation is recorded in the execution trace.

### Developer Reference: Under the Hood

The Assignment action is handled by the `AssignmentHandler` class in the backend.

- **Backend Class**: `flexirule.ruleflow.core.action_handlers.assignment.AssignmentHandler`
- **Context Mutation**: Mutations are applied directly to the `context` dictionary. For `doc.*` paths, the handler uses `doc.set(field, value)` to ensure Frappe's field-level change tracking is triggered.
- **Path Protection**: The `_validate_target_path` method prevents writes to protected namespaces (`meta`, `frappe`, `rule`, `caller`).
- **Event Restrictions**: To prevent "Hook Loops," document mutations (`doc.*`) are blocked during `after_save` and `on_update` events by the `AFTER_EVENT_MUTATION_BLOCKLIST`.
- **Value Resolution**: Evaluation is performed by the `ValueResolver` service, which pre-compiles Jinja and Python expressions for high-performance execution.

---

## Practical Examples

### 1. Sales Order: Tiered Discounting
**Scenario**: Apply a "High Volume" tag and a 5% discount if the order total exceeds 10,000.
- **Row 1**:
    - **Target**: `doc.custom_tags`
    - **Operator**: `append`
    - **Value**: `High Volume`
    - **Run If**: `doc.grand_total > 10000`
- **Row 2**:
    - **Target**: `doc.discount_percentage`
    - **Operator**: `set`
    - **Value**: `5`
    - **Run If**: `doc.grand_total > 10000`

### 2. Stock Reconciliation: Inventory Buffer
**Scenario**: Increment a virtual "Buffer Allocation" variable whenever a specific stock item is processed.
- **Target**: `vars.inventory_buffer`
- **Operator**: `increment`
- **Value**: `1`
- **Run If**: `doc.item_code == "RAW-MAT-001"`

### 3. Status Management: Approval Toggling
**Scenario**: Toggle an internal "Review Required" flag and reset the approval state.
- **Row 1**:
    - **Target**: `doc.review_required`
    - **Operator**: `toggle`
- **Row 2**:
    - **Target**: `doc.approval_status`
    - **Operator**: `clear`

---

## AI Reference (Action Metadata)

For AI-assisted generation or programmatic interaction, the Assignment node follows this schema:

```yaml
action_type: "Assignment"
config:
  rows:
    - target: string      # Path starting with 'doc.' or 'vars.'
      operator: string    # set, clear, increment, decrement, append, merge, toggle
      value: any          # Resolved via ValueResolver
      when_expression: string # Optional Python guard
```

---

## Common Mistakes

- **Circular Loops**: Mutating a field (e.g., `doc.total`) that triggers the same rule again.
- **Type Mismatches**: Using `increment` on a string field or `toggle` on a numeric field.
- **After-Save Mutation**: Attempting to update `doc.*` in an `after_save` trigger. These mutations will fail to persist as the database transaction is already finalizing.
- **Deep Document Paths**: Currently, `doc.child_table.0.field` notation is not supported. Use a [Loop]({{< relref "docs/actions/loop" >}}) action for child table mutations.

---

## Related Topics
- [Variables Reference]({{< relref "docs/reference/glossary.md" >}})
- [Formula Resolver]({{< relref "docs/architecture/ui/action-config-panels.md#1-valueresolvercontrol" >}})
- [Execution Engine]({{< relref "docs/architecture/engine/execution-engine.md" >}})
