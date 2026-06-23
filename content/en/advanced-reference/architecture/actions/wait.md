---
title: Wait Action Architecture
description: Internal implementation details of the Wait action handler and scheduler.
weight: 80
type: docs
---

# Wait Action Architecture

The **Wait** action provides a mechanism for stateful, asynchronous execution pauses within a rule flow.

---

## 1. Class Structure

- **Handler Class**: `WaitHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/wait.py`
- **Registry Key**: `Wait`

---

## 2. Persistence Mechanism

When a `Wait` node is encountered, the engine does not "block" the thread. Instead:

1.  **Serialization**: The entire `ExecutionContext` (including all variables, the current node index, and the rule state) is serialized into a JSON object.
2.  **Storage**: A `Rule Wait` record is created in the database, storing the serialized context and the "Resume Trigger" (time or condition).
3.  **Termination**: The current execution thread is terminated gracefully.

---

## 3. Resume Logic

The system uses a background job (`flexirule.ruleflow.scheduler.check_waiting_rules`) that runs every minute:

1.  **Poll**: The scheduler queries for `Rule Wait` records where the `wait_until` time has passed OR the `condition` is now met.
2.  **Hydration**: The `ExecutionContext` is deserialized and re-hydrated.
3.  **Resume**: The engine calls `orchestrator.resume(context)`, starting the rule flow from the node immediately following the `Wait` action.

---

## 4. UI Component Architecture

- **Component**: `WaitConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/WaitConfig.vue`

The UI supports three primary configuration modes, which are mapped to the handler's internal resume logic:
- `DURATION`: Converts a human-readable duration (e.g., "2 hours") into a UTC timestamp.
- `DATE`: Uses the `NormalizationValueResolver` to resolve a specific date field or formula into a timestamp.
- `CONDITION`: Stores a rule-expression that is evaluated by the scheduler during each polling cycle.
