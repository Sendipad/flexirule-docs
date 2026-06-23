---
title: Entry Action Architecture
description: Internal implementation details of rule initialization and context setup.
weight: 5
type: docs
---

# Entry Action Architecture

The **Entry Action** is the mandatory starting node for every FlexiRule flow, responsible for initializing the execution environment.

---

## 1. Class Structure

- **Handler Class**: `EntryHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/entry.py`
- **Registry Key**: `Entry`

---

## 2. Initialization Workflow

When a rule is triggered:

1.  **Context Creation**: The engine instantiates a new `ExecutionContext`.
2.  **Doc Injection**: The triggering document (`doc`) is attached to the context.
3.  **Variable Setup**: Any global or system-level variables are initialized.
4.  **Handoff**: The orchestrator is called to begin traversing the graph, starting from the Entry node.

---

## 3. UI Component Architecture

- **Component**: `EntryConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/EntryConfig.vue`

The UI for the Entry Action is typically minimal, focus primarily on the node label and high-level rule properties.
