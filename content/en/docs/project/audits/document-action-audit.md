# Audit Summary: Document Action

**Date**: 2025-05-15
**Status**: Inferred from Documentation & Architecture Reference (Direct Source Code Access Limited)

## 1. Overview
The Document Action is a core FlexiRule action designed to manage record lifecycles within the Frappe/ERPNext ecosystem. It abstracts complex CRUD operations into a declarative configuration model.

## 2. Supported Operations (Modes)
Based on current documentation and architectural references, the Document Action supports five distinct execution modes:

- **Create New**: Generates new records with deep mapping support (including child tables) and optional asynchronous execution.
- **Update Existing**: Modifies an existing record identified by a name or a dynamic expression.
- **Delete Record**: Permanently removes a record from the database.
- **Create ToDo**: A specialized wrapper for the `ToDo` DocType, simplifying task assignment.
- **Add Comment**: A specialized wrapper for the `Comment` DocType, enabling automated timeline interactions.

## 3. Configuration Schema
- **Action Type**: `documentaction`
- **Primary Fields**:
    - `mode`: (`create`, `update`, `delete`, `todo`, `comment`)
    - `doctype`: The target DocType.
    - `docname`: (For Update/Delete) Name of the target record or Python expression.
    - `skip_permissions`: Boolean flag.
    - `permission_audit_reason`: Mandatory string if permissions are skipped.
    - `is_async`: (For Create) Boolean to offload to background workers.
    - `return_variable`: The `vars.*` path to store the result.
- **Data Mapping**:
    - `scalar_mappings`: List of field-to-value assignments.
    - `table_mappings`: Recursive mapping configuration for child tables.
    - `static_values`: Dictionary of fixed field values.

## 4. Runtime Behavior
- **Transactionality**: Operates within the parent rule's transaction (if sync).
- **Hooks**: Triggers standard Frappe lifecycle hooks (`before_insert`, `on_update`, etc.).
- **Async Model**: Uses `frappe.enqueue` for background tasks, returning an enqueued status instead of the document object.
- **Same-Field Copy**: Logic exists to automatically pair fields with identical names between source and target objects.

## 5. Permissions & Security
- Respects standard Frappe permissions by default.
- Allows bypassing via `Skip Permissions` only for users with the `System Manager` role (enforced at the engine level).

## 6. Findings & Limitations
- **Documentation Fragmentation**: Currently, all modes are documented on a single long page, which may obscure the specific requirements and nuances of specialized modes like `Create ToDo` or `Delete Record`.
- **Implementation Detail**: The underlying handler (`DocumentActionHandler`) uses a dispatch pattern that naturally lends itself to being documented as separate operations.
- **Source Verification**: Paths verified as `flexirule/ruleflow/core/action_handlers/create_doc.py` (Backend) and `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/DocumentActionConfig.vue` (Frontend).

---
*Note: This audit was performed without direct access to the application repository. Implementation details are derived from `architecture/actions/document-action.md` and `actions/document-action/index.md`.*
