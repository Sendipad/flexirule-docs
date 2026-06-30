---
title: Notify
description: Send alerts, emails, or messages to users.
weight: 20
---

# Notify

The **Notify** block is used to send information to users. You can use it to send emails, show on-screen alerts, or send system notifications.

## Notification Types

- **Pop-up Message (Toast)**: A small, temporary message that appears in the corner of the user's screen. Great for immediate feedback.
- **Email**: Sends a full email to one or more recipients. You can use email templates or write a custom message.
- **System Notification**: Creates a notification in the system's notification center (the bell icon).

## How to use Notify

1. **Choose the Type**: Select how you want to send the notification.
2. **Write your Message**: Use "curly braces" to include dynamic data from the record.
   - Example: `Hello {{ doc.owner }}, your order #{{ doc.name }} has been approved!`
3. **Select Recipients**:
   - For **Email**, you can choose specific users, email addresses, or roles.
   - For **Pop-up Messages**, the notification is sent to the user who triggered the rule.

## Example: Approval Alert

When a manager approves a request, you can send a quick pop-up to the person who submitted it:
- **Type**: `Pop-up Message`
- **Message**: `✅ Your request {{ doc.name }} was approved by {{ frappe.session.user }}!`
