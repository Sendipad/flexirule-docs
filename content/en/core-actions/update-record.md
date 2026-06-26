---
title: Update Record
description: Create, update, or delete records in the system.
weight: 30
aliases:
  - /docs/actions/document-action/
---

# Update Record

The **Update Record** block (internally called Document Action) allows you to create or modify records anywhere in the system.

## Operations

### 1. Create New
Create a brand new record (e.g., create a "Task" when a "Project" is saved).
- **Set Fields**: Define the starting values for the new record.
- **Background Task**: For complex operations, you can choose to run this in the background to keep the interface fast.

### 2. Update Existing
Modify fields on an existing record.
- **Target Record**: You must specify which record to update. This usually comes from a previous [Query Records]({{< relref "query-records" >}}) step.
- **Field Mapping**: Choose which fields to change and what their new values should be.

### 3. Delete Record
Remove a record from the system.
- **Note**: Use this with caution. Ensure your filters correctly target only the intended record.

## Common Workflows
- **Validation**: Check a condition first, then update a status field.
- **Data Sync**: Use a [Query Records]({{< relref "query-records" >}}) block to find a related document, then use **Update Record** to keep it in sync.
