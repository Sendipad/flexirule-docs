---
title: System Notification
description: Create persistent in-app notifications for system users.
weight: 40
entity_kind: action_operation
capabilities:
  category: notification
  mutation: read-write
  targets:
  - database
  triggers:
  - any
  flow: linear
  transaction:
  - transactional
badges:
- core
---

# System Notification

Keywords: [notification log, in-app alert, notification bell]

## Overview
**System Notifications** create a permanent record in Frappe's `Notification Log`. These appear in the notification "bell" icon in the top navigation bar and remain accessible until the user dismisses them.

## When To Use
- To alert a manager that a document is pending their approval.
- To notify a user when a long-running background task they started has finished.
- To maintain an audit trail of important system-generated alerts.

## Configuration

| Field | Description |
| :--- | :--- |
| **Notification Type** | Set to `System Notification`. |
| **Subject** | The title shown in the notification list. Supports Jinja. |
| **For User** | The ID of the user who should receive the notification. Defaults to the document owner or current user. |
| **Message Builder** | Detailed content shown when the notification is opened. |

## Supported Inputs
- **`doc`**: Data from the record associated with the notification.
- **`vars`**: Context variables from the current rule flow.

## Execution Behavior
This mode creates a new document of type `Notification Log`. It is a transactional operation; if the rule transaction fails, the notification record will not be created.

## Examples

### Approval Request
**Problem**: Notify the Sales Manager when a large Sales Order is submitted.

**Configuration**:
- **Subject**: `High Value Order Needs Review: {{ doc.name }}`
- **For User**: `sales_manager@company.com`
- **Message Builder**: `Order {{ doc.name }} for {{ doc.customer }} exceeds the auto-approval threshold.`

**Result**: The Sales Manager sees a new entry in their notification log with a link to the Sales Order.

## Best Practices
- Use descriptive subjects so users can understand the priority without opening the full message.
- Target notifications to specific users or roles rather than broadcasting to everyone.

## Limitations
- **Internal Only**: Only works for registered users within the Frappe/ERPNext system.
- **No External Delivery**: Does not send emails or SMS by default (unless separate Frappe notification settings are configured).
