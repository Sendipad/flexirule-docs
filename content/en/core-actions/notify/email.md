---
title: Email
description: Configure automated emails with attachments and dynamic templates in FlexiRule.
weight: 10
---

# Email Notification

The **Email** channel in the Notify action allows you to send automated emails to customers, suppliers, and internal users.

---

## 1. How to Configure Email Notifications

### Recipients
Choose recipients using three methods in the UI:
- **Static List**: Enter one or more email addresses.
- **Dynamic Field / Variable**: Use the **Smart Value Selector** to select an email field from the document (e.g., `@doc.contact_email`) or a variable (`@vars.manager_email`).
- **User / Role**: Select specific system users or roles.

### Subject & Message
Compose subjects and body content using text and field tags selected through the **Smart Value Selector**:
- **Subject**: `"Order Confirmation: {doc.name}"`
- **Message**: Insert document fields like Customer Name (`@doc.customer`) or Date (`@doc.posting_date`) directly into the body text.

### Attachments
- **Attach PDF**: Toggle on to generate and attach a PDF of the triggering document using its print format.

---

## 2. Practical Example

1. Add **Notify** action and select **Email** channel.
2. **Recipients**: Open Smart Value Selector → Select `@doc.contact_email`.
3. **Subject**: `"Invoice {doc.name} Payment Received"`.
4. **Attach PDF**: Enable PDF attachment.
