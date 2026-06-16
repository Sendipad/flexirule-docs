---
title: "Email Notification"
description: "Send automated emails with dynamic content and attachments."
weight: 20
entity_kind: action_operation

capabilities:
  category: notification
  mutation: read-only
  targets:
    - external-system
  triggers:
    - any
  flow: linear
  transaction:
    - async

badges:
  - core
---

# Email Notification

Keywords: [email, sendmail, smtp, attachment, communication]

## Overview
The **Email** mode allows rules to send formal communications to internal users or external stakeholders. It leverages Frappe's email queue system, ensuring delivery is handled reliably in the background.

## When To Use
- Sending order confirmations or invoices to customers.
- Notifying external vendors of purchase requests.
- Sending detailed weekly or monthly status reports.

## Configuration

The Email configuration is organized within a streamlined setup panel:

| Field | Description |
| :--- | :--- |
| **Notification Type** | Set to `Email` in the Setup panel. |
| **Subject** | The subject line of the email. Supports Jinja templates and dynamic variables. |
| **Recipients** | Destination email addresses. Supports one email per line, comma-separated values, or a Jinja template (e.g., `{{ doc.owner }}`). |
| **Message Builder** | A specialized visual editor for composing the email body. You can combine static text with dynamic segments (fields and variables). |
| **Attach Document PDF** | If enabled, automatically generates a PDF of the current document using its default print format and attaches it to the email. |

## Supported Inputs
- **`doc`**: Use document data for personalized greetings and details.
- **`vars`**: Include summary data or calculated totals.
- **`frappe.utils`**: Access utilities like `get_url_to_form` for linking back to documents.

## Execution Behavior
Emails are queued using `frappe.sendmail`. They are typically processed by the system's background workers. If the rule execution fails and the transaction is rolled back, the email will not be sent (unless explicitly configured otherwise).

## Examples

### Payment Reminder
**Problem**: Send a reminder to a customer for an overdue Sales Invoice.

**Configuration**:
- **Recipients**: `{{ doc.contact_email }}`
- **Subject**: `Follow-up: Overdue Payment for Invoice {{ doc.name }}`
- **Message Builder**: `Dear {{ doc.customer_name }}, please note that your payment of {{ doc.outstanding_amount }} is currently overdue.`
- **Attach Document PDF**: `Yes`

**Result**: An email is added to the system queue with the invoice PDF attached.

## Best Practices
- **Verify Recipients**: Use a [Condition]({{< relref "docs/actions/condition" >}}) node to check if the recipient email field is not empty before sending.
- **Use Async**: Always prefer running email notifications in background/asynchronous rules to avoid UI lag.

## Limitations
- **Queue Latency**: Emails may not be sent instantly depending on the system's email worker schedule.
- **Attachment Size**: Very large documents may hit mail server limits.
