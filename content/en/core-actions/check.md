---
title: Check
description: Create branches in your logic based on specific conditions.
weight: 40
---

# Check (Condition)

The **Check** block is the "brain" of your automation. It evaluates a condition (like "Is the total over $1,000?") and directs the flow of the rule based on the answer.

## How it Works

A Check block has two exit points:
-   **True (Green)**: The path taken if the condition is met.
-   **False (Red)**: The path taken if the condition is NOT met.

If a path is not connected to anything, the rule will simply stop at that point if that path is chosen.

## Setting Up Conditions

You can build simple or complex conditions using a friendly interface.

### Simple Checks
A simple check compares a field to a value.
-   **Field**: The data you want to look at (e.g., `Grand Total`).
-   **Operator**: The comparison logic (e.g., `is greater than`, `equals`, `contains`).
-   **Value**: The criteria you are checking against (e.g., `1000`).

### Multiple Checks (AND / OR)
You can group multiple checks together:
-   **ALL (AND)**: Every check in the group must be true for the whole block to be true.
-   **ANY (OR)**: If even one check in the group is true, the whole block is true.

## Checking Lists (Child Tables)
You can also check items inside a list (like the items in a Sales Order):
-   **Match Any**: Is there *at least one* item that matches the criteria?
-   **Match All**: Do *all* items in the list match the criteria?
-   **Match None**: Are there *no* items that match the criteria?

## Pro Tip: Visual Debugging
When you use **Test Run**, the builder will highlight the path the rule took in green. This is the easiest way to see why a "Check" block went one way or the other.
