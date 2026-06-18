---
title: Condition
description: Create branches in your rule based on specific logic.
weight: 20
aliases:
  - /docs/actions/condition/
---

# Condition

The **Condition** action allows your rule to make decisions and follow different paths based on the data.

## How it Works

A Condition action evaluates a logic check (like "Is the total greater than 1000?").
- If the check is **True**, the rule follows the green path.
- If the check is **False**, the rule follows the red path.

## The Condition Builder

You configure the logic using the visual **Condition Builder**. You don't need to write code; just use the dropdowns to build your "If" statement.

### Parts of a Condition:
1. **Field**: The piece of data you are checking (e.g., `Order Total`).
2. **Operator**: The comparison you are making (e.g., `is greater than`, `is equal to`, `contains`).
3. **Value**: What you are comparing the field against (e.g., `1000`).

## Complex Logic
You can add multiple checks within a single Condition action using **AND** and **OR** logic:
- **AND**: All checks must be true for the whole condition to be true.
- **OR**: If any one of the checks is true, the whole condition is true.

## Best Practices
- **Keep it Simple**: Try to keep conditions easy to read. If a condition gets too complex, consider breaking it into two separate Condition actions.
- **Use for Routing**: Use conditions early in your rule to quickly exit if the rule doesn't need to run (e.g., "If Status is already Closed, Stop").
- **Clear Labels**: Rename your condition node to describe what it's checking, like "High Value Order?" or "Is New Customer?".
