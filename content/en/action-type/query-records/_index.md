---
title: Query Records
description: Retrieve records and summaries for decisions in a visual rule.
weight: 90
entity_kind: action_operation
category: data-operations
mutation: false
targets: ["Frappe DocType"]
---

# Query Records

Use **Query Records** when a rule needs information beyond the document that triggered it. Configure a target DocType, choose a query mode, define supported filters, and store the result for later actions.

A query is a data-reading step. It does not itself mean that matching records are updated; use a separate action when you need to change data.

> **Tip:** Start with a narrow filter and only request the fields your rule needs. Test the query against known records before using its output in a production rule.

{{< video src="/images/demo-condition-and-query.webm" controls="true" muted="true" loop="true" >}}

## Choose the right mode

| Mode | Use it when you need… | Result concept |
|---|---|---|
| **Fetch Records** | A configurable record query with selected fields, filters, ordering, and a result limit | A collection of matching records |
| **Query List** | A list-oriented result rather than full document objects | A lightweight list of selected values |
| **Query Doc** | One particular document or a single-record result | One record |
| **Exist Record** | To know whether any matching record exists | A yes/no result |
| **Query Report** | Data from a supported existing report | Report rows or report output |
| **Count** | The number of matching records | A number |
| **Sum** | The total of a numeric field | A number |
| **Average** | The average of a numeric field | A number |
| **Min** | The lowest value of a field | A value |
| **Max** | The highest value of a field | A value |
| **Group By** | A summary grouped by one or more fields | Grouped results |

Mode availability and configuration fields are defined by the installed FlexiRule version. Use the mode selector and its visible fields as the source of truth.

## A typical setup

1. Add a **Query Records** action to the canvas.
2. Select the target **Reference DocType**.
3. Choose the query mode that matches the result you need.
4. Add filters to narrow the records.
5. Configure selected fields, ordering, grouping, or limits when the mode supports them.
6. Set **Save Result As** (or the corresponding output setting) so later actions can reference the result.
7. Run a debug test and inspect the output before connecting it to conditions, loops, assignments, or notifications.

## Use query results in later actions

The result is useful only when later actions know where to read it from. Give the output a meaningful variable name, then select that value through the Smart Value Selector in the next action. Check whether the selected mode returns a single record, a list, a scalar aggregate, or report rows; these shapes are not interchangeable.

## Performance and reliability

- Prefer **Exist Record** for a yes/no question instead of retrieving a whole list.
- Prefer **Count**, **Sum**, **Average**, **Min**, **Max**, or **Group By** when the required result is an aggregate and the selected mode supports it.
- Keep list queries bounded with a sensible result limit.
- Select only fields used by the rule.
- Test empty results and unexpected values, not only the case where records are found.
- Review permissions and any explicit permission-bypass setting carefully.

## Related guides

- [Fetch Records](fetch-records.md)
- [Query List](query-list.md)
- [Query Doc](query-doc.md)
- [Exist Record](exist-record.md)
- [Query Report](query-report.md)
- [Query filters]({{< relref "advanced-concepts/reference/query-filters/index.md" >}})
