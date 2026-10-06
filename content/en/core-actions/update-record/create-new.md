---
title: Create New
description: Generate new records automatically using UI field mappings in FlexiRule.
weight: 10
---

# Create New Record

The **Create New Record** mode allows FlexiRule to generate brand-new records automatically in any DocType.

---

## 1. Field Mappings

In the UI configuration grid, map how the new document's fields should be populated:
- **Target Field**: Select the field on the *new* document.
- **Value**: Select the source value using the **Smart Value Selector** (a current document field `@doc.field`, rule variable `@vars.variable`, or static text).

---

## 2. Child Table Mappings

You can also populate child tables on the new document (such as line items on a new Sales Order):
- **Source Collection**: Select a source child table (e.g., `Items` or `@doc.items`) using the **Smart Value Selector**.
- **Row Mapping**: Map fields from each source row to fields in the target child table.

---

## 3. Practical Example

### Scenario: Automatically Create a Project when a Sales Order is Submitted

1. Add an **Update Record** block and set Operation to **Create New**.
2. **Target DocType**: Select `Project`.
3. **Field Mappings**:
   - `Project Name` ← Select `Project Name` or `@doc.title` using Smart Value Selector.
   - `Customer` ← Select `Customer` (`@doc.customer`) using Smart Value Selector.
4. **Condition**: Add a **Check** action prior to creation to verify `Order Type == "Project-Based"`.
