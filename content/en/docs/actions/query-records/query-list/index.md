---
title: Query List
description: Fetching multiple records matching specific criteria.
weight: 10
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

## Filters
Filters are the most critical part of a Query List. They define which records are retrieved.

### Dynamic Date Formulas
FlexiRule allows you to filter datasets dynamically based on rolling time windows using the formula builder. This is especially useful for fetching records relative to the current date without hardcoding specific dates.

For example, you might want to find "all Sales Invoices created in the last 7 days" or "all Tasks due by the end of next month." Instead of writing complex SQL or code, you can use the guided UI to create these calculations.

![Date Formula Configuration](/flexirule-docs/images/date-formula-configuration.png)

Common calculations include:
- **Rolling Windows**: "10 days from now" or "30 days ago."
- **Calendar Bounds**: "Last day of current month" or "Start of next quarter."
- **Reference Dates**: Calculating dates relative to a field value (e.g., `doc.posting_date + 15 days`).

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
