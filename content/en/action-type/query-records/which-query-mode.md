---
title: Which Query Mode Should I Use?
weight: 5
description: Choose the Query Records mode that matches the result your rule needs.
---

# Which Query Mode Should I Use?

Choose the mode from the result your next step actually needs.

| Need | Mode |
|---|---|
| Query Builder-based record retrieval | **Fetch Records** *(upcoming)* |
| Matching rows | **Query List** |
| One document | **Query Doc** |
| Only whether a match exists | **Exist Record** |
| Rows from a Frappe report | **Query Report** |
| Number of matching records | **Count** |
| Total of a field | **Sum** |
| Average of a field | **Average** |
| Lowest value | **Min** |
| Highest value | **Max** |
| Grouped summary | **Group By** |

## Fetch Records vs Query List

Use **Fetch Records** when you need the Query Builder-based implementation being developed on `refactor/query-records`. It is upcoming and should not be treated as available in the current release until that app branch is merged.

Use **Query List** for the current standard list-query path.

## Prefer the smallest result

If you only need to know whether a record exists, use **Exist Record** instead of fetching a list.

If you need a count or aggregate, use the corresponding mode instead of retrieving every record.

If you need one document, use **Query Doc** rather than Query List with a one-row limit.

## Important distinction

**Query List** and **Query Doc** are different result shapes. A list is a collection of rows; Query Doc resolves a single document.

**Query Report** executes a report and has report-level permission behavior.

**Group By** returns grouped rows with an aggregate value; it is not the same as Count.

## Related

- [Query Records]({{< relref "./" >}})
- [Query List]({{< relref "query-list.md" >}})
- [Query Doc]({{< relref "query-doc.md" >}})
