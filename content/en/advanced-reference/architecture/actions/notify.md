---
title: Notify Architecture
description: Internal implementation details of the Notify action handler and channel integrations.
weight: 20
type: docs
---

# Notify Architecture

The **Notify** action is a versatile communication dispatcher that abstracts various delivery channels (Email, WhatsApp, System, SMS) into a single rule node.

---

## 1. Class Structure

- **Handler Class**: `NotifyHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/notify.py`
- **Registry Key**: `Notify`

---

## 2. Dispatcher Logic

The handler uses a strategy pattern to dispatch messages based on the `channel` configured in the node:

| Channel | Method | Integration |
| :--- | :--- | :--- |
| **Email** | `_send_email()` | Wraps `frappe.sendmail`. Supports standard templates and dynamic Jinja content. |
| **System** | `_send_system_notification()` | Creates a Frappe `Notification Log` entry. |
| **WhatsApp** | `_send_whatsapp()` | Calls the configured WhatsApp service provider via `flexirule.integrations.whatsapp`. |
| **SMS** | `_send_sms()` | Uses the Frappe `SMS Settings` and `SMS Log` system. |

---

## 3. Template Resolution

Notification content is resolved in two stages:
1.  **Selection**: The handler fetches the content from either the `Email Template` or the inline `message` field.
2.  **Rendering**: The content is passed through the `NormalizationValueResolver` to replace `{{ doc.field }}` and `{{ vars.name }}` markers with live data from the rule context.

---

## 4. UI Component Architecture

- **Component**: `NotifyConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/NotifyConfig.vue`

The UI dynamically adjusts its fields based on the selected channel. For example, selecting "Email" will show "Subject" and "Template" fields, while "WhatsApp" might show "Phone Number" and "Provider" fields.
