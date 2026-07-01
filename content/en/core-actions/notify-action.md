---
title: Notify
description: Send emails or system notifications based on your rules.
weight: 20
aliases:
  - /docs/action-types/notify/email/
---

# Notify

The **Notify** block allows you to send automated messages, such as emails, when your rule logic is triggered.

## Why use it?
Communication is a key part of most business processes. Use this block to:
- Confirm an order to a customer.
- Alert a manager about a high-value transaction.
- Notify a team when a task is overdue.

## Sending Emails

Emails are the most common way to notify users and customers.

### 1. Recipients
Decide who should receive the email. You can:
- Type in a specific email address.
- Use a dynamic value from the document, like `{{ doc.owner }}` or `{{ doc.contact_email }}`.
- Provide a list of email addresses.

### 2. Subject and Message
You can make your emails personal by using information from your rule.
- **Subject**: `Update for Order #{{ doc.name }}`
- **Message**: You can use HTML to format your message and include details like `Dear {{ doc.customer_name }}, your order is now being processed.`

### 3. Attachments
You can automatically attach a PDF of the current document (e.g., a PDF of the Sales Invoice) to the email by enabling the **Attach PDF** option.

## Important Note
Emails are typically sent via the system's background queue. This means they might take a minute or two to actually leave the system after the rule runs.
