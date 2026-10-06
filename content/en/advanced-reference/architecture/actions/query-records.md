---
title: Query Records Architecture
description: Internal implementation details of the Query Records action handler.
weight: 70
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

The handler translates UI-level filter definitions into the tuple format expected by `frappe.get_list`. Detailed operator mappings and natural language keyword resolution are shared across the system.

- **Operator Mappings**: See [Query Filters Reference]({{< relref "advanced-reference/reference/query-filters" >}}).
- **Timespan Resolution**: Handled via `_resolve_timespan_range()`, using the logic defined in [Timespan Keywords]({{< relref "advanced-reference/reference/timespan-keywords" >}}).

### Nested Field Support
The architecture supports "dot-notation" for filtering on child table fields and linked documents. The `_doctype_has_field` method recursively validates these references against the DocType metadata at validation time.

---

## 3. Mode-Specific Dispatching

1.  **Configuration Parsing**: `action.config` is parsed into a dictionary.
2.  **Input Mapping Application**: `apply_input_mapping` is used to allow runtime context variables to override configuration keys.
3.  **Dispatch Table**:
    - **List/Doc**: `_query_list`, `_query_doc`.
    - **Aggregations**: `_aggregate` or `_count_records` using SQL-level `sum`, `avg`, etc.
    - **Report**: `_query_report`, wrapping `frappe.desk.query_report.run`.
4.  **Result Shaping**: `Query Report` results are post-processed to convert list-of-lists into list-of-dicts based on column definitions.

---

## 4. UI Component Architecture

- **Component**: `QueryRecordsConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/QueryRecordsConfig.vue`
- **Key Responsibilities**:
    - Reactive configuration state management.
    - Dynamic filter group rendering.
    - Real-time schema detection via the `test_action_query` API.
    - Extraction of Report filters via `frappe.desk.query_report.get_script`.

### Schema Detection API
The "Refresh Schema" button calls `flexirule.ruleflow.api.test_action_query`. This server-side helper executes a dry-run and returns column metadata, which is saved to `node.data.resolved_output_schema`.

---

## 5. Source Code References

| Resource | Path |
| :--- | :--- |
| **Action Handler** | `flexirule/ruleflow/core/action_handlers/query_records.py` |
| **UI Config** | `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/QueryRecordsConfig.vue` |
| **API Backend** | `flexirule/ruleflow/api.py` |
| **Mapping Utils** | `flexirule/ruleflow/utils/mapping.py` |
