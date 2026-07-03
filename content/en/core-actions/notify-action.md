---
title: Notify
description: Send emails, system alerts, or browser notifications.
weight: 20
---

# Notify (Communication)

The **Notify** block is how your rule communicates with users. It can send emails, create system notifications, or show pop-up alerts in the browser.

## Notification Modes

### 1. Email
Sends an email to one or more recipients.
-   **Recipients**: Can be a fixed email address or a dynamic one from your document (e.g., `{{ doc.contact_email }}`).
-   **Templates**: You can use placeholders like `{{ doc.customer_name }}` in your subject and message to personalize the email.
-   **Attachments**: You can automatically attach a PDF version of the document to the email.

### 2. System Notification
Creates an internal notification in the Frappe Desk (the bell icon). This is perfect for alerting internal team members about things that need their attention.

### 3. Browser Alert (Toast)
Shows a small pop-up message (a "Toast") in the corner of the user's screen.
-   **Note**: This only works when the rule is triggered by a user clicking a button or saving a document in their browser. It won't show anything for background or scheduled tasks.

## Tips for Success

-   **Personalize with Data**: Use `{{ doc.field_name }}` anywhere in your message to include real data from your record.
-   **Don't Over-Notify**: Use a **Check** block before your Notify block to make sure you only send alerts when something important actually happens.
-   **Test Your Templates**: Use the **Test Run** feature in the builder to see exactly how your message will look before you go live.
