---
title: Query Records
description: Retrieve data from the system using filters and aggregations.
weight: 10
entity_kind: action_operation
category: data-operations
mutation: false
targets: ["Frappe DocType"]
---


# Query Records Action

The **Query Records** action is FlexiRule's data retrieval engine. It allows a rule to retrieve information from any DocType in the database, making it possible to validate data, enrich the current context, perform calculations, and drive business logic based on existing records.

---

## Purpose

The **Query Records** action retrieves data from any DocType during rule execution. It enables your rule to access information beyond the current document, allowing decisions and actions based on existing records in the database.

Use this action when your rule needs to:

- **Prevent duplicates** by checking whether matching records already exist.
- **Retrieve related data** from another DocType, such as a customer's credit limit, supplier information, or item details.
- **Calculate business metrics** using database aggregations such as **Count**, **Sum**, **Average**, **Minimum**, or **Maximum**.
- **Find collections of records** that can be processed with a **Loop** action.
- **Build dynamic business logic** based on historical or related records rather than only the current document.

The **Query Records** action is the primary way to access and reuse existing business data within a FlexiRule workflow.

---

## Action Capabilities

| Capability | Support | Notes |
|------------|---------|-------|
| Multiple Query Modes | ✅ Yes | Supports Query Doc, Query List, Exist, Count, Sum, Average, Minimum, and Maximum. |
| Dynamic Filters | ✅ Yes | Build filters using values from the current execution context (`doc`, `vars`, previous action outputs, etc.). |
| Date Formulas | ✅ Yes | Supports relative date ranges such as **Today**, **Current Month**, **Last 30 Days**, and more. |
| Field Selection | ✅ Yes | Retrieve only the fields you need to improve performance. |
| Schema Refresh | ✅ Yes | Automatically maps the returned fields so they can be referenced in later actions. |
| Cached Lookups | ✅ Yes | Supports `use_cached_doc` to improve performance for cached DocTypes. |

---

# Query Modes

## Query Doc

Retrieves the first record that matches the specified filters.

**Returns**

A single Object (Dictionary).

**Best for**

- Loading a master record.
- Fetching settings or configuration values.
- Retrieving related document information.

**Example**

Retrieve a Customer document to access its credit limit before approving a Sales Order.

---

## Query List

Retrieves all records that match the specified filters.

**Returns**

A List of Objects.

**Best for**

- Finding related documents.
- Processing multiple records using a **Loop** action.
- Building collections for further processing.

**Example**

Retrieve all overdue Tasks assigned to the current user.

---

## Aggregations

Performs calculations directly in the database without retrieving every matching record.

**Supported operations**

- Count
- Sum
- Average
- Minimum
- Maximum

**Returns**

A Number.

**Example**

Calculate the **Sum** of `base_grand_total` for all unpaid Sales Invoices belonging to the current customer.

---

## Exist

Checks whether at least one record matches the specified filters.

**Returns**

A Boolean (`true` or `false`).

Because no records are retrieved, this is the fastest query mode.

**Best for**

- Duplicate checks.
- Conditional branching.
- Validation rules.
- Prerequisite checks.

**Example**

Determine whether another active quotation already exists for the same customer.

---

# Configuration

## DocType

Select the DocType you want to query.

Once selected, the available fields become available for filters, sorting, and field selection.

---

## Query Mode

Choose how the query should return results:

- **Query Doc** – Return a single record.
- **Query List** – Return multiple records.
- **Exist** – Return whether a matching record exists.
- **Count** – Return the number of matching records.
- **Sum** – Return the sum of a numeric field.
- **Average** – Return the average value of a numeric field.
- **Minimum** – Return the smallest value of a field.
- **Maximum** – Return the largest value of a field.

---

## Filters

Filters determine which records are returned.

You can combine multiple conditions using **AND** and **OR** groups.

Examples:

| Condition | Example |
|-----------|---------|
| Static Value | `status = "Open"` |
| Current Document | `customer = {{ doc.customer }}` |
| Variable | `company = {{ vars.company }}` |
| Date Formula | `posting_date within Last 30 Days` |

---

## Selected Fields

For **Query Doc** and **Query List**, specify which fields should be returned.

Selecting only the required fields reduces database load and improves execution performance.

If no fields are specified, the entire document may be retrieved depending on the configuration.

---

## Sorting

Optionally specify one or more sort fields and the sort direction (Ascending or Descending).

Sorting is commonly used when:

- Retrieving the latest document.
- Selecting the highest or lowest value.
- Returning records in chronological order.

---

## Limit

Available for **Query List**.

Limits the maximum number of records returned.

Setting a limit improves performance and avoids unnecessarily large result sets.

---

## Refresh Schema

After changing the query mode or selected fields, click **Refresh Schema**.

This updates the Rule Builder with the fields returned by the query so they become available in autocomplete and can be referenced by subsequent actions.

---

# Output

The output depends on the selected query mode.

| Query Mode | Return Type |
|------------|-------------|
| Query Doc | Object |
| Query List | List of Objects |
| Exist | Boolean |
| Count | Number |
| Sum | Number |
| Average | Number |
| Minimum | Number |
| Maximum | Number |

The output can be referenced by later actions using the action's output variable.

---

# Best Practices

- Use **Exist** whenever you only need to know whether a record exists.
- Use **Query Doc** instead of **Query List** when only one record is required.
- Always apply filters to avoid scanning unnecessary records.
- Select only the fields your rule actually needs.
- Set a **Limit** for **Query List** whenever appropriate.
- Use database aggregations instead of retrieving records and calculating totals inside the rule.
- Refresh the schema after modifying the query configuration.

---

# Common Mistakes

### Querying Large Tables Without Filters

Running queries against large DocTypes (such as **Stock Ledger Entry**) without restrictive filters can significantly impact performance.

---

### Using the Wrong Query Mode

Remember the return types:

- **Query Doc** returns a single Object.
- **Query List** returns a List of Objects.

A list must be processed with a **Loop** action or indexed appropriately before accessing individual field values.

---

### Retrieving Unnecessary Fields

Fetching the entire document when only a few fields are required increases database load and slows execution.

---

### Forgetting to Refresh the Schema

If you modify the selected fields or query mode without refreshing the schema, newly returned fields may not appear in autocomplete for subsequent actions.