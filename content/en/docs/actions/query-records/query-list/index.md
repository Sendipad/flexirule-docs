---
title: "Query List"
description: "Fetching multiple records matching specific criteria."
type: docs
---

# Query List Mode

The **Query List** mode is used to retrieve a collection of records from a DocType. It is the foundation for workflows that need to iterate over sets of data.

## Purpose
Use Query List when you need to find multiple documents to process, such as "all draft invoices" or "all items in a specific warehouse."

<video src="/flexirule-docs/images/query-records-query-list-features.webm" controls></video>

## Configuration

### Parameters
- **Fields**: Select which fields to retrieve for each record. Selecting only necessary fields improves performance.
- **Order By**: Define the sorting of the results (e.g., `creation desc`).
- **Limit**:
    - **First Record**: Returns only the most relevant record.
    - **Custom Limit**: Defaults to 20.
    - **All**: Fetches all matching records (use with caution).
- **Group By**: (Optional) Groups the underlying SQL query by a specific field.

## Output Structure
Returns a list of objects.

```json
[
  { "name": "SO-2024-001", "status": "Draft", "grand_total": 500.0 },
  { "name": "SO-2024-005", "status": "Draft", "grand_total": 1250.0 }
]
```

## Best Practices
- **Always use filters**: Avoid fetching the entire table.
- **Process with Loop**: Use a [Loop Action]({{< relref "docs/actions/loop" >}}) to perform operations on each item in the returned list.
- **Index heavily filtered fields**: Ensure that the fields you use in filters are indexed in the database for optimal speed.

## Common Mistakes
- **Expecting a single object**: Even if only one record is found, Query List returns a list (e.g., `[record]`). Access the first item via `vars.my_list[0]`.
