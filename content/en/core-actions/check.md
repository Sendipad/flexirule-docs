---
title: Check
description: Branch your logic based on specific criteria.
weight: 20
---

# Check

The **Check** block is the primary way to make decisions in your rule. It looks at your data and decides which path the rule should follow.

## How it Works
A Check block has two exits:
- **True (Green)**: The path followed if the conditions are met.
- **False (Red)**: The path followed if the conditions are NOT met.

## Configuration

### 1. Grouping Logic
You can decide how multiple conditions work together:
- **ALL**: Every condition must be true.
- **ANY**: Only one of the conditions needs to be true.
- **NONE**: None of the conditions can be true.

### 2. Adding conditions
Each condition requires:
- **Field**: What you are checking (e.g., `doc.grand_total`).
- **Operator**: The comparison (e.g., `is greater than`, `equals`, `contains`).
- **Value**: What you are checking against (e.g., `5000`).

### 3. Checking Lists (Child Tables)
You can check if items in a list meet certain criteria. For example: "Check if **any** row in the Items table has a quantity greater than 100."

## Common Examples
- **High Value Check**: `doc.total_amount` is greater than `10000`.
- **Status Check**: `doc.status` equals `Draft`.
- **Customer Check**: `doc.customer_group` is in `[VIP, VVIP]`.

---

## Pro Tips
- **Keep it Simple**: If your conditions are getting too complex, consider splitting them into two separate Check blocks.
- **Visual Debugging**: Run a **Test Run** to see which way your Check block went. The path taken will be highlighted in green on the canvas.
- **Stop if False**: If you don't connect anything to the **False** port, the rule will simply stop there if the condition isn't met.
