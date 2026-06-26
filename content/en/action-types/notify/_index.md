---
title: Notify
description: Communication engine for emails, system alerts, and real-time UI messaging.
weight: 20
entity_kind: action_operation
category: communication
mutation: false
targets: ["User", "Email", "System Notification"]
---

# Notify Action

The **Notify** action is FlexiRule's multi-channel communication node. It allows you to send information to users via various protocols, from simple browser alerts to formatted HTML emails and external service providers.

## Purpose

Use the Notify action to:
- Alert users of important events (e.g., "High-value order submitted").
- Send automated confirmations to customers.
- Create internal "ToDo" style notifications in the Frappe Desk.
- Provide real-time feedback to the user currently interacting with the system.

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Multi-Channel** | ✅ Yes | Email, System Notification, Toast, Real-time, and custom Providers. |
| **Jinja Templates** | ✅ Yes | Full support for Jinja2 in messages, subjects, and recipient fields. |
| **Dynamic Attachments**| ✅ Yes | Automatically attach a PDF version of the triggering document. |
| **Custom Providers** | ✅ Yes | Extendable via hooks for SMS, Slack, WhatsApp, etc. |

## Notification Modes

### 1. Email
Sends a standard email via Frappe's email queue.
- **Recipients**: Can be a list of emails or dynamic paths (e.g., `doc.contact_email`).
- **Subject/Message**: Supports Jinja templates with access to `doc` and `vars`.
- **Attach PDF**: Generates and attaches the PDF version of the triggering document.

### 2. System Notification
Creates a record in the **Notification Log** Doctype.
- These appear in the notification bell icon in the Frappe Desk.
- Best for internal alerts that require a permanent record.

### 3. UI Toast
Displays a temporary "alert" popup in the user's browser.
- **Note**: This only works for synchronous rules triggered by user actions. It has no effect for background jobs or scheduled rules.

### 4. Real-time (System)
Publishes a message to the user's current session via Socket.io.
- Useful for non-intrusive background updates while the user is working.

### 5. Provider
Dispatches the notification to a custom-defined provider (e.g., a Slack integration).
- Providers are registered via the `flexirule_notification_providers` hook in custom apps.

## Configuration

The Notify action configuration changes based on the selected **Mode**.

- **Subject**: (Email/System) The title of the notification.
- **Message**: The body of the notification. Supports HTML and Jinja.
- **Recipients/For User**: Who receives the message. Supports logic expressions.

## Best Practices

- **Avoid Spam**: Use **Condition** nodes before Notify actions to ensure notifications only go out when truly necessary.
- **Traceability**: FlexiRule automatically appends a link to the "Source Rule" at the bottom of notifications to help administrators find the logic responsible for the message.
- **Use Variables**: If you need to include calculated data, use an **Assignment** node to store it in a variable first, then reference it in your message via `{{ vars.my_variable }}`.

## Common Mistakes

- **Invalid Recipients**: Ensure the recipient field evaluates to a valid email address or user ID.
- **Jinja Syntax Errors**: A typo in `{{ doc.field_name }}` will cause the notification to fail. Use the **Test Run** feature to verify your templates.
