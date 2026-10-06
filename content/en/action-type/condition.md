---
title: Check (Condition)
description: Evaluate logical condition groups in the UI to branch execution paths between True and False branches.
weight: 40
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
---

# Check (Condition) Action

A **Check** action lets a rule evaluate one or more conditions and direct execution along different visual paths depending on whether those conditions are satisfied.

---

## 1. What is it?

The Check block is the visual decision-making hub of a rule. It evaluates your configured logic against document data or context variables and splits execution into two outbound branches:

- **True**: Followed when all or any conditions pass (depending on your logic setting).
- **False**: Followed when the conditions do not pass.

```
                 ┌── True ──→ Action A (e.g. Set Status = "Approved")
Check ───────────┤
                 └── False ─→ Action B (e.g. Notify Manager)
```

---

## 2. When to Use

Use a Check action whenever you need to:
- **Validate field values** before proceeding (e.g., check if Grand Total is greater than 50,000).
- **Branch business logic** based on customer tier, region, or document status.
- **Check child-table data** (e.g., verify if all line items have a warehouse assigned).
- **Compare current values** against historical document state or temporary rule variables.

---

![Check action condition branch preview](/images/action-card-condition-preview.png)

## 3. How to Configure

1. **Add the Action**: Drag or add a **Check** block onto your visual canvas.
2. **Choose Logic Grouping**:
   - **ALL (AND)**: Every condition row in the group must evaluate to true.
   - **ANY (OR)**: At least one condition row must evaluate to true.
   - **NOT**: Inverts the result of the condition group.
3. **Configure Conditions using Smart Value Selector**:
   - Click the left operand field.
   - Type `@` or click the value selector to open the **Smart Value Selector**.
   - Search for and select your document field (e.g., `Grand Total`).
   - Choose a comparison operator (`Equals`, `Greater Than`, `Contains`, `Is Set`, etc.).
   - Click the right operand field and select a static value, variable, or calculated value using the Smart Value Selector.
4. **Connect Branches**:
   - Drag a line from the **True** port to the action you want to execute when conditions pass.
   - Drag a line from the **False** port to the action you want to execute when conditions fail.

---

## 4. UI Configuration Options

| Setting | Options / Description |
| :--- | :--- |
| **Logic Grouping** | Select **ALL** (all rows must match), **ANY** (at least one row matches), or **NOT** (inverts group result). |
| **Comparison Operators** | `==` (Equals), `!=` (Not Equals), `>`, `>=`, `<`, `<=` (Numeric), `contains`, `is set`, `is not set`, `in`. |
| **Value Input** | Use the **Smart Value Selector** to select Document Fields (`@doc`), Variables (`@vars`), System values (`@system`), or Resolvers (`/`). |
| **Collection Conditions** | Evaluate lists and child tables using `all`, `any`, `none`, or `count` operations. |

---

## 5. Practical Example

### Scenario: High-Value VIP Approval

To check if a Sales Order requires manager approval:

1. Add a **Check** action to the canvas and set Logic to **ALL**.
2. **Row 1**:
   - Select field: `Grand Total` (`@doc.grand_total`)
   - Operator: `Greater Than` (`>`)
   - Value: `100,000`
3. **Row 2**:
   - Select field: `Customer Group` (`@doc.customer_group`)
   - Operator: `Equals` (`==`)
   - Value: `"VIP"`
4. **Connect Outbound Branches**:
   - Connect **True** branch to a **Set Value** action (`doc.workflow_state = "Approved"`).
   - Connect **False** branch to a **Notify** action (Send credit review request email).

---

## 6. Common Mistakes

- **Disconnected Branch**: Leaving either the **True** or **False** branch unconnected when actions were expected on both outcomes.
- **Missing Null Checks**: Comparing fields that might be empty without adding an `Is Set` condition first.
- **Type Mismatch**: Comparing a text string `"100"` with a numeric value `100`. Use proper data types in the Smart Value Selector.

---

## 7. Related Features

- [Condition Builder]({{< relref "rule-builder/condition-builder.md" >}}): Detailed guide on building nested condition groups in the UI.
- [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}): How to select and manipulate values visually.
- [Switch]({{< relref "action-type/switch.md" >}}): Use Switch when you need to branch based on multiple distinct values instead of a single true/false check.

---

## 8. Developer & Technical Details

For low-level execution details, AST payload formats, and Python evaluation internals, refer to the developer documentation:
- [Condition Architecture Reference]({{< relref "advanced-concepts/architecture/actions/condition.md" >}})
