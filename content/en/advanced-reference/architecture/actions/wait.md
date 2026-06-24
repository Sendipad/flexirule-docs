---
title: 'Wait Action: Architecture'
description: Technical implementation of execution suspension.
weight: 80
---

# Wait Action Architecture

The **Wait** action leverages Frappe's background job system and the `Scheduler` to suspend and resume rule execution.

## Core Implementation
- **Class**: `WaitActionHandler` in `flexirule/ruleflow/core/action_handlers/simple_actions.py`.
- **Mechanism**: Calculates the resume timestamp. It then creates a `RuleSuspension` record and schedules a background job to re-trigger the engine at the appropriate time.
