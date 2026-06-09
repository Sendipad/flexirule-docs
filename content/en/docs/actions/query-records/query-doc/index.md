---
title: "Query Doc"
description: "Fetching a single, complete document by name or expression."
type: docs
---

# Query Doc Mode

The **Query Doc** mode retrieves a single, complete document from the database and makes all of its fields available to the rule flow.

## Purpose
Use Query Doc when you know the specific ID (name) of a document and need to access multiple fields from it that aren't available on your current context.

## Configuration

### Target Resolution
- **Fixed Docname**: Manually enter the name of the document (e.g., `CUST-0001`).
- **Docname Expression**: Use a Python expression to resolve the name dynamically at runtime.
    - `doc.customer`: Fetches the customer linked to the current document.
    - `vars.selected_id`: Fetches a document whose name was stored in a previous step.

## Output Structure
Returns a single object containing all fields of the DocType.

```json
{
  "name": "CUST-001",
  "customer_name": "Acme Corp",
  "credit_limit": 50000.0,
  "territory": "North America",
  "customer_group": "Commercial"
}
```

## Performance Notes
- Query Doc is a "heavy" operation as it performs a full `frappe.get_doc`, which includes loading child tables and running document controller logic.
- If you only need one or two fields, consider using [**Query List**]({{< relref "docs/actions/query-records/query-list" >}}) with a limit of `1` instead for better performance.
