---
title: 'Advanced Process: Architecture Reference'
description: Runtime orchestration, Registry pattern, and the ProcessOperationExecutor internals.
weight: 40
---

# Advanced Process: Architecture Reference

## Purpose
The **Advanced Process** action (internally `Process`) implements the "Strategy" pattern within FlexiRule. It provides a generic orchestration layer that can execute any registered business operation while providing standardized services like input/output mapping, retry logic, and transactional safety.

## Class Structure

### `ProcessHandler(ActionHandler)`
- **Responsibility**: The entry point for all process-type actions.
- **Key Method**: `execute(action, context, engine)`
- **Orchestration**: It does not execute logic directly; instead, it delegates to the `ProcessOperationExecutor`.

### `ProcessOperationExecutor` (`flexirule/ruleflow/core/process_runtime_v2.py`)
- **Responsibility**: The high-level runtime for declarative business processes.
- **Key Methods**:
    - `execute()`: Orchestrates the lifecycle of a process operation.
    - `_resolve_adapter()`: Locates the specific Python code (Adapter) for the requested operation.
    - `_validate_inputs()`: Verifies configuration against the operation's schema.

## The Process Registry
Processes are not hard-coded into the engine. They are discovered dynamically via the `ProcessRegistry`.

1. **Discovery**: On system startup, the registry scans for all `Process` DocTypes.
2. **Metadata**: Each process defines its available **Operations**, each with a schema (JSON Schema) for inputs and outputs.
3. **Binding**: Operations are bound to **Adapters**—Python classes that implement the actual logic.

## Execution Lifecycle

1.  **Context Preparation**: `ProcessHandler` hydates the action configuration using `apply_input_mapping`.
2.  **Executor Initialization**: The `ProcessOperationExecutor` takes over.
3.  **Schema Validation**: Inputs are validated. If a required field is missing or of the wrong type, a `ValidationError` is raised.
4.  **Savepoint Creation**: For synchronous processes, a database savepoint is created.
5.  **Adapter Execution**: The specific Adapter's `execute()` method is called.
6.  **Result Normalization**: The adapter's return value is normalized according to the output schema.
7.  **Mapping Back**: The result is stored in the rule's `vars` based on the `return_variable` configuration.

## Async vs. Sync
- **Sync**: Runs in the same process/request. If it fails, the rule can rollback the entire transaction.
- **Async**: Pushed to `frappe.enqueue`. The rule continues immediately. Errors in async processes are logged but do not stop the main rule flow.

## Extension Points
Developers can create new processes by:
1.  **Defining a Process DocType**: Create the metadata and operations.
2.  **Implementing an Adapter**: Create a Python class inheriting from `BaseProcessAdapter`.
3.  **Registering**: Ensure the adapter is linked to the operation in the registry.

## Source Files
- **Backend Handler**: `flexirule/ruleflow/core/action_handlers/process.py`
- **Runtime Engine**: `flexirule/ruleflow/core/process_runtime_v2.py`
- **Registry**: `flexirule/ruleflow/core/process_registry.py`
- **Contract**: `flexirule/ruleflow/core/contracts.py`
