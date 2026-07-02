---
title: Stop and Error Handling
description: Terminate rule execution silently or raise validation errors to the user.
weight: 100
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Rule Execution", "Validation Error"]
---

# Stop and Error Handling Action

The **Stop** and **Raise Error** actions are terminal nodes that control how a rule flow concludes. They are essential for implementing validation logic and early exits.

## Purpose

Use these actions to:
- **Silently Terminate**: Stop the rule execution without any message (e.g., "If Category is not relevant, Stop").
- **Enforce Validation**: Block a document save or submission with a custom error message.
- **Rollback Changes**: Stop the current database transaction to prevent invalid data from being saved.

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Terminal** | ✅ Yes | No next steps are possible after this node. |
| **Custom Messages** | ✅ Yes | Supports Jinja templates for dynamic error messages. |
| **Transaction Control**| ✅ Yes | "Error" mode triggers a database rollback. |
| **Traceability** | ✅ Yes | Automatically appends a link to the "Source Rule" in error popups. |

## Modes of Operation

### 1. Success (Silent Stop)
The rule finishes immediately and successfully.
- **Behavior**: No further nodes are executed. Any changes made by previous nodes in the graph are **committed** to the database.

### 2. Error (Raise Error)
The rule stops and throws a `frappe.ValidationError`.
- **Behavior**: A standard Frappe error popup appears with your message. The current database transaction is **rolled back**, meaning any changes made by previous nodes in the same rule are cancelled.
- **Message**: You can use Jinja to make the error helpful:
  ```jinja
  Cannot submit order {{ doc.name }}: The grand total must be at least {{ vars.min_amount }}.
  ```

## Configuration

- **Operation/Mode**: Choose between "Success" or "Error".
- **Error Message**: (Only for Error mode) The template for the message shown to the user.
- **Error Title**: (Optional) A custom title for the error popup.

## Best Practices

- **Provide Clear Messages**: When raising an error, tell the user exactly *why* the rule stopped and what they can do to fix it.
- **Use for Guard Clauses**: Use a **Condition** followed by a **Stop** node at the beginning of your rule to "exit early" if the document doesn't need processing. This saves system resources.
- **Validation First**: Perform all your checks and "Raise Error" nodes before you perform any "Update Record" actions that have side effects.

## Common Mistakes

- **Stopping vs. Ending**: You don't *need* a Stop node at every branch. If a branch simply ends without a connection, FlexiRule treats it as a successful silent stop automatically.
- **Rollback Confusion**: Remember that "Error" mode rolls back the *entire* rule's changes. If you want to log an error but keep the changes, use a **Notify** (Toast) action followed by a **Stop (Success)** instead.
