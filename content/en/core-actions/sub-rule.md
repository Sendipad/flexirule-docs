---
title: Sub-rule
description: Reuse logic by running one rule from inside another.
weight: 90
---

# Sub-rule

The **Sub-rule** block allows you to run an entire rule from within your current flow. This is a great way to keep your rules organized and reuse the same logic in different places.

## Why use Sub-rules?

- **Keep it Simple**: Instead of having one massive, complicated rule, you can break it into several smaller, easy-to-understand sub-rules.
- **Reuse your Work**: If you have a specific process (like a "Standard Discount Calculation") that you use in multiple rules, you can build it once as a sub-rule and call it whenever you need it.

## How to use Sub-rule

1. **Pick the Rule**: Choose an existing rule that you want to execute.
2. **Provide Information**: You can pass data from your current rule into the sub-rule so it has everything it needs to run.
3. **Handle the Result**: Once the sub-rule finishes, your main rule continues from where it left off.

## Example: Customer Verification

If you have a complex process to verify a customer's status, you can create a rule called `Verify Customer VIP`. You can then use a **Sub-rule** block to run that verification from your `Sales Order` rule, your `Support Ticket` rule, or any other process that needs to know if a customer is a VIP.
