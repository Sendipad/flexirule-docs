---
title: Switch
description: Route your rule down different paths based on a value.
weight: 70
---

# Switch

The **Switch** action is like a multi-way fork in the road. It allows you to direct your rule down many different paths based on the value of a specific field.

## When to Use It
- **Categorize Tasks**: Route a support ticket to different teams based on its "Category" (e.g., Billing, Technical, or General).
- **Region-based Logic**: Perform different actions depending on a customer's "Territory" or "Country".
- **Status Workflows**: Trigger different notifications for "Draft", "Open", and "Closed" documents.

## How to Configure It

1. **Pick the Field**: Choose the field you want to look at (e.g., `Priority`).
2. **Add Your Paths (Cases)**: Create a path for each specific value you expect. For example:
   - If the value is `High`, follow Path A.
   - If the value is `Low`, follow Path B.
3. **The "Everything Else" Path (Default)**: You can also set a "Default" path for any value that you didn't specifically list.

## Tips for Success
- **Use for Multiple Options**: If you only have two options (Yes/No), use a **Check** block instead. If you have three or more, **Switch** is much cleaner.
- **Exact Matches**: Make sure the values you type in your paths match the values in your system exactly (e.g., "High" is different from "high").
- **Visual Clarity**: Switch blocks make it very easy for someone else to look at your rule and see all the different ways a document can be processed.
