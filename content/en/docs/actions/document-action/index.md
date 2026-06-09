---
title: "Document Action"
description: "Manage the lifecycle of records across any DocType, including creation, updates, and social interactions."
weight: 40
aliases:
  - /docs/actions/document_action/
capabilities:
  category: document
  mutation: read-write
  targets:
    - external-document
    - database
  triggers:
    - any
  flow: linear
  transaction:
    - transactional
badges:
  - core
---

# Document Action

Keywords: [create, update, delete, todo, comment, lifecycle, mapping]

## Overview

The **Document Action** is the primary mechanism for rules to interact with the database lifecycle of any record in the system. Beyond simple field updates, it allows for the creation of new documents (e.g., generating a Sales Invoice from a Sales Order), permanent removal of records, and engagement with Frappe's social features like ToDos and Comments.

## When To Use

Use the Document Action when your rule needs to perform side-effects outside of the current document's immediate context:

-   **Cross-Document Creation**: Automatically create a "Project" when a "Sales Order" is submitted.
-   **Status Synchronization**: Update a "Lead" status to "Converted" when an "Opportunity" is created.
-   **Task Management**: Assign a "ToDo" to a specific user based on a document's urgency.
-   **Audit Trails**: Add a "Comment" to a document's timeline explaining an automated decision.
-   **Cleanup**: Delete temporary or invalid records based on business logic.

## Configuration

The configuration panel adapts dynamically based on the selected **Document Mode**.

| Field | Description |
| :--- | :--- |
| **Document Mode** | The operation to perform: `Create New`, `Update Existing`, `Delete Record`, `Create ToDo`, or `Add Comment`. |
| **Target DocType** | The DocType to act upon. |
| **Target Record** | (For Update/Delete) The specific document name. Can be a fixed value or a Python expression. |
| **Skip Permissions** | Bypasses standard Frappe write/delete permissions. Requires an **Audit Reason**. |
| **Resource Mapper** | A visual or classic interface to map source data (context variables/fields) to the target document. |

## Features / Operators

### Document Modes

#### 1. Create New
Generates a new record. It supports:
-   **Static Values**: Fixed data entries.
-   **Field Mappings**: Dynamic mapping from `doc.*` or `vars.*`.
-   **Child Table Mapping**: Deep mapping for line items with support for row filters and conditions.
-   **Same-Field Copy**: Automatically copies fields with identical names from a source object.
-   **Async Execution**: Can be offloaded to a background worker to prevent UI blocking.

#### 2. Update Existing
Modifies fields on a specific record. If no **Target Record** name is provided, you must provide a **Docname Expression** (e.g., `doc.prev_link`).

#### 3. Delete Record
Permanently removes the record identified by name.

#### 4. Create ToDo
A specialized mode for the `ToDo` DocType. It automatically links the ToDo to the document that triggered the rule.
-   **Requires**: `Assigned To` (User) and `Description`.

#### 5. Add Comment
A specialized mode for the `Comment` DocType. Posts a message directly to the document's timeline.
-   **Requires**: `Comment Text`.

## Supported Inputs

-   **Context Data**: Any field from the triggering document (`doc.*`) or transient variables (`vars.*`).
-   **Expressions**: Python-based logic for dynamic naming or complex value calculations.
-   **Jinja Templates**: Used specifically for ToDo descriptions and Comment text.

## Supported Outputs

If a **Return Variable** is configured (e.g., `vars.new_record`), the action stores:
-   **Standard Modes**: The full document object as a dictionary.
-   **Async Mode**: A status payload: `{"enqueued": True, "doctype": "..."}`.
-   **Delete Mode**: A confirmation: `{"deleted": True, "name": "..."}`.

## Execution Behavior

1.  **Preparation**: The engine resolves any **Input Mappings** and the **Target Record** name.
2.  **Mapping**: If using `Create` or `Update`, the **Resource Mapper** resolves all scalar and child table fields.
3.  **Permission Check**: Unless **Skip Permissions** is enabled, the engine verifies the current user's access.
4.  **Transaction**:
    -   **Sync**: Performs a standard Frappe `insert()` or `save()`.
    -   **Async**: Enqueues the data for background processing.
5.  **Side Effects**: Saving or deleting records **will** trigger standard Frappe database hooks (`on_update`, `on_trash`, etc.), which may invoke other rules.

## Examples

### Create a ToDo for High-Value Orders
**Problem**: Support Managers need to manually review any Sales Order exceeding $10,000.

**Configuration**:
-   **Mode**: `Create ToDo`
-   **Target DocType**: `ToDo`
-   **Assigned To**: `manager@example.com`
-   **Description**: `Review high-value order {doc.name} for Customer {doc.customer}`
-   **Priority**: `High`

**Result**: A ToDo is automatically assigned and linked to the Sales Order upon its creation.

### Sync Customer Status
**Problem**: When a "Sales Invoice" is submitted, the linked "Customer" status should be set to "Active".

**Configuration**:
-   **Mode**: `Update Existing`
-   **Target DocType**: `Customer`
-   **Target Record**: `{doc.customer}`
-   **Static Values**: `{"status": "Active"}`

**Result**: The Customer record is updated in the background whenever an invoice is finalized.

## Best Practices

-   **Prevent Loops**: When updating the *same* document that triggered the rule, ensure you use **Watched Fields** or specific conditions (e.g., `doc.status != 'Active'`) to prevent infinite recursion.
-   **Use Async for Creation**: Offload heavy creation tasks (like complex Projects) to the background queue to keep the user interface responsive.
-   **Audit Permission Skips**: Only use **Skip Permissions** for automated system tasks and always provide a clear, traceable reason for compliance.

## Common Mistakes

-   **Missing Target Name**: Using `Update Existing` without specifying which record to update.
-   **Permission Errors**: Forgetting that Document Actions respect standard Frappe permissions by default.
-   **Recursive Triggers**: Creating a rule that triggers on "Save" and then performs a Document Action "Save" on the same record without a terminating condition.

## Limitations

-   **Deep Path Updates**: While child tables can be mapped during creation/update, the Resource Mapper currently focuses on root-level scalar fields and whole-table re-populations.
-   **Async Context**: Background tasks do not have access to the original `vars` context from the rule execution that enqueued them.

## Related Topics

-   [Execution Semantics]({{< relref "docs/reference/execution/document-action.md" >}})
-   [Architecture Reference]({{< relref "docs/architecture/actions/document-action.md" >}})
-   [Resource Mapper Guide]({{< relref "docs/user-guide/rule-builder.md" >}})
