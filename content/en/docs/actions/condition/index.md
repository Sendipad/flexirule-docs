---
title: "Condition"
description: "Branching logic based on evaluation of expressions."
weight: 30
aliases:
  - /docs/actions/condition/
capabilities:
  category: flow-control
  mutation: read-only
  targets:
    - context
  triggers:
    - any
  flow: branching
  transaction:
    - transactional
badges:
  - core
---

# Condition Action

Keywords: conditions, branching, logic, if-else, evaluation, decision

## Overview

The **Condition** action is the primary mechanism for decision-making within a FlexiRule graph. It evaluates a hierarchical set of rules against the current execution context and determines which path the execution should take next.

Unlike simple if-statements, the Condition action uses a visual builder to construct complex logic trees that are then compiled into high-performance Python expressions for runtime evaluation.

## When To Use

- **Workflow Branching**: Direct execution paths based on field values (e.g., "If Grand Total > 5000, go to Approval, else go to Auto-Post").
- **Validation Gates**: Prevent further action unless specific criteria are met (e.g., "Only allow submission if all Items have a Serial Number").
- **State Checks**: Verify the current status or state of the document before proceeding.
- **Child Table Analysis**: Use collection logic to check for specific patterns in child tables (e.g., "If any Item belongs to the 'Dangerous Goods' category").

### Alternatives
- For multiple discrete paths based on a single field, consider using the [Switch]({{< relref "docs/actions/switch/index.md" >}}) action.
- For simple row-level conditional execution within a single action (like Assignment), use the "Run If" feature instead of a full Condition node.

## Configuration

Conditions are managed through the **Condition Builder (V2)**. This visual workspace allows you to author complex logic without writing code.

### Fields

| Field | Description |
| :--- | :--- |
| **Action Label** | A descriptive name for the node in the graph (e.g., "Is High Priority?"). |
| **Condition Builder** | The interactive workspace where logic is defined using Groups, Collections, and Simple Conditions. |
| **True Path** | The action ID or node to follow if the logic evaluates to `True`. |
| **False Path** | The action ID or node to follow if the logic evaluates to `False`. |

### Condition Types

1.  **Simple Condition**: A direct comparison between a field/variable and a value (e.g., `doc.status == "Open"`).
2.  **Logical Group**: A container for multiple conditions joined by `AND` or `OR` logic. Groups can be nested infinitely.
3.  **Collection Logic**: A specialized group for evaluating child tables or lists using `Any`, `All`, or `None` criteria.

## Supported Inputs

The Condition action can evaluate any data available in the current execution context:

-   **`doc`**: Fields of the document currently being processed.
-   **`old_doc`**: The document's state before the current transaction (useful for change detection).
-   **`vars`**: Context variables set by previous actions (e.g., `vars.total_discount`).
-   **`frappe`**: Read-only access to the database via `frappe.get_value` or `frappe.db_exists`.

## Supported Outputs

-   **Branching Result**: The action returns a boolean result that the engine uses to select the next node.
-   **No Mutation**: The Condition action is **read-only**. It does not modify the document or context variables.

## Execution Behavior

The engine processes a Condition action in three phases:

1.  **Resolution**: The engine identifies the `compiled_expression` stored during the Rule save process.
2.  **Evaluation**: The expression is executed using a safe Python evaluator. If a `Collection Logic` block is present, the engine iterates over the specified list in memory.
3.  **Routing**: The engine selects either the `True` or `False` path based on the result. If a path is not defined, execution stops at that branch.

### Short-Circuit Evaluation
The engine follows standard Python short-circuit logic:
- In an **AND** group, evaluation stops at the first `False` result.
- In an **OR** group, evaluation stops at the first `True` result.

## Operators

| Operator | Usage | Notes |
| :--- | :--- | :--- |
| **Equals (==)** | `left == right` | Standard equality. Note: `0 == False` in Python. |
| **Not Equals (!=)** | `left != right` | Inequality check. |
| **Contains** | `right in left` | Checks if a value exists in a string, list, or table. |
| **In / Not In** | `left in [...]` | Checks if the field value exists within a provided list. |
| **Starts With** | `left.startswith(right)` | String prefix check. |
| **Regex Match** | `re.search(right, left)` | Evaluates a regular expression. Use sparingly for performance. |

## Examples

### 1. Sales Order Approval
**Problem**: Auto-approve orders from "Premium" customers if the total is under $10,000.

**Configuration**:
- `Group (AND)`:
    - `doc.customer_group == "Premium"`
    - `doc.grand_total < 10000`

**Result**: Orders matching both criteria follow the "True" path to the Approval action.

### 2. Item Category Check
**Problem**: Check if a Sales Invoice contains any items from the "Service" group to apply a specific tax rule.

**Configuration**:
- `Collection (doc.items) as item`:
    - `Any match`:
        - `item.item_group == "Service"`

**Result**: If at least one row in the `items` table is a Service, the "True" branch is taken.

### 3. Change Detection
**Problem**: Trigger a notification only if the `status` of a Support Ticket has changed to "Closed".

**Configuration**:
- `Group (AND)`:
    - `doc.status == "Closed"`
    - `old_doc.status != "Closed"`

**Result**: This ensures the notification only fires once when the ticket is closed, not on subsequent edits to a closed ticket.

## Best Practices

-   **Use Iterator Aliases**: In collection logic, always give your iterator a clear name (e.g., `item` instead of `x`) to keep logic readable.
-   **Keep it Simple**: If a condition becomes too complex to view on one screen, consider breaking it into two sequential Condition nodes.
-   **Truthiness**: Remember that empty strings, empty lists, and the number `0` all evaluate to `False` in Python. Use `is_empty_value(val)` for explicit checks.
-   **Type Safety**: Ensure you are comparing compatible types. Comparing `doc.total` (Number) to `"100"` (String) will result in `False`.

## Common Mistakes

-   **Case Sensitivity**: The `Contains` operator and string comparisons are case-sensitive by default.
-   **Missing Re-save**: If you modify the Condition AST via script or bulk update, you **must** re-save the Rule document to regenerate the `compiled_expression`.
-   **Context Collisions**: Using the same iterator alias (e.g., `item`) in nested collection checks can cause unexpected behavior. Use unique aliases like `row` and `sub_row`.

## Limitations

-   **Side-Effect Free**: You cannot call methods that modify the database (like `doc.save()`) inside a condition.
-   **Performance**: Extremely deep nesting (10+ levels) or very large collection checks (10,000+ rows) can impact execution time.

## Related Topics

- [Execution Semantics]({{< relref "docs/reference/execution/condition.md" >}}) — Technical runtime guarantees and security model.
- [Architecture Reference]({{< relref "docs/architecture/actions/condition.md" >}}) — Internal implementation and source code mapping.
- [Condition Builder Guide]({{< relref "docs/user-guide/condition-builder-guide.md" >}}) — Deep dive into the visual builder interface.
