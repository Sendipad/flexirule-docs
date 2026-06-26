---
title: 'Advanced Process: Architecture Reference'
description: Internal implementation details for the Process/Advanced Process action.
weight: 110
---

# Advanced Process: Architecture Reference

## Implementation
The **Advanced Process** action (internally `Process`) is handled by `ProcessHandler` in `flexirule/ruleflow/core/action_handlers/process.py`.

## Process Runtime
Processes are registered in the `ProcessRegistry` and executed within a `ProcessRuntime`. They support custom input parameters and can return values to the rule context.
