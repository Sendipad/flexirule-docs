---
title: Condition
description: Create branching logic to handle different scenarios.
weight: 40
aliases:
  - /docs/actions/condition/
---

# Condition Action

The **Condition** action is the "fork in the road" for your rule logic. It evaluates a specific rule and directs the flow down one of two paths: **True** or **False**.

## When to Use
- **Validation**: "Only proceed if the Grand Total is greater than 1,000."
- **Routing**: "If the Customer is in the 'Retail' group, send to Path A; otherwise, send to Path B."
- **Guard Rails**: "Don't send an email if the 'Opt-out' box is checked."

## How it Works

A condition node has two output connection points:
1.  **True (Green)**: The path taken if the condition is met.
2.  **False (Red)**: The path taken if the condition is NOT met.

## Configuration

### 1. The Comparison
Define what you want to check. You can compare:
- **Fields**: `doc.status == "Draft"`
- **Values**: `doc.grand_total > 500`
- **Lists**: `count(query_results) > 0`

### 2. Multi-Conditions
You can add multiple rows of conditions and choose how they relate:
- **AND**: All conditions must be true.
- **OR**: At least one condition must be true.

## Best Practices
- **Label Your Node**: Give it a question-based name like "Is high value?" or "Is customer active?". This makes the rule flow much easier to read.
- **Always Handle Both Paths**: Even if you don't have an action for the "False" path, it's good practice to at least consider if the flow should stop there.

---
**Advanced**: For details on the evaluation engine and performance, see [Condition System Architecture]({{< relref "advanced-reference/architecture/actions/condition.md" >}}).
