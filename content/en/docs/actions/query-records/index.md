---
title: "Query Records"
description: "Fetch and aggregate data from across your system to drive dynamic logic."
weight: 80
aliases:
  - /docs/actions/query_records/
capabilities:
  category: data
  mutation: read-only
  targets:
    - database
  triggers:
    - any
  flow: linear
  transaction:
    - transactional
badges:
  - core
  - external
---

# Query Records Action

The **Query Records** action allows your rule flows to "reach out" into the database to find, fetch, and summarize information from any DocType or Report. It is the primary way to make decisions based on data that isn't already present in your current document.

## Overview

In most automation scenarios, the data on the triggering document (the `doc`) isn't enough. You might need to know if a customer has reached their credit limit, if there's enough stock in a specific warehouse, or if an employee has already submitted their timesheet for the week.

### When to Use
- **Data Enrichment**: Fetching related fields (e.g., getting a Customer's "Territory" to determine a sales tax rate).
- **Validation**: Checking for duplicates or conflicting records (e.g., "Does an active contract already exist for this Project?").
- **Aggregations**: Calculating totals across multiple documents (e.g., "Sum of all unpaid invoices for this Customer").
- **Report Integration**: Leveraging existing business logic defined in Frappe Reports.

### When to Avoid
- **Internal Data**: If the data is already on the current document or its child tables, use it directly instead of querying.
- **Complex Joins**: While basic child-table filtering is supported, extremely complex multi-table joins are better handled via a [Process]({{< relref "docs/actions/process" >}}) action or a custom Python script.

---

## The "Refresh Schema" Requirement

{{< warning >}}
**CRITICAL STEP**: After configuring your query, you **must** click the **Refresh Schema (Test Query)** button in the configuration panel.
{{< /warning >}}

FlexiRule uses this button to perform a live test execution and "learn" what data your query returns. Once clicked:
1. The engine identifies the fields available in the result.
2. These fields become available in the **Variable Picker** for all subsequent nodes in your rule flow.
3. If you change your selected fields or query mode, you must click this button again to update the available schema.

---

## Query Modes

The **Query Records** action supports several modes to match your specific data needs.

### 1. Query List
Returns a list of multiple records matching your filters.
- **Best for**: Finding a set of documents to iterate over with a [Loop]({{< relref "docs/actions/loop" >}}).
- **Output Shape**: A list of objects.
  ```json
  [
    { "name": "SO-2024-001", "status": "Draft", "grand_total": 500.0 },
    { "name": "SO-2024-005", "status": "Draft", "grand_total": 1250.0 }
  ]
  ```

### 2. Query Doc
Returns a single, complete document.
- **Best for**: Fetching detailed information from one specific record when you already know its ID (name).
- **Configuration**: You can provide a fixed name or use a **Docname Expression** (e.g., `doc.customer`).
- **Output Shape**: A single object containing all document fields.
  ```json
  { "name": "CUST-001", "customer_name": "Acme Corp", "credit_limit": 50000.0, ... }
  ```

### 3. Exist Record
A high-performance check that returns only whether matching records exist.
- **Best for**: Simple "Yes/No" logic.
- **Output Shape**: A boolean (`true` or `false`).

### 4. Aggregate Operations (Count, Sum, Avg, Min, Max)
Performs calculations directly in the database.
- **Best for**: Summary statistics (e.g., "How many open tickets?" or "What is the max discount given?").
- **Output Shape**: A single number.

### 5. Group By
Aggregates data into buckets based on a field.
- **Best for**: Summary tables (e.g., "Count of Leads grouped by Source").
- **Output Shape**: A list of grouped results.
  ```json
  [
    { "source": "Email", "value": 15 },
    { "source": "Website", "value": 42 }
  ]
  ```

### 6. Query Report
Executes an existing Frappe Report and returns the data.
- **Best for**: Reusing complex logic already defined in your ERPNext system.
- **Output Shape**: An object containing both column definitions and results.
  ```json
  {
    "columns": [...],
    "result": [
      { "item_code": "CPU-01", "qty": 10 },
      { "item_code": "GPU-02", "qty": 5 }
    ]
  }
  ```

---

## Examples

### CRM: Sales Order Credit Check
**Problem**: Check if the current Customer has reached their credit limit across all unpaid invoices.
- **Mode**: `Sum`
- **DocType**: `Sales Invoice`
- **Field**: `outstanding_amount`
- **Filters**:
    - `customer == doc.customer`
    - `docstatus == 1` (Submitted)
- **Output Variable**: `vars.total_unpaid`

### Support: Auto-Escalation
**Problem**: Count how many "High Priority" tickets are currently assigned to the support agent.
- **Mode**: `Count`
- **DocType**: `Issue`
- **Filters**:
    - `owner == doc.owner`
    - `status == "Open"`
    - `priority == "High"`
- **Output Variable**: `vars.high_priority_count`

### Inventory: Warehouse Availability
**Problem**: Find the total quantity of an item across all warehouses in a specific territory.
- **Mode**: `Sum`
- **DocType**: `Bin`
- **Field**: `actual_qty`
- **Filters**:
    - `item_code == doc.item_code`
    - `warehouse.territory == "North America"` (Deep field filtering)
- **Output Variable**: `vars.available_stock`

---

## Using Timespan Keywords

When filtering by dates, you can use natural language keywords instead of calculating dates manually:

- `today`: Records from the current date.
- `yesterday`: Records from the previous day.
- `last month`: Records from the entirety of the previous calendar month.
- `this quarter`: Records within the current fiscal quarter.
- `next 30 days`: Records from today until 30 days in the future.

*See the [Execution Semantics]({{< relref "docs/reference/execution/query-records.md" >}}) for the full list of supported keywords.*

---

## Common Mistakes

- **Forgetting "Refresh Schema"**: If you add a field to your query but don't see it in the variable picker later, you likely forgot to click the Refresh button.
- **Missing Filters**: Querying a DocType like "Sales Invoice" without filters in a large system can cause performance lag. Always filter by `customer`, `date`, or `status`.
- **Query Doc vs. Query List**: If you use `Query List` but only expect one result, remember that the output will be a **list** (e.g., `[record]`). Use `Query Doc` or set the limit to `First Record` to get a single object.
- **Permissions**: If the rule runner doesn't have "Read" permissions for the target DocType, the query will fail unless "Skip Permissions" is enabled.

---

## Related Topics

- [Loop Action]({{< relref "docs/actions/loop" >}}) - Used to process results from a `Query List`.
- [Condition Action]({{< relref "docs/actions/condition" >}}) - Used to branch logic based on `Exist Record` or `Count`.
- [Value Resolver]({{< relref "docs/architecture/resolver/_index.md" >}}) - How filters resolve dynamic values.
