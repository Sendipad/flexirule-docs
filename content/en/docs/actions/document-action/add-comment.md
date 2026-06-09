---
title: "Add Comment"
description: "Post an automated message to a document's timeline."
entity_kind: action_operation
capabilities:
  category: document
  mutation: read-write
  targets:
    - database
---

# Add Comment

The **Add Comment** operation is a specialized mode for the `Comment` DocType. It allows rules to post messages directly to a document's timeline (Communication History), providing an automated audit trail or notification system.

## Configuration

| Field | Description |
| :--- | :--- |
| **Comment Text** | The content of the comment. Supports **Jinja Templates**. |

## Supported Inputs
- **Jinja Templates**: Used for the comment text to create dynamic messages, e.g., `Status changed to {doc.status} by automated rule.`

## Execution Behavior
- Posts a comment directly to the document that triggered the rule flow.
- Comments appear in the "Timeline" section of the document in the Frappe UI.

---
[Back to Document Action]({{< relref "docs/actions/document-action/_index.md" >}})
