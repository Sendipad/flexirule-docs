---
title: "Creating a Rule"
date: 2025-05-01
weight: 20
---

# Creating a Rule

Rules are the core of FlexiRule. Here is how you create one.

## Simple Rule Example

Define a rule in a `.fr` file:

```flexirule
rule "Discount"
  when
    customer.total > 100
  then
    customer.applyDiscount(0.1)
end
```

## Explanation

The rule above checks if a customer's total is greater than 100 and applies a 10% discount.
