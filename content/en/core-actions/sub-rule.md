---
title: Sub-Rule
description: Reuse common logic by running one rule inside another.
weight: 100
---

# Sub-Rule Action

The **Sub-Rule** action allows you to run another rule from within your current one. Think of it as a "rule inside a rule." This is the best way to keep your logic modular and avoid rebuilding the same steps over and over.

## Why Use It?

Imagine you have a complex set of steps for "Calculating Shipping Costs." You might need this logic in your **Sales Order** rule, your **Delivery Note** rule, and your **Sales Invoice** rule.

Instead of building those 10 nodes three different times, you build them once as a separate rule and use the **Sub-Rule** action to "call" it whenever you need it.

## How it Works

1. **Main Rule**: Your primary rule starts and reaches a Sub-Rule node.
2. **Sub-Rule**: The execution jumps to the second rule. It runs all the nodes in that rule.
3. **Return**: Once the sub-rule is finished, the execution jumps back to the main rule and continues from where it left off.

## When to Use

- **Common Logic**: Any logic that is used in more than one place (e.g., "Address Validation", "Tax Calculation").
- **Complex Rules**: If a single rule is becoming too large and messy, break it into smaller "Sub-Rules" to make it easier to manage.

## Configuration

| Field | Description |
| :--- | :--- |
| **Rule** | Select the existing rule you want to run as a sub-rule. |
| **Pass Variables** | (Optional) Choose if you want to share your current `vars` with the sub-rule. |

## Tips for Success

- **Independent Testing**: You can test your sub-rules independently to make sure they work before adding them to your main flow.
- **Naming**: Give your sub-rules clear, functional names like `SR: Validate Customer Credit` so you know exactly what they do when you see them on the main canvas.
- **Data Sharing**: By default, sub-rules can see the same `doc` as the main rule, making it easy to perform checks or updates on the same record.

---

*Next: Learn how to pause execution with the [Wait Action]({{< relref "wait.md" >}}).*
