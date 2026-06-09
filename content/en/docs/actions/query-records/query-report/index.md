---
title: "Query Report"
description: "Executing existing system reports and retrieving their results."
type: docs
---

# Query Report Mode

The **Query Report** mode allows your rule flow to leverage the complex logic already defined in your Frappe/ERPNext Reports.

## Purpose
Use Query Report when the data you need requires complex processing (SQL joins, Python scripts) that is already implemented as a system Report. This avoids duplicating logic in your rule flow.

## Configuration

- **Report Name**: Select any Report available in your system.
- **Report Filters**: Once a report is selected, its native filters will appear in the configuration panel. You can map these filters to fixed values or context variables.

## Output Structure
Query Report returns a complex object that includes both the column metadata and the data rows.

```json
{
  "columns": [
    {"label": "Item Code", "fieldname": "item_code", "fieldtype": "Link", "options": "Item"},
    {"label": "Quantity", "fieldname": "qty", "fieldtype": "Float"}
  ],
  "result": [
    {"item_code": "ITEM-001", "qty": 10.5},
    {"item_code": "ITEM-002", "qty": 5.0}
  ]
}
```

## Consuming Report Data
If the report is stored in a variable named `vars.my_report`, you can access the data using the following paths in downstream nodes:

- **All Data Rows**: `vars.my_report.result` (a list of dictionaries).
- **First Row**: `vars.my_report.result[0]`
- **Specific Value**: `vars.my_report.result[0].item_code`
- **Metadata**: `vars.my_report.columns` (the list of column definitions).

## Performance Notes
Running a report can be a resource-intensive operation depending on the report's complexity. If a report takes a long time to run in the standard UI, it will also take a long time to run within a rule flow. Consider using a specific [**Query List**]({{< relref "docs/actions/query-records/query-list" >}}) if you only need basic data.
