---
title: Notify
description: Send automated alerts via email, system notifications, or UI messages.
weight: 80
entity_kind: action_operation
category: communication
mutation: false
targets: ["Email", "System Notification", "UI Message"]
---

# Notify Action

The **Notify** action is the primary communication hub in FlexiRule. It allows you to inform users and external stakeholders about business events through multiple channels including Email, System Notifications, and real-time UI Messages (Toasts/Alerts).

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Multi-Channel** | ✅ Yes | Supports Email, System Notification, UI Message (Toast/Alert). |
| **Jinja Templates** | ✅ Yes | Use `{{ doc.name }}` or `{{ vars.my_var }}` in subjects and messages. |
| **Dynamic Recipients**| ✅ Yes | Send to specific users, roles, or email addresses from variables. |
| **Attachments** | ✅ Yes | Attach generated PDFs of documents or previous query results. |

## Modes of Operation

### 1. Email Notification
Sends an email through the Frappe Email Queue.
- **Recipients**: Static addresses, Role-based, or Dynamic (e.g., `doc.contact_email`).
- **Templates**: Full Jinja2 support for body and subject.
- **Print Format**: Can automatically attach a PDF version of the document using a specific Print Format.

### 2. System Notification
Creates a standard Frappe "Notification Log" entry for a specific user.
- **Visibility**: Appears in the user's notification bell icon in the Frappe toolbar.
- **Linkable**: Can link directly back to the document that triggered the rule.

### 3. UI Message (Toast / Alert)
Displays a message directly in the user's browser in real-time.
- **Toast**: A non-intrusive popup in the corner (Success, Info, Warning, Error).
- **Alert**: A modal dialog that the user must acknowledge.
- **Limitation**: This only works for rules triggered by UI events (e.g., `Before Save` from the form), not for background scheduled rules.

## Configuration

- **Channel**: Select Email, System, or UI.
- **Subject/Title**: The header of the notification.
- **Message**: The main content (supports HTML and Jinja).
- **Recipients**: Define who receives the message. Supports comma-separated lists and dynamic resolvers.

## Execution Semantics

1.  **Template Rendering**: The engine renders the subject and message templates using the current execution context.
2.  **Recipient Resolution**: All dynamic recipients are resolved into real email addresses or user IDs.
3.  **Dispatch**: The notification is handed off to the relevant Frappe subsystem.
    - **Email**: Pushed to the `Email Queue` for background sending.
    - **UI**: Emitted to the user's active session.
4.  **Flow Continuation**: The rule continues to the next node immediately after dispatching (asynchronous dispatch).

## Best Practices

- **Avoid Spam**: Use **Trigger Conditions** or **Check** blocks to ensure notifications only go out when truly necessary.
- **Dynamic Context**: Include relevant details like the document name or the specific change that occurred (using `old_doc`) to make the notification helpful.
- **Background Safety**: Remember that UI Messages will not show up if the rule is triggered by a background worker or an API call.

## Common Mistakes

- **Broken Jinja**: Forgetting a closing bracket `}}` in a template will cause the notification to fail or show raw code.
- **Empty Recipients**: If the recipient variable (e.g., `doc.owner`) is empty, the notification will be skipped without stopping the rule.
