---
title: Update Record
description: Change values on existing records or create new ones.
weight: 30
---

# Update Record

The **Update Record** block allows you to modify information in your system automatically. You can use it to change the record that triggered the rule, update a different record you found earlier, or even create a brand new record.

## Common Uses

- **Change a Status**: Automatically set a Task to "Completed" when certain conditions are met.
- **Assign a User**: Assign a document to a specific manager based on the region.
- **Log an Event**: Create a new "Communication" or "Comment" record when a process finishes.

## How to use Update Record

1. **Select what to update**:
   - **Current Record**: The record that started the rule.
   - **Found Record**: A record you looked up using a **Query Records** block.
   - **Create New**: Choose this if you want to make a completely new record.
2. **Set the values**: Choose which fields you want to change and what the new values should be.
   - You can set fixed values (like `Status` = `Closed`).
   - You can use dynamic values (like `Due Date` = `doc.creation + 7 days`).

## Example: Auto-Approve Small Orders

If a Sales Order is under $500, you might want to approve it automatically:
- **Target**: `Current Record`
- **Fields to set**:
  - `Status` = `Approved`
  - `Approved By` = `System`
