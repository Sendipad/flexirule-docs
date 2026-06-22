---
title: Assignment
description: Set variables and modify document fields within the rule flow.
weight: 50
aliases:
  - /docs/actions/assignment/
---

# Assignment Action

The **Assignment** action is used to change values in your rule. This can include updating fields on the document currently being processed or setting temporary variables for use in later steps.

## Types of Assignments

### 1. Document Field Assignment
Directly change a field on the current document (the one that triggered the rule).
- **Example**: Set `status` to "Pending Review".

### 2. Context Variable Assignment {#context-variables-vars}
Create or update a "Variable" that exists only while the rule is running. This is useful for temporary calculations.
- **Example**: Calculate a total `tax_amount = doc.amount * 0.15`.

## Batch Assignments
You can define multiple assignments within a single node. They are executed sequentially from top to bottom.

## Normalization and Cleaning
Assignments support "Pipelines" to clean or transform data as it's being set.
- **Example**: Trimming whitespace from a string or converting a name to uppercase.
