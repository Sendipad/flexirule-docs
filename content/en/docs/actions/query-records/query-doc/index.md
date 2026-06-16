---
title: Query Doc
description: Fetch a single, complete document from the database and make its fields
  available to the rule flow.
weight: 10
entity_kind: action_operation
category: data-operations
mutation: false
targets:
- Frappe DocType
badges:
- core
---

# Query Doc Mode

The **Query Doc** mode retrieves a single record (DocType) from the database and makes all (or selected) fields available as an object in your rule context.

## Overview
While the triggering document (`doc`) provides the immediate context for a rule, you often need to access detailed information from related master data. **Query Doc** allows you to fetch a full Frappe document—including its child tables—by resolving its unique name (ID).

Unlike **Query List**, which returns an array of results, **Query Doc** always returns a single, structured object, making it easier to reference specific fields in subsequent logic without looping.

## When To Use
*   **Master Data Enrichment**: You have a Link field (like `customer` or `item_code`) and need to fetch secondary attributes (like `credit_limit` or `valuation_rate`).
*   **Complex Validation**: You need to check the state of a related document (e.g., "Is the linked Project currently 'Open'?").
*   **Child Table Access**: You need to inspect the line items of another document that isn't currently in scope.

**Alternative**: If you only need one or two specific fields and want to avoid the performance overhead of loading a full document, use [**Query List**]({{< relref "docs/actions/query-records/query-list" >}}) with a limit of `1` instead.

## Configuration

| Field | Description |
| :--- | :--- |
| **Reference DocType** | The type of document to fetch (e.g., `Customer`, `User`). This can be a static selection or a dynamic expression (e.g., `{{doc.customer}}`). |
| **Filters** | The criteria used to identify the specific record. For non-Single DocTypes, these filters must resolve to exactly one record. |
| **Return Type** | **Full Document**: Returns the entire `frappe.get_doc()` object. <br> **Single Record**: Allows you to pick specific fields to return, reducing the size of the result object. |
| **Use Cached Document** | If enabled, the engine uses `frappe.get_cached_doc()`, which can improve performance by using Frappe's internal cache. |
| **Return Variable** | The context variable where the resulting object will be stored (e.g., `vars.customer_data`). |

## Supported Inputs
*   **Docname Resolution**: Requires a valid document name (ID) or a set of filters that uniquely identifies one record.
*   **Context Variables**: Can use `doc` fields or `vars` from previous steps in filters or expressions.

## Supported Outputs
*   **Object (dict)**: A single object containing the fields of the retrieved DocType.
*   **Variable Injection**: The object is injected into the context under the defined **Return Variable**.

## Execution Behavior
1.  **Resolution**: The engine evaluates the **Reference DocType** and **Filters**.
2.  **Retrieval**: It executes `frappe.get_doc` (or `get_cached_doc`).
3.  **Permission Check**: Unless `Skip Permissions` is enabled, it verifies the current user has `Read` access to that document.
4.  **Transformation**: If "Single Record" is selected, it filters the document fields; otherwise, it converts the full document to a dictionary.
5.  **Context Update**: The result is saved to the rule context.

## Examples

### Sales Order Credit Limit Validation
**Problem**: You want to prevent a Sales Order from being submitted if the Customer's credit limit has been exceeded. The Sales Order document contains the customer name, but not the `credit_limit` field.

**Configuration**:
*   **Mode**: `Query Doc`
*   **Reference DocType**: `Customer`
*   **Filters**: `ID (name)` equals `{{doc.customer}}`
*   **Return Type**: `Single Record`
*   **Fields**: `credit_limit`
*   **Return Variable**: `vars.customer_info`

**Result**:
The rule flow now has access to `vars.customer_info.credit_limit`. You can follow this node with a **Condition** node that checks:
`doc.grand_total > vars.customer_info.credit_limit`

## Performance & Best Practices
{{< warning >}}
**Query Doc is a "heavy" operation.**
{{< /warning >}}

*   **Overhead**: It performs a full `frappe.get_doc`, which includes loading all child tables and executing the document's Python controller logic (like `onload` or `autoname` hooks).
*   **Memory**: Fetching very large documents with hundreds of child table rows can increase memory usage.
*   **Optimization**:
    *   Use **Query List** with a limit of 1 if you only need a few top-level fields.
    *   Enable **Use Cached Document** for frequently accessed master data that doesn't change often (like Settings or Currency info).
    *   Avoid using Query Doc inside a **Loop** if the same data can be fetched in bulk before the loop starts.

## Related Topics
- [Query Records Overview]({{< relref "docs/actions/query-records/_index.md" >}})
- [Query List Mode]({{< relref "docs/actions/query-records/query-list" >}})
- [Execution Semantics]({{< relref "docs/reference/execution/query-records.md" >}})
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
