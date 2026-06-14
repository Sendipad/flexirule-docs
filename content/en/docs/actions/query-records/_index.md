---
title: Query Records
description: Retrieves document data from the system database using filters.
weight: 40
entity_kind: action
category: data-operations
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
- **Data Enrichment**: Fetching related fields (e.g., getting a Customer's "Territory").
- **Validation**: Checking for duplicates or conflicting records.
- **Aggregations**: Calculating totals across multiple documents (e.g., "Sum of all unpaid invoices").
- **Report Integration**: Leveraging existing business logic defined in Frappe Reports.

---

## The "Refresh Schema" Requirement

{{< warning >}}
**CRITICAL STEP**: After configuring your query, you **must** click the **Refresh Schema (Test Query)** button in the configuration panel.
{{< /warning >}}

FlexiRule uses this button to perform a live test execution and "learn" what data your query returns. This makes the resulting fields available in the **Variable Picker** for all subsequent nodes.

---

## Query Modes Overview

Query Records is a versatile action that supports several execution modes. Choose the mode that best fits your data requirements:

| Mode | Returns | Best For |
| :--- | :--- | :--- |
| [**Query List**]({{< relref "docs/actions/query-records/query-list" >}}) | List of Objects | Finding multiple records to loop over. |
| [**Query Doc**]({{< relref "docs/actions/query-records/query-doc" >}}) | Single Object | Fetching detailed info from a specific record. |
| [**Exist Record**]({{< relref "docs/actions/query-records/exist-record" >}}) | Boolean | Simple validation and existence checks. |
| [**Aggregations**]({{< relref "docs/actions/query-records/aggregations" >}}) | Number | Totals, counts, and averages (Sum, Min, Max). |
| [**Group By**]({{< relref "docs/actions/query-records/group-by" >}}) | List of Objects | Analytical summaries and bucketed data. |
| [**Query Report**]({{< relref "docs/actions/query-records/query-report" >}}) | Complex Object | Reusing existing system reports. |

---

## Choosing the Right Mode

1.  **Need to check if data exists?** → Use **Exist Record**.
2.  **Need a specific field from one record?** → Use **Query Doc**.
3.  **Need to process multiple records?** → Use **Query List**.
4.  **Need a single total or average?** → Use **Aggregations**.
5.  **Need to see results bucketed by a category?** → Use **Group By**.

---

## Common Mistakes

- **Forgetting "Refresh Schema"**: If results aren't appearing in the variable picker, click the Refresh button.
- **Unfiltered Queries**: Querying large DocTypes without filters can cause performance lag. Always filter by `customer`, `date`, or `status`.
- **Mode Mismatch**: Using `Query List` when you expect a single object. Remember `Query List` always returns a **list**, even if it only contains one item.

---

## Related Topics

- [Query Filter Reference]({{< relref "docs/reference/query-filters" >}}) - Exhaustive guide to operators and filter logic.
- [Timespan Keywords]({{< relref "docs/reference/timespan-keywords" >}}) - Natural language date filtering.
- [Loop Action]({{< relref "docs/actions/loop" >}}) - Processing results from a `Query List`.
- [Value Resolver]({{< relref "docs/architecture/resolver/_index.md" >}}) - How filters resolve dynamic values.
