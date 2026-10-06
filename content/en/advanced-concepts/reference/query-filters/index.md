---
title: Query Filters
description: Understand filters used to narrow FlexiRule database queries.
weight: 10
type: docs
---

# Query Filters

Filters tell a query which records should be included. In the visual builder, choose a field, an operator, and a value using the filter controls provided for the selected query mode. The available fields and operators can depend on the target DocType and mode.

FlexiRule's query behavior is built around Frappe's data/query APIs. Do not assume that every SQL expression, Python expression, or arbitrary dotted path is accepted as a filter. Use the fields and operators exposed by the builder and test the resulting query.

## Build a filter

A filter generally combines three parts:

1. **Field** — a field on the target DocType, such as `status`, `customer`, or `grand_total`.
2. **Operator** — the comparison to apply, such as equals, not equals, greater than, or in.
3. **Value** — a fixed value or a supported dynamic value resolved from the current execution context.

For example, a Sales Invoice query might include:

| Field | Operator | Value |
|---|---|---|
| `customer` | Equals | The current document's customer |
| `docstatus` | Equals | `1` |
| `outstanding_amount` | Greater Than | `0` |

This example describes the intent of the filter. Configure each row through the actual filter editor and use the Smart Value Selector for dynamic values.

## Combining conditions

When the query editor offers filter groups, use **AND** when all conditions must match and **OR** when any condition may match. Keep groups easy to review: complicated filter trees are harder to debug and can be more expensive to execute.

## Linked documents and child tables

A Link field stores a reference to another document; it does not mean every field on the linked document is automatically available as a filter field. Likewise, child-table filtering has different semantics from filtering a normal field on the parent DocType.

Use only linked-field traversal or child-table filters that the installed query mode and UI explicitly support. If a required relationship cannot be expressed by the filter controls, consider a separate query or a purpose-built server-side operation rather than assuming dot notation will work.

## Dynamic values

Use the Smart Value Selector to insert values from the current execution context, such as the triggering document or a variable produced by an earlier action. Dynamic values are resolved at runtime, so test the query with representative documents and inspect the actual output.

## Troubleshooting

- **No records returned:** verify the DocType, field, operator, value type, and document status.
- **Too many records returned:** add filters and use a sensible result limit where available.
- **A linked field is unavailable:** filter by the actual Link field or split the lookup into separate query steps.
- **Unexpected empty values:** test whether the source field is unset and whether the chosen operator handles empty values as intended.
- **Different output than expected:** inspect the result in Debug and confirm whether the mode returns records, values, a scalar, or grouped/report data.
