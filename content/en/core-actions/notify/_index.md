---
title: Notify
weight: 20
description: Send alerts, emails, and system notifications.
---

# Notify

The **Notify** block is your primary tool for communicating with users when a rule runs.

## Notification Types

### 1. Toast Alert
A small, non-intrusive popup that appears in the corner of the user's screen. Great for immediate feedback during a "Before Save" event.

### 2. Email
Sends a standard email. You can specify recipients, subject, and use a template or write custom content.

### 3. System Notification
Creates a notification in the Frappe notification center (the bell icon).

## Configuration

### Message Content
You can use "Placeholders" to include data from your document in the message.
- Example: `Hello {{ doc.owner }}, your order #{{ doc.name }} has been approved.`

### Recipients
- **Specific Users**: Select from your user list.
- **Dynamic**: Send to the "Owner" of the document, or an email address found in a previous "Find Record" block (e.g., `{{ target_customer.email_id }}`).

## Best Practices
- **Don't Spam**: Use Toast alerts for things the user needs to know *right now*. Use Emails for things that need to be tracked or seen later.
- **Clear Subjects**: When sending emails, always include the document ID in the subject so users can easily find the related record.
