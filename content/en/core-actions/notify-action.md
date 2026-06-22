---
title: Notify
description: Send emails, system notifications, or UI toasts.
weight: 20
aliases:
  - /docs/actions/notify/
---

# Notify Action

The **Notify** action is used to communicate information to users or external systems.

## Notification Types

### 1. Email
Send a formatted email to one or more recipients.
- **Recipients**: Use static email addresses or dynamic ones (e.g., `doc.owner`).
- **Templates**: Select from existing Frappe Email Templates or write custom content.
- **Attachments**: Attach the current document as a PDF.

### 2. System Notification
Create a notification within the Frappe Desk for a specific user or role. These appear in the notification bell icon.

### 3. UI Toast
Display a temporary popup message (Toast) to the user who triggered the rule.
- **Types**: Success, Info, Warning, or Error.
- **Note**: This only works for rules triggered by manual UI actions (e.g., clicking Save).

## Configuration Steps
1. **Select Type**: Choose how you want to notify.
2. **Define Content**: Write your message. You can use `{{ doc.name }}` to include data from the document.
3. **Set Recipients**: Choose who should receive the notification.
