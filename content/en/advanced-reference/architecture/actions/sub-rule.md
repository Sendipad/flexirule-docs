---
title: Sub-rule Execution Semantics
description: Internal implementation details of nested rule execution and variable scoping.
weight: 90
type: docs
---

# Sub-rule Execution Semantics

The **Sub-rule** action allows for modular logic by executing another Rule document as a child process within the current execution context.

---

## 1. Class Structure

- **Handler Class**: `SubRuleHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/sub_rule.py`
- **Registry Key**: `Sub-rule`

---

## 2. Execution Flow

When a `Sub-rule` node is encountered:

1.  **Context Preparation**: The handler creates a new `ExecutionContext` for the child rule.
2.  **Input Mapping**: Values from the parent rule's context are mapped to the child rule's `input_variables` as defined in the node configuration.
3.  **Orchestration**: The parent engine calls `orchestrator.execute(child_rule, child_context)`.
4.  **Synchronization**: The parent execution waits for the child rule to complete (unless configured as asynchronous).
5.  **Output Mapping**: Once the child rule completes, specific results or variables can be mapped back into the parent rule's context via `output_variable` mapping.

---

## 3. Scoping and State

- **Independent Scope**: By default, variables in the parent rule are NOT accessible to the child rule unless explicitly passed via Input Mapping.
- **Shared Reference**: The `doc` object (the triggering record) is typically shared between parent and child to ensure consistency.
- **Nesting Limits**: The engine enforces a maximum nesting depth (default: 5) to prevent infinite recursion.

---

## 4. UI Component Architecture

- **Component**: `SubRuleConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/SubRuleConfig.vue`

The UI provides a picker to select existing Rules and dynamically generates mapping tables for inputs and outputs based on the selected rule's defined schema.
