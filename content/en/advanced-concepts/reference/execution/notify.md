---
title: 'Notify: Execution Semantics'
description: Technical runtime behavior and engine guarantees for the Notify action.
weight: 60
---

# Notify: Execution Semantics

## Purpose
The **Notify** action is a side-effect-oriented action responsible for dispatching messages through various communication channels. Its primary runtime intent is to ensure that message templates are correctly rendered against the execution context and delivered to the specified recipients or subsystems.

## Execution Lifecycle

1.  **Dispatch**: The `RuleEngine` identifies the node type as `notify` and dispatches execution to the `NotifyHandler` via the `HandlerRegistry`.
2.  **Plan Resolution**: The handler retrieves the compiled action plan, which contains serialized specifications for the message, subject, recipients, and attachments.
3.  **Mode Normalization**: The handler determines the delivery mode (Toast, System, Email, System Notification, or Provider).
4.  **Contextual Rendering**:
    -   The **Message** is rendered using the `Text Generator` specification.
    -   If applicable, the **Subject** is rendered using Jinja.
    -   **Recipients** are resolved from literals, field paths, or templates.
5.  **Subsystem Handover**: The rendered content and resolved metadata are passed to the corresponding Frappe subsystem (e.g., `frappe.sendmail`, `frappe.publish_realtime`).
6.  **Completion**: The action returns the rendered message (or record name) as the node result and identifies the next step in the rule flow.

## Context Visibility
The Notify action has read-only access to the entire execution context:
-   `doc`: The primary document triggering the rule.
-   `vars`: All context variables defined in the current execution scope.
-   `frappe`: Safe access to Frappe utilities (e.g., `frappe.utils.get_url_to_form`).

## Template Rendering Flow
Rendering is performed using `frappe.render_template` within a restricted context.
-   **Jinja Support**: Templates have access to the same context as the action itself.
-   **Strictness**: If a template fails to render due to syntax errors, the engine will raise a `Jinja` rendering error, which is caught by the global rule error handler.
-   **Recipients Spec**: Support for `list` sources (iterating over multiple items) or `literal/jinja` sources.

## Transaction Behavior
The Notify action interacts with transactions differently depending on the mode:

| Mode | Transaction Impact | Behavior |
| :--- | :--- | :--- |
| **Toast / System** | Non-transactional | Dispatched immediately via WebSocket or HTTP response; cannot be rolled back. |
| **Email** | Asynchronous / Queued | `frappe.sendmail` typically inserts into the `Email Queue` table. The email is sent after the current transaction commits. |
| **System Notification** | Transactional | Inserts a `Notification Log` document. If the rule transaction rolls back, the notification log is also rolled back. |
| **Provider** | Implementation Dependent | Behavior depends on the specific provider implementation (may be sync or async). |

## Failure Behavior
-   **Validation Errors**: Missing required fields (like email recipients) are caught during the rule's `validate` phase.
-   **Attachment Failures**: If a PDF attachment fails to generate (e.g., due to a print format error), the error is logged to `frappe.log_error`, but the email dispatch continues without the attachment.
-   **Unknown Modes**: If an invalid notification mode is provided, the handler raises a `frappe.throw`, halting execution.

## Idempotency
The Notify action is **not idempotent**. Executing the same Notify action multiple times will result in multiple emails being sent or multiple notifications being created. Use conditional logic (`Run If`) to prevent redundant notifications in re-entrant rules.

## Related Topics
- [Action Documentation]({{< relref "action-type/notify/" >}})
- [Architecture Reference]({{< relref "advanced-concepts/architecture/actions/notify.md" >}})

## Performance Notes
-   **Email Overhead**: While `frappe.sendmail` is generally fast (queuing), generating complex PDF attachments can be resource-intensive.
-   **Template Complexity**: Large Jinja templates or templates that perform complex logic can impact execution time.
-   **Realtime Dispatch**: Excessive use of `System` (realtime) notifications can increase WebSocket traffic for active users.
