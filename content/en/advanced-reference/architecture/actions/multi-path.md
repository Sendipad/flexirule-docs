---
title: 'Multi-Path: Architecture Reference'
description: Internal implementation details for the Switch/Multi-Path action.
weight: 70
---

# Multi-Path: Architecture Reference

## Implementation
The **Multi-Path** action (internally `Switch`) is handled by `SwitchHandler` in `flexirule/ruleflow/core/action_handlers/switch.py`.

## Execution Logic
1. Resolves the value of the target field or expression.
2. Iterates through the defined cases to find a match.
3. If a match is found, returns the corresponding `next_step_id`.
4. If no match is found, returns the `default_next_step_id`.
