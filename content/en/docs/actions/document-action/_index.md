---
title: "Document Action"
description: "Manage the lifecycle of records across any DocType, including creation, updates, and social interactions."
weight: 40
kind: action
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

---

## Supported Operations

Document Action supports several execution modes, each tailored to a specific lifecycle event.

| Operation | Best For |
| :--- | :--- |
| [**Create New**]({{< relref "docs/actions/document-action/create-new" >}}) | Generating new records from existing context data. |
| [**Update Existing**]({{< relref "docs/actions/document-action/update-existing" >}}) | Modifying fields on a specific target record. |
| [**Delete Record**]({{< relref "docs/actions/document-action/delete-record" >}}) | Permanently removing records from the database. |
| [**Create ToDo**]({{< relref "docs/actions/document-action/create-todo" >}}) | Assigning tasks to users and linking them to documents. |
| [**Add Comment**]({{< relref "docs/actions/document-action/add-comment" >}}) | Posting automated updates to a document's timeline. |

---

## Common Configuration

While each operation has unique fields, they share several core configuration elements:

| Field | Description |
| :--- | :--- |
| **Document Mode** | Selects the operation to perform. |
| **Target DocType** | The DocType to act upon (e.g., `Sales Order`, `ToDo`). |
| **Skip Permissions** | Bypasses standard Frappe write/delete permissions. Requires an **Audit Reason**. |
| **Return Variable** | Stores the result of the action (e.g., the new document object) in `vars.*`. |

## Best Practices

-   **Prevent Loops**: When updating the *same* document that triggered the rule, ensure you use **Watched Fields** or specific conditions (e.g., `doc.status != 'Active'`) to prevent infinite recursion.
-   **Use Async for Creation**: Offload heavy creation tasks (like complex Projects) to the background queue to keep the user interface responsive.
-   **Audit Permission Skips**: Only use **Skip Permissions** for automated system tasks and always provide a clear, traceable reason for compliance.

## Related Topics

- [Execution Semantics]({{< relref "docs/reference/execution/document-action.md" >}})
- [Architecture Reference]({{< relref "docs/architecture/actions/document-action.md" >}})
- [Resource Mapper Guide]({{< relref "docs/user-guide/rule-builder.md" >}})
