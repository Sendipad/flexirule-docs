---
title: Loop
description: Iterate over a list or tuple and run a connected action path for each item.
weight: 40
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
aliases:
  - /docs/actions/loop/
---

# Loop

The **Loop** action iterates over a list or tuple and exposes the current item to actions in the loop body. Use it when the same sequence of steps must run for every row in a child table or every item returned by an earlier action.

Loop is a control-flow action: it does not fetch records by itself. If the collection must come from a database query, configure [Query Records](query-records/) first and use its result as the iterator.

## When to use Loop

Use Loop to:

- Process each row in a document child table, such as each item in an order.
- Run actions for each record in a list returned by Query Records.
- Calculate or validate a value for each item.
- Send a notification or perform a document operation for each item, where that operation is appropriate and permissions are understood.

Do not use Loop when you only need a single yes/no decision. Use [Condition](condition.md) for branching, or [Switch](switch.md) to choose among several configured cases.

## How the loop runs

The Loop handler reads the configured iterator, selects the current item, exposes it under the item alias, and routes to its **True** output while an item remains. When the collection is exhausted, it routes to the **False** output.

```text
                 ┌── True / Loop body ──→ actions for current item
                 │                              │
Loop ────────────┤                              └── connect back to Loop
                 │
                 └── False / Complete ──→ action after the collection
```

Connect the final action in the loop body back to the Loop node so the next iteration can run. Connect the False/completion path to the action that should run after all items have been processed.

An empty collection has no current item to process, so the loop proceeds to its completion path. The runtime expects the iterator to resolve to a **list or tuple**; if it resolves to another type, it logs a warning and treats it as an empty collection.

## Configure Loop

1. Add a **Loop** action to the canvas.
2. In **Iterator (List)**, choose the list or table to iterate over. Examples might include a document child table such as `doc.items` or a list variable produced by an earlier action.
3. Set **Item Alias** to a variable name for the current item, such as `row` or `item`. This field is required.
4. Connect the **True** output to the first action in the loop body.
5. Connect the final action in that body back to the Loop node.
6. Connect the **False** output to the next action after the loop completes.
7. Save and test the rule with an empty collection, one item, and multiple items.

The iterator picker is based on variables available at the Loop node and filters for table fields or values that expose nested fields. Use the actual available options in the editor; not every value is a valid collection.

## Current item and loop metadata

During each iteration, FlexiRule makes the current item available under the configured alias in the rule variables. For example, if the alias is `row`, downstream steps can reference the current row as `vars.row` (or select it in the Smart Value Selector).

The runtime also exposes loop metadata in `vars.loop`:

| Value | Meaning |
|---|---|
| `vars.loop.index` | Zero-based index of the current item (first item is 0). |
| `vars.loop.length` | Number of items in the collection. |
| `vars.loop.first` | `true` for the first item. |
| `vars.loop.last` | `true` for the final item. |

The loop metadata describes the current iteration. If you use nested loops, choose distinct item aliases so the inner loop does not overwrite the outer loop's current-item variable. Verify variable availability and values in Debug.

## Example: process order items

**Goal:** apply a calculation to every line item in a Sales Order.

1. Configure the Loop iterator to use the order's items table, such as `doc.items`.
2. Set **Item Alias** to `row`.
3. In the loop body, use the current row's fields (for example, its rate and quantity) to calculate or assign the required value using the supported action and value controls.
4. Connect the last body action back to Loop.
5. Use the Loop's completion/False path for any action that should run once after all rows have been processed.

Choose an Assignment or Document Action based on what you intend to change: Assignment handles supported value assignment in the rule context, while Document Action performs a supported operation on a target document. Do not assume that assigning a context value automatically persists a database change.

## Common mistakes

- **Missing the loop-back connection:** the body must return to Loop for the next item to be processed.
- **Using a non-list value:** the iterator must resolve to a list or tuple. If it resolves to a scalar or an unsupported object, the runtime treats it as an empty collection.
- **Using an alias before the iteration:** the current-item alias is set when Loop processes an item; do not assume it contains a current row outside the loop body.
- **Confusing the completion path with the body:** the False output is for after the collection is exhausted, not for processing each item.
- **Reusing aliases in nested loops:** give inner and outer loops distinct aliases and verify which variable downstream actions read.
- **Querying inside every iteration unnecessarily:** if the same record collection can be fetched once, retrieve it before Loop and iterate over that result. Use a query inside the loop only when the query genuinely depends on the current item.
- **Assuming context assignments persist:** use the appropriate document operation when a database change is required.

## Related guides

- [Which Action Should I Use?](which-action.md)
- [Query Records](query-records/)
- [Assignment](assignment.md)
- [Document Action]({{< relref "update-record/" >}})
- [Condition](condition.md)
- [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
- [Loop Architecture Reference]({{< relref "../advanced-concepts/architecture/actions/loop.md" >}})
