---
title: 'Document Action: Execution Semantics'
description: Technical runtime behavior, transaction models, and permission escalation
  for the Document Action.
weight: 30
---

# Document Action: Execution Semantics

## Purpose
The **Document Action** provides a managed interface for performing CRUD (Create, Read, Update, Delete) operations and social side-effects (ToDo, Comment) within the Frappe framework. It ensures that data mutations are performed according to rule-defined mappings while respecting or explicitly bypassing the system's security model.

## Execution Lifecycle

1.  **Plan Hydration**: The `DocumentActionHandler` retrieves the pre-compiled `action_plan`.
2.  **Input Mapping**: If `input_mapping` is defined, context paths (e.g., `vars.request_payload`) are resolved and merged into the action's configuration.
3.  **Mode Dispatch**: The engine routes the request to a specific internal method:
    -   `_create_new`: Builds a `doc_data` dict using static values, scalar mappings, and same-field copies.
    -   `_update_existing`: Loads the target document via `frappe.get_doc(doctype, name)`.
    -   `_delete_record`: Verifies existence and permissions before calling `frappe.delete_doc`.
    -   `_create_todo` / `_add_comment`: Specialized linking to the context document.
4.  **Table Resolution**: For Create/Update modes, child table mappings are processed. By default, the target table is cleared (`reset_value: True`) before new rows are appended.
5.  **Permission Escalation**: The `can_skip_permissions` utility verifies if the action is authorized to bypass standard checks based on user roles and the presence of an audit reason.
6.  **Persistence**:
    -   Calls `new_doc.insert()` or `doc.save()`.
    -   In **Async** mode, enqueues the `doc_data` to the `default` Redis queue.

## Context Visibility
-   **Read Access**: The action has full access to the `execution_context`, including `doc`, `old_doc`, `vars`, and `frappe` (Safe API).
-   **Mutation**:
    -   Modifies the database state and external records.
    -   Updates the `execution_context` if a `return_variable` is specified.
-   **Async Limitation**: Background workers do **not** inherit the transient `vars` or `old_doc` from the enqueuing rule.

## Transaction Behavior
-   **Atomicity**: Synchronous operations execute within the current database transaction. A failure in `doc.save()` will trigger a rollback of the entire rule execution if the Rule's error policy is set to "Rollback".
-   **Commits**: The action does **not** perform an explicit `frappe.db.commit()`. Persistence depends on the success of the overall request or the parent rule's completion.
-   **Async Isolation**: Asynchronous document creation occurs in a completely separate database transaction and process.

## Failure Behavior
-   **Validation Failures**: If mandatory fields (like `assigned_to` for ToDos) are missing, the handler raises a `frappe.ValidationError`.
-   **Runtime Exceptions**: Errors during mapping resolution (e.g., division by zero in a source expression) are caught by the `RuleEngine`, which applies the action's configured Error Policy.
-   **Permission Denied**: If a user lacks access and `skip_permissions` is off, a `frappe.PermissionError` is raised.

## Idempotency
-   **Not Idempotent**: `Create New`, `Create ToDo`, and `Add Comment` will create a new record every time they are executed.
-   **Effectively Idempotent**: `Delete Record` (if the record is already gone) and `Update Existing` (if the values remain the same) can be considered idempotent, though database hooks will still fire for updates.

## Re-entrancy & Loops
-   **Recursive Risk**: Saving a document via this action **will** trigger standard Frappe hooks (`validate`, `on_update`). If a rule is configured to trigger on the same DocType/Event it modifies, it may enter an infinite loop.
-   **Mitigation**: The FlexiRule engine tracks node visits to detect recursion, but developers must implement logical guards (e.g., "Run If" conditions) to prevent cyclical saves.

## Concurrency
-   **Standard Frappe Locking**: Update operations utilize Frappe's optimistic concurrency control (modified timestamp checks).
-   **Race Conditions**: In high-concurrency environments, multiple rules updating the same record simultaneously may result in a `frappe.TimestampMismatchError`.

## Performance Notes
-   **Mapping Complexity**: Complex child table mappings with nested conditions and filters can increase memory usage and execution time.
-   **Heavy DocTypes**: Creating documents with extensive internal logic (e.g., Stock Entries with 100+ rows) should always be performed **Asynchronously**.
