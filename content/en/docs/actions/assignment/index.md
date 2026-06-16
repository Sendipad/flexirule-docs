---
title: "Assignment"
entity_kind: action
category: data-operations
description: "Updates document fields or context variables with new values."
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

Keywords: assignment, change value, variables, update field, increment, batch update, enrichment, naming

## Overview

The **Assignment** action is used to change data during rule execution. Use this action when a rule needs to:

- **Update document fields** (e.g., changing a status or priority).
- **Store temporary values** for use later in the rule.
- **Perform calculations** or increment counters.
- **Build collections** or add items to a list.
- **Enrich document data** before validation, submission, naming, or downstream processing.
- **Prepare naming values** that contribute to document identifiers or codes.

### Batch Updates
An Assignment action can contain multiple changes. This allows related updates to be grouped together in a single node instead of creating separate actions for every field update.

**Guideline**: Group updates that belong to the same business decision. For example, when an order is approved, you should group the status update, approval date, and approver name into one Assignment action.

{{< info >}}
**Migration Note:** The "Assignment" action type replaces the legacy **Set Value** node. Existing "Set Value" nodes will automatically work as `Set` assignments.
{{< /info >}}

---

## Assignment Targets

Only document fields (`doc.*`) and variables (`vars.*`) can be modified by an Assignment action.

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

The Assignment action uses a **Batch Assignments** interface to define sequential mutations.

| Field | Description |
| :--- | :--- |
| **Run If** | A condition that determines if this specific assignment row should execute. If not set, it defaults to **Always Run**. |
| **Target Field** | The field (`doc.`) or variable (`vars.`) to update. Uses an intelligent Field Picker. |
| **Operator** | How the value should be applied (e.g., Set, Increment, Toggle). The list of operators is filtered based on the target field type. |
| **Value Expression** | The new data or expression to apply. This utilizes the [Flex Value Control]({{< relref "docs/architecture/ui/controls.md" >}}), which supports static values, formulas, and the [Normalization Value Resolver]({{< relref "docs/concepts/data-manipulation/normalization-value-resolver.md" >}}). |

---

## Value Sources

The value used in an assignment can come from multiple sources:

- **Fixed values**: Numbers (e.g., `10`), text (e.g., `"Paid"`), or checkboxes.
- **Document fields**: Another field from the document (e.g., `doc.posting_date`).
- **Variables**: A previously stored variable (e.g., `vars.current_total`).
- **Formulas**: Mathematical or date transformations (e.g., `doc.total * 0.1`).
- **Template expressions**: Dynamic text generated from document fields and variables (e.g., `"Welcome {{ doc.customer_name }}"`).

---

## Operators

| Operator | Purpose |
| :--- | :--- |
| **Set** | Replaces the current value with the new one. |
| **Clear** | Removes the current value and resets the target according to its type. |
| **Increment** | Adds a number to the current value. |
| **Decrement** | Subtracts a number from the current value. |
| **Append** | Adds an item to a list or table. |
| **Merge** | Combines values from one object into another. |
| **Toggle** | Switches a checkbox (Yes/No) to its opposite state. |

---

## Execution Order

Changes within a single Assignment action are executed from **top to bottom**.

A later row can use values produced by an earlier row in the same action. This allows you to perform multi-step calculations efficiently.

**Example**:
1. **Row 1**: `vars.tax_amount = doc.total * 0.1`
2. **Row 2**: `doc.total_with_tax = doc.total + vars.tax_amount`

---

## Use Cases

### 1. Document Enrichment
Populate a customer category, risk score, territory, or derived business field before the document continues through the workflow. This ensures that downstream actions always have complete and standardized data.

### 2. Naming Strategies
Prepare values that contribute to document names or identifiers.
- Generate a customer code from customer attributes.
- Build a document naming prefix.
- Populate fields used by naming rules before a "Before Naming" trigger executes.

### 3. Status & State Management
- Mark an order as "Approved".
- Toggle an internal "Review Required" flag.
- Reset the approval state when a document is modified.

---

## Best Practices

- **Prefer document fields for business outcomes**: Use `doc.*` for data that needs to be visible to users or stored permanently.
- **Prefer variables for intermediate calculations**: Use `vars.*` for temporary scores, flags, or counters.
- **Initialize counters**: Ensure a variable is initialized (e.g., set to `0`) before using the `Increment` operator.
- **Keep related updates together**: Group assignments that fulfill a single business decision into one action node.
- **Use descriptive names**: Give your variables names that clearly describe what they store.

---

## Common Mistakes

- **Incrementing non-numeric fields**: Trying to use `Increment` on a field that contains words instead of numbers.
- **Using variables for permanent storage**: Storing a value in `vars.status` and expecting it to be visible on the document after the rule finishes.
- **Circular updates**: Setting a field to a value that triggers the same rule again, potentially causing an infinite loop.

---

## Related Topics
- [Normalization Value Resolver]({{< relref "docs/concepts/data-manipulation/normalization-value-resolver.md" >}})
- [Variables Reference]({{< relref "docs/reference/glossary.md" >}})
- [Value Resolver]({{< relref "docs/architecture/ui/action-config-panels.md#1-valueresolvercontrol" >}})
- [Condition Action]({{< relref "docs/actions/condition/index.md" >}})
- [Loop Action]({{< relref "docs/actions/loop/index.md" >}})
