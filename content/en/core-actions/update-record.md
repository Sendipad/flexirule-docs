---
title: Update Record
description: Create, update, or delete documents in the system.
weight: 30
category: data-operations
entity_kind: action_operation
mutation: true
targets: ["Frappe DocType"]
aliases:
  - /docs/actions/document-action/
---

# Update Record (Document Action)

The **Document Action** (labeled as **Update Record** in the builder) is the primary tool for changing data in your system. It can create new records, modify existing ones, or remove them entirely.

## Operations

### 1. Create New
Create a brand new document in any DocType.
- **Set Initial Values**: Define the fields for the new record.
- **Async Execution**: Enable "Run in Background" if the creation process involves heavy processing (e.g., generating many child records).

### 2. Update Existing
Modify fields on an existing document.
- **Targeting**: You must provide the "Name" (ID) of the document. Usually, this is retrieved from a previous **Query Records** step.
- **Assignments**: Map new values to the target document's fields.

### 3. Delete Record
Remove a document from the system.
- **Use with Caution**: This action is permanent. Always use a **Condition** or a specific **Query** to ensure you are deleting the correct record.

## Configuration

1.  **Operation**: Choose Create, Update, or Delete.
2.  **DocType**: Select which type of record to act on.
3.  **Assignments**: Use the assignment table to set field values. You can use static values, fields from the current document (`doc`), or variables from previous steps.

## Workflow Example
A common pattern is to **Query** for a specific record, check a **Condition**, and then **Update** that record if the condition is met.

---
**Advanced**: Technical details on how these operations are handled by the engine can be found in the [Document Action Architecture]({{< relref "advanced-reference/architecture/actions/document-action.md" >}}).
