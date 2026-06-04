---
title: "Callable Triggers"
weight: 30
---

# Callable Triggers (Sub-Rules)

Callable triggers (also known as Sub-Rules) are designed to be invoked manually or as part of another rule's execution flow.

## Invocation Methods
- **Programmatic**: Using the `flexirule.api.execute_rule` method.
- **Sub-Rule Action**: One rule can call another rule as a subroutine.

## Security & Visibility
To be used as a sub-rule, the rule must have the **Exposed as Sub-Rule** flag enabled.
