---
title: 'Loop: Execution Semantics'
description: Technical runtime behavior and engine guarantees for the Loop action.
weight: 50
---

# Loop: Execution Semantics

## Purpose

The **Loop** action implements stateful, iterative traversal of collections within the FlexiRule graph. It is responsible for managing iteration pointers, binding collection items to the execution context, and controlling the branching path of the engine.

## Execution Lifecycle

The Loop action is processed as a recurring node in the execution graph:

1.  **State Initialization**: Upon first entry, the engine checks for an existing state in `vars._loops[action_id]`. If absent, a new state is initialized with `index: 0`.
2.  **Collection Resolution**: The `iterator` expression is evaluated using the Python expression engine. The result must be a `list` or `tuple`.
3.  **Bounds Check**: The engine compares the current `index` against the length of the collection.
4.  **Context Binding**:
    - **Item Binding**: The item at `collection[index]` is bound to `vars[alias]`. Precedence for the alias name is: `action.return_variable` > `config.alias` > `"item"`.
    - **Metadata Binding**: The `vars.loop` dictionary is updated with `index`, `first`, `last`, and `length`.
- **Empty Collections**: If the iterator resolves to an empty list or `None`, the engine returns `(False, next_step_if_false)` without binding iteration variables.
5.  **Path Selection**:
    - **Continue**: If items remain, the engine returns `(True, next_step_if_true)`.
    - **Terminate**: If the index is out of bounds, the engine cleans up the internal state and returns `(False, next_step_if_false)`.

## Context Visibility

- **Read Access**: Accesses `doc` and `vars` to resolve the iterator collection.
- **Write Access**: Modifies `vars` to inject the iteration item and metadata. It also maintains internal bookkeeping in `vars._loops`.
- **Last-Value Persistence**: After the loop terminates, `vars.loop` and the item alias variable persist in the context, retaining the state of the final iteration.

## Transaction Behavior

- **Parent Boundary**: The Loop action inherits the transaction boundary of the parent rule. It does not initiate its own database transaction or commit.
- **No Per-Iteration Savepoints**: By default, the engine does **not** create a database savepoint for each iteration. If iteration #5 fails, changes made to `doc` in iterations #1-4 remain in the in-memory document object.
- **Rollback Consistency**: Transactional integrity is managed at the Rule level or through explicit `on_error: "Rollback"` configurations on specific actions within the loop body.

## Failure Behavior

- **Resolution Failure**: If the iterator expression fails to evaluate or does not return a list/tuple, a warning is logged, and the loop terminates immediately (following the `After Last` path).
- **Body Failure**: Failures occurring in nodes within the `For Each` path are handled by the standard Action Error Policy. If the policy is "Continue", the engine skips the remaining actions for that iteration and proceeds to the next iteration.

## Idempotency

The Loop action itself is **not inherently idempotent** if it modifies document state or external systems. While the traversal is deterministic, repeated execution of a loop that increments a counter or appends to a list will produce different results.

## Re-entrancy

- **Nested Loops**: Fully supported via node-specific state tracking in `vars._loops[action_id]`.
- **Recursion**: Recursive graph paths (where a node eventually loops back to itself) are guarded by:
    - **Re-entry Guard**: The `RuleCoordinator` prevents a rule from triggering itself recursively on the same record/event.
    - **Visit Limit**: Each node is limited to 100 visits per execution (`max_visits_per_node`).
    - **Global Step Limit**: Total execution is capped at 1000 steps.

## Concurrency

- **Sequential Execution**: Iterations are processed strictly one-by-one.
- **Locking**: The Loop relies on Frappe's standard document locking. It does not introduce additional row-level locks.

## Performance Notes

- **Collection Size**: Large collections (e.g., thousands of items) significantly increase execution time and memory consumption as the entire collection is resolved at every iteration check.
- **Graph Depth**: Deeply nested loops increase the complexity of the execution trace and context memory.
- **Recommendation**: For processing very large datasets, offload logic to a [Process]({{< relref "/advanced-reference/architecture/overview.md" >}}) or use background jobs via the Rule configuration.
