---
title: Query Records
weight: 10
description: Find and retrieve data from other parts of your system.
---

# Query Records

The **Query Records** blocks allow your rule to look up information that isn't directly on the document that triggered the rule.

For example, if a Sales Order is saved, you might want to:
- Look up the customer's total outstanding balance.
- Find the last 5 items this customer purchased.
- Check if there is an active promotion for a specific warehouse.

## Available Query Blocks

### [Find One Record]({{< relref "query-doc.md" >}})
Used when you need to find a specific, single record (like a specific Customer or a Settings document).

### [Find Many Records]({{< relref "query-list.md" >}})
Used when you need to find a list of records (like all "Open" Tasks for a project or all "Active" Employees in a department).
