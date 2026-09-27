---
title: Condition Builder
description: Learn how to create visual logical condition groups in FlexiRule.
weight: 50
---

# Condition Builder

The **Condition Builder** is a visual interface used to define logical "True/False" evaluation rules. It is used in **Check** blocks, query filters, and trigger condition evaluations.

---

## 1. Visual Condition Rows

Instead of writing complex code, you build conditions using a structured, row-based interface. Each row represents a single comparison check.

A condition row consists of three main parts:

1. **Left Operand**: Select the document field or variable to check (e.g., `Status` or `Grand Total`).
2. **Operator**: Select the comparison operator (e.g., `Equals`, `Not Equals`, `Greater Than`, `Contains`, `Is Set`).
3. **Right Operand**: Select the comparison value or field to compare against (e.g., `"Open"` or `5000`).

---

## 2. Using the Smart Value Selector

For both operands in a condition row, click the field to open the **Smart Value Selector**:
- Select document fields (`@doc.grand_total`).
- Select temporary rule variables (`@vars.calculated_total`).
- Select system metadata (`@system.today`).
- Choose dynamic value resolvers (`/math_formula`, `/fetch`, `/child_aggregation`).

---

## 3. Logical Grouping (ALL / ANY / NOT)

You can combine multiple conditions using **Logic Groups**:

- **ALL (AND)**: Every condition row in the group must be true for the group to evaluate to true (e.g., `Status == "Open"` **ALL** `Grand Total > 5000`).
- **ANY (OR)**: At least one condition row in the group must be true (e.g., `Customer Group == "VIP"` **ANY** `Priority == "Urgent"`).
- **NOT**: Inverts the result of the group.

### Nested Condition Groups
You can add nested groups inside a parent group to express complex logic. The UI represents nested groups with indented visual cards.

---

## 4. UI Controls

- **Add Condition**: Click **+ Condition** to add a new check row to the current group.
- **Add Group**: Click **+ Group** to create a nested ALL/ANY block.
- **Toggle Group Logic**: Click the **ALL / ANY** logic pill at the top of a group card to toggle logic.
- **Remove Row / Group**: Click the trash icon next to a condition row or group to remove it.

---

## 5. Practical Example

### Scenario: High-Value VIP Approval Condition

To check if an order requires manager approval:
- **Group (ALL)**
  - Row 1: `Customer Group` `Equals` `"VIP"`
  - **Group (ANY)**
    - Row 2: `Grand Total` `Greater Than` `100,000`
    - Row 3: `Priority` `Equals` `"Urgent"`

---

## 6. Related Features

- [Check (Condition) Action]({{< relref "action-type/condition.md" >}}): Use conditions to branch rule execution paths.
- [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}): How to pick fields and values in condition rows.
