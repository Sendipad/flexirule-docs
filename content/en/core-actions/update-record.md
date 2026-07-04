---
title: Update Record
description: Create, update, or delete information in your system.
weight: 30
---

# Update Record

The **Update Record** action allows you to make changes to documents in your system or even create brand new ones.

## When to Use It
- **Create New Documents**: For example, automatically create a "Sales Order" once a "Quotation" is approved.
- **Update Other Records**: Change the status of a "Project" when all its "Tasks" are finished.
- **Add Comments**: Post an automated message to a document's timeline.
- **Assign Tasks**: Automatically create a "ToDo" for a specific user.

## Action Modes

### 1. Create New
Use this to build a completely new document.
- **What to Create**: Pick the type of document (e.g., "Customer", "Task").
- **Field Mapping**: Tell FlexiRule which information to copy from your current document into the new one (e.g., copy the "Customer Name" from the Quote to the Order).

### 2. Update Existing
Use this to change a document that already exists.
- **Which Record**: Identify the document by its name or ID.
- **What to Change**: Select the fields you want to update and provide the new values.

### 3. Add Comment
Quickly add a note to the timeline of the document you are currently working on. This is great for keeping an audit trail of automated actions.

### 4. Create ToDo
A simplified way to assign a task to someone on your team.

## Best Practices
- **Use "Set Value" for the Current Document**: If you want to change a field on the document that *triggered* the rule, it's usually better to use the **Set Value** action instead.
- **Check for Required Fields**: When creating a new document, make sure you fill in all the fields that the system normally requires (like "Name" or "Date").
- **Background Processing**: If you are creating a very large document with many items, you can choose to "Run in Background" so you don't have to wait for it to finish.
