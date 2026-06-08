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

Keywords: assignment, change value, variables, update field, increment

## Overview

The **Assignment** action is used to change data during rule execution. Use this action when a rule needs to:

- **Update document fields** (e.g., changing a status or priority).
- **Store temporary values** for use later in the rule.
- **Perform calculations** or increment counters.
- **Build collections** or add items to a list.

{{< info >}}
**Migration Note:** The "Assignment" action type replaces the legacy **Set Value** node. Existing "Set Value" nodes will automatically work as `Set` assignments.
{{< /info >}}

---

## What can be modified?

The Assignment action can modify two types of data:

### Document Fields (`doc`)
Updates fields on the current document being processed. These changes are saved to the database and can be used by other systems or later actions.

**Examples:**
- `doc.status`: Change an Invoice status to "Paid".
- `doc.priority`: Escalate a Support Ticket to "High".
- `doc.approval_date`: Set the current date when approved.

### Variables (`vars`)
Stores temporary data that exists only while the rule is running. Variables are useful for calculations or passing data between different parts of a complex rule.

**Examples:**
- `vars.total_score`: Calculate a cumulative score across several checks.
- `vars.is_qualified`: A temporary flag used to decide a later branch.
- `vars.item_count`: Track how many items meet a specific criteria.

---

## Configuration

The Assignment action allows you to define one or more changes in a sequence. Each change includes:

| Field | Description |
| :--- | :--- |
| **Target** | The field (`doc.`) or variable (`vars.`) to update. |
| **Operator** | How the value should be applied (e.g., Set, Increment). |
| **Value** | The new data, which can be a fixed value, a formula, or another field. |
| **Run If** | (Optional) A condition that determines if this specific change should happen. |

---

## Operators

| Operator | Purpose |
| :--- | :--- |
| **Set** | Replaces the current value with the new one. |
| **Clear** | Resets the value to empty. |
| **Increment** | Adds a number to the current value. |
| **Decrement** | Subtracts a number from the current value. |
| **Append** | Adds an item to a list or table. |
| **Merge** | Combines values from one object into another. |
| **Toggle** | Switches a checkbox (Yes/No) to its opposite state. |

---

## Examples

### 1. Simple Status Update
**Goal**: Mark an order as "Approved".
- **Target**: `doc.status`
- **Operator**: `Set`
- **Value**: `Approved`

**Result**: The order status becomes "Approved".

### 2. Increment a Counter
**Goal**: Count how many high-value items are found.
- **Target**: `vars.high_value_count`
- **Operator**: `Increment`
- **Value**: `1`

**Result**: Each time this runs, `vars.high_value_count` increases by 1.

### 3. Conditional Discount
**Goal**: Give a 10% discount only if the total is over 5,000.
- **Target**: `doc.discount_percentage`
- **Operator**: `Set`
- **Value**: `10`
- **Run If**: `doc.grand_total > 5000`

---

## Best Practices

- **Use `doc` for permanent data**: If the information needs to be visible on the document after the rule finishes, use `doc.fieldname`.
- **Use `vars` for temporary data**: If you only need the data for calculations within the rule itself, use `vars.variablename`.
- **Keep it focused**: Use descriptive names for variables so other builders understand their purpose.
- **Batch related changes**: You can add multiple rows to a single Assignment node to keep your rule graph clean.

---

## Common Mistakes

- **Incrementing text**: Trying to use `Increment` on a field that contains words instead of numbers.
- **Using variables for permanent storage**: Storing a value in `vars.status` and expecting it to be saved on the document.
- **Circular updates**: Setting a field to a value that triggers the same rule again, causing an infinite loop.

---

## Related Topics
- [Variables]({{< relref "docs/reference/glossary.md" >}})
- [How Rules Execute]({{< relref "docs/user-guide/how-rules-execute.md" >}})
- [Condition Action]({{< relref "docs/actions/condition/index.md" >}})
- [Implementation Details]({{< relref "docs/architecture/engine/action-implementation.md" >}})
