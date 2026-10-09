---
title: Create ToDo
description: Create a task assigned to a user and linked to the current document.
weight: 40
---

# Document Action: Create ToDo

Choose **Create ToDo** to create a Frappe ToDo assigned to a user and linked to the document currently in the rule execution context. This is a specialized operation; it is not a general-purpose way to create arbitrary DocTypes.

## Configure it

1. Add a **Document Action** node.
2. Set **Document Mode** to **Create ToDo**.
3. Confirm the target DocType is **ToDo**.
4. Set **Assigned To** to a user value, a rule variable, or an expression, depending on the selected input mode.
5. Configure the required **Description**. You may also set **Priority**.
6. Save and test the rule with a user who can receive the task.

The runtime requires both Assigned To and Description to resolve to non-empty values. Priority defaults to **Medium** when no value is supplied.

## How the link is created

The handler links the new ToDo to the current context document using its DocType and name. It does not use the selected Reference DocName to choose an unrelated record. A current context document must therefore be available when the action executes.

## Example

**Scenario:** assign a follow-up task when a Sales Invoice is submitted.

- **Document Mode:** Create ToDo
- **Reference DocType:** ToDo
- **Assigned To:** the responsible user, either selected directly or resolved from a variable/expression
- **Description:** a clear instruction, optionally rendered with values from the current document and rule variables
- **Priority:** choose Low, Medium, or High, or leave the default

## Result and permissions

The action inserts a ToDo and returns its created document data. The operation contract uses a Single Record result and does not expose the usual result-type selector for this mode.

Normal permission behavior applies unless **Skip Permissions** is enabled and authorized by the runtime permission policy. The bypass is privileged and requires an audit reason. The target DocType must remain ToDo.

## Troubleshooting

- **Assigned To is empty:** verify the selected Value, Variable, or Expression mode and the value it resolves to.
- **Description is empty:** provide a non-empty description.
- **The action rejects the target DocType:** set Reference DocType to ToDo.
- **No task is linked:** ensure a current context document exists when the rule runs.
