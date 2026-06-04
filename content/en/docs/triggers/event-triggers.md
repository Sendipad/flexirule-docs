---
title: "Event Triggers"
weight: 10
---

# Event Triggers

Event triggers react directly to state changes within the Frappe DocType lifecycle.

## Document Events
These triggers hook into standard Frappe DocType events:
- **Before Insert / After Insert**: When a record is first created.
- **Before Save / After Save (on_update)**: When an existing record is modified.
- **On Submit / On Cancel**: For documents with workflow or formal submission.
- **On Trash**: When a record is deleted.

## Watched Fields
To optimize performance, you can specify **Watched Fields**. The rule will only trigger if one of these fields has been modified in the current transaction.

## Change Detection
Event triggers provide access to both `doc` (current state) and `old_doc` (previous state), allowing you to build conditions like:
```python
doc.status == "Approved" and old_doc.status != "Approved"
```
