---
title: "Delete Record"
description: "Permanently remove a record from the database."
kind: action_operation
capabilities:
  category: document
  mutation: delete
  targets:
    - database
---

# Delete Record

The **Delete Record** operation permanently removes the record identified by its name. This should be used with caution, typically for cleaning up temporary or invalid records.

## Configuration

| Field | Description |
| :--- | :--- |
| **Target Record** | The specific document name to delete. Can be a fixed value or a Python expression. |
| **Skip Permissions** | Bypasses standard Frappe delete permissions. Requires a mandatory **Audit Reason**. |

## Supported Outputs
If a **Return Variable** is configured, the action stores a confirmation payload:
```json
{"deleted": true, "name": "DOC-123"}
```

## Execution Behavior
- Performs a standard Frappe `on_trash` and `delete` operation.
- Respects DocType delete permissions unless **Skip Permissions** is enabled.

---
[Back to Document Action]({{< relref "docs/actions/document-action/_index.md" >}})
