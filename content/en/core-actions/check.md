---
title: Check
description: Evaluate conditions to decide which path the rule should follow.
weight: 40
---

# Check

The **Check** block is how FlexiRule makes decisions. It looks at the information in your document and decides which path to follow: the **True** (Yes) path or the **False** (No) path.

## Purpose

Use the Check block to:
- **Validate Data**: Make sure a field has the right information before continuing.
- **Branch Your Flow**: Send the process down different paths based on choices (e.g., "Is this an Urgent order?").
- **Inspect Lists**: Check if items in a table meet certain criteria (e.g., "Are any items out of stock?").

## How to Configure

### 1. Logical Groups
You can combine multiple checks together:
- **ALL**: All checks must be true to follow the "True" path.
- **ANY**: Only one check needs to be true to follow the "True" path.
- **NONE**: The "True" path is followed only if none of the checks are true.

### 2. Simple Checks
Each check consists of three parts:
- **Field**: What are you looking at? (e.g., `doc.total_amount`)
- **Operator**: How are you comparing it? (e.g., "is greater than", "equals", "is set")
- **Value**: What are you comparing it against? (e.g., `1000`)

### 3. Checking Tables (Lists)
If you need to check rows in a table (like items in an order), you can use "Collection" mode:
- You can check if **Any row**, **All rows**, or **No rows** match your criteria.

## How it Works on the Canvas

When the rule reaches a Check block:
1. It evaluates the conditions you defined.
2. If the conditions are met, it follows the green **True** connection.
3. If the conditions are not met, it follows the red **False** connection.

If you don't connect a path, the rule will simply stop there if it reaches that outcome.

## Tips for Success

- **Start Simple**: Try to keep your checks easy to read. If you have a very complex decision, it's often better to use two Check blocks in a row.
- **Check for Empty Fields**: Use the "Is Set" operator to make sure a field has a value before trying to compare it to something else.
- **Visual Testing**: When you test your rule, you'll see exactly which path was taken, which helps you understand why a decision was made.
