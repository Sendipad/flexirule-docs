---
title: "Assignment"
description: "Change values of document fields and variables."
weight: 20
aliases:
  - /docs/actions/assignment/
capabilities:
  category: data
  mutation: read-write
  targets:
    - document
    - context
  triggers:
    - any
  flow: linear
  transaction:
    - transactional
badges:
  - core
---

# Assignment

Keywords: assignment, change value, variables, update field, increment, batch update

## Overview

The **Assignment** action is used to change data during rule execution. Use this action when a rule needs to:

- **Update document fields** (e.g., changing a status or priority).
- **Store temporary values** for use later in the rule.
- **Perform calculations** or increment counters.
- **Build collections** or add items to a list.

### Batch Updates
An Assignment action can contain multiple changes. This allows related updates to be grouped together in a single node instead of creating separate actions for every field update, keeping your rule graph clean and organized.

{{< info >}}
**Migration Note:** The "Assignment" action type replaces the legacy **Set Value** node. Existing "Set Value" nodes will automatically work as `Set` assignments.
{{< /info >}}

---

## Assignment Targets

The Assignment action can modify two types of data:

### Document Fields (`doc`)
Updates fields on the current document being processed.

Changes become part of the document state and are available to later actions and business logic. Depending on the trigger and execution context, they may also be persisted to the database as part of the document transaction.

**Examples:**
- `doc.status`: Change an Invoice status to "Paid".
- `doc.priority`: Escalate a Support Ticket to "High".
- `doc.approval_date`: Set the current date when approved.

### Variables (`vars`)
Stores temporary data that exists only while the rule is running. Variables are useful for calculations or passing data between different parts of a complex rule.

**Examples:**
- `vars.total_score`: Calculate a cumulative score across several checks.
- `vars.is_qualified`: A temporary flag used to decide a later branch.
- `vars.item_count`: Track how many items meet specific criteria.

---

## Configuration

Each change row in an Assignment action includes:

| Field | Description |
| :--- | :--- |
| **Target** | The field (`doc.`) or variable (`vars.`) to update. |
| **Operator** | How the value should be applied (e.g., Set, Increment). |
| **Value** | The new data to apply. |
| **Run If** | (Optional) A condition that determines if this specific change should happen. |

---

## Value Sources

The value used in an assignment can come from multiple sources:

- **Fixed values**: Numbers (e.g., `10`), strings (e.g., `"Paid"`), or booleans.
- **Document fields**: Another field from the document (e.g., `doc.posting_date`).
- **Variables**: A previously stored variable (e.g., `vars.current_total`).
- **Formulas**: Mathematical or date transformations (e.g., `doc.total * 0.1`).
- **Template expressions**: Dynamic strings using Jinja (e.g., `"Welcome {{ doc.customer_name }}"`).

---

## Operators

| Operator | Purpose |
| :--- | :--- |
| **Set** | Replaces the current value with the new one. |
| **Clear** | Resets the value to empty (None, 0, "", [], or {}). |
| **Increment** | Adds a number to the current value. |
| **Decrement** | Subtracts a number from the current value. |
| **Append** | Adds an item to a list or table. |
| **Merge** | Combines values from one object into another. |
| **Toggle** | Switches a checkbox (Yes/No) to its opposite state. |

---

## Execution Order

Changes within a single Assignment action are executed from **top to bottom**.

A later row can use values produced by an earlier row in the same action. For example, you can calculate a tax amount in one row and then use that variable to update a total in the next.

---

## Examples

### 1. Simple Status Update
**Goal**: Mark an order as "Approved".
- **Target**: `doc.status`
- **Operator**: `Set`
- **Value**: `Approved`

### 2. Increment a Counter
**Goal**: Count how many high-value items are found.
- **Target**: `vars.high_value_count`
- **Operator**: `Increment`
- **Value**: `1`

### 3. Conditional Discount
**Goal**: Give a 10% discount only if the total is over 5,000.
- **Target**: `doc.discount_percentage`
- **Operator**: `Set`
- **Value**: `10`
- **Run If**: `doc.grand_total > 5000`

---

## Best Practices

- **Prefer document fields for business outcomes**: Use `doc.*` for data that needs to be visible to users or stored permanently.
- **Prefer variables for intermediate calculations**: Use `vars.*` for temporary scores, flags, or counters.
- **Initialize counters**: Ensure a variable is initialized (e.g., set to `0`) before using the `Increment` operator.
- **Keep related updates together**: Group assignments that fulfill a single business intent into one action node.
- **Use descriptive names**: Give your variables names that clearly describe what they store.

---

## Common Mistakes

- **Incrementing non-numeric fields**: Trying to use `Increment` on a field that contains words instead of numbers.
- **Using variables for permanent storage**: Storing a value in `vars.status` and expecting it to be visible on the document after the rule finishes.
- **Circular updates**: Setting a field to a value that triggers the same rule again, potentially causing an infinite loop.

---

## Related Topics
- [Variables Reference]({{< relref "docs/reference/glossary.md" >}})
- [Value Resolver]({{< relref "docs/architecture/ui/action-config-panels.md#1-valueresolvercontrol" >}})
- [Condition Action]({{< relref "docs/actions/condition/index.md" >}})
- [Loop Action]({{< relref "docs/actions/loop/index.md" >}})
- [Implementation Details]({{< relref "docs/architecture/engine/action-implementation.md" >}})
