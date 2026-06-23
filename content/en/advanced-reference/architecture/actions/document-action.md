---
title: Document Action Architecture
description: Internal implementation details of record creation, updates, and deletions.
weight: 30
type: docs
---

# Document Action Architecture

The **Document Action** (Update Record) manages interactions with the Frappe database through a high-level abstraction.

---

## 1. Class Structure

- **Handler Class**: `DocumentActionHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/document_action.py`
- **Registry Key**: `Document Action`

---

## 2. Operation Dispatching

The handler dispatches based on the configured `operation`:

### Create
1.  **Preparation**: Creates a new `frappe.new_doc(doctype)` instance.
2.  **Assignment**: Applies configured field mappings using `apply_assignments`.
3.  **Persistence**: Calls `doc.insert()` and `doc.submit()` (if applicable).

### Update
1.  **Retrieval**: Fetches the document using `frappe.get_doc(doctype, name)`.
2.  **Mapping**: Updates specific fields while preserving existing data.
3.  **Persistence**: Calls `doc.save()`.

### Delete
1.  **Removal**: Calls `frappe.delete_doc(doctype, name)`.

---

## 3. Background Execution

If `is_async` is enabled:
- The operation is wrapped in a background job and enqueued via `frappe.enqueue`.
- The rule flow continues immediately, with the background job handling persistence independently.

---

## 4. UI Component Architecture

- **Component**: `DocumentActionConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/DocumentActionConfig.vue`
