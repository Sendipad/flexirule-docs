---
title: Document Action
description: Create, update, or delete records in your system.
weight: 30
aliases:
  - /docs/actions/document-action/
---

# Document Action

The **Document Action** is used to interact with records in your database. It allows your rules to create new records, update existing ones, or even delete them.

## Available Operations

### 1. Create New
Automatically create a new record.
- **Example**: Create a "Project" automatically when a "Sales Order" is confirmed.
- **Mapping**: You can map values from your current document directly into the new one.

### 2. Update Existing
Modify specific fields on an existing record.
- **Example**: Change a Lead's status to "Converted" once an Opportunity is linked to it.

### 3. Delete Record
Permanently remove a record from the system. Use this with caution.
- **Example**: Automatically clean up temporary or duplicate records based on your logic.

### 4. Create ToDo
Assign a task to a specific user.
- **Example**: Assign a "Review" task to a manager if a discount is too high.

### 5. Add Comment
Post an automated comment to a document's timeline.
- **Example**: Add a comment saying "Approval automatically granted by FlexiRule" when certain conditions are met.

## Common Settings
- **Target DocType**: Choose which type of record you want to act on (e.g., `Sales Invoice`, `Customer`).
- **Return Variable**: You can save the result of this action (like the ID of a newly created record) to use in later steps of your rule.
- **Skip Permissions**: If enabled, the action will run even if the user who triggered the rule doesn't have permission to perform that specific task. This is useful for automated system background tasks.

## Best Practices
- **Watch for Loops**: Be careful when updating the same record that triggered the rule, as this could cause an infinite loop. Use conditions to ensure the update only happens once.
- **Add Comments for Clarity**: Using the "Add Comment" operation is a great way to provide an audit trail so users know why an automated change happened.
