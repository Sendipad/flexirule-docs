---
title: Update Record
description: Modify other records in your system or create new ones.
weight: 90
---

# Update Record

The **Update Record** block allows your rule to make changes to documents other than the one that triggered the rule. You can also use it to create entirely new records automatically.

## Purpose

Use Update Record when you need to:
- **Change Related Data**: Update a field on a different document (e.g., "Mark the related Project as Completed").
- **Create New Records**: Automatically generate a new document (e.g., "Create a new Quality Inspection when a Receipt is saved").
- **Sync Information**: Keep related records in sync without manual entry.

## How to Configure

### 1. Action Type
Choose what you want to do:
- **Update Existing**: Change information on a record that already exists.
- **Create New**: Build a brand new record from scratch.

### 2. Which Record? (For Update Existing)
Specify which record you want to change. You can refer to a record found in a previous **Query Records** block or use a field from your current document (like `doc.project`).

### 3. Field Mappings
Define which fields should be updated and what their new values should be.
- *Example*: Set `status` to "Closed" on the related Task.

### 4. Create Settings (For Create New)
When creating a new record, you specify the **DocType** (e.g., "Task") and fill in all the required fields. FlexiRule will then create the record and save it automatically.

## Example: Auto-Task Creation
**Scenario**: You want to create a "Follow-up Task" every time a Sales Order over $10,000 is submitted.
1. **Check**: Is `doc.grand_total` > 10000?
2. **True Path**: Connect to an **Update Record** block.
3. **Settings**:
   - **Action**: Create New
   - **DocType**: Task
   - **Mappings**:
     - `subject`: "Follow up on Large Order `doc.name`"
     - `description`: "Check in with the customer regarding their recent purchase."
     - `priority`: "High"

## Tips for Success

- **Verify First**: Before updating an existing record, it's a good idea to use a **Query Records** block to make sure the record actually exists.
- **Required Fields**: When creating a new record, make sure you provide values for all "Mandatory" fields in that DocType, or the creation will fail.
- **Avoid Loops**: Be careful not to create a record that triggers another rule which then updates the original record—this can cause a "loop." FlexiRule has built-in protection, but it's best to design your rules to avoid this.
