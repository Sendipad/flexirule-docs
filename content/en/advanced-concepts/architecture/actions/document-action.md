---
title: 'Document Action: Architecture Reference'
description: Handler structure, Resource Mapper behavior, and mode dispatch for Document Action.
weight: 30
---

# Document Action: Architecture Reference

## Purpose

Document Action is a mapping-driven handler for creating, updating, and deleting target Frappe documents, plus two specialized operations that create a ToDo or timeline Comment linked to the current context document. The canonical implementation is the DocumentActionHandler in the application source.

## Handler and contracts

The handler is registered with HandlerRegistry and exposes an ActionContract for the **Document Action** action type. The contract defines five modes:

- **Create New**
- **Update Existing**
- **Delete Record**
- **Create ToDo**
- **Add Comment**

The operation contracts provide mode-specific field overrides, validation metadata, required configuration keys, result types, and supported context mutation policies. The frontend configuration component is DocumentActionConfig.vue, with the mode and effective policy supplied through the action contract system.

## Execution pipeline

1. **Plan hydration:** the handler obtains the compiled action plan for the rule action.
2. **Permission policy:** the handler evaluates whether Skip Permissions is authorized through the can_ignore_permissions policy helper. If a bypass is not authorized, execution fails rather than silently ignoring the policy.
3. **Input mapping:** configured input mappings are applied to the action configuration using the current execution context.
4. **Mode dispatch:** the handler dispatches to the method for the selected Document Mode.
5. **Result propagation:** the handler returns the operation result and the action's next True-path action to the rule engine.

## Mode behavior

### Create New

The handler builds a new document payload for the selected Reference DocType. Optional same-field mapping is applied first, followed by dynamic scalar mappings, and then explicit static values. Static values therefore take precedence over dynamic and same-field mappings for the same target field.

For synchronous creation, the handler constructs the document, applies configured child-table mappings, inserts it, and returns the saved document as a dictionary. When asynchronous creation is enabled, it enqueues a background job and immediately returns an acknowledgement containing the queued state and target DocType; the saved document is not available as the immediate result.

### Update Existing

The handler resolves the target name from Reference DocName or configured fallback values, loads the existing document, and checks write permission unless the authorized bypass is active. Same-field mappings run first, static values next, and dynamic scalar mappings last. Child-table mappings are applied before the document is saved. The saved document data is returned.

### Delete Record

The handler resolves one document name, verifies that the record exists, checks delete permission unless the authorized bypass is active, and calls Frappe's delete operation. The returned result contains a deletion flag, target DocType, and record name. This mode is not a bulk-query or automatic iteration operation.

### Create ToDo and Add Comment

These modes are specialized operations that require Reference DocType to be ToDo or Comment, respectively. Both require the current context document and link the new record to its DocType and name. Create ToDo requires an assignee and description; Add Comment requires comment text. Both return the created record data.

## Resource Mapper internals

The Resource Mapper stores its UI model in action config and the save/compile pipeline can produce runtime mapping keys such as compiled scalar mappings. Supported mapping concepts include:

- scalar source-to-target mappings;
- explicit static target values;
- optional same-field copying from a source object;
- child-table mappings with a source collection, row assignments, item alias, optional condition/filter expressions, and reset/add-if-empty behavior.

Child-table sources must resolve to a list or tuple. For each row, the handler creates a row context exposing the current row as item and the configured alias, plus loop metadata. A row condition excludes rows that do not pass; a filter expression skips rows that pass the filter. If Reset Value is enabled, the target table is cleared before mapped rows are appended. If Add If Empty is enabled and the target table already contains rows, that table mapping is skipped.

The Visual Mapper currently focuses on scalar mappings; use the Classic Resource Mapper for child-table mapping details.

## Permission and transaction boundaries

Document Action uses normal Frappe permission checks by default. Skip Permissions is a privileged bypass governed by can_ignore_permissions and requires a permission audit reason. Synchronous document operations participate in the surrounding request/rule transaction; the handler does not explicitly commit the database. Async Create New runs in a separate background job and transaction.

## Source files

- Backend handler: flexirule/ruleflow/core/action_handlers/document_action.py
- Frontend configuration: flexirule/public/js/flexirule/rule_builder/components/rule_config/types/DocumentActionConfig.vue
- Handler contracts: flexirule/ruleflow/core/action_handlers/base_contract.py and the registered handler's operation contracts
- Mapping helper: flexirule/ruleflow/utils/mapping.py
