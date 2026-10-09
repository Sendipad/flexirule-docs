---
title: Query Records
description: Read records or query results for use in a visual rule.
weight: 90
---

# Query Records

**Query Records** is a data-reading action with several distinct modes. Choose a mode based on the result your next step needs, configure the fields and filters exposed by that mode, and store the result for downstream actions.

A query does not itself update the matched records. Use [Assignment](../assignment.md) for supported assignments in the current context or [Document Action]({{< relref "../update-record/" >}}) for supported operations on a target document.

> **Important:** Query modes have different backend implementations and result shapes. Do not assume that a configuration or output from one mode is interchangeable with another.

## Choose the right mode

| Mode | Use it when you need… | Result shape / notes |
|---|---|---|
| [Fetch Records](fetch-records.md) | A configurable collection query with fields, filters, sorting, limit, offset, and related options exposed by the UI | List of records; uses Frappe Query Builder compatibility path |
| [Query List](query-list.md) | An existing list-oriented query | Preserve legacy configuration and verify the selected fields/output |
| [Query Doc](query-doc.md) | A single target document or record | Single-record or full-document output, depending on configuration |
| [Exist Record](exist-record.md) | To check whether a matching record exists | Yes/no result |
| [Query Report](query-report.md) | A supported existing report | Report output; requires a Report target |
| Count / Sum / Average / Min / Max | A supported aggregate result | Numeric/value result; aggregate modes have their own configuration requirements |
| Group By | A grouped result supported by the selected configuration | Grouped rows; do not assume arbitrary aggregation expressions are supported |

See [Which Query Mode Should I Use?](which-query-mode.md) for a decision table.

## Typical configuration path

1. Add Query Records to the canvas.
2. Choose a **Query Mode**.
3. Select the required target DocType or report, depending on the mode.
4. Configure the fields, filters, sorting, limits, or other options actually shown for that mode.
5. Set **Result Handling** to store or update a context variable as appropriate.
6. Debug the rule and inspect the returned value before referencing it downstream.

The backend publishes mode-level contracts that determine operation options, required fields, result types, and which controls are shown. Use the selected mode's controls as the authority; not every setting applies to every mode.

## Results, variables, and execution

Query Records resolves configured input mappings and supported dynamic values before dispatching to the selected mode handler. The returned result then follows the action's configured next step. How the result is represented depends on the selected mode; list rows, a single document, a boolean, aggregate values, and report output are not interchangeable.

Use the result-handling controls to save the result in context, then choose it in later actions using the shared value controls. Always test both matching and empty-result cases.

## Permissions

Query Records exposes a **Skip Permissions** setting with a conditional audit-reason field. The backend checks permission-bypass eligibility before executing the selected query. Bypassing read permissions can reveal records the current user would not otherwise access, so leave it disabled unless the bypass is explicitly approved. Exact behavior depends on the selected mode and its implementation.

## Compatibility and limitations

Fetch Records is a newer mode backed by `frappe.qb.get_query`; it is not a rename or automatic replacement for Query List. Existing legacy configurations should be preserved unless the application explicitly implements a migration. Query Builder's supported filter syntax and behavior depend on the installed Frappe version.

## Related guides

- [Which Query Mode Should I Use?](which-query-mode.md)
- [Fetch Records](fetch-records.md)
- [Query List](query-list.md)
- [Query Doc](query-doc.md)
- [Exist Record](exist-record.md)
- [Query Report](query-report.md)
- [Query filters]({{< relref "../../advanced-concepts/reference/query-filters/index.md" >}})
- [Loop](../loop.md)
