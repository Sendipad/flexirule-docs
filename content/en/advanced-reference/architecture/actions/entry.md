---
title: 'Entry Action: Architecture Reference'
description: Internal implementation details and developer reference for the Entry
  Action.
weight: 40
---

# Entry Action: Architecture Reference

## Purpose
The **Entry Action** implementation serves as the structural root of the rule-flow graph. It decouples the trigger-detection logic from the graph-traversal logic by providing a standardized "start" node that the `RuleEngine` can consistently target.

## Class Structure
- **`EntryActionHandler(ActionHandler)`**: The core backend class responsible for "executing" the start node.
- **`HandlerRegistry`**: The singleton registry where `EntryActionHandler` is registered under the key `"Entry Action"`.

### Backend Implementation
```python
class EntryActionHandler(ActionHandler):
	"""Handler for Entry Action type - marks the start node."""

	action_type = "Entry Action"

	def execute(self, action, context, engine):
		"""Entry Action - simply passes through to next step."""
		return None, action.next_step_if_true
```

## Execution Pipeline
1.  **Engine Bootstrapping**: `RuleEngine.run()` is called with a `Rule` object and initial data.
2.  **Root Discovery**: The engine iterates through the `actions` list to find the first node where `action_id == "root"` or `action_type == "Entry Action"`.
3.  **Handler Execution**:
    - The engine fetches the handler from `HandlerRegistry.get("Entry Action")`.
    - The `execute` method is called.
4.  **Next Step Resolution**: The engine receives the ID of the next node and continues the Breadth-First Search (BFS) or Sequential traversal.

## Context Mutation Model
The Entry Action uses **Implicit Initialization**. It does not perform explicit `context.set()` calls. Instead, the `RuleEngine` prepares the `ContextManager` *before* invoking the first handler.

- **Initialization Source**: `RuleEngine._get_initial_context()`
- **Mutation Type**: Initialization (State creation).

## Dependencies
- **`flexirule.ruleflow.core.engine`**: Relies on the engine to perform the initial discovery.
- **`flexirule.ruleflow.core.contracts`**: Uses the shared contract to define its icon and non-configurable status.

## Extension Points
The Entry Action is considered a "Closed Core" component. Developers should not override the `EntryActionHandler` as it would break the fundamental graph-traversal guarantees of the engine.

If customization is needed for "initialization" logic, it is recommended to use an [Assignment]({{< relref "core-actions/assignment" >}}) node immediately following the Entry Action.

## Internal Events
- **`rule_execution_start`**: Fired by the `RuleEngine` immediately before the Entry Action is processed.

## Source Files
- **Backend Handler**: `flexirule/ruleflow/core/action_handlers/simple_actions.py`
- **Backend Contract**: `flexirule/ruleflow/core/contracts.py`
- **Frontend Component**: `flexirule/public/js/flexirule/rule_builder/components/nodes/StartNode.vue`
- **Validation Logic**: `flexirule/ruleflow/core/validation_service.py`
