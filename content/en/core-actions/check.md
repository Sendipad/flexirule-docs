---
title: Check
description: Branch your rule logic based on true/false evaluations.
weight: 40
aliases:
  - /docs/actions/condition/
---

# Check

The **Check** block (internally called Condition) allows you to create branches in your logic. It evaluates a set of rules and directs the flow down either a **True** or **False** path.

## How to Configure

### 1. Build Your Logic
Use the guided builder to define what you want to check.
- **Field**: Select a field or variable (e.g., "Grand Total").
- **Operator**: Choose how to compare (e.g., "is greater than", "contains").
- **Value**: The value you are checking against.

### 2. Combine Rules (And/Or)
- **AND**: Every rule in the group must be true for the flow to take the True path.
- **OR**: If at least one rule is true, the flow takes the True path.

## Example
**Scenario**: Send a notification only for large orders.
1. Add a **Check** block.
2. Rule: `grand_total` is greater than `5000`.
3. Connect the **True** path to a [Notify]({{< relref "notify-action" >}}) block.
4. Leave the **False** path empty to do nothing for smaller orders.
