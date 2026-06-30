---
title: Check
description: Branch your logic based on specific conditions.
weight: 50
---

# Check

The **Check** block (previously called Condition) allows your rule to make decisions. It looks at the data and decides which path the process should take.

## How it Works

A **Check** block has two output paths:
- **Yes (Green)**: The logic follows this path if the conditions are met.
- **No (Red)**: The logic follows this path if the conditions are NOT met.

## How to use Check

1. **Add Conditions**: Define the rules for the check.
   - Choose a field (e.g., `Status`, `Grand Total`).
   - Choose an operator (e.g., `is equal to`, `is greater than`, `contains`).
   - Set the value to compare against.
2. **Multiple Rules**: You can add multiple rows.
   - **All must be true (AND)**: Use this when every condition must be met.
   - **Any can be true (OR)**: Use this when meeting just one of the conditions is enough.

## Example: Urgent Support Ticket

You can check if a support ticket is both high priority and from a specific customer:
- **Condition 1**: `Priority` is equal to `Urgent`
- **Condition 2**: `Customer Group` is equal to `VIP`
- **Match Type**: `All conditions must be met`

If both are true, the rule follows the **Yes** path, where you might add a block to notify the support manager immediately.
