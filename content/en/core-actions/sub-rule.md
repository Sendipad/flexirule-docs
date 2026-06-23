---
title: Sub-rule
description: Reuse logic by calling one rule from inside another.
weight: 90
aliases:
  - /docs/actions/sub-rule/
---

# Sub-rule Action

The **Sub-rule** action allows you to build modular, reusable pieces of logic. Instead of building the same complex steps in every rule, you can build them once and call them whenever needed.

## When to Use
- **Standard Calculations**: A complex "Tax Calculation" flow used by Sales Orders, Invoices, and Quotes.
- **Common Integrations**: A "Sync to CRM" logic that is triggered by multiple different events.
- **Organization**: Breaking down a massive, "spaghetti" rule into smaller, manageable sub-sections.

## How it Works
When the main rule reaches this node, it "jumps" to the selected Sub-rule, executes its logic, and then returns to the main rule to continue.

## Configuration

1.  **Select Sub-rule**: Choose the rule you want to execute.
2.  **Input Mapping**: Pass data from your current rule into the Sub-rule. For example, if the Sub-rule expects a "Customer", tell it which field to use.
3.  **Return Mapping**: If the Sub-rule calculates a value (like a "Risk Score"), you can map that result back into a variable in your main rule.

## Best Practices
- **Think Modular**: If you find yourself copying and pasting nodes between rules, it's time to create a Sub-rule.
- **Keep them Small**: A good Sub-rule does one specific thing very well.

---
**Advanced**: For details on execution nesting and variable scope, see [Sub-rule Execution Semantics]({{< relref "advanced-reference/architecture/actions/sub-rule.md" >}}).
