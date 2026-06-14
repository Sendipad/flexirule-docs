---
title: Update Existing
description: Modify fields on a specific record in the database.
weight: 60
entity_kind: action_operation
capabilities:
  category: document
  mutation: read-write
  targets:
  - database
---

# Update Existing

The **Update Existing** operation modifies fields on a specific, already-existing record. This is essential for status synchronization and data enrichment across related documents.

## Configuration

| Field | Description |
| :--- | :--- |
| **Target Record** | The specific document name to update. Can be a fixed value or a Python expression (e.g., `doc.customer`). |
| **Resource Mapper** | Used to define which fields should be modified. |

## Execution Behavior
1. **Target Resolution**: The engine resolves the **Target Record** name. If empty, the action will fail.
2. **Mutation**: The handler performs `doc.set(field, value)` for each mapped field on the loaded object.
3. **Persistence**: The changes are committed to the database via `doc.save()`.

## Example: Sync Customer Status
**Problem**: When a Sales Invoice is submitted, the linked Customer status should be set to "Active".

**Configuration**:
- **Target DocType**: `Customer`
- **Target Record**: `{doc.customer}`
- **Resource Mapper (Static)**: `{"status": "Active"}`

**Result**: The Customer record is updated in the background whenever an invoice is finalized.

## Common Mistakes
- **Missing Target Name**: Forgetting to specify which record to update.
- **Recursive Triggers**: Updating the *triggering* document without a terminating condition, causing a loop.

---
[Back to Document Action]({{< relref "docs/actions/document-action/_index.md" >}})
