---
title: Notify
description: Send automated notifications via Email, WhatsApp, or System Alerts.
weight: 20
aliases:
  - /docs/actions/notify/
---

# Notify Action

The **Notify** action allows your rule flows to communicate with users or customers automatically.

## When to Use
- **Approvals**: Alert a manager when a high-value order is ready for review.
- **Customer Updates**: Send a WhatsApp or Email when a shipment is dispatched.
- **System Alerts**: Notify an administrator of a rule failure or an unusual data condition.

## Communication Channels

FlexiRule supports multiple ways to send messages:

- **Email**: Send standard emails using Frappe's Email Templates.
- **System Notification**: Create a notification inside the Frappe desk (the bell icon).
- **WhatsApp**: Send messages via integrated WhatsApp providers.
- **SMS**: Send text messages through your configured SMS gateway.

## Configuration

### 1. Choose the Channel
Select how you want to send the message.

### 2. Set Recipients
You can send notifications to:
- **Specific Users**: Select a user from the list.
- **Dynamic Fields**: Use a field from the document, like `doc.contact_email`.
- **Roles**: Send to everyone with a specific role (e.g., all "Purchase Managers").

### 3. Define the Message
- **Templates**: Select a predefined Email Template to keep branding consistent.
- **Custom Content**: Write a message directly in the action. You can use dynamic variables like `Hello {{ doc.customer }}, your order #{{ doc.name }} is ready.`

## Best Practices
- **Use Templates**: Predefined templates are easier to maintain and support multiple languages.
- **Don't Over-Notify**: Group notifications where possible to avoid cluttering your users' inboxes.

---
**Advanced**: For details on how notification jobs are queued, see the [Notify Architecture]({{< relref "advanced-reference/architecture/actions/notify.md" >}}).
