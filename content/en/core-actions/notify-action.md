---
title: Notify
description: Send emails, system alerts, or messages to users and customers.
weight: 80
---

# Notify

The **Notify** block allows your rule to communicate with people. You can use it to send automated emails, post system alerts, or trigger messages to keep everyone informed about what is happening in your business process.

## Purpose

Use the Notify block when you need to:
- **Send Emails**: Automatically email customers or staff (e.g., "Send an Order Confirmation").
- **System Alerts**: Create notifications that appear inside the ERPNext notification center.
- **Assign Tasks**: Let a specific user know they need to take action.

## How to Configure

### 1. Delivery Method
Choose how you want to send the message:
- **Email**: Send a standard email using your system's email settings.
- **System Notification**: Create an internal alert for a specific user.

### 2. Recipients (To)
Specify who should receive the message. You can:
- Type a specific email address.
- Select a user field from your document (e.g., `doc.owner` or `doc.contact_email`).
- Choose a specific ERPNext User or Role.

### 3. Subject and Message
Craft your message. You can use fields from your document directly in the text to make it personal.
- *Example*: "Hi `doc.customer_name`, your order `doc.name` has been shipped!"

### 4. Templates
If you have already created **Email Templates** in ERPNext, you can select them here to ensure your emails look professional and consistent.

## Example: Approval Alert
**Scenario**: You want to notify a manager when a large order is placed.
1. **Check**: Is the `doc.total` greater than 5000?
2. **True Path**: Connect to a **Notify** block.
3. **Notify Settings**:
   - **Method**: Email
   - **To**: `manager@example.com`
   - **Subject**: Action Required: Large Order `doc.name`
   - **Message**: Please review the new order from `doc.customer`.

## Tips for Success

- **Dynamic Content**: Use the curly braces or field picker to insert real data from your document into your messages.
- **Check Recipients**: Make sure the field you use for the email address actually contains a valid email before the rule runs.
- **Test First**: Send a test notification to yourself during setup to make sure the formatting and links look exactly how you want.
