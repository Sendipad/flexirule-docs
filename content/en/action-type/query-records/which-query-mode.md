---
title: Which Query Mode Should I Use?
weight: 5
description: Choose the Query Records mode that matches the result your rule needs.
---

# Which Query Mode Should I Use?

Choose the mode from the result you actually need.

| Need | Mode |
|---|---|
| A collection of matching records with selected fields | **Fetch Records** |
| A lightweight list of selected values | **Query List** |
| One document or single-record result | **Query Doc** |
| Only whether a match exists | **Exist Record** |
| Rows from a supported report | **Query Report** |
| Number of matching records | **Count** |
| Total of a numeric field | **Sum** |
| Average of a numeric field | **Average** |
| Lowest value | **Min** |
| Highest value | **Max** |
| Results summarized by fields | **Group By** |

## Prefer the smallest result

If you only need to know whether a record exists, use **Exist Record** instead of fetching a list. If you need a count or total, use the corresponding aggregate mode instead of retrieving every record.

Check the output shape before connecting the result to another action: list results, single records, scalar aggregates, and grouped results are not interchangeable.

→ [Query Records]({{< relref "./" >}})  
→ [Query Filters]({{< relref "../../advanced-concepts/reference/query-filters/" >}})
