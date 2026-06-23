---
title: Assignment
description: Set variables and modify document fields within the rule flow.
weight: 50
aliases:
  - /docs/actions/assignment/
---

# Assignment Action

The **Assignment** action is used to change values within your rule flow. Think of it as a way to "prepare" data or store temporary information while the rule is running.

## Types of Assignments

### 1. Document Field Assignment
Directly change a field on the document that triggered the rule (`doc`).
- **Use Case**: Update the "Follow-up Date" based on today's date.

### 2. Context Variable Assignment {#context-variables-vars}
Create a "Variable" that exists only while the rule is executing. This is useful for storing results from queries or calculations to use in later steps.
- **Use Case**: Calculate a custom tax amount and store it in a variable named `calculated_tax`.

## Configuration

### Batch Assignments
You can perform multiple assignments in a single node. They are processed one by one from top to bottom.

### Normalization Pipelines
Assignments support "Pipelines" which allow you to clean or transform data automatically:
- **Text Cleaning**: Trim spaces, convert to uppercase, or remove special characters.
- **Math**: Perform simple arithmetic on numbers.
- **Defaults**: Set a fallback value if a field is empty.

## When to Use
Use an Assignment node when you need to calculate something or "clean up" data before it gets saved to a record or sent in a notification.

---
**Tip**: If you are updating many fields on the same document, use a single Assignment node with multiple rows to keep your canvas tidy.
