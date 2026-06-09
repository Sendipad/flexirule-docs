---
title: "Create ToDo"
description: "Assign a task to a user and link it to the triggering document."
kind: action_operation
capabilities:
  category: document
  mutation: write
  targets:
    - database
---

# Create ToDo

The **Create ToDo** operation is a specialized mode for the `ToDo` DocType. It automatically handles the linking between the new ToDo and the document that triggered the rule, simplifying task management.

## Configuration

| Field | Description |
| :--- | :--- |
| **Assigned To** | The user (email) to whom the task should be assigned. |
| **Description** | The content of the task. Supports **Jinja Templates**. |
| **Priority** | (Optional) Low, Medium, High, or Urgent. |

## Supported Inputs
- **Jinja Templates**: The description field can use Jinja to inject document fields, e.g., `Review high-value order {doc.name}`.

## Example: Review High-Value Orders
**Problem**: Support Managers need to manually review any Sales Order exceeding $10,000.

**Configuration**:
- **Assigned To**: `manager@example.com`
- **Description**: `Review high-value order {doc.name} for Customer {doc.customer}`
- **Priority**: `High`

**Result**: A ToDo is automatically assigned and linked to the Sales Order upon its creation.

---
[Back to Document Action]({{< relref "docs/actions/document-action/_index.md" >}})
