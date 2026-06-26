---
title: Create New
description: Generating new documents automatically via rule logic.
weight: 10
---

# Create New Record

This mode allows FlexiRule to generate brand-new records in any DocType.

## Field Mappings
You define how the new document's fields should be populated:
- **Source**: Where the data comes from (`doc.field`, `vars.variable`, or a static `'String'`).
- **Target**: The fieldname on the *new* document.

## Table Mappings (Child Tables)
You can also populate child tables (like Items in a Sales Order).
- **Source Collection**: A list of items (e.g., `doc.items`).
- **Row Mapping**: Define how each row in the source list maps to a row in the new document's child table.

## Example
**Scenario**: Automatically create a "Project" when a "Sales Order" is submitted.
1. **Target DocType**: `Project`.
2. **Field Mapping**:
   - `project_name` ← `doc.name`
   - `customer` ← `doc.customer`
3. **Condition**: Only if `doc.order_type` is "Project-Based".
