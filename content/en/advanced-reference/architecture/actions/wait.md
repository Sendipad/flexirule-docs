---
title: 'Wait: Architecture Reference'
description: Internal implementation details for the Wait action.
weight: 80
---

# Wait: Architecture Reference

## Implementation
The **Wait** action is handled by `WaitHandler` in `flexirule/ruleflow/core/action_handlers/simple_actions.py`.

## Mechanism
It uses Python's `time.sleep()` for short durations or schedules a background task for longer waits, depending on the rule's execution mode.
