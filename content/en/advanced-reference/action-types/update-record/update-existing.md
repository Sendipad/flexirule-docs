---
title: Update Existing
description: Modifying specific records in the system.
weight: 20
---

# Update Existing Record

Use this mode to change fields on a document that already exists in the database.

## Identifying the Document
You must tell FlexiRule *which* record to update:
- **Document Name**: A fixed name (e.g., `PROJ-001`).
- **Dynamic Expression**: A path to the name (e.g., `doc.linked_project`).

## Partial Updates
Unlike "Create New", you only need to map the fields you want to **change**. All other fields on the existing record will remain exactly as they are.

## Example
**Scenario**: When a "Task" is completed, update its parent "Project" status.
1. **Target DocType**: `Project`.
2. **Document Name**: `doc.project`.
3. **Field Mapping**:
   - `status` ← `'In Progress'`
