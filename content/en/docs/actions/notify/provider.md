---
title: "Provider Notification"
description: "Dispatch notifications through custom third-party services."
weight: 40
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
    - transactional

badges:
  - core
  - external
---

# Provider Notification

Keywords: [slack, whatsapp, sms, custom provider, integration]

## Overview
The **Provider** mode allows FlexiRule to integrate with any external communication service. It uses a hook-based architecture, enabling developers to register custom dispatch logic for services like Slack, WhatsApp, or SMS gateways.

## When To Use
- Sending SMS alerts for critical system failures.
- Posting updates to a Slack or Microsoft Teams channel.
- Integrating with niche industry-specific communication platforms.

## Configuration

| Field | Description |
| :--- | :--- |
| **Notification Type** | Set to `Provider`. |
| **Provider** | The name of the registered provider (e.g., `slack`, `twilio`). |
| **Recipient** | The provider-specific identifier (e.g., a phone number, channel ID, or webhook URL). |
| **Message Builder** | The content to be sent. Supports Jinja templates. |

## Supported Inputs
- **`doc`**: Contextual data from the triggering record.
- **`vars`**: Custom variables from the rule flow.

## Execution Behavior
The handler identifies the requested provider and dispatches the rendered message and recipient data to the registered function. The execution is typically synchronous within the rule flow, meaning high-latency API calls will affect rule performance.

## Examples

### Slack Webhook
**Problem**: Post a message to a Slack channel when a critical support ticket is created.

**Configuration**:
- **Provider**: `slack`
- **Recipient**: `https://hooks.slack.com/services/T000/B000/XXXX`
- **Message Builder**: `Critical Ticket Created: {{ doc.subject }} ({{ doc.name }})`

**Result**: The custom Slack provider sends the message to the specified webhook.

## Best Practices
- **Error Handling**: Ensure custom providers handle API timeouts and failures gracefully.
- **Async Providers**: For services with high latency, implement background queuing within the provider function using `frappe.enqueue`.

## Related Topics
- [Architecture Reference: Provider System]({{< relref "docs/architecture/actions/notify.md#provider-architecture" >}}) - Learn how to register and implement custom notification providers.
