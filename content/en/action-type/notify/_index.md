---
title: Notify
description: Send automated alerts via email, system notifications, or UI messages configured visually.
weight: 80
entity_kind: action_operation
category: communication
mutation: false
targets: ["Email", "System Notification", "UI Message"]
---

# Notify Action

The **Notify** action is the primary communication hub in FlexiRule, enabling you to send automated emails, system notifications, or real-time UI messages.

---

## 1. What is it?

A Notify block sends messages through three available channels:
- **Email**: Sends queued emails with optional attachments to internal users or external contacts.
- **System Notification**: Creates a notification log entry in the user's bell toolbar.
- **UI Message (Toast / Alert)**: Displays real-time popups directly in the user's browser window.

---

## 2. When to Use

Use the Notify action when you need to:
- **Send automated emails** on document events (e.g., sending an order confirmation email to a customer on save).
- **Alert internal team members** when a high-value transaction requires review.
- **Display real-time user feedback** (Toasts or Alerts) on form validation events.

---

## 3. How to Configure

1. **Add the Action**: Add a **Notify** block to your visual canvas.
2. **Select Channel**: Choose **Email**, **System Notification**, or **UI Message**.
3. **Configure Recipients**:
   - Select users, roles, or dynamic email fields using the **Smart Value Selector**.
4. **Compose Subject & Message**:
   - Type message text and insert document fields or variables using the **Smart Value Selector**.
5. **Set Attachments (Email Channel)**:
   - Toggle **Attach PDF** to automatically attach a PDF print format of the document.

---

## 4. Practical Example

### Scenario: Send Order Confirmation Email

1. Add a **Notify** action set to **Email** channel.
2. **Recipients**: Select Customer Email (`@doc.contact_email`) using the Smart Value Selector.
3. **Subject**: `"Order Confirmation: {doc.name}"` composed via Smart Value Selector.
4. **Message**: `"Dear {doc.customer_name}, thank you for your order on {doc.posting_date}."`
5. **Attach PDF**: Enable PDF attachment with default print format.

---

## 5. Related Features

- [Email Notifications]({{< relref "action-type/notify/email.md" >}}): Detailed guide on email options and templates.
- [Check (Condition)]({{< relref "action-type/condition.md" >}}): Filter when notifications are triggered.

---

## 6. Developer & Technical Details

For notification dispatch mechanics and email queue architecture:
- [Notify Architecture Reference]({{< relref "advanced-concepts/architecture/actions/notify.md" >}})
