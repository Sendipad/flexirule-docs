---
title: Check (Condition)
description: Split your rule into different paths based on a check.
weight: 40
aliases:
  - /docs/actions/condition/
---

# Check (Condition)

The **Check** block is how you create "Yes/No" paths in your rule. It looks at your data and decides which way the rule should go.

## How to Set it Up

### 1. Define the Check
Use the builder to set your rules:
- **What to check**: Pick a field (like `Grand Total` or `Status`).
- **How to compare**: Choose a comparison (like "is greater than", "is not", or "contains").
- **Value**: The thing you're checking against (like `5000` or "Draft").

### 2. Multiple Checks (And/Or)
- **AND (All)**: Use this if *every* check you list must be true for the rule to follow the "True" path.
- **OR (Any)**: Use this if *any* one of your checks being true is enough to follow the "True" path.

## The Two Paths
- **True (Green)**: The rule follows this path if your check passes.
- **False (Red)**: The rule follows this path if your check fails.

## Example
**Scenario**: You only want to alert a manager if an order is over $5,000.
1. Add a **Check** block.
2. Set it to: `Grand Total` is `Greater than` `5000`.
3. Connect the **True** path to a **Notify** block.
4. You can leave the **False** path empty if nothing needs to happen for smaller orders.
