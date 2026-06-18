---
title: Assignment
description: Set or change values within your rule flow.
weight: 50
aliases:
  - /docs/actions/assignment/
---

# Assignment

The **Assignment** action is used to set values for fields in your document or to create temporary variables to use later in your rule.

## What can you assign?

- **Document Fields**: Update values on the record that triggered the rule (e.g., `doc.status = "Processed"`).
- **Context Variables**: Create and set temporary "variables" that exist only while the rule is running. These are useful for storing calculation results or data fetched from other actions.

## Batch Assignments

You can perform multiple assignments within a single action. This keeps your rule canvas clean and organized.

### Examples:
1. **Set Status and Date**:
   - `doc.status` = "Approved"
   - `doc.approval_date` = Today's Date
2. **Calculate a Value**:
   - `vars.total_with_tax` = `doc.amount` * 1.15

## How to use
1. **Target**: Choose whether you are assigning to a `Document Field` or a `Context Variable`.
2. **Field/Key**: Select the specific field or give your variable a name.
3. **Value**: Provide the value. This can be a static value (like "Open"), a field from the document, or a formula.

## Best Practices
- **Use Descriptive Variable Names**: Instead of `vars.val1`, use something like `vars.calculated_discount`.
- **Group Related Changes**: Use one Assignment action to set multiple related fields instead of having many separate actions on your canvas.
