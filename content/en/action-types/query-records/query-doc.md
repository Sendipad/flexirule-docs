---
title: Query Doc
description: Retrieving a single record for data enrichment.
weight: 10
---

# Query Doc

Use **Query Doc** when you need to fetch specific details from a single record in the system.

## How it Works
1.  **Filters**: You provide filters to identify the unique record (e.g., `name` = `doc.customer`).
2.  **Result**: FlexiRule fetches the record and returns it as a single **Object**.
3.  **Availability**: All fields of that record are now available in the `vars` of your rule (if you assigned a return variable).

## Example
**Scenario**: You want to get the "Credit Limit" of a Customer while saving a Sales Order.
- **DocType**: `Customer`
- **Filters**: `name` Equals `{{ doc.customer }}`
- **Return Variable**: `customer_info`

In the next node, you can use `{{ vars.customer_info.credit_limit }}` in a calculation or condition.

## Performance Note
If you only need one or two fields, it is more efficient to specify those fields in the "Fields" configuration rather than fetching the whole document.
