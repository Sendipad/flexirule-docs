---
title: Query List
description: Retrieve a list-oriented result for use in later rule steps.
weight: 20
---

# Query List

Use **Query List** when the flow needs a collection of selected values or list-oriented results, rather than a single document or aggregate. For example, a rule may need a list of task names or item codes before deciding what to do next.

## Configure a Query List

1. Add a **Query Records** action.
2. Select **Query List** from the mode selector.
3. Choose the target DocType and configure the supported filters.
4. Select the fields or values needed by the next step, where available.
5. Set a result limit and ordering if the mode exposes those controls.
6. Save the output under a meaningful name and inspect it in Debug.

## Example

**Goal:** identify open, urgent tasks that are not yet assigned.

Configure the query to target `Task`, then use the available filter controls to match:
- Priority is Urgent
- Status is Open
- Assigned To is empty

The exact field and operator labels depend on the DocType metadata and installed builder. Configure them in the UI rather than pasting the example as a query expression.

## Understand the output

A list-oriented result is not automatically a full document object. Confirm the output shape in Debug before using it in another action. Use a **Loop** when the next step must process each result separately. Use **Fetch Records** when you need a collection of records, **Query Doc** for a single record, or an aggregate mode when you only need a number or summary.

## Best practices

- Keep filters specific, especially on high-volume DocTypes.
- Bound the result size where the selected mode supports a limit.
- Request only the fields the rule needs.
- Test both matching and empty-result cases.
- Avoid assuming linked-document or child-table paths are supported unless the filter UI exposes them.

[Back to Query Records]({{< relref "action-type/query-records/_index.md" >}}) · [Query filters]({{< relref "advanced-concepts/reference/query-filters/index.md" >}})
