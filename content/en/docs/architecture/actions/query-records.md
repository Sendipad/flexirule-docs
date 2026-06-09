---
title: "Query Records Architecture"
description: "Internal implementation details of the Query Records action handler."
type: docs
---

# Query Records Architecture

The **Query Records** action is implemented as a core Action Handler within the FlexiRule engine. It leverages the Frappe Framework's database abstraction layer to provide high-level query capabilities to rule flows.

---

## 1. Class Structure

- **Handler Class**: `QueryRecordsHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/query_records.py`
- **Registry Key**: `Query Records`

### Core Methods

| Method | Purpose |
| :--- | :--- |
| `execute()` | Entry point for action execution. Handles input mapping and mode dispatching. |
| `validate()` | Performs design-time validation of configuration (e.g., checking if fields exist). |
| `_resolve_query_filters()` | Resolves context expressions and normalizes operators for the backend. |
| `_normalize_filters_for_backend()` | Converts UI-friendly filter structures into standard Frappe filter tuples. |

---

## 2. Filter Normalization Logic

The handler translates UI-level filter definitions into the tuple format expected by `frappe.get_list`.

### Translation Table

| UI Operator | Backend Operator | Transformation |
| :--- | :--- | :--- |
| `starts with` | `like` | `value%` |
| `ends with` | `like` | `%value` |
| `Between` | `between` | `[start, end]` |
| `Timespan` | `between` | Resolved via `_resolve_timespan_range()` |

### Nested Field Support
The architecture supports "dot-notation" for filtering on child table fields. The `_doctype_has_field` method recursively validates these references against the DocType metadata to ensure safety.

---

## 3. Execution Pipeline (Detailed)

1.  **Configuration Parsing**: The `action.config` JSON string is parsed into a dictionary.
2.  **Input Mapping Application**: `apply_input_mapping` merges runtime context values into the configuration dictionary.
3.  **Mode-Specific Dispatch**:
    - **Query List/Doc**: Dispatched to `_query_list` or `_query_doc`.
    - **Aggregations**: Handled by `_aggregate` or `_count_records` using `frappe.get_all` with SQL aggregation functions.
    - **Report**: Handled by `_query_report`, which wraps `frappe.desk.query_report.run`.
4.  **Result Shaping**:
    - For `Query Report`, the handler performs post-processing to transform mixed-type results (lists of lists) into a consistent list of dictionaries based on column definitions.
5.  **Context Injection**: The engine core receives the return value and updates the `context.vars` or `context.doc` based on the node's `target` configuration (handled outside the specific handler).

---

## 4. UI Component Architecture

- **Component**: `QueryRecordsConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/QueryRecordsConfig.vue`
- **Key Responsibilities**:
    - Reactive configuration state management.
    - Dynamic filter group rendering via `FilterGroup.vue`.
    - Real-time schema detection via `test_action_query` API.
    - Report filter extraction from `frappe.desk.query_report.get_script`.

### Schema Detection API
The "Refresh Schema" button triggers the `flexirule.ruleflow.api.test_action_query` method. This server-side helper executes the query in a dry-run environment and returns the resulting column types, which are then saved to `node.data.resolved_output_schema`.

---

## 5. Source Code References

| Resource | Path |
| :--- | :--- |
| **Action Handler** | `flexirule/ruleflow/core/action_handlers/query_records.py` |
| **UI Config** | `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/QueryRecordsConfig.vue` |
| **API Backend** | `flexirule/ruleflow/api.py` |
| **Mapping Utils** | `flexirule/ruleflow/utils/mapping.py` |
