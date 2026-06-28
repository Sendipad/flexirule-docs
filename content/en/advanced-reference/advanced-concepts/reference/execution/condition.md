---
title: 'Condition: Execution Semantics'
description: Technical runtime behavior and engine guarantees for the Condition action.
weight: 20
---

# Condition: Execution Semantics

## Purpose
The **Condition** action provides deterministic, side-effect-free logic evaluation within the Rule Engine. Its purpose is to resolve a complex logic tree into a single boolean result, which is then used to determine the next step in the execution graph.

## Execution Lifecycle

1.  **Resolution Phase**:
    - The engine retrieves the `compiled_expression` from the action.
    - If missing but configuration exists, it raises a `ValueError` (Rule must be re-saved).
    - If the condition is entirely empty, it defaults to `True`.

2.  **Environment Preparation**:
    - The engine builds a `safe_locals` dictionary containing `doc`, `vars`, `frappe` (restricted), and helper functions (`length_of`, `resolve`, etc.).
    - For Collection logic, the engine prepares nested scopes for the specific iterator alias.

3.  **Evaluation Phase**:
    - The engine calls `eval_condition_bool(expression, safe_locals)`.
    - This uses `frappe.safe_eval` with a restricted globals dictionary (`{"__builtins__": {}}` plus safe locals) to prevent unauthorized code execution.
    - Python's native short-circuiting applies to `and` / `or` operators within the expression.

4.  **Routing Phase**:
    - The result is explicitly coerced to a boolean.
    - If `True`, the engine resolves `next_step_if_true`.
    - If `False`, the engine resolves `next_step_if_false`.

## Context Visibility
- **Read Access**: The action has full read access to the execution context (`doc`, `vars`, `meta`) and the database (via restricted `frappe` API). `old_doc` is available for change detection in supported events.
- **Write Access**: The action has **Zero** write access. It cannot mutate the document, set variables, or perform database writes. Any attempt to use write-capable methods on the restricted `frappe` object will raise a `PermissionError`.

## Transaction Behavior
- **Atomicity**: The evaluation itself is atomic and does not interact with the database transaction manager (except for read-only queries).
- **No Commits**: The Condition action never triggers a database `commit()` or `rollback()`.
- **Consistency**: Evaluation is performed against the current in-memory state of `doc` and `vars`, ensuring consistency with previous actions in the same transaction.

## Failure Behavior
- **Evaluation Errors**: If the Python expression raises an exception (e.g., `ZeroDivisionError`), the engine logs the failure to the **Error Log** and defaults the result to `False`.
- **Missing Fields**: Accessing a missing field on a valid object (e.g., `doc.non_existent_field`) resolves to `None` and evaluates as `False`.
- **NameError**: Unlike other exceptions, a `NameError` (referencing an undefined top-level scope like `vars` or a missing helper function) is **re-raised** to the engine. This is treated as a configuration bug and will stop rule execution unless an `on_error: Continue` policy is set on the node.
- **Missing Compilation**: If a rule is executed without being compiled, it raises a hard `ValueError`.

## Idempotency
The Condition action is **strictly idempotent**. Executing it multiple times with the same context will always yield the same result and will never change the system state.

## Re-entrancy
The action supports re-entrancy. It can be part of a loop or called within a sub-rule without side effects. The `RuleEngine` includes a safety limit (default 100 visits per node) to prevent infinite loops caused by logical cycles.

## Concurrency
Since the action is read-only and operates on the local execution context, it is inherently thread-safe. However, queries performed via the `frappe` API are subject to standard database row-locking and isolation levels.

## Performance Notes
- **Complexity**: Evaluation time is $O(N)$ where $N$ is the number of nodes in the logic tree.
- **Collections**: Evaluating logic against child tables is $O(R \times C)$ where $R$ is the number of rows and $C$ is the complexity of the row-level condition.
- **Optimization**: The engine uses `frappe.safe_eval` on pre-compiled Python strings, which is significantly faster than parsing the JSON AST at runtime.
- **Memory**: The action has a negligible memory footprint as it does not store large datasets.

## Related Topics
- [Action Documentation]({{< relref "core-actions/check.md" >}})
- [Architecture Reference]({{< relref "advanced-reference/advanced-concepts/architecture/actions/condition.md" >}})
- [Condition Builder Guide]({{< relref "core-actions/check.md" >}})
