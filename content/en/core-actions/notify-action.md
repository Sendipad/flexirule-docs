---
title: Notify
description: Send alerts, emails, and messages to users and customers.
weight: 40
---

# Notify

The **Notify** block is used to send information. Whether it's a quick pop-up for the current user or an email to a customer, this block handles all outgoing communication.

## Types of Notifications (Modes)

### 1. Toast (Pop-up)
A "Toast" is a small message that appears in the top-right corner of the user's screen. Use this for instant feedback.
- **Best for**: Confirmations like "Record Updated!" or warnings like "Low Stock Detected."
- **Note**: This only works for the user who is currently interacting with the system.

### 2. Email
Send a formatted email to one or more recipients.
- **Recipients**: Can be a fixed email address or dynamic (e.g., `doc.contact_email`).
- **Templates**: You can write your own message or use an existing Email Template.
- **Attachments**: You can automatically attach a PDF of the current document (e.g., a PDF of the Sales Invoice).

### 3. System Notification
Creates a notification in the Frappe notification center (the bell icon).
- **Best for**: Internal alerts for specific users or roles.

## Dynamic Content
You can include data from your document directly in your messages using curly braces.
- **Subject**: `Order {{ doc.name }} has been shipped!`
- **Message**: `Hello {{ doc.customer_name }}, your order is on its way.`

---

## Pro Tips
- **Email Queue**: Emails sent via FlexiRule are added to the standard Frappe Email Queue. They usually send within a minute.
- **Rich Text**: Emails support HTML, so you can add bold text, links, and tables to your messages.
- **Test Runs**: When you test a rule, "Toast" notifications will actually appear in your browser, while "Emails" will show up in the test log instead of being sent to real people.
