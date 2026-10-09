---
title: Which Query Mode Should I Use?
weight: 5
description: Choose the Query Records mode that matches the required result and implementation.
---

# Which Query Mode Should I Use?

Start with the result your next step needs, not with the longest list of options.

| If you need… | Choose | Why |
|---|---|---|
| A collection of matching rows with configurable fields, filters, sorting, limit, and offset | **Fetch Records** | Uses the newer Frappe Query Builder path and returns a list of records. |
| An existing list-style query configuration | **Query List** | Keeps the legacy query implementation; do not assume its filters or output behave identically to Fetch Records. |
| One document or a single-record result | **Query Doc** | Designed for a single target record/result. |
| Only whether a matching record exists | **Exist Record** | Avoids fetching a collection just to answer yes/no. |
| Output from a supported existing report | **Query Report** | Uses a Report target and report-specific execution path. |
| The number of matching records | **Count** | Use an aggregate mode rather than loading every row. |
| A total or statistical value for a field | **Sum**, **Average**, **Min**, or **Max** | Select the aggregate that matches the question and configure its required field. |
| Results grouped by a field | **Group By** | Use only grouping behavior supported by the installed implementation. |

## Prefer the smallest useful result

If you need yes/no, choose Exist Record. If you need a count or a supported aggregate, prefer that mode to loading a large list. If you need to process each matching row, Fetch Records may be appropriate with a bounded result size and a Loop.

## Check the contract and output

Modes expose different controls and result types. Fetch Records is contractually a **List of Records** result; Query Doc can expose single-record/full-document output; Exist Record returns yes/no; other modes have their own result behavior.

After configuration, run Debug and inspect the actual result before connecting it to another action. Test empty results, permission-limited results, and realistic maximum data volumes.

→ [Query Records overview](./)  
→ [Fetch Records details](fetch-records.md)  
→ [Query filters]({{< relref "../../advanced-concepts/reference/query-filters/" >}})
