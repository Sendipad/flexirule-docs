---
title: Update Record
description: Create, update, or delete documents in the system.
weight: 30
aliases:
  - /docs/actions/document-action/
---

# Update Record (Document Action)

The **Document Action** (often labeled as **Update Record** in the UI) allows you to manipulate documents in the system.

## Operations

### 1. Create New
Create a brand new document in any DocType.
- **Set Fields**: Define the initial values for the new record.
- **Asynchronous**: For heavy operations, you can enable "Run in Background".

### 2. Update Existing
Modify fields on an existing document.
- **Find the Record**: You must provide the "Name" (ID) of the document to update. Usually, this comes from a previous **Query Records** step.
- **Field Mapping**: Map values from your current rule context to the target document.

### 3. Delete Record
Remove a document from the system.
- **Caution**: This action is permanent. Ensure you have proper filters set to target the correct record.

## Best Practices
- **Use Validation**: Before updating a record, consider using a **Condition** to ensure the update is valid.
- **Chain Actions**: Frequently used with **Query Records** (to find the document) followed by **Update Record** (to modify it).
