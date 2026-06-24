---
title: Update Record
description: Create, update, or delete documents in the system.
weight: 30
aliases:
  - /docs/actions/document-action/
---

# Update Record

The **Update Record** block allows you to create, change, or delete information in your system. It is the main tool for making sure your data is always up to date.

## Common Tasks

### 1. Create a New Record
Automatically create a new item (e.g., create a "Task" whenever a "Sales Order" is submitted).
- **Set Values**: Choose which information should be put into the new record.
- **Run in Background**: For bigger tasks, you can have FlexiRule handle them in the background so you don't have to wait.

### 2. Update an Existing Record
Change information on a record that already exists.
- **Identify the Record**: Tell FlexiRule which specific record to change. Usually, you'll use a **Query Records** block right before this to find the right one.
- **Set Fields**: Pick which fields to change and what the new values should be.

### 3. Add a Comment or Task
- **Post Comment**: Automatically add a note to the timeline of a record.
- **Assign Task (ToDo)**: Create a task for a team member and link it to the record.

### 4. Delete a Record
Permanently remove a record from the system.
- **Note**: Use this with care, as deleted records cannot be easily recovered.

## Pro Tips
- **Check First**: Use a **Condition** block before updating a record to make sure the change is allowed.
- **Search and Update**: Often, you'll use **Query Records** to find a group of items, then a **Loop**, and finally an **Update Record** inside the loop to change each one.
