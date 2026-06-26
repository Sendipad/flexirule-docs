---
title: Sub-rule
description: Run another rule from within your current flow.
weight: 90
aliases:
  - /docs/actions/sub-rule/
---

# Sub-rule Action

The **Sub-rule** action allows you to run one rule from inside another. This is the best way to keep your logic organized and reuse common steps.

## Why Use Sub-rules?
- **Stay Organized**: Break down very large, complex rules into smaller, easy-to-read pieces.
- **Reuse Logic**: Create a "Standard Approval" or "Address Validation" rule once and call it from many different places.

## How to Configure
1. **Select Rule**: Pick the existing rule you want to execute.
2. **Pass Data**: Choose which documents or variables the sub-rule should work with.
3. **Handle Results**: Use any values returned by the sub-rule in your next steps.
