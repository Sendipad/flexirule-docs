---
title: Loop Architecture
description: Internal implementation details of sequential and parallel loop execution.
weight: 60
type: docs
---

# Loop Architecture

The **Loop** action enables iteration over data collections within the FlexiRule engine.

---

## 1. Class Structure

- **Handler Class**: `LoopHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/loop.py`
- **Registry Key**: `Loop`

---

## 2. Iteration Semantics

The handler manages execution based on the `loop_mode` configuration:

### Sequential Mode (Default)
1.  **Iterate**: The handler fetches the next item from the input list.
2.  **Context Injection**: The current item is injected into the context under the configured variable name (e.g., `item`).
3.  **Execute Body**: The engine executes all nodes within the loop's body branch.
4.  **Repeat**: Once the body is complete, the engine returns to the Loop node to process the next item.

### Parallel Mode
1.  **Batching**: The handler splits the input list into smaller chunks.
2.  **Concurrency**: Each chunk is processed in a separate thread or background job using `frappe.enqueue`.
3.  **Synchronization**: The rule flow waits for all parallel tasks to complete before proceeding to the next node (join point logic).

---

## 3. UI Component Architecture

- **Component**: `LoopConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/LoopConfig.vue`
