---
title: Switch
description: Route execution along multiple outbound paths based on matching field values.
weight: 70
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
aliases:
  - /docs/actions/switch/
---

# Switch Action

The **Switch** action provides multi-way visual branching, routing execution down matching case paths based on the value of a target field or variable.

---

## 1. What is it?

Instead of connecting multiple Check (If/Else) blocks together, a Switch block evaluates a single field or variable and branches execution directly to the matching case port. It also includes a **Default** branch for unhandled values.

```
                     ┌── "High" ───→ Action A (Alert Engineer)
                     ├── "Medium" ─→ Action B (Queue Email)
Switch (Priority) ───┼── "Low" ────→ Action C (Set SLA = 5)
                     └── Default ──→ Action D (Set SLA = 3)
```

---

## 2. When to Use

Use the Switch action when you need to:
- **Route logic based on categorical fields** with three or more values (e.g., `Status`, `Territory`, `Customer Group`, `Priority`).
- **Simplify complex flows** by replacing chained Check (If/Else) blocks with a single multi-port node.
- **Provide a fallback path** using the **Default** branch when an unexpected or unlisted value is encountered.

---

## 3. How to Configure

1. **Add the Action**: Add a **Switch** block to your visual canvas.
2. **Select Target Value**:
   - Click **Target Field**.
   - Use the **Smart Value Selector** to pick a document field (e.g., `Priority` or `@doc.priority`) or variable (`@vars.category`).
3. **Add Cases**:
   - Click **Add Case**.
   - Enter the expected value string or number for each branch (e.g., `"High"`, `"Medium"`, `"Low"`).
4. **Connect Outbound Branches**:
   - Connect each case port (`"High"`, `"Medium"`, `"Low"`) to its corresponding action.
   - Connect the **Default** port to the action that should run if none of the explicit cases match.

---

## 4. UI Configuration Options

| Option | Description |
| :--- | :--- |
| **Target Field** | Select the field or variable to evaluate using the **Smart Value Selector**. |
| **Cases List** | Add matching case values (e.g., `"Pending"`, `"Approved"`, `"Rejected"`). Each case creates an outbound port. |
| **Default Branch** | Outbound port followed when no defined cases match the evaluated target value. |

---

## 5. Practical Example

### Scenario: Route Support Tickets by Priority

1. Add a **Switch** action and set Target Field to `Priority` (`@doc.priority`).
2. Add three cases: `"High"`, `"Medium"`, and `"Low"`.
3. **Connect Branches**:
   - **Case "High"**: Connect to **Notify** action (Send instant alert to on-call engineer).
   - **Case "Medium"**: Connect to **Notify** action (Send email to support team queue).
   - **Case "Low"**: Connect to **Set Value** action (`doc.sla_days = 5`).
   - **Default**: Connect to **Set Value** action (`doc.sla_days = 3`).

---

## 6. Common Mistakes

- **Case-Sensitivity Mismatches**: Matching `"high"` against `"High"`. Make sure case strings match exact field values.
- **Unconnected Default Branch**: Leaving the **Default** branch empty, which causes rule execution to stop quietly if an unexpected value occurs.

---

## 7. Related Features

- [Check (Condition)]({{< relref "action-type/condition.md" >}}): Use Check when evaluating complex true/false conditions (AND/OR logic) rather than simple value matching.
- [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}): How to select target fields visually.
