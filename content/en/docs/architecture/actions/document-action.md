---
title: "Document Action: Architecture Reference"
description: "Class structure, Resource Mapper internals, and mode dispatch logic for the Document Action."
---

# Document Action: Architecture Reference

## Purpose
The **Document Action** implementation abstracts Frappe's CRUD operations into a declarative mapping-based engine. It centralizes document manipulation logic to ensure consistent application of permissions, background enqueuing, and context-aware value resolution.

## Class Structure

### `DocumentActionHandler(ActionHandler)`
-   **Responsibility**: The primary singleton handler registered in the `HandlerRegistry`.
-   **Key Methods**:
    -   `execute()`: Orchestrates the overall lifecycle, applies input mappings, and dispatches to mode handlers.
    -   `_create_new()`: Constructs document payloads and handles `is_async` enqueuing.
    -   `_update_existing()`: Handles targeted record modification.
    -   `_apply_table_mappings()`: Implements the recursive row-mapping engine.
    -   `_get_same_field_mappings()`: Implements field-matching logic between source and target.

## Execution Pipeline

1.  **Registry Lookup**: `RuleEngine` identifies the action type and fetches the `DocumentActionHandler` instance.
2.  **Mapping Layer**:
    -   **Scalar Mappings**: Resolved via `_resolve_field_mappings` or `compiled_scalars` (pre-compiled Python dict).
    -   **Static Values**: Merged last to ensure explicit configuration overrides dynamic discovery.
3.  **Table Engine**:
    -   Iterates over `table_mappings`.
    -   Resolves the source collection (usually a list of dicts from `doc` or `vars`).
    -   For each row:
        -   Creates a `row_context` with `item` (current row) and `loop` metadata.
        -   Evaluates `condition` (inclusion check) and `filter` (exclusion check).
        -   Applies field-level assignments to the row payload.
        -   Appends the result to the parent document via `doc.append()`.
4.  **Dispatch**:
    -   Sync: `frappe.get_doc(data).insert()` / `save()`.
    -   Async: `frappe.enqueue("..._async_create_doc", doc_data=data)`.

## Context Mutation Model
-   **Direct Memory Mutation**: For `Update Existing`, the handler performs `doc.set(field, value)` on a loaded object.
-   **Persistence Strategy**: Mutations are not committed to the database until the explicit `.insert()` or `.save()` call at the end of the mode handler.
-   **Context Injection**: The resulting document (post-save) is returned to the engine and injected into the `execution_context` (e.g., `vars.my_result`) using `apply_output_mapping`.

## Dependencies
-   **Rule Engine Core**: Relies on `HandlerRegistry` for registration.
-   **Value Resolver**: Uses `_safe_eval` (inheriting from `ActionHandler`) for Python expression evaluation.
-   **Permissions**: Depends on `flexirule.ruleflow.core.permissions.can_skip_permissions` for role-based security bypassing.
-   **Utils**: Uses `flexirule.ruleflow.utils.mapping.apply_input_mapping` for pre-execution config hydration.

## Extension Points
-   **Action Policies**: Developers can override operation-level policies (like `required_config_keys`) in `flexirule/ruleflow/core/contracts.py`.
-   **Custom Resolvers**: Custom Jinja filters or Python locals can be added to `_build_template_context` in the base `ActionHandler` to make them available to Document Action mappings.

## Internal Events
-   **Background Task**: Triggers a `frappe.enqueue` event for asynchronous creation.
-   **Standard Hooks**: Indirectly triggers all Frappe document lifecycle hooks (`before_insert`, `after_save`, etc.) for the target DocType.

## Source Files
-   **Backend**: `flexirule/ruleflow/core/action_handlers/create_doc.py`
-   **Frontend**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/DocumentActionConfig.vue`
-   **Contract**: `flexirule/ruleflow/core/contracts.py`
