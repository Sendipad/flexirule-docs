---
title: Check (Condition)
weight: 5
description: Branch your logic based on specific conditions.
---

# Check

The **Check** block (internally called Condition) is the most common way to control the flow of your rule. It asks a question and provides two different paths: **True** (Yes) and **False** (No).

## How it works

You define one or more "Conditions". If all conditions are met, the flow continues through the **Green Port** (True). If any condition fails, it continues through the **Red Port** (False).

## Configuration

1. **Field**: Choose the data you want to check (e.g., `Grand Total`, `Status`, `Customer Group`).
2. **Operator**: Choose the comparison (e.g., `is greater than`, `equals`, `contains`, `is set`).
3. **Value**: The value you are checking against. This can be a fixed number/text or a placeholder like `{{ doc.credit_limit }}`.

## Combining Conditions
You can add multiple rows of conditions.
- **AND**: All rows must be true.
- **OR**: At least one row must be true.

## Visual Tip
On the canvas, always try to connect both the True and False ports if there is logic to be handled for both cases. If you only care about the "True" case, you can leave the "False" port disconnected.
