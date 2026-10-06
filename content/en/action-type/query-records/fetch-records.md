---
title: Fetch Records
description: Retrieve a filtered collection of records for use in later rule steps.
weight: 11
---

# Fetch Records

Use **Fetch Records** when a rule needs a collection of matching records from a DocType. For example, a rule can retrieve submitted invoices for the current customer and use the result to calculate a decision or process each matching record.

## Configure the query

1. Add a **Query Records** action to the canvas.
2. Choose **Fetch Records** in the query mode selector.
3. Select the target **Reference DocType**.
4. Add filters for the records that should be returned.
5. Choose the fields needed by later actions, if field selection is available in your mode.
6. Set a sensible result limit and ordering where appropriate.
7. Give the result a clear output name and use the Smart Value Selector to reference it in later steps.

## Example: find open invoices for the current customer

The goal is to retrieve submitted invoices for the same customer as the triggering document that still have an outstanding balance.

| Field | Comparison | Value |
|---|---|---|
| Customer | Equals | Current document's customer |
| Docstatus | Equals | `1` |
| Outstanding Amount | Greater Than | `0` |

Configure the filters using the UI controls for your installed version. The table describes the intended business criteria; it is not a query-language snippet to paste into the editor.

After running Debug, verify that the result contains only the expected invoices. Then connect the result to a later action, such as a loop, calculation, or condition.

## Understand the result

Fetch Records returns a collection, not a single document or a numeric total. If you need only one document, use **Query Doc** where appropriate. If you need only to know whether a match exists, use **Exist Record**. If you need a count or total, consider **Count** or **Sum** instead of retrieving every record.

## Best practices

- Filter early to avoid retrieving unrelated records.
- Keep the result limit appropriate for the business process.
- Select only the fields the flow actually uses.
- Test the empty-result case and the maximum expected result size.
- Confirm permissions and avoid enabling permission bypass unless there is a documented reason.
- Do not assume arbitrary linked-field paths or child-table conditions are supported; use only the filter capabilities exposed by the selected query mode.

[Back to Query Records]({{< relref "action-type/query-records/_index.md" >}}) · [Query filter reference]({{< relref "advanced-concepts/reference/query-filters/index.md" >}})
