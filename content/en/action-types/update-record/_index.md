---
title: Update Record
description: Create, Update, or Delete documents in ERPNext and custom Frappe apps.
weight: 30
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType"]
---

# Update Record Action

The **Update Record** action (internally known as **Document Action**) is used to perform CRUD operations on any DocType in the system. It is the bridge between rule logic and persistent data changes.

## Purpose

Use the Update Record action when you need to:
- **Create New**: Generate a new document (e.g., Create a *Sales Order* from a *Quotation*).
- **Update Existing**: Modify a specific record (e.g., Update a *Project* status when a *Task* is completed).
- **Delete Record**: Remove a document from the system.
- **Add Comment**: Post a message to the document timeline.
- **Create ToDo**: Assign a task to a user based on rule logic.

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Field Mapping** | ✅ Yes | Map values from the current rule context to the target document. |
| **Table Mapping** | ✅ Yes | Bulk-populate child tables from source collections. |
| **Same-Field Copy** | ✅ Yes | Automatically copy fields with matching names (Frappe Mapper style). |
| **Async Support** | ✅ Yes | Offload document creation to background workers. |
| **Permission Bypass**| ✅ Yes | Option to `ignore_permissions` with mandatory audit reason. |

## Configuration Modes

### 1. Create New
Generates a fresh document.
- **Reference DocType**: The type of document to create.
- **Field Mappings**: Define which fields to populate.
- **Static Values**: Fixed values that never change.
- **Table Mappings**: Logic for copying child table rows (e.g., Quotation Items to Sales Order Items).

### 2. Update Existing
Modifies an existing record.
- **Document Name**: Can be a fixed name or a dynamic expression (e.g., `doc.customer_project`).
- **Mappings**: Only the mapped fields will be updated; others remain unchanged.

### 3. Delete Record
Removes a record based on name and DocType. Requires explicit permission or an audit-logged bypass.

### 4. Specialized Modes
- **Create ToDo**: Simplified UI for assigning Frappe ToDos.
- **Add Comment**: Appends a comment to the timeline of the triggering document.

## Field and Table Mapping

Mappings are the heart of the Update Record action. They define the data flow:

**Field Mapping Example:**
- Target: `customer` ← Source: `doc.customer_name`
- Target: `status` ← Source: `"Open"` (Static)

**Table Mapping Example:**
- Target Table: `items`
- Source Collection: `doc.items`
- Condition: `item.qty > 0`
- Row Mapping:
    - `item_code` ← `item.item_code`
    - `qty` ← `item.qty`

## Best Practices

- **Use Async for Heavy Tasks**: If creating a document involves complex controller logic or many child rows, enable **Run Asynchronously** to keep the user interface responsive.
- **Transactional Safety**: Document actions are part of the rule transaction. If the rule fails later, the document creation/update will be rolled back (unless executed asynchronously).
- **Audit Reasons**: Always provide a clear reason when using "Skip Permissions" for compliance and debugging.

## Common Mistakes

- **Circular Updates**: Updating the *same* document that triggered the rule in an "On Save" event. This can cause recursion. Use **Assignment** for updates to the triggering document instead.
- **Missing Required Fields**: Ensure all mandatory fields of the target DocType are either mapped or have default values.
