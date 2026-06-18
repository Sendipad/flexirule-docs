---
title: Query Records Execution Semantics
description: Detailed runtime behavior, filter resolution, and permission guarantees
  for Query Records.
weight: 70
type: docs
---

# Query Records Execution Semantics

This document defines the runtime guarantees and execution logic for the **Query Records** action type.

---

## 1. Execution Pipeline

When a Query Records action is executed, the engine follows this strict sequence:

1.  **Input Mapping**: Optional `input_mapping` is applied to the action configuration, allowing context variables to dynamically override fields like `reference_doctype` or `filters`.
2.  **Permission Validation**:
    - If `skip_permissions` is **False**: The engine verifies the current user has `read` permission for the target DocType.
    - If `skip_permissions` is **True**: The engine bypasses permission checks but requires a `permission_audit_reason`.
3.  **Filter Resolution**:
    - Configuration filters are recursively traversed.
    - Expressions (e.g., `{{doc.name}}`) are resolved via the `ValueResolver`.
    - Natural language date keywords are resolved into static date ranges (See [Timespan Keywords]({{< relref "advanced-reference/reference/timespan-keywords" >}})).
4.  **Database Dispatch**: The query is dispatched to the database layer based on the selected **Mode**.
5.  **Output Mutation**: The results are injected into the specified context variable (e.g., `vars.result`).

---

## 2. Technical Implementation Table

| Mode | Backend Implementation | Typical Return Type |
| :--- | :--- | :--- |
| **Query List** | `frappe.get_list` | `list[dict]` |
| **Query Doc** | `frappe.get_doc().as_dict()` | `dict` |
| **Exist Record** | `frappe.db.exists` | `bool` |
| **Count** | `frappe.get_all(fields=["count(name)"])` | `int` |
| **Sum / Avg / Min / Max** | `frappe.get_all(fields=["AGG(field)"])` | `int | float` |
| **Group By** | `frappe.get_all(group_by="field")` | `list[dict]` |
| **Query Report** | `frappe.desk.query_report.run` | `dict` |

---

## 3. Data Structure Guarantees

### Aggregations
Modes like **Count**, **Sum**, **Avg**, **Min**, and **Max** return a primitive number. If no records are found, they return `0`.

### Complex Outputs
- **Group By**: Returns a list of dictionaries with the keys `[group_field, "value"]`.
- **Query Report**: Returns an object containing `columns` and `result`. See the [Query Report Detail]({{< relref "core-actions/query-records/query-report" >}}) for usage examples.

---

## 4. Permission & Audit Model

### Standard Enforcement
By default, all queries respect Frappe's standard Permission Manager. If a user does not have `Read` access to the `reference_doctype`, the action will throw a `frappe.PermissionError`.

### Skip Permissions
When `skip_permissions` is enabled:
1. The engine uses `frappe.get_all` with `ignore_permissions=True`.
2. A `permission_audit_reason` must be provided in the configuration.
3. This reason is captured in the Rule Execution Log for audit purposes.

---

## 5. Performance & Transactional Behavior

- **Read-Only**: Query Records is a strictly read-only action. It does not commit changes to the database.
- **Transaction Context**: Queries run within the current database transaction. If the rule is triggered during a `doc.submit()`, the query will see uncommitted changes from the current document.
- **Result Limits**:
  - `Query List` defaults to a limit of 20 records.
  - Setting the limit to `0` or `All` will fetch all matching records. **Warning**: Large result sets can lead to memory exhaustion.
- **Recursion**: The engine does not automatically fetch linked documents unless `Query Doc` is used.
