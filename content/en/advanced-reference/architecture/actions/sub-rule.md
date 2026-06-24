---
title: 'Sub-rule Action: Architecture'
description: Technical implementation of nested engine execution.
weight: 90
---

# Sub-rule Action Architecture

The **Sub-rule** action allows for recursive engine calls by spawning a child `RuleEngine` instance.

## Core Implementation
- **Class**: `SubRuleActionHandler` in `flexirule/ruleflow/core/action_handlers/sub_rule.py`.
- **Context Handling**: Clones the current `ExecutionContext`, applies any input mappings for the child rule, and waits for the child execution to complete (unless configured as async).
