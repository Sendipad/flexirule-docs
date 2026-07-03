---
title: 'Stop: Architecture Reference'
description: Internal implementation details and developer reference for the Stop
  action.
weight: 80
---

# Stop: Architecture Reference

## Purpose
The **Stop** action provides a clean exit point from the rule execution loop. It is designed to be minimal and leverage standard Frappe exception handling for its `Error` mode.

## Class Structure

### `StopHandler(ActionHandler)`
-   **Location**: `flexirule/ruleflow/core/action_handlers/simple_actions.py`
-   **Responsibility**: Terminates the execution flow.
-   **Methods**:
    -   `execute(action, context, engine)`: Implementation of the terminal logic.

## Execution Pipeline

1.  **Operation Check**: `mode = (getattr(action, "operation", None) or "Success").strip()`
2.  **Success Path**: Returns `(None, None)`, which signals the `RuleEngine` to terminate the loop.
3.  **Error Path**:
    -   Retrieves `value_template`.
    -   Builds a template context containing `doc`, `vars`, and `frappe`.
    -   Calls `frappe.render_template`.
    -   Appends a `source_link` HTML snippet to the message for administrative traceability.
    -   Calls `frappe.throw(message, title=_("Rule Error"))`.

## Context Mutation Model
The Stop action is **Read-Only**. It never modifies the context. However, in `Error` mode, it causes a system-wide mutation by rolling back the current database transaction.

## Dependencies
-   `frappe.throw`: Used to raise `ValidationError` and stop the request.
-   `frappe.render_template`: Used for generating dynamic error messages.

## Source Files
-   **Handler**: `flexirule/ruleflow/core/action_handlers/simple_actions.py`
-   **Contract**: `flexirule/ruleflow/core/contracts.py`

## Related Topics
- [Action Documentation]({{< relref "advanced-reference/advanced-concepts/architecture/actions/stop.md" >}})
- [Execution Semantics]({{< relref "advanced-reference/advanced-concepts/reference/execution/stop.md" >}})
