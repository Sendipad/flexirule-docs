---
title: "Entry Action: Execution Semantics"
description: "Technical runtime behavior and engine guarantees for the Entry Action."
---

# Entry Action: Execution Semantics

## Purpose
The **Entry Action** defines the deterministic entry point for the FlexiRule execution engine. Its primary runtime purpose is to synchronize the external trigger event with the internal rule-flow state.

## Execution Lifecycle
1.  **Selection**: The `RuleEngine` scans the rule's action list for a node with `action_type: "Entry Action"` or `action_id: "root"`.
2.  **Context Initialization**:
    *   The engine creates a new `ContextManager` instance.
    *   The triggering `doc` (if any) is injected into the context.
    *   The `vars` dictionary is initialized as an empty object `{}`.
    *   Global metadata (timestamp, user, event) is populated.
3.  **Handler Invocation**: The `EntryActionHandler` is called.
4.  **Passthrough**: The handler returns `(None, next_step_if_true)`, signaling the engine to proceed immediately to the next node.

## Context Visibility
- **Read**: Accesses global environment variables and the triggering document provided by the Frappe event system.
- **Write**: The Entry Action itself does not write to the context; it establishes the *baseline* context that all subsequent actions will read from or modify.

## Transaction Behavior
The Entry Action executes within the database transaction initiated by the **Trigger**:
- **Before Save/Submit**: It runs within the standard Frappe `db_insert` or `db_update` transaction.
- **After Submit**: It runs after the primary document transaction has committed but often within the same request lifecycle (depending on whether it is queued).
- **Scheduler**: It runs within a new dedicated database transaction managed by the Frappe background worker.

## Failure Behavior
- **Initialization Failure**: If the context cannot be initialized (e.g., missing document reference), the rule execution is aborted before the Entry Action is reached.
- **Traversal Failure**: If the Entry Action exists but has no `next_step_if_true` connection, the engine raises an `EmptyRuleError`.

## Idempotency
The Entry Action is **idempotent**. Executing it multiple times with the same input will always result in the same initialized context and the same traversal path to the next node.

## Re-entrancy
The Entry Action is not typically re-entered within the same execution path. However, in recursive rule scenarios (e.g., a rule on `Task` updates another `Task`), a *new* execution lifecycle begins at the Entry Action of the triggered rule.

## Concurrency
- **Thread Safety**: Each rule execution has its own isolated `RuleEngine` and `ContextManager` instance.
- **Race Conditions**: While the Entry Action itself is safe, the data it points to (`doc`) may be subject to standard database row-locking if multiple rules are triggered simultaneously for the same record.

## Performance Notes
- **Complexity**: $O(1)$ time complexity.
- **Overhead**: Negligible. The selection and initialization are performed using hash-map lookups.
- **Memory**: It occupies minimal memory, primarily proportional to the size of the triggering document and its associated metadata.
