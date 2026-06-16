---
title: 'Notify: Architecture Reference'
description: Internal implementation details and developer reference for the Notify
  action.
weight: 60
---

# Notify: Architecture Reference

## Purpose
The **Notify** action is implemented as a standard Action Handler that integrates with Frappe's communication and notification systems. It provides a unified interface for disparate messaging channels while abstracting the complexity of template rendering and recipient resolution.

## Class Structure

### `NotifyHandler(ActionHandler)`
-   **Location**: `flexirule/ruleflow/core/action_handlers/simple_actions.py`
-   **Responsibility**: Orchestrates the rendering and dispatch of notifications.
-   **Key Methods**:
    -   `execute(action, context, engine)`: The entry point for runtime execution.
    -   `validate(action, context)`: Ensures required configuration keys (recipients, providers) are present.
    -   `_normalize_mode(mode)`: Maps UI-friendly mode names to internal constants.
    -   `_render_from_spec(spec, context, ...)`: Resolves templates from various source types (Jinja, literal).

## Execution Pipeline

1.  **Plan Retrieval**: Handler calls `get_action_plan(engine.rule, action)` to get the pre-compiled execution metadata.
2.  **Mode Detection**: The delivery mode is extracted and normalized (e.g., `Email`, `Toast`).
3.  **Content Rendering**: The handler uses `_render_from_spec` to transform the `message_spec` and `subject_spec` into plain text using the current context.
4.  **Recipient Resolution**: For Email and Provider modes, `_resolve_recipients_from_spec` or `_resolve_value_from_spec` is used to determine the target addresses.
5.  **Integration Dispatch**:
    -   `Toast` -> `frappe.msgprint(..., alert=True)`
    -   `System` -> `frappe.publish_realtime("msgprint", ...)`
    -   `Email` -> `frappe.sendmail(...)`
    -   `System Notification` -> `frappe.get_doc({"doctype": "Notification Log", ...}).insert()`
    -   `Provider` -> `_send_via_provider(...)`

## Provider Architecture

The Notify action supports an extensible **Provider** system, allowing third-party apps to register custom notification backends (e.g., WhatsApp, SMS, Slack).

### `flexirule_notification_providers` Hook
Developers can register providers by adding a hook to their `hooks.py` file.

**Example Registration**:
```python
# your_app/hooks.py
flexirule_notification_providers = [
    {
        "slack": "your_app.notifications.providers.send_slack_message",
        "sms": "your_app.notifications.providers.send_sms_message"
    }
]
```

### Provider Implementation
A provider is a callable (function or method) that accepts the following arguments:

| Argument | Description |
| :--- | :--- |
| `recipient` | The resolved recipient identifier from the action config. |
| `message` | The fully rendered notification message. |
| `doc` | The current document object. |
| `context` | The full execution context dictionary. |
| `config` | The specific configuration dictionary for this action node. |

**Example Provider**:
```python
def send_slack_message(recipient, message, doc, context, config):
    # Implementation logic to call Slack API
    import requests
    requests.post(recipient, json={"text": message})
    return "sent"
```

## Context Mutation Model
The Notify action is strictly **Read-Only** regarding the Rule Context. It does not modify `doc` or `vars`. However, it may create side-effect records in the database (e.g., `Notification Log`, `Email Queue`, `Error Log`).

## Dependencies
-   `frappe.utils`: Used for URL generation and data formatting.
-   `frappe.render_template`: Used for Jinja processing.
-   `frappe.sendmail`: Core email dispatch engine.
-   `Notification Log`: Standard Frappe DocType for in-app notifications.

## Source Files
-   **Backend Handler**: `flexirule/ruleflow/core/action_handlers/simple_actions.py`
-   **Frontend Component**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/NotifyConfig.vue`
-   **Action Metadata**: `flexirule/ruleflow/core/contracts.py`

## Related Topics
- [Action Documentation]({{< relref "docs/actions/notify/_index.md" >}})
- [Execution Semantics]({{< relref "docs/reference/execution/notify.md" >}})

## Performance Considerations
-   **Synchronous vs. Asynchronous**: While the rule engine executes synchronously, modes like `Email` are effectively asynchronous as they rely on the Frappe Email Queue.
-   **Provider Latency**: Custom providers that make synchronous external API calls (like the Slack example above) will block the rule execution until the API responds. It is recommended to use `frappe.enqueue` within custom providers for high-latency operations.
