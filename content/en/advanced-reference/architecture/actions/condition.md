---
title: 'Condition: Architecture Reference'
description: Internal implementation details and developer reference for the Condition
  action.
weight: 20
---

# Condition: Architecture Reference

## Purpose
The **Condition** action is implemented as a bridge between a visual logic tree (AST) and Python's native evaluation engine. It leverages `frappe.safe_eval` to provide high-performance logic execution while maintaining strict security boundaries.

## Class Structure

- **`ConditionHandler(ActionHandler)`**:
  - Located in `flexirule/ruleflow/core/action_handlers/condition.py`.
  - Responsible for validating the presence of the `compiled_expression`.
  - Dispatches evaluation to the engine.
- **`RuleEngine`**:
  - Implements `_evaluate_python_condition(expression, context)`.
  - Manages the `safe_locals` environment.
- **`SafeFrappeAPI`**:
  - Located in `flexirule/ruleflow/core/engine.py`.
  - A proxy class that restricts `frappe` methods to read-only operations.

## Execution Pipeline

1.  **Engine Dispatch**: The `RuleEngine` identifies the action type and retrieves the `ConditionHandler` from the `HandlerRegistry`.
2.  **Handler Execution**: `ConditionHandler.execute()` is called.
3.  **Compilation Check**: The handler checks for `action.compiled_expression`. If missing, it raises a `ValueError`.
4.  **Runtime Eval**:
    - `engine._evaluate_python_condition()` is invoked.
    - It calls `eval_condition_bool()` from `flexirule.ruleflow.core.runtime_eval`.
    - The expression is evaluated using `frappe.safe_eval` within a restricted scope.
5.  **Coercion**: The result is passed through `bool()`, ensuring truthiness-based branching.
6.  **Navigation**: The handler returns `(result, next_id)`.

## Context Mutation Model
The Condition action follows a **Zero-Mutation** model.
- **Input**: Reads from `ContextManager` scope.
- **Internal**: May create temporary local variables if list comprehensions are used.
- **Output**: Returns a boolean to the engine's graph traverser. No changes are persisted to the context or database.

## Dependencies

- **`flexirule.ruleflow.core.runtime_eval`**: Core logic for safe evaluation and error logging.
- **`flexirule.ruleflow.core.condition_payload`**: Logic for extracting the JSON AST from the action configuration.
- **`frappe.safe_eval`**: The underlying Python evaluation engine.
- **`flexirule.ruleflow.utils.field_resolver`**: Used to resolve nested dot-notation paths (e.g., `doc.items.0.name`).

## Extension Points

### Custom Helper Functions
Developers can add new helper functions to the condition evaluation scope by modifying the `_build_eval_locals` method in `RuleEngine`. These functions then become available to all rules globally.

### Operator Customization
New operators can be added to the frontend `SimpleCondition.vue` component. Since the frontend compiles these into standard Python expressions (e.g., `in`, `==`, `.startswith()`), no backend changes are typically required unless a new Python library is needed.

## Internal Events
- **`eval_condition_bool` (Log)**: Emitted via `frappe.logger` and `frappe.log_error` if an expression fails to evaluate.

## Source Files

- **Backend Handler**: `flexirule/ruleflow/core/action_handlers/condition.py`
- **Compiler**: `flexirule/ruleflow/core/compiler.py` (Translates JSON AST to Python string)
- **Frontend Builder**: `flexirule/public/js/flexirule/rule_builder/components/condition_builder/ConditionBuilder.vue`
- **Runtime Evaluator**: `flexirule/ruleflow/core/runtime_eval.py`
- **Payload Utilities**: `flexirule/ruleflow/core/condition_payload.py`
- **Safe API Proxy**: `flexirule/ruleflow/core/engine.py` (see `SafeFrappeAPI`)
- **Field Resolver**: `flexirule/ruleflow/utils/field_resolver.py` (Handles nested dot-notation)

## Related Topics
- [Action Documentation]({{< relref "core-actions/condition.md" >}})
- [Execution Semantics]({{< relref "advanced-reference/reference/execution/condition.md" >}})
