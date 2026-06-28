---
title: Backend Hooks
description: Extension points for developers in the FlexiRule framework.
weight: 30
---

# Backend Hooks

FlexiRule provides several entry points in the `hooks.py` of your custom apps to extend its functionality.

## 1. Notification Providers
Register custom channels for the **Notify** action (e.g., SMS, Slack, Discord).

**Example `hooks.py`**:
```python
flexirule_notification_providers = [
    {
        "slack": "myapp.integrations.slack.send_slack_message"
    }
]
```

## 2. Rule Events
You can trigger custom logic when a rule is enabled, disabled, or amended.
- `flexirule_on_rule_enable`
- `flexirule_on_rule_disable`

## 3. Global Context Injection
Inject your own variables into the execution context of *every* rule.
- `flexirule_global_context_providers`

**Example**:
```python
flexirule_global_context_providers = [
    "myapp.utils.get_company_branding_vars"
]
```

## 4. Custom Action Handlers
While Action Types are usually registered via the database, you can also register them programmatically during the bench startup.
