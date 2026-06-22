---
title: Condition
description: Branch your rule logic based on true/false evaluations.
weight: 40
aliases:
  - /docs/actions/condition/
---

# Condition Action

The **Condition** action allows you to create branching logic in your rules. It evaluates a set of rules and directs the execution flow down either a **True** or **False** path.

## How to Configure

### 1. The Rule Builder
Use the integrated condition builder to define your logic.
- **Field**: Select a field from the document or a variable.
- **Operator**: Choose how to compare (e.g., "is", "is not", "contains", "is greater than").
- **Value**: The value to compare against.

### 2. Grouping Logic (And/Or)
- **AND**: All conditions in the group must be true.
- **OR**: At least one condition in the group must be true.

## Simple Example
**Scenario**: Only notify a manager if an order is over $5,000.
1. Add a **Condition** node.
2. Set rule: `grand_total` is greater than `5000`.
3. Connect the **True** path to a **Notify** action.
4. Leave the **False** path empty or connect it to a different step.
