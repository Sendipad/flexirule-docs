---
title: "Query Records Execution Semantics"
description: "Detailed runtime behavior, filter resolution, and permission guarantees for Query Records."
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
    - Natural language date keywords are resolved into static date ranges.
4.  **Database Dispatch**: The query is dispatched to the database layer based on the selected **Mode**.
5.  **Output Mutation**: The results are injected into the specified context variable (e.g., `vars.result`).

---

## 2. Query Mode Implementation

| Mode | Backend Implementation | Typical Return Type |
| :--- | :--- | :--- |
| **Query List** | `frappe.get_list` | `list[dict]` |
| **Query Doc** | `frappe.get_doc().as_dict()` | `dict` |
| **Exist Record** | `frappe.db.exists` | `bool` |
| **Count** | `frappe.get_all(fields=["count(name)"])` | `int` |
| **Sum / Avg / Min / Max** | `frappe.get_all(fields=["AGG(field)"])` | `int | float` |
| **Group By** | `frappe.get_all(group_by="field")` | `list[dict]` |
| **Query Report** | `frappe.desk.query_report.run` | `dict` (see below) |

---

## 3. Data Structure Guarantees

### Standard Query Modes
Modes such as **Query List** and **Group By** return a simple list of dictionaries.
Example (Query List):
```json
[
  {"name": "SO-001", "status": "Draft"},
  {"name": "SO-002", "status": "Submitted"}
]
```

### Query Report Structure
The `Query Report` mode returns a complex object containing metadata and the data set.

**Object Shape:**
```json
{
  "columns": [
    {"label": "Item Code", "fieldname": "item_code", "fieldtype": "Link", "options": "Item"},
    {"label": "Quantity", "fieldname": "qty", "fieldtype": "Float"}
  ],
  "result": [
    {"item_code": "ITEM-001", "qty": 10.5},
    {"item_code": "ITEM-002", "qty": 5.0}
  ]
}
```

**Downstream Consumption:**
If stored in `vars.my_report`, users access data via:
- `vars.my_report.result` (The list of rows)
- `vars.my_report.result[0].item_code` (The item code of the first row)

---

## 4. Filter Normalization & Timespan Keywords

The engine supports a "Timespan" operator for date fields. These keywords are resolved at the moment of execution relative to the system time.

### Supported Timespan Keywords

| Keyword | Start Date | End Date |
| :--- | :--- | :--- |
| `today` | 00:00:00 Today | 23:59:59 Today |
| `yesterday` | 00:00:00 Yesterday | 23:59:59 Yesterday |
| `this week` | Monday of current week | Sunday of current week |
| `last week` | Monday of previous week | Sunday of previous week |
| `this month` | 1st of current month | Last day of current month |
| `last month` | 1st of previous month | Last day of previous month |
| `this quarter` | 1st day of current quarter | Last day of current quarter |
| `last quarter` | 1st day of previous quarter | Last day of previous quarter |
| `this year` | Jan 1st of current year | Dec 31st of current year |
| `last year` | Jan 1st of previous year | Dec 31st of previous year |
| `last 7 days` | 7 days ago | Today |
| `next 30 days` | Today | 30 days from now |

---

## 5. Permission & Audit Model

### Standard Enforcement
By default, all queries respect Frappe's standard Permission Manager. If a user does not have `Read` access to the `reference_doctype`, the action will throw a `frappe.PermissionError`.

### Skip Permissions
When `skip_permissions` is enabled:
1. The engine uses `frappe.get_all` with `ignore_permissions=True`.
2. A `permission_audit_reason` must be provided in the configuration.
3. This reason is captured in the Rule Execution Log for audit purposes.

**Valid Audit Reasons (Examples):**
- "Automated background reconciliation of ledger entries."
- "System-level verification of customer credit limit (read-only)."
- "Approval workflow verification by non-privileged supervisor."

---

## 6. Performance & Transactional Behavior

- **Read-Only**: Query Records is a strictly read-only action. It does not commit changes to the database.
- **Transaction Context**: Queries run within the current database transaction. If the rule is triggered during a `doc.submit()`, the query will see uncommitted changes from the current document.
- **Limits**:
  - `Query List` defaults to a limit of 20 records unless configured otherwise.
  - Setting the limit to `0` or `All` will fetch all matching records. **Warning**: Large result sets can lead to memory exhaustion.
- **Recursion**: The engine does not automatically fetch linked documents unless `Query Doc` is used. For `Query List`, only the specified `fields` are retrieved.
