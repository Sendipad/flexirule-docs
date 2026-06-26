---
title: Query List
description: Finding multiple records for bulk processing or loops.
weight: 20
---

# Query List

**Query List** is used when you expect to find multiple records.

## How it Works
1.  **Filters**: Define criteria to find a set of records.
2.  **Result**: Returns a **List (Array)** of objects.
3.  **Looping**: Because the result is a list, you typically connect this node to a **Loop** node to perform actions on each individual record found.

## Example
**Scenario**: Find all "Overdue" Tasks for a Project.
- **DocType**: `Task`
- **Filters**: `project` = `doc.name` AND `status` = `Overdue`.
- **Return Variable**: `overdue_tasks`.

You can then loop over `vars.overdue_tasks` to send a reminder for each one.
