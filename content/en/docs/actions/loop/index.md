---
title: "Loop"
description: "Iterate over collections and child tables to perform batch processing."
weight: 50
aliases:
  - /docs/actions/loop/

capabilities:
  category: flow-control
  mutation: read-only
  targets:
    - context
  triggers:
    - any
  flow: loop
  transaction:
    - transactional

badges:
  - core
---

# Loop Action

Keywords: loop, iterate, for-each, collection, child table, repeat

## Overview

The **Loop** action is a flow-control construct that enables iterative processing of collections. It allows rule builders to execute a sequence of actions for every item in a list, such as rows in a child table or records retrieved from a query.

Instead of writing complex scripts to handle batch operations, the Loop action provides a visual way to traverse data structures, making automation logic transparent and maintainable.

## When To Use

- **Child Table Processing**: Validating or updating every item in a Sales Order, Purchase Invoice, or Stock Entry.
- **Batch Record Processing**: Iterating over a list of documents fetched by a [Query Records]({{< relref "docs/actions/query-records" >}}) action.
- **Data Transformation**: Mapping values from one collection to another (e.g., creating Task records from Project Milestones).
- **Aggregations**: Performing complex calculations across a collection that cannot be handled by simple formulas.

## Configuration

The Loop action is configured via the properties panel in the Rule Builder.

| Field | Description |
| :--- | :--- |
| **Iterator** | An expression resolving to a list or tuple (e.g., `doc.items` or `vars.search_results`). |
| **Item Alias** | The variable name used to access the current item inside the loop body (defaults to `item`). |
| **Return Variable** | A standard action field that can be used as an alternative for the Item Alias. |

### Path Branching
The Loop node features two distinct exit ports:
1.  **For Each**: The execution path followed for every item in the collection.
2.  **After Last**: The execution path followed once the collection has been fully traversed.

## Supported Inputs

- **Collection**: A list, tuple, or Frappe child table (e.g., `doc.items`).
- **Context Variables**: Any variable currently available in `vars`.

## Supported Outputs

- **Item Variable**: The current iteration item, bound to `vars[alias]`.
- **Meta Variables**: Automatic iteration metadata available in `vars.loop`.

### Loop Metadata (`vars.loop`)
Inside the loop body, the following variables are automatically managed:

| Variable | Type | Description |
| :--- | :--- | :--- |
| `vars.loop.index` | Integer | The current iteration count (starts at 0). |
| `vars.loop.length` | Integer | The total number of items in the collection. |
| `vars.loop.first` | Boolean | `True` during the first iteration. |
| `vars.loop.last` | Boolean | `True` during the final iteration. |

## Execution Behavior

The Loop action operates as a stateful node within the execution graph.

```mermaid
graph TD
    Start[Enter Loop] --> Resolve[Resolve Collection]
    Resolve --> Check{Has More?}
    Check -- Yes --> Bind[Bind vars.item & vars.loop]
    Bind --> ForEach[Execute 'For Each' Path]
    ForEach --> Check
    Check -- No --> AfterLast[Execute 'After Last' Path]
```

1.  **State Initialization**: Upon first entry, the engine creates an internal tracker for the current index.
2.  **Collection Resolution**: The **Iterator** expression is evaluated against the current context.
3.  **Iteration**: The engine binds the current item and metadata to the context and follows the **For Each** path.
4.  **Completion**: When no items remain, the internal state is cleaned up, and execution follows the **After Last** path.

## Examples

### Sales Order Line Item Processing
**Problem**: Ensure every item in a Sales Order has a "Delivery Warehouse" assigned before submission.

**Configuration**:
- **Iterator**: `doc.items`
- **Item Alias**: `line`
- **For Each Path**: A [Condition]({{< relref "docs/actions/condition" >}}) node checking if `line.warehouse` is empty, followed by an [Assignment]({{< relref "docs/actions/assignment" >}}) or error message.

**Result**: Each line item is validated individually. If a warehouse is missing, the rule can trigger a specific response for that specific line.

### Consolidated Notification after Loop
**Problem**: Process a list of overdue invoices and send a single summary email after all have been flagged.

**Configuration**:
- **Iterator**: `vars.overdue_invoices`
- **Item Alias**: `invoice`
- **For Each Path**: [Assignment]({{< relref "docs/actions/assignment" >}}) to update `invoice.status`.
- **After Last Path**: [Notify]({{< relref "docs/actions/notify" >}}) action to send the summary.

**Result**: Invoices are updated one-by-one, but the email is only sent once the entire batch is processed.

## Best Practices

- **Unique Aliases**: When using nested loops, always provide unique **Item Aliases** (e.g., `parent_item`, `child_item`) to avoid variable collision.
- **Minimal Logic**: Keep the logic inside the **For Each** path as lean as possible. If the processing logic is complex, consider moving it into a [Sub-Rule]({{< relref "docs/triggers/callable-triggers.md" >}}).
- **Post-Loop Access**: The variables `vars.loop` and the item alias persist after the loop finishes, holding the values from the final iteration. Use this for summary logic if needed.

## Common Mistakes

- **Modifying the Collection**: Avoid adding or removing items from the collection while iterating over it (e.g., `doc.append("items", ...)` inside a loop over `doc.items`), as this can lead to unpredictable behavior or infinite loops.
- **Deep Nesting**: Avoid nesting loops more than 2-3 levels deep, as this can significantly impact the performance of rule execution.

## Limitations

- **Savepoints**: The Loop does not create a database savepoint for every iteration. If an error occurs in the 10th iteration, the mutations from iterations 1-9 remain in memory unless the parent rule rolls back the entire transaction.
- **Concurrency**: Loops are executed sequentially. Parallel iteration is not currently supported.

## Related Topics
- [Execution Semantics]({{< relref "docs/reference/execution/loop.md" >}})
- [Architecture Reference]({{< relref "docs/architecture/actions/loop.md" >}})
- [Query Records]({{< relref "docs/actions/query-records" >}})
- [Assignment]({{< relref "docs/actions/assignment" >}})
