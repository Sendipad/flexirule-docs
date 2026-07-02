---
title: Update Record
description: Create new records or update existing ones in the system.
weight: 60
---

# Update Record

While the **Set Value** block is used to update the *current* document, the **Update Record** block is used to create or modify *other* documents in the system.

## Modes

### 1. Create New
Use this to automatically generate a new document.
- **Example**: When a "Service Request" is approved, automatically create a "Task" for the technician.
- **Mapping**: You can map fields from your current document to the new one (e.g., set the `customer` on the Task to be the same as the `customer` on the Request).

### 2. Update Existing
Use this to change data on a specific, existing document.
- **Example**: When a "Delivery Note" is signed, update the related "Sales Order" status to "Delivered."
- **Requirement**: You must specify which document to update, usually by providing its name or ID (which you might have found using a **Query Records** block).

---

## Pro Tips
- **Automation**: This block is powerful for "Chain Reactions" where one action in the system automatically triggers several others.
- **Validation**: FlexiRule will respect all standard Frappe permissions and validation rules when creating or updating records. If a field is mandatory in the target DocType, you must provide a value for it here.
- **Results**: After creating a new record, the "Update Record" block returns the ID of the new document so you can use it in later steps.
