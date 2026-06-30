---
title: Set Value
description: Calculate and store values to use later in your rule.
weight: 40
---

# Set Value

The **Set Value** block (previously called Assignment) is used to create temporary variables or perform calculations within your rule. Unlike **Update Record**, this does not change data in your database; it only stores information to be used by other blocks in the same rule.

## Why use Set Value?

- **Perform Calculations**: Calculate a discounted price once and use it in multiple places.
- **Simplify Logic**: Store a complex piece of information with a simple name.
- **Counter/Tracking**: Keep track of how many times something has happened during a loop.

## How to use Set Value

1. **Variable Name**: Give your value a clear name (e.g., `total_discount`, `is_vip_customer`).
2. **Value**: Define what should be stored.
   - It can be a simple number or text.
   - It can be a formula using data from your records (e.g., `doc.base_grand_total * 0.1`).

## Example: Calculate Shipping

You can calculate a shipping fee based on the order weight and store it in a variable called `shipping_cost`:
- **Name**: `shipping_cost`
- **Value**: `doc.total_weight * 5.0`

Later in your rule, you can use `{{ vars.shipping_cost }}` in a **Notify** or **Update Record** block.
