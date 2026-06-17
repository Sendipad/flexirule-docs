---
title: Developer Notes
description: Information for developers looking to extend or contribute to FlexiRule.
weight: 30
---

# Developer Notes

FlexiRule is designed to be highly extensible. Developers can contribute to the core engine, create custom processes, or integrate FlexiRule with other Frappe applications.

## Key Extension Points

### 1. Custom Processes
The most common way to extend FlexiRule is by creating new **Processes**. A Process is a Python class that implements the `ActionHandler` interface. You can register your custom processes using Frappe hooks.

### 2. Action Handlers
If you need to create a fundamentally new type of action (like a new control flow node), you can implement a custom `ActionHandler`. These are registered in the `HandlerRegistry`.

### 3. Hooks
FlexiRule provides several hooks that allow other apps to tap into the rule execution lifecycle:
- `before_rule_execute`
- `after_rule_execute`
- `on_rule_error`

## Development Standards

When contributing to FlexiRule, please adhere to the following standards:

- **Type Hinting**: All new Python code should use type hints.
- **Testing**: Every new feature or fix must include unit tests.
- **Documentation**: Update the technical reference whenever the core engine or API changes.

## Useful Commands

```bash
# Run tests for FlexiRule
bench run-tests --app flexirule

# Build frontend assets
bench build --app flexirule

# Clear rule cache
bench --site [your-site] execute flexirule.ruleflow.utils.cache.clear_cache
```
