---
title: Notify
description: Send notifications through the notification modes provided by FlexiRule.
weight: 100
---

# Notify

**Notify** sends a notification and then continues through its normal outbound path.

## Notification types

The current Action Type contract provides:

| Notification Type | Purpose |
|---|---|
| **Toast** | Show a temporary user notification. |
| **System** | Send the supported system/realtime notification. |
| **Email** | Send an email notification. |
| **System Notification** | Create a system notification record. |
| **Provider** | Send through a configured external notification provider. |

## Required configuration

Notify requires:

- notification message template;
- notification type.

The UI uses **NotifyConfig**.

Additional configuration depends on the selected type:

- Email requires subject and recipients.
- System Notification requires subject.
- Provider requires provider and recipient.

## Message templates

The notification message is supplied through the action template field and is rendered using the rule execution context.

Use the Smart Value/templating features supported by the installed Rule Builder rather than assuming a fixed recipient or message syntax.

## Flow

Notify is not terminal. After the notification is sent, execution follows the normal next-step connection.

## Common mistakes

- Treating Notify as an action that stops the rule.
- Documenting notification modes that are not present in the current Action Type contract.
- Omitting required type-specific configuration for Email, System Notification, or Provider.
