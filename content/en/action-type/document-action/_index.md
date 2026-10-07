---
title: Document Action
description: Create, update, delete, create a ToDo, or add a comment using a Frappe document operation.
weight: 100
aliases:
  - /action-type/update-record/
  - /docs/action-type/update-record/
---

# Document Action

**Document Action** performs an operation on a target Frappe document.

This is the current Action Type for document operations. The old **Update Record** section is obsolete.

## Operations

| Operation | Purpose |
|---|---|
| **Create New** | Create a new document. |
| **Update Existing** | Update an existing document. |
| **Delete Record** | Delete an existing document. |
| **Create ToDo** | Create a ToDo linked to the current context document. |
| **Add Comment** | Add a timeline comment to the current context document. |

## Common configuration

Document Action requires:

- Target DocType
- Document Mode

Depending on the operation, the action can also use a target record, configuration JSON, input mapping, result handling, and a return type.

The configuration UI is **DocumentActionConfig**.

## Result handling

The operation determines the available result type.

- Create New → Single Record or Full Document
- Update Existing → Single Record or Full Document
- Delete Record → Yes / No
- Create ToDo → Single Record
- Add Comment → Single Record

Available result handling also varies by operation.

## Permissions

Document Action normally respects Frappe permissions. The Rule Action provides an **Ignore Permissions** option for this Action Type, and enabling it requires a **Permission Audit Reason**.

Use this deliberately because it changes normal permission enforcement.

## Choosing between Assignment and Document Action

Use **Assignment** when the requirement is to apply assignment rows.

Use **Document Action** when the requirement is a document operation such as create, update, delete, ToDo, or comment.

## Operations

- [Create New]({{< relref "create-new.md" >}})
- [Update Existing]({{< relref "update-existing.md" >}})
- [Delete Record]({{< relref "delete-record.md" >}})
- [Create ToDo]({{< relref "create-todo.md" >}})
- [Add Comment]({{< relref "add-comment.md" >}})
