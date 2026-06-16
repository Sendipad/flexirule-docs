---
title: "Query Doc"
description: "Fetching a single, complete document by name, expression, or latest criteria."
entity_kind: action_operation
category: data-operations
mutation: false
targets: ["Frappe DocType"]
---

# Query Doc Mode

The **Query Doc** mode retrieves a single, complete document from the database and makes all of its fields available to the rule flow.

## Purpose
Use Query Doc when you need to access a full record to retrieve multiple fields, child table data, or perform complex validations that require the entire document object.

## Configuration

### Execution Permission
- **Skip Permissions**: Bypass read permissions for this action. This requires providing a **Permission Audit Reason**.

### Target Document
The Query Doc mode supports multiple strategies for identifying which document to fetch:

| Fetch Strategy | Description |
| :--- | :--- |
| **Get doc** | The standard method. Fetches a document by its unique Name (ID). |
| **Get Doc from Cache** | Attempts to retrieve the document from the system cache first, falling back to the database if not found. |
| **Get Single DocType** | Specialized strategy for Single DocTypes (like "System Settings") where only one record exists. |
| **Get latest Doc** | Fetches the most recently modified document matching a set of filters. |

### Parameters
- **DocType Name**: The type of document to fetch. Supports static selection or dynamic resolution via variables/expressions.
- **Document Name (ID)**: (Required for most strategies) The unique identifier of the document. This utilizes a Flex Value Control, allowing for static links, variable mapping, or Jinja templates.
- **Filters**: (Required for "Get latest Doc") A standard filter builder to define the criteria for finding the most recent matching record.

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
