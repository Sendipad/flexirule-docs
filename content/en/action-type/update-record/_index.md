---
title: Update Record
description: Modify fields, change states, or perform lifecycle operations on database records in the UI.
weight: 70
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType"]
---

# Update Record Action

The **Update Record** action allows a rule to modify records in the database, update linked documents, or execute document workflow state transitions (such as Submit, Cancel, or Re-open).

---

## 1. What is it?

While the **Set Value** action modifies fields on the *currently triggering* document in memory before it saves, the **Update Record** action is used to modify *other* records in the database or execute state actions like Submitting or Cancelling a document.

---

## 2. When to Use

Use the Update Record action when you need to:
- **Update linked database records** (e.g., set a Sales Order's status to "Billed" when an Invoice is paid).
- **Execute workflow lifecycle actions** programmatically (Submit, Cancel, Amend, or Re-open records).
- **Perform bulk updates** on records fetched by a **Query Records** block.
- **Create new records** in another DocType automatically.

---

## 3. How to Configure

1. **Add the Action**: Add an **Update Record** block to your visual canvas.
2. **Select Operation**:
   - **Update**: Modify specific fields on existing records.
   - **Submit / Cancel / Amend**: Execute document lifecycle transitions.
   - **Create New**: Create a brand new record.
3. **Select Target Document(s)**:
   - Select a target record variable (e.g., a result from a **Query Records** block) or pick a DocType and select the Document Name using the **Smart Value Selector**.
4. **Configure Field Mappings**:
   - Add field mapping rows specifying target fields and values selected via the **Smart Value Selector**.
5. **Connect Outbound Branch**: Connect the Update Record block to your next action.

---

## 4. Practical Example

### Scenario: Update Linked Sales Order Status when Invoice is Paid

1. **Target Record**: Select DocType `Sales Order` and map Document Name to `@doc.sales_order` using the Smart Value Selector.
2. **Operation**: Choose `Update`.
3. **Field Mappings**:
   - Target field: `Status`
   - Value: Select `"Billed"`
4. **Save Rule**: When the Invoice is paid, the linked Sales Order updates in the database.

---

## 5. Related Features

- [Set Value]({{< relref "action-type/assignment.md" >}}): For updating fields on the *current* triggering document.
- [Query Records]({{< relref "action-type/query-records/" >}}): Fetch database records to target with Update Record actions.
- [Create New Record]({{< relref "action-type/update-record/create-new.md" >}}): Guide on creating new records.
- [Update Existing Record]({{< relref "action-type/update-record/update-existing.md" >}}): Guide on modifying existing records.

---

## 6. Developer & Technical Details

For information on document action handlers, transaction boundaries, and state validation:
- [Document Action Architecture Reference]({{< relref "advanced-concepts/architecture/actions/document-action.md" >}})
