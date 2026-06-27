---
title: Sub-Rule
weight: 80
description: Run another rule from within your current rule.
---

# Sub-Rule

The **Sub-Rule** block allows you to call and execute another FlexiRule as a step in your current flow.

## Why use Sub-Rules?
- **Reuse Logic**: If you have a complex "Calculate Tax" logic, you can build it once as a rule and call it from many other rules (Sales Order, Sales Invoice, etc.).
- **Organization**: Break down very large, complex rules into smaller, manageable pieces.

## Configuration
- **Rule**: Select the FlexiRule you want to execute.
- **Pass Data**: Choose which data from your current rule should be passed to the sub-rule.

## How it works
The current rule will wait for the sub-rule to finish before moving on to the next block in its own flow.
