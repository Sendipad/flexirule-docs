---
title: Create New Record
weight: 10
description: Create a new document in the system.
---

# Create New Record

Use this block to automatically create a new document when your rule runs.

## Examples
- Create a **Follow-up Task** for a salesperson when a new Lead is created.
- Generate a **Payment Entry** after an Invoice is submitted.
- Create a **Log Entry** for auditing purposes.

## Configuration

1. **DocType**: Select the type of record to create (e.g., "Task").
2. **Field Mapping**: Tell FlexiRule how to fill in the fields of the new record.
   - Example: Set `Subject` to "Follow up with {{ doc.customer_name }}".
   - Example: Set `Priority` to "Medium".
3. **Alias**: Give the newly created record a name (e.g., `new_task`) so you can refer to it in later blocks (for example, to send its ID in an email).

## Options
- **Ignore Permissions**: Check this if the rule should be able to create the record even if the user who triggered the rule doesn't have direct permission to create that DocType.
- **Run Standard Logic**: If checked, the system will run all the standard Frappe/ERPNext logic (like default values and validation hooks) for the new document.
