---
title: 'Switch Action: Architecture'
description: Technical implementation of multi-path branching.
weight: 70
---

# Switch Action Architecture

The **Switch** action uses the `SwitchActionHandler` to evaluate a single expression and match it against a map of target next steps.

## Core Implementation
- **Class**: `SwitchActionHandler` in `flexirule/ruleflow/core/action_handlers/switch.py`.
- **Logic**: Evaluates the `switch_on` expression. It then looks up the result in the `cases` dictionary. If no match is found, it falls back to the `default_next_step`.
