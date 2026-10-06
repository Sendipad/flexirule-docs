---
title: Update Existing
description: Modify specific existing database records using UI field mappings.
weight: 20
---

# Update Existing Record

Use **Update Existing Record** mode to change field values on records that already exist in the database.

---

## 1. Identifying Target Record

In the configuration panel, specify which record to update:
- **Target Record**: Choose a record variable retrieved from a **Query Records** block (e.g., `@vars.target_project`).
- **DocType + Document Name**: Select the target DocType and pick the document name field using the **Smart Value Selector** (e.g., `@doc.linked_project`).

---

## 2. Partial Field Updates

Unlike creating a new record, you only need to map the specific fields you want to change. All unmapped fields on the target record remain unchanged.

---

## 3. Practical Example

### Scenario: Update Project Status when a Task is Completed

1. Add an **Update Record** block and set Operation to **Update Existing**.
2. **Target DocType**: Select `Project`.
3. **Document Name**: Select `Project` (`@doc.project`) using the **Smart Value Selector**.
4. **Field Mapping**:
   - `Status` ← `"In Progress"`
