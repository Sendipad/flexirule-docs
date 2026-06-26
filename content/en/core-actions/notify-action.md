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
- **Recipients**: Use specific email addresses or dynamic ones like the document owner (`doc.owner`).
- **Templates**: Select from your existing system Email Templates or write custom content.
- **Attachments**: You can automatically attach the current document as a PDF.

### 2. System Notification
Create a notification within the Desk for a specific user. These appear in the notification bell icon.

### 3. UI Toast
Display a temporary popup message (Toast) to the user who triggered the rule.
- **Types**: Success, Info, Warning, or Error.
- **Best For**: Providing immediate feedback during manual actions.

## Configuration Steps
1. **Choose Type**: Select how you want to send the notification.
2. **Write Message**: Compose your message. Use `{{ doc.name }}` to include data from the record.
3. **Set Recipients**: Choose who should receive the alert.
