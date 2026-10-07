---
title: Query List
description: Retrieve a list of matching rows for use in later rule steps.
weight: 20
---

# Query List

**Query List** returns a collection of rows from the selected Target DocType.

## Configure

Select the Target DocType and configure the supported filters, fields, limit, ordering, and optional grouping exposed by the Query Records UI.

The current handler uses a default limit of 20 when a custom limit is not supplied. It also supports First Record and All limit modes.

## Output

Query List returns a list of records and its contract uses the **List of Records** result type.

Use [Loop]({{< relref "../loop.md" >}}) when the next step must process each returned item.

Use [Query Doc]({{< relref "query-doc.md" >}}) when the required result is one document.

## Example

**Query List → Loop → Condition → Document Action**

Filter the Query List to the records relevant to the business process, then let Loop process each row.

## Common mistakes

- Retrieving a large collection when Count or an aggregate would answer the business question.
- Assuming Query List returns one document.
- Assuming unsupported filter syntax is accepted; use the filter controls exposed by the current builder.
