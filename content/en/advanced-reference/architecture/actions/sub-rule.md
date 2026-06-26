---
title: 'Sub-rule: Architecture Reference'
description: Internal implementation details for the Sub-rule action.
weight: 90
---

# Sub-rule: Architecture Reference

## Implementation
The **Sub-rule** action is handled by `SubRuleHandler` in `flexirule/ruleflow/core/action_handlers/sub_rule.py`.

## Recursion and Context
It invokes the `RuleEngine` recursively. It manages context isolation, ensuring that the sub-rule has access to the necessary data while preventing unintended side effects in the parent rule.
