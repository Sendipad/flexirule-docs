---
title: Email
description: Sending automated emails with attachments and dynamic templates.
weight: 10
---

# Email Notification

The **Email** mode of the Notify action is the most common way to send information to customers and external stakeholders.

## Configuration

### 1. Recipients
You can specify recipients in three ways:
- **Static**: Enter a single email or a comma-separated list.
- **Dynamic Variable**: Use `{{ doc.contact_email }}` or `{{ vars.manager_email }}`.
- **User Link**: Select a User Link field from your DocType.

### 2. Subject and Message
Both fields support **Jinja2** templates.
- **Example Subject**: `Order Confirmation: {{ doc.name }}`
- **Example Message**:
  ```html
  Dear {{ doc.customer }},<br>
  Your order placed on {{ doc.posting_date }} has been received.
  ```

### 3. Attachments
- **Attach PDF**: Generates a PDF of the triggering document using its default print format and attaches it to the email.

## Execution Behavior
Emails are added to the **Email Queue** in Frappe. They are not sent instantly by the web server but are picked up by the background worker (usually every minute).
