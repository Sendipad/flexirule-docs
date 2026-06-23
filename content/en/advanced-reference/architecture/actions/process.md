---
title: Process Action Architecture
description: Internal implementation details of the Process action handler.
weight: 110
type: docs
---

# Process Action Architecture

The **Process** action is the extensibility hook of the FlexiRule engine, allowing the execution of arbitrary Python logic within a rule flow.

---

## 1. Class Structure

- **Handler Class**: `ProcessHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/process.py`
- **Registry Key**: `Process`

### Execution Workflow

1.  **Resolution**: The handler identifies the target `Process` document by the `process_name` configured in the node.
2.  **Input Mapping**: The `apply_input_mapping` utility maps rule context (including `doc` and variables) to the process's expected `input_parameters`.
3.  **Execution**: The engine calls `process.run(inputs)`, which executes the logic defined in the `Process` DocType (usually a Python script or a reference to a server-side function).
4.  **Output Mapping**: The return value from the process is captured and injected back into the rule context as a variable (configured via `output_variable`).

---

## 2. Integration Modes

Processes can be executed in two primary modes:

- **Synchronous**: The rule waits for the process to finish before moving to the next node.
- **Asynchronous**: The process is enqueued via `frappe.enqueue`. The rule flow continues immediately (or waits at a designated join point if configured).

---

## 3. UI Component Architecture

- **Component**: `ProcessConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/ProcessConfig.vue`

The UI dynamically renders input fields based on the `input_parameters` defined in the selected `Process` DocType, providing a type-safe configuration experience for the rule builder.

---

## 4. Security and Sandboxing

Processes execute with the permissions of the rule's execution user. It is recommended to use the `flexirule.utils.execute_restricted` helper within custom processes to ensure they adhere to Frappe's security model.
