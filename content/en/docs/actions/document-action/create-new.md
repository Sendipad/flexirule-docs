---
title: Create New
description: Generate new records in any DocType using data from the current context.
weight: 30
entity_kind: action_operation
capabilities:
  category: document
  mutation: read-write
  targets:
  - database
---

# Create New

The **Create New** operation is used to generate a fresh record in the system. It is commonly used for document transformation (e.g., converting a Lead to an Opportunity) or generating secondary records (e.g., creating a Project from a Sales Order).

## Configuration

| Field | Description |
| :--- | :--- |
| **Target DocType** | The type of document to create. |
| **Async Execution** | If enabled, the creation is offloaded to a background worker. |
| **Resource Mapper** | The primary interface for mapping source fields to the target document. |

## Features

### Resource Mapper
Supports complex data mapping including:
-   **Static Values**: Fixed data entries (e.g., `status: "Draft"`).
-   **Field Mappings**: Dynamic mapping from `doc.*` or `vars.*`.
-   **Child Table Mapping**: Deep mapping for line items with support for row filters and conditions.
-   **Same-Field Copy**: Automatically copies fields with identical names from a source object.

### Async Execution
Offloading to a background worker prevents UI blocking during long-running creation processes. Note that background tasks do not have access to the original `vars` context.

## Supported Outputs
If a **Return Variable** is configured:
- **Sync**: Returns the full document object as a dictionary.
- **Async**: Returns a status payload: `{"enqueued": True, "doctype": "..."}`.

## Example: Create a Project from a Sales Order
**Problem**: Every time a Sales Order is submitted, a Project must be created to track fulfillment.

**Configuration**:
- **Target DocType**: `Project`
- **Resource Mapper**:
    - `project_name` ← `doc.name`
    - `expected_start_date` ← `doc.delivery_date`
    - `customer` ← `doc.customer`

**Result**: A new Project record is automatically created and linked to the customer upon Sales Order submission.

---
[Back to Document Action]({{< relref "docs/actions/document-action/_index.md" >}})
