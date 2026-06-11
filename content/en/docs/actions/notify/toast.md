---
title: "Toast Notification"
description: "Display immediate browser alerts to the active user."
weight: 10
entity_kind: action_operation

capabilities:
  category: notification
  mutation: read-only
  targets:
    - context
  triggers:
    - any
  flow: linear
  transaction:
    - transactional

badges:
  - core
---

# Toast Notification

Keywords: [toast, alert, message, popup, realtime]

## Overview
**Toast** notifications are temporary, non-persistent messages that appear in the corner of the user's browser. They provide immediate feedback without interrupting the user's workflow or requiring them to dismiss a dialog.

## When To Use
- To confirm that a background action (like a rule-triggered update) has completed.
- To provide warnings or status updates during document validation.
- To notify the user of minor events that don't require a permanent record.

## Configuration

| Field | Description |
| :--- | :--- |
| **Notification Type** | Set to `Toast`. |
| **Message Builder** | The content of the alert. Supports Jinja templates. |

## Supported Inputs
- **`doc`**: Use fields from the triggering document in the message.
- **`vars`**: Reference variables calculated earlier in the rule.

## Execution Behavior
Toast notifications are dispatched via Frappe's realtime system (`frappe.msgprint` with `alert=True`). They are delivered to the active session of the user who triggered the rule.

## Examples

### Low Stock Alert
**Problem**: Warn a user immediately if an item they are adding to a Delivery Note has low stock.

**Configuration**:
- **Message Builder**: `Warning: Item {{ item.item_code }} only has {{ item.actual_qty }} units left in {{ item.warehouse }}.`

**Result**: A small popup appears in the user's browser as soon as the rule condition is met.

## Best Practices
- Keep messages short and actionable.
- Avoid using Toasts for critical errors that require the user to stop and fix something (use **Raise Error** instead).

## Limitations
- **Ephemeral**: Toasts disappear after a few seconds and are not stored in any log.
- **Session Bound**: Only visible to the user who triggered the rule if they have an active browser window open.
