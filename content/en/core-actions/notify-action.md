---
title: Notify Action
description: Send emails, system alerts, or browser notifications.
weight: 60
aliases:
  - /docs/actions/notify/
---

# Notify Action

The **Notify** action allows your rules to communicate with users. You can send emails, persistent system alerts, or quick browser notifications.

## Notification Types

### 1. Toast (Browser Alert)
Sends a quick, temporary message that pops up in the corner of the user's browser.
- **Best For**: Immediate feedback, like "Order processed successfully!"
- **Visibility**: Only seen by the person currently using the system.

### 2. Email
Sends a standard email to one or more recipients.
- **Best For**: Official documents, external notifications, and detailed updates.
- **Configuration**: You can specify recipients, subjects, and use templates for the email body.

### 3. System Notification
Creates a persistent alert in the user's Notification Log (the bell icon in Frappe).
- **Best For**: Tasks that need attention later or internal team alerts.

### 4. Provider (Third-Party)
Allows you to send messages through external services like SMS, Slack, or WhatsApp if they are configured in your system.

## Best Practices
- **Be Helpful**: Include specific details like Order IDs or Customer names in your messages so users know exactly what the notification is about.
- **Don't Overdo It**: Avoid sending too many Toast notifications, as they can become distracting.
- **Use Email for Record-Keeping**: For important milestones, use Email or System Notifications so there is a history of the communication.
