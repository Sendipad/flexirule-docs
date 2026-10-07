---
title: Query Records
description: Read records and calculate supported query results inside a rule.
weight: 90
---

# Query Records

**Query Records** is the read-oriented data Action Type.

It requires a Target DocType and Query Mode, then executes the selected mode and sends its result to the next step.

## Query Modes

| Mode | Result |
|---|---|
| **Query List** | A list of matching rows. |
| **Query Doc** | One document, including supported single/latest/cache strategies. |
| **Exist Record** | True when at least one matching record exists. |
| **Query Report** | Rows returned by a Frappe report. |
| **Count** | Number of matching records. |
| **Sum** | Sum of a configured field. |
| **Average** | Average of a configured field. |
| **Min** | Minimum value of a configured field. |
| **Max** | Maximum value of a configured field. |
| **Group By** | Grouped rows with an aggregate value. |

See [Which Query Mode Should I Use?]({{< relref "which-query-mode.md" >}}).

## Common configuration

The action requires:

- Target DocType
- Query Mode

The configuration can provide filters, fields, ordering, limits, grouping, report filters, and other mode-specific values.

Query filters are resolved against the rule execution context, so dynamic values can come from the document or context variables.

## Result handling

Query Records can expose results through supported result types such as:

- Yes / No
- Single Record
- List of Values
- List of Records

The allowed result type depends on the selected Query Mode.

## Permissions

Queries normally use Frappe permission enforcement.

The Rule Action also supports Ignore Permissions for Query Records, with a required Permission Audit Reason when enabled. Query Report mode still relies on the report's own permission checks.

## Choosing a mode

Choose the smallest result that satisfies the next step:

- need only existence → Exist Record;
- need a number → Count or an aggregate;
- need one document → Query Doc;
- need a collection → Query List;
- need report output → Query Report;
- need grouped summaries → Group By.
