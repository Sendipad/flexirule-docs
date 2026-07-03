---
title: 'Loop: Architecture Reference'
description: Internal implementation details and developer reference for the Loop
  action.
weight: 50
---

# Loop: Architecture Reference

## Purpose

The **Loop** action is implemented as a graph-aware handler that manages iteration state within the execution context. Unlike linear actions, the Loop handler uses the context to persist pointers between engine steps, allowing for iterative "jumps" across the graph logic.

## Class Structure

- **`flexirule.ruleflow.core.action_handlers.loop.LoopHandler`**: The primary implementation class. Inherits from `ActionHandler`.
- **`HandlerRegistry`**: Manages the singleton instance of the `LoopHandler`.

## Execution Pipeline

The `execute` method of `LoopHandler` follows this internal logic:

1.  **State Lookup**: Retrieves loop state from `context["vars"]["_loops"][action.action_id]`.
2.  **Configuration**: Accesses configuration via `engine._get_action_config(action)`.
3.  **Resolution**: Resolves the `iterator` expression via `engine._evaluate_python_value`.
4.  **Item Binding**:
    - Selects the item based on `loop_state["index"]`.
    - Determines the alias name (Priority: `action.return_variable` > `config.alias` > `"item"`).
5.  **Graph Control**:
    - Returns `True` and `action.next_step_if_true` to enter/continue the loop.
    - Returns `False` and `action.next_step_if_false` to terminate.

## Context Mutation Model

The Loop action uses a **persistent-transient hybrid** mutation model:

- **Persistent Mutations**: The iteration item (`vars[alias]`) and metadata (`vars.loop`) are written directly to the execution context's `vars` dictionary. These persist in memory until the end of the rule execution.
- **Transient State**: The internal index and iteration tracker are stored in `vars._loops[action_id]`. This entry is explicitly deleted when the loop completes, preventing state pollution for subsequent nodes.

## Dependencies

- **`RuleEngine`**: Provides Python expression evaluation (`_evaluate_python_value`) and configuration retrieval (`_get_action_config`).
- **`ActionHandler`**: Base interface for all graph nodes.

## Extension Points

- **Custom Item Aliases**: Developers can override the default iteration variable name via the UI `alias` field or the generic `return_variable` field in the action schema.
- **Metadata Consumers**: Other action handlers or processes can consume the `vars.loop` metadata for logic such as "send only on last item."

## UI Architecture

The Loop configuration UI is defined through a **Contract-Driven Pattern**:

- **Action Type**: `Loop`
- **Component Mapping**: The frontend maps the `Loop` action type to the `LoopConfig.vue` component (located in `public/js/flexirule/rule_builder/components/config_panels/`).
- **Dynamic Props**: Configuration fields are rendered based on the JSON schema defined in the action's contract.

## Source Files

- **Backend**: `flexirule/ruleflow/core/action_handlers/loop.py`
- **Frontend**: `flexirule/public/js/flexirule/rule_builder/components/config_panels/Loop/LoopConfig.vue`
