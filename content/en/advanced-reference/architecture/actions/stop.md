---
title: Stop Action Architecture
description: Internal implementation details of the Stop action and error handling.
weight: 100
type: docs
---

# Stop Action Architecture

The **Stop** action provides an explicit termination point for a rule flow, allowing for graceful exits or forced errors.

---

## 1. Class Structure

- **Handler Class**: `StopHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/stop.py`
- **Registry Key**: `Stop`

---

## 2. Termination Logic

When a `Stop` node is executed:

1.  **Status Update**: The `ExecutionLog` entry for the rule is updated to a status of `COMPLETED` or `STOPPED`.
2.  **State Disposal**: The engine clears any temporary variables and ephemeral state associated with the current thread.
3.  **Halt**: The orchestrator immediately ceases processing the current graph branch.

---

## 3. Error Raising and Bubbling

If the action is configured to "Raise Error":

1.  **Exception Generation**: The handler throws a `flexirule.exceptions.RuleExecutionError`.
2.  **Message Resolution**: Any dynamic markers in the error message (e.g., `{{ doc.name }}`) are resolved before the exception is raised.
3.  **UI Feedback**: The error message is bubbled up to the Frappe UI, showing a standard error dialog to the user and preventing document submission if the rule was triggered by an `on_submit` event.

---

## 4. UI Component Architecture

- **Component**: `StopConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/StopConfig.vue`
