---
title: 'Repeat: Architecture Reference'
description: Internal implementation details for the Loop/Repeat action.
weight: 60
---

# Repeat: Architecture Reference

## Implementation
The **Repeat** action (internally `Loop`) is handled by `LoopHandler` in `flexirule/ruleflow/core/action_handlers/loop.py`.

## Iteration Logic
It manages an internal pointer to the current list item and re-executes the connected sub-graph for each item.
