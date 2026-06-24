---
title: Condition
description: Branch your rule logic based on true/false evaluations.
weight: 40
aliases:
  - /docs/actions/condition/
---

# Condition

Use the **Condition** block to make decisions in your rule. It acts like a fork in the road: if your rule is met, it follows the **True** (Green) path; if not, it follows the **False** (Red) path.

## How to Set It Up

### 1. Build Your Check
Use the simple builder to define your logic:
- **Field**: Pick the item you want to check (e.g., "Total Amount").
- **Check**: Choose how to compare it (e.g., "is more than", "starts with", "is exactly").
- **Value**: Type in the value you are looking for (e.g., "5000").

### 2. Combining Checks (And/Or)
- **AND**: Use this when *every* check must be true.
- **OR**: Use this when *at least one* check must be true.

## Simple Example
**Goal**: Only send an alert if a Sales Order is over $5,000.
1. Add a **Condition** block.
2. Set it to check if `Total Amount` is more than `5000`.
3. Connect the **True** path to a **Notify** block.
4. Leave the **False** path alone, or connect it to something else if you want a different action for smaller orders.
