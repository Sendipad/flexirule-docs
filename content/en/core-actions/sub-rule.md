---
title: Sub-Rule
description: Run another rule from within your current rule.
weight: 120
---

# Sub-Rule

The **Sub-Rule** block allows you to call one automation rule from inside another. This is the best way to keep your logic organized and reuse the same steps in multiple places.

## Why use Sub-Rules?

-   **Reusability**: If you have a complex calculation or a standard approval flow that you use in five different rules, you can build it once as a "Sub-Rule" and call it from all of them.
-   **Organization**: If your rule canvas is getting too crowded and hard to read, you can move sections of logic into Sub-Rules to keep things tidy.

## How it Works

1.  **Select the Rule**: Choose which other rule you want to run.
2.  **Pass Data**: You can tell the Sub-Rule which document or data it should work on.
3.  **Wait for Result**: Your main rule will wait for the Sub-Rule to finish before moving on to the next block.

## Pro Tip
Think of Sub-Rules like "Folders" for your logic. They help you break down a big, complex automation into smaller, manageable pieces.
