---
title: "Stop: Execution Semantics"
description: "Technical runtime behavior and engine guarantees for the Stop action."
---

# Stop: Execution Semantics

## Purpose
The **Stop** action is the primary mechanism for flow termination within the FlexiRule engine. It allows a rule to declare a terminal state, either signaling a successful early exit or a hard validation failure.

## Execution Lifecycle

1.  **Dispatch**: The `RuleEngine` encounters a node with `node_type: stop` and invokes the `StopHandler`.
2.  **Mode Resolution**: The handler identifies the `operation` as either `Success` or `Error`.
3.  **Terminal Path**:
    -   **Success Mode**: The handler returns `(None, None)`. The `RuleEngine` interprets a `None` next step as a successful completion of the flow.
    -   **Error Mode**:
        1.  The `value_template` is retrieved.
        2.  The engine renders the template using the current `context`.
        3.  A `frappe.ValidationError` is raised with the rendered message and a traceability link to the source rule.
4.  **Engine Cleanup**: The engine halts all further node processing for the current rule.

## Context Visibility
The Stop action has read-only access to:
-   `doc`: The triggering document.
-   `vars`: All calculated variables.
-   `engine.rule.name`: Used for creating the traceability link in error messages.

## Transaction Behavior
The transaction behavior of the Stop action depends entirely on its mode:

-   **Success**: The action has no impact on the current database transaction. The transaction continues as normal and will commit when the overall rule execution (and any other triggered rules) finishes successfully.
-   **Error**: Raising a `frappe.ValidationError` triggers a standard database **Rollback**. Any changes made by previous nodes in the same rule flow (e.g., [Assignment]({{< relref "docs/actions/assignment" >}}) updates to `doc`) will be reverted.

## Failure Behavior
If the Jinja template in the error message fails to render, the engine will raise a secondary rendering error. However, since the intent was already to stop with an error, the result is still a termination of the flow and a rollback of the transaction.

## Idempotency
The Stop action is inherently idempotent in **Success** mode. In **Error** mode, it will consistently raise an error and prevent the transaction from committing, making it effectively idempotent as it prevents state change.

## Performance Notes
The Stop action is extremely lightweight. In `Success` mode, it involves a simple return statement. In `Error` mode, it involves a single Jinja rendering and a standard Python exception.

## Related Topics
- [Action Documentation]({{< relref "docs/actions/stop/index.md" >}})
- [Architecture Reference]({{< relref "docs/architecture/actions/stop.md" >}})
