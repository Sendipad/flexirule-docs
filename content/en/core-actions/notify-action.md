---
title: Notify
description: Send emails, system alerts, and messages to your team.
weight: 20
---

# Notify

The **Notify** action allows you to send messages to users, customers, or your own team through different channels.

## When to Use It
- **Email Alerts**: Send a confirmation email to a customer when their order is shipped.
- **Internal Notifications**: Alert a manager when a high-value invoice is created.
- **Real-time Popups**: Show a quick "Success" message to the user currently working in the system.

## Notification Types

### 1. Email
Sends a standard email.
- **Recipients**: You can type in an email address or pick a field (like "Customer Email") from your document.
- **Subject & Message**: You can customize the text and include document details like `{{ doc.name }}`.
- **Attach PDF**: You can automatically attach a PDF of the current document to the email.

### 2. System Notification
These appear in the "Notification Bell" at the top of the screen. They are great for internal tasks that don't need an email but shouldn't be missed.

### 3. Popup (Toast)
Shows a temporary message in the corner of the screen for the person currently using the system.
- *Note: These only appear if the rule is triggered while the user is actively working on the document.*

## Tips for Better Notifications
- **Personalize it**: Use placeholders like `{{ doc.customer_name }}` to make your messages more professional.
- **Don't Overdo It**: Use a **Check** block before a notification to make sure it only sends when it's really needed (e.g., only send an alert if the total is over $1,000).
- **Test Before Sending**: Use the **Test Run** tool to see exactly what your notification will look like before it goes to real customers.
