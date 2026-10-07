---
title: Document Action — Delete Record
description: Delete an existing Frappe document.
---

# Delete Record

**Delete Record** deletes the selected target document.

## Required setup

Select the Target DocType and provide the target record name.

The record name can come from the Rule Action Reference Document or supported configuration.

If the target does not exist, the action raises an error rather than silently treating the delete as successful.

## Result

Delete Record returns a boolean-style result indicating whether the deletion occurred.

The operation's result type is **Yes / No**.

## Permissions

Normal Frappe delete permission is enforced unless Ignore Permissions is deliberately enabled with its required audit reason.

## Use carefully

Deletion is destructive. Put a clear Condition before the action when deletion depends on business criteria, and verify the target record before enabling the rule.

## Common mistakes

- Supplying a target DocType without a target record.
- Assuming Delete Record is a soft-delete operation.
- Bypassing permissions without a documented reason.
