---
title: Notify
weight: 50
description: Send alerts, emails, or system notifications.
---

# Notify

The **Notify** block is used to communicate with users. Whether it's an immediate alert in the browser or an automated email, this block handles all outgoing messages.

## Notification Modes

You can choose how the message is delivered:

-   **System Toast**: Shows a small popup message in the top-right corner of the browser. Best for immediate feedback during a save or update.
-   **Email**: Sends a formal email. You can specify recipients, subject lines, and use email templates.
-   **System Notification**: Adds an entry to the user's Frappe notification log (the bell icon).
-   **SMS / WhatsApp**: If configured, sends messages via integrated messaging services.

## Configuration

-   **Recipients**: Who should receive the message? You can select specific users, roles, or fields that contain email addresses (like the `owner` of a document).
-   **Message**: The content of your notification. You can use placeholders like `{{ doc.name }}` or `{{ doc.customer }}` to include real data from your automation.
-   **Attachments**: For email mode, you can automatically attach the current document (as a PDF) or other related files.

## Best Practices

-   **Don't Over-Notify**: Too many toast messages can be distracting. Use them only for critical information.
-   **Clear Messaging**: Make sure your messages are actionable. Instead of "Error occurred", use "Missing mandatory field: Cost Center".
-   **Dynamic Recipients**: Instead of hardcoding an email address, use a role like "Accounts Manager" to ensure the right people are notified even if staff change.
