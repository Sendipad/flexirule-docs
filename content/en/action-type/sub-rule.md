---
title: Sub-Rule
description: Run an exposed sub-rule as a reusable module within your visual rule flow.
weight: 90
entity_kind: action_operation
category: logic-control
mutation: true
targets: ["Rule Execution", "Context Variable"]
aliases:
  - /docs/actions/sub-rule/
---

# Sub-Rule Action

The **Sub-Rule** action lets you run another rule—exposed as a sub-rule—directly inside your main rule flow, allowing you to reuse modular logic across multiple rules.

![FlexiRule canvas with a reusable Sub-Rule node](/images/flexirule-canvas-with-sub-rule.png)

---

## 1. What is it?

A Sub-Rule block executes a separate rule flow and passes variables back and forth. This lets you build reusable logic modules (like standard approval workflows or credit checks) once and call them from multiple rules.

```
Main Rule ──→ Sub-Rule ("Calculate Customer Risk") ──→ Next Action (Check Risk Score)
```

---

## 2. When to Use

Use a Sub-Rule action when you need to:
- **Reuse multi-step verification routines** across different DocTypes or trigger events.
- **Break down complex rules** into clean, modular sub-flows.
- **Standardize business calculations** (e.g., standard credit scoring or discount rules).

---

## 3. How to Configure

1. **Add the Action**: Add a **Sub-Rule** block to your visual canvas.
2. **Select Target Sub-Rule**:
   - Choose from the list of rules exposed as sub-rules.
3. **Map Input Variables**:
   - Map values from your main rule to the input variables expected by the sub-rule using the **Smart Value Selector**.
4. **Set Output Variable**:
   - Enter a variable name (e.g., `risk_result`) to capture the sub-rule's returned output in `@vars`.
5. **Connect Outbound Branch**: Connect the Sub-Rule block's output port to the next action node.

![Sub-Rule flow with nested rule canvas](/images/ruleflow-canvas-with-sub-rule.png)

---

## 4. UI Configuration Options

| Option | Description |
| :--- | :--- |
| **Sub-Rule** | Select target rule (must have *Exposed as Sub-Rule* enabled in its rule configuration). |
| **Input Mappings** | Map main rule fields/variables to sub-rule parameters using the **Smart Value Selector**. |
| **Output Variable** | Variable name in `@vars` where sub-rule output results will be stored. |

---

## 5. Practical Example

### Scenario: Run Standard Customer Risk Scoring Sub-Rule

1. **Sub-Rule Block Configuration**:
   - **Sub-Rule**: Select `"Calculate Customer Risk Score"`.
   - **Input Mapping**: Map `Customer` → `@doc.customer` using Smart Value Selector.
   - **Output Variable**: Enter `risk_score_result`.
2. **Next Action (Check)**:
   - Add a **Check** block following the sub-rule.
   - **Condition**: `@vars.risk_score_result.score > 80`
   - **True Branch**: Route to manager review notification.

## 6. Common Mistakes

- **Sub-Rule Not Exposed**: Trying to select a rule that does not have *Exposed as Sub-Rule* enabled in its settings.
- **Circular Sub-Rule Calls**: Creating a loop where Rule A calls Sub-Rule B, which calls Sub-Rule A.
- **Missing Input Mappings**: Forgetting to map mandatory input variables required by the sub-rule.

## 7. Related Features

- [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}): Learn how to expose a rule as a reusable sub-rule.
- [Advanced Process]({{< relref "action-type/process.md" >}}): Execute pre-built code operations rather than visual sub-rules.
