---
title: Delete Record
description: Delete one specified existing Frappe document with permission checks.
weight: 30
---

# Document Action: Delete Record

Choose **Delete Record** when the rule must permanently delete one existing record. This mode is destructive: it does not search for a set of records or automatically iterate over a query result.

## Configure it

1. Add a **Document Action** node.
2. Set **Document Mode** to **Delete Record**.
3. Select the target **Reference DocType**.
4. Set **Reference DocName** in the Setup panel, or configure a Docname Expression that resolves to the record name.
5. Review permissions and the rule's trigger conditions carefully.
6. Test with a safe record before activating the rule.

The resolved name must identify an existing record of the selected DocType. If no name is provided, the handler raises an error. If the target does not exist, deletion fails rather than silently reporting success.

## Example

**Scenario:** delete a temporary draft record when a parent workflow is cancelled.

- **Document Mode:** Delete Record
- **Reference DocType:** the DocType of the temporary record
- **Reference DocName:** resolve the exact linked record name from the triggering document or a rule variable.
- **Guard:** use a separate Condition or a valid trigger condition to ensure the deletion is appropriate.

Always verify that the expression returns one document name. Do not pass a whole document object or an unreviewed list of names.

## Result and permissions

On success, the action returns a result containing the deletion flag, DocType, and deleted record name. The operation's return type is fixed to **Yes / No** in its action contract; it does not return the deleted document's full contents.

The handler checks delete permission for the target record unless **Skip Permissions** is enabled and authorized by the runtime permission policy. Skip Permissions is a privileged option and requires an audit reason. The target record must exist before the delete operation runs.

## Safety checklist

- Confirm the exact DocType and record name.
- Ensure the rule cannot match unintended records or repeatedly delete a replacement record.
- Test the name expression and rule conditions before activation.
- Review Frappe permissions and downstream hooks that may run on deletion.
- Use Query Records only to find data; this mode itself deletes one explicitly resolved record and does not perform bulk deletion automatically.

## Troubleshooting

- **Record name is required:** configure Reference DocName or a Docname Expression that resolves to a non-empty name.
- **Record does not exist:** check the target DocType and resolved name.
- **Permission denied:** grant the appropriate delete permission or use Skip Permissions only if the runtime policy authorizes it and an audit reason is provided.
- **Wrong record was targeted:** disable the rule, inspect the name expression and source variable, and add a stronger guard before re-enabling.
