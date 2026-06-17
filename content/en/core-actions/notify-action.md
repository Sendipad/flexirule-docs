---
title: Notify Action
description: Send emails, system alerts, and messages to your team or customers.
weight: 60
---

# Notify Action

The **Notify** action is how your rule communicates with the outside world. Whether you need to send an official email to a customer or show a quick alert to a user in the browser, this is the node to use.

## Communication Channels

You can choose from several ways to deliver your message:

### 1. Email
Send an official email to one or more recipients.
- **Use case**: Sending a "Thank You" email after a purchase or an internal alert about a large order.
- **Features**: Supports Jinja templates for dynamic content and can automatically attach PDFs of the document.

### 2. System Notification
A persistent message that appears in the user's Frappe notification bell.
- **Use case**: Alerting a manager that a document is waiting for their approval.
- **Features**: Stays in the user's notification log until they read it.

### 3. Toast (Browser Alert)
A small pop-up that appears at the top of the screen and disappears after a few seconds.
- **Use case**: Providing instant feedback, like "Rule processed successfully!"
- **Features**: Fast and non-intrusive.

### 4. Provider (SMS/Slack/WhatsApp)
Integrate with external communication tools.
- **Use case**: Sending an SMS to a driver or a Slack message to a specific channel.

## Configuration

| Field | Description |
| :--- | :--- |
| **Mode** | Choose your channel (Email, Toast, etc.). |
| **Recipients** | Who should get the message? You can use specific email addresses or fields like `{{ doc.owner }}`. |
| **Subject / Message** | What do you want to say? Use `{{ }}` to include data, like `New Order from {{ doc.customer }}`. |
| **Template** | (For Email) Select an existing Email Template to keep your branding consistent. |

## Real-World Example: Low Stock Alert
**Goal**: Notify the Warehouse Manager via email if an Item's stock falls below its minimum level.

1. **Trigger**: Rule on `Stock Ledger Entry` / `After Save`.
2. **Action**: Add a **Condition** to check if `actual_qty < min_order_level`.
3. **Action**: Add a **Notify** node on the "True" path.
   - Mode: **Email**.
   - Recipient: `warehouse_manager@example.com`.
   - Message: "Low Stock Alert: {{ doc.item_code }} has only {{ doc.actual_qty }} remaining."
4. **Result**: Your manager gets an instant email whenever stock runs low, preventing stockouts.

## Tips for Success

- **Dynamic Content**: Use double curly braces `{{ }}` to insert data from your document. For example: `Hello {{ doc.first_name }}!`.
- **Don't Over-Notify**: Too many notifications can lead to "alert fatigue." Use conditions to ensure you only send messages when they are actually needed.
- **Test Your Emails**: Use the builder's Test feature to send a sample email to yourself before enabling the rule for everyone.

---

*Next: Learn how to run custom logic with the [Process Action]({{< relref "process.md" >}}).*
