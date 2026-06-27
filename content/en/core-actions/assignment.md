---
title: Set Value
weight: 30
description: Change fields or variables within your rule.
---

# Set Value

The **Set Value** block (internally called Assignment) is used to update information as your rule progresses.

## What can you change?

### 1. Document Fields
Update a field on the record that triggered the rule.
- Example: Set the `Status` to "Approved".
- Example: Update the `Internal Remarks` with a timestamp.

### 2. Context Variables
Store a piece of information to use later in the same rule.
- Example: Calculate a "Total Weight" and store it in a variable called `total_weight`, then use that variable in a later "Check" block.

## Configuration

1. **Click "Add Assignment"**: You can perform multiple updates in a single block.
2. **Select Target**: Choose which field or variable you want to change.
3. **Set the Value**:
   - **Static**: Enter a fixed value (e.g., "High Priority").
   - **Formula/Placeholder**: Use data from other fields (e.g., `{{ doc.base_grand_total * 0.1 }}`).

## Important Note on "Before Save"
If your rule is triggered "Before Save", any changes you make to **Document Fields** using this block will be saved automatically when the rule finishes. You don't need a separate "Save" action.
