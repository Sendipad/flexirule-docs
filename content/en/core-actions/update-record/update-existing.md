---
title: Update Existing Record
weight: 20
description: Modify an existing document in the system.
---

# Update Existing Record

Use this block to change fields on a record that is already in your database.

## Examples
- Update the **Status** of a Project when all its Tasks are completed.
- Change the **Credit Limit** of a Customer after a high-value purchase.
- Clear a **Reviewer** field if a document is sent back to draft.

## Configuration

1. **Target Record**: You must identify which record to update. Usually, this is a record you found using a "Find One Record" block (e.g., `{{ target_customer }}`).
2. **Field Mapping**: Select which fields to change and what their new values should be.
3. **Save Options**:
   - **Silent Update**: Change the value in the database without triggering other rules or notifications.
   - **Standard Save**: Triggers all standard validations and hooks.

## Difference from "Set Value"
- Use **Set Value** to change the document that is *currently being processed* by the rule.
- Use **Update Existing Record** to change a *different* document that you've looked up or referenced.
