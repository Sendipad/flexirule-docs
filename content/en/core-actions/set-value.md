---
title: Set Value
description: Set variables and modify document fields within the rule flow.
weight: 50
aliases:
  - /docs/actions/assignment/
---

# Set Value

The **Set Value** block (internally called Assignment) is used to change data within your rule. You can use it to update fields on the current record or create temporary variables for calculations.

## Types of Changes

### 1. Update Current Record
Directly change a field on the record that started the rule.
- **Example**: Set the `status` to "Pending Review".

### 2. Save Temporary Variables
Create a "Variable" that exists only while the rule is running. This is perfect for complex calculations.
- **Example**: Calculate a total `tax_amount` based on the order total.

## Batch Updates
You can perform multiple changes within a single **Set Value** block. They are processed one by one from top to bottom.

## Data Cleaning
This block also supports "Pipelines" to automatically clean or format your data.
- **Example**: Automatically capitalize a name or remove extra spaces from a text field.
