---
title: Add Comment
description: Add a timeline comment to the current document.
weight: 50
---

# Document Action: Add Comment

Choose **Add Comment** to add an entry to the timeline of the document currently available in the rule execution context. This specialized mode creates a Frappe Comment linked to that current document; it does not target an arbitrary unrelated record.

## Configure it

1. Add a **Document Action** node.
2. Set **Document Mode** to **Add Comment**.
3. Confirm the target DocType is **Comment**.
4. Configure the required **Comment Text**.
5. Choose a **Comment Type** if needed; the default is **Comment**.
6. Save and test the rule to confirm the expected timeline entry is created.

The Comment Text must resolve to a non-empty value. The handler links the new Comment to the current context document's DocType and name, so a context document must be available.

## Comment types

The configuration UI offers these comment types:

- **Comment**
- **Info**
- **Edit**
- **Workflow**

Choose the type that best represents the timeline entry. Use concise, meaningful content and avoid putting sensitive information into a timeline comment unless the target document's visibility and access rules are appropriate.

## Example

**Scenario:** add an explanatory note when a Sales Order enters a special processing path.

- **Document Mode:** Add Comment
- **Reference DocType:** Comment
- **Comment Type:** Info or Comment, depending on the meaning
- **Comment Text:** a static note or a template using available current-document and rule-variable values

## Result and permissions

The action inserts a Comment and returns its created document data. The operation contract uses a Single Record result; the result-type selector is not shown for this mode.

Normal permission behavior applies unless **Skip Permissions** is enabled and authorized by the runtime permission policy. The bypass is privileged and requires an audit reason. The target DocType must be Comment.

## Troubleshooting

- **Comment Text is empty:** provide a non-empty value that resolves at runtime.
- **The action rejects the target DocType:** set Reference DocType to Comment.
- **The comment is linked to the wrong record or not linked:** confirm the intended document is the current rule context document.
- **No timeline entry appears:** inspect the action execution log, permission checks, and any validation error from Frappe.
