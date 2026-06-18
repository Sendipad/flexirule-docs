---
title: Query Filters
description: Reference guide for filtering logic across FlexiRule actions.
weight: 10
type: docs
---

# Query Filter Reference

FlexiRule uses a standardized filter system for any action that queries the database (such as **Query Records**). This system allows you to build complex logical conditions without writing code.

---

## Filter Basics

A filter consists of three parts:
1.  **Field**: The DocType field to check (e.g., `status`, `customer`).
2.  **Operator**: The comparison logic (e.g., `==`, `!=`, `like`).
3.  **Value**: The target value (fixed, variable, or expression).

---

## Supported Operators

| Operator | Description | Example |
| :--- | :--- | :--- |
| `==` | Exact equality | `status == "Draft"` |
| `!=` | Not equal to | `docstatus != 1` |
| `>` / `>=` | Greater than (or equal) | `grand_total >= 5000` |
| `<` / `<=` | Less than (or equal) | `outstanding < 10` |
| `in` | Value is in a list | `name in ["SO-001", "SO-002"]` |
| `not in` | Value is not in a list | `customer not in vars.blocked_list` |
| `like` | SQL-style pattern match | `name like "SO-2024-%"` |
| `starts with`| Convenience pattern match | `item_code starts with "CPU"` |
| `ends with` | Convenience pattern match | `serial_no ends with "XYZ"` |
| `between` | Value within a range | `creation between ["2024-01-01", "2024-01-31"]` |
| `Timespan` | Natural language dates | `creation Timespan "last month"` |

---

## Filter Groups (AND/OR)

Filters can be grouped together to create complex logic:

- **AND Groups**: All conditions in the group must be met.
- **OR Groups**: At least one condition in the group must be met.

You can nest these groups (e.g., An OR group containing multiple AND groups) to handle sophisticated business rules.

---

## Deep Field Lookups (Dot Notation)

FlexiRule supports "relationship traversal" using dot notation. This allows you to filter based on fields in a linked document or a child table.

### Child Table Filtering
- `items.item_code == "CPU-01"`: Filters for documents that contain at least one row in the `items` child table with the specified item code.

### Link Field Filtering
- `customer.territory == "North America"`: Filters for documents where the linked Customer belongs to the "North America" territory.

---

## Using Dynamic Values

Instead of typing a fixed value, you can use the **Value Resolver** to pull data from the current context:

- `{{doc.customer}}`: Resolves to the customer name of the triggering document.
- `{{vars.target_date}}`: Resolves to a variable calculated in a previous node.
- `{{Today - 7 days}}`: Resolves to a calculated date.

*See the [Value Resolver]({{< relref "advanced-reference/architecture/resolver/_index.md" >}}) for full expression syntax.*
