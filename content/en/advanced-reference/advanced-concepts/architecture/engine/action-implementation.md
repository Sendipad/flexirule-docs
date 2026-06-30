---
title: Action Implementation
description: Technical reference for backend action handlers and execution mechanics.
weight: 20
---

# Action Implementation Reference

This page provides a technical deep-dive into how FlexiRule actions are implemented in the backend and processed by the execution engine.

---

## Assignment Action Implementation

The Assignment action handles batch state mutation of the execution context.

### Backend Handler
- **Class**: `flexirule.ruleflow.core.action_handlers.assignment.AssignmentHandler`
- **Logic**: Iterates through a configured array of assignment rows, resolving values and applying operators sequentially.

### Path Protection & Validation
To maintain system integrity, the engine enforces strict validation on assignment targets:
- **Namespace Protection**: The `_validate_target_path` method blocks writes to `meta.*`, `frappe.*`, `rule.*`, and `caller.*`.
- **Allowed Prefixes**: Targets must start with either `doc.` (document mutation) or `vars.` (context variable mutation).
- **Event Restrictions**: Mutations to `doc.*` are restricted during specific lifecycle events (e.g., `after_save`, `on_update`) to prevent recursive hook loops. These are defined in the `AFTER_EVENT_MUTATION_BLOCKLIST`.

### Operator Registry
Operators are implemented as strategy classes inheriting from `AssignmentOperator`.

| Key | Implementation Class | Logic |
| :--- | :--- | :--- |
| `set` | `SetOperator` | Direct replacement. |
| `clear` | `ClearOperator` | Returns type-aware null value (`None`, `[]`, `{}`, `""`). |
| `increment` | `IncrementOperator` | `float(current) + float(operand)`. |
| `decrement` | `DecrementOperator` | `float(current) - float(operand)`. |
| `append` | `AppendOperator` | `[*current_value, operand_value]`. |
| `merge` | `MergeOperator` | `dict.update()` logic for JSON/Dict types. |
| `toggle` | `ToggleOperator` | Flips truthy/falsy states (1/0). |

### Value Resolution
Assignments use the `ValueResolver` service (`flexirule.ruleflow.core.value_resolver`). Resolvers are pre-compiled on rule save and cached in the `AssignmentHandler` using an LRU cache keyed by the configuration JSON.

---

## AI Schema Reference

For AI-assisted rule generation or programmatic builders, the following JSON/YAML schema defines the Assignment node structure:

```yaml
action_type: "Assignment"
config:
  rows:
    - target: string           # Required: 'doc.path' or 'vars.path'
      operator: string         # Required: set|clear|increment|decrement|append|merge|toggle
      value: any               # Resolved at runtime
      when_expression: string  # Optional: Python guard condition
```

---

## State Mutation Model

FlexiRule uses a **Direct Mutation Model** for document fields and local variables.

1.  **In-Memory Buffer**: When an assignment target starts with `doc.`, the engine modifies the in-memory document object. It does not perform an immediate `db.sql` or `doc.db_set` operation unless explicitly handled by the trigger context.
2.  **Variable Lifecycle**: Targets starting with `vars.` are stored in the `execution_context`. These variables are transient and are destroyed once the rule execution path terminates or the maximum iteration limit is reached.
3.  **Sequential Visibility**: Because mutations are applied to the active context, Row 2 of an Assignment action "sees" the changes made by Row 1. This is critical for cumulative calculations.

## Execution Guarantees

-   **Determinism**: Action rows are processed in a strict sequential order (index-based). The engine guarantees that `Row N` will always execute before `Row N+1`.
-   **Atomicity**: An Assignment action node is **not** inherently atomic at the database level. If Row 3 fails after Row 1 and 2 succeed, Row 1 and 2's mutations remain in the in-memory `doc` object. Database atomicity is governed by the parent Rule's transaction policy (e.g., wrapping the entire rule in a `frappe.db.savepoint`).
-   **Cycle Prevention**: The engine tracks node visits to detect infinite loops.

## Reactivity & Trigger Loops

FlexiRule does **not** automatically suppress database hooks during `doc.*` mutation. This creates a risk of **Reactive Trigger Loops**:
1. Rule A triggers on `doc.status` change.
2. Rule A uses Assignment to set `doc.status = "Processed"`.
3. Frappe's `doc.save()` (triggered by the event context) re-invokes Rule A.

**Mitigation**: Developers should use "Watched Fields" or explicit conditions to ensure a rule only executes when specific, non-circular state changes occur.

## Type System & Validation

The Assignment engine uses **Loose Runtime Typing** with operator-specific coercion:
- **Numeric Operators** (`increment`, `decrement`): Explicitly cast both current value and operand to `float`.
- **Collection Operators** (`append`, `merge`): Require the target or operand to be a `list` or `dict`.
- **Coercion**: Non-numeric strings passed to a numeric operator will raise a `ValueError` at runtime. Proactive schema validation is currently limited to the UI layer.

## Error Handling

If an individual row in an Assignment fails (e.g., a division by zero in a formula or a type mismatch):
1. The `AssignmentHandler` raises a `MethodExecutionError`.
2. The `RuleEngine` catches the exception and applies the **Action Error Policy** (Stop, Continue, Retry, or Rollback).
3. If "Continue" is selected, subsequent rows in the *same* Assignment node are skipped, and the engine moves to the next node in the graph.

---

## Technical Constraints

- **Deep Document Paths**: The v1 engine supports root-level document fields and nested dictionary variables, but does not yet support deep dot-notation paths on documents (e.g., `doc.items.0.qty`).
- **Idempotency**: Operators like `set` and `clear` are idempotent, while `increment` and `append` are not.
- **Transaction Safety**: All `doc.*` mutations are applied to the in-memory document object and depend on the rule's transaction policy for database persistence.
