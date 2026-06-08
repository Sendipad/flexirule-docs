---
title: "Action Implementation"
description: "Technical reference for backend action handlers and execution mechanics."
weight: 50
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

## Technical Constraints

- **Deep Document Paths**: The v1 engine supports root-level document fields and nested dictionary variables, but does not yet support deep dot-notation paths on documents (e.g., `doc.items.0.qty`).
- **Idempotency**: Operators like `set` and `clear` are idempotent, while `increment` and `append` are not.
- **Transaction Safety**: All `doc.*` mutations are applied to the in-memory document object and depend on the rule's transaction policy for database persistence.
