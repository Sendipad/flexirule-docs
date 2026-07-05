---
title: Update Record
description: Modify fields, change states, or perform actions on existing documents.
weight: 70
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType"]
---

# Update Record Action

The **Update Record** action (internally **Document Action**) is used to interact with documents in the database. Unlike the **Assignment** action which updates fields on the *triggering* document, **Update Record** is used to modify *other* documents or perform state-level operations like Submit, Cancel, or Amend.

## Purpose

Use the Update Record action when you need to:
- **Change Remote State**: Update a field on a linked document (e.g., set the "Status" of a Sales Order when an Invoice is paid).
- **Workflow Control**: Programmatically Submit, Cancel, or Re-open a document.
- **Bulk Updates**: Update multiple documents found via a **Query Records** block.

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Multi-Operation** | ✅ Yes | Update, Submit, Cancel, Amend, Re-open, Create. |
| **Batch Support** | ✅ Yes | Can update a single document or a list of documents. |
| **Conditional Rows** | ✅ Yes | Apply field updates conditionally based on the target document's state. |
| **Permission Aware**| ✅ Yes | Respects Frappe permissions unless "Ignore Permissions" is enabled. |

## Modes of Operation

### 1. Update
Modifies specific fields on the target document(s).
- **Target**: An Object (from `Query Doc`) or a List of Objects (from `Query List`).
- **Assignments**: A grid of field/value pairs to update.

### 2. Workflow Actions (Submit, Cancel, Amend)
Executes standard Frappe document lifecycle methods.
- **Submit**: Validates and submits the document.
- **Cancel**: Cancels a submitted document.
- **Amend**: Creates a new draft from a cancelled document.

### 3. Create New (Experimental)
Initializes and saves a new document of a specified DocType.

## Configuration

### 1. Operation
Choose what you want to do with the document (Update, Submit, etc.).

### 2. Target Document(s)
Specify which document to act upon.
- **Variable**: Usually a result from a previous **Query Records** node (e.g., `vars.target_order`).
- **DocType + Name**: Manually specify a DocType and use a resolver for the name.

### 3. Field Mapping
For "Update" or "Create" operations, define which fields to set and what values to use.

## Execution Semantics

1.  **Target Resolution**: The engine resolves the target variable to find the actual document(s).
2.  **Validation**: Verifies that the document exists and is in a valid state for the requested operation (e.g., you cannot "Submit" a document that is already "Submitted").
3.  **Execution**: Calls the appropriate Frappe method (`doc.save()`, `doc.submit()`, etc.).
4.  **Transaction**: If the operation fails, the engine follows the "On Error" strategy. By default, this will roll back the current transaction.

## Best Practices

- **Validate State**: Before trying to Submit or Cancel a document, use a **Check** block to ensure the document is in the correct state (e.g., `doc.docstatus == 0` before Submitting).
- **Batch Updates**: When updating a list of documents, FlexiRule handles the iteration for you if you pass the entire list as the target.
- **Permissions**: Be careful with "Ignore Permissions". Only enable it if the rule *must* perform an action that the triggering user wouldn't normally be allowed to do.

## Common Mistakes

- **Triggering Loops**: Updating a document that triggers another rule which then updates the first document. FlexiRule has cycle detection, but it's best to design for one-way flows.
- **Updating the Current Doc**: Use the **Assignment** block to update the document that triggered the rule. Use **Update Record** only for *other* documents.
