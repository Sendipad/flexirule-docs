---
title: Sub-rule
description: Run another rule from within your current flow.
weight: 90
aliases:
  - /docs/actions/sub-rule/
---

# Sub-rule Action

The **Sub-rule** action allows you to execute one rule from inside another. This helps keep your rules organized and allows you to reuse common logic.

## Why Use Sub-rules?
- **Organization**: Break down very large, complex rules into smaller, manageable pieces.
- **Reusability**: Create a "standard approval" logic once and call it from many different rules.

## How to Use
1. Select the **Sub-rule** node.
2. Pick the existing rule you want to run.
3. **Pass Data**: Optionally pass specific variables or documents into the sub-rule.
