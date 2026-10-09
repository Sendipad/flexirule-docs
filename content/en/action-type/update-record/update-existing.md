---
title: Update Existing
description: Update a selected existing Frappe document using field and child-table mappings.
weight: 20
---

# Document Action: Update Existing

Choose **Update Existing** to load an existing target record, apply configured changes, and save it. Only the fields you map are intentionally changed; unmapped scalar fields are left as they were, except fields affected by document validation, hooks, or other Frappe behavior.

## Configure it

1. Add a **Document Action** node.
2. Set **Document Mode** to **Update Existing**.
3. Select the target **Reference DocType**.
4. Identify the target record using **Reference DocName** in Setup, or configure a Docname Expression that resolves to the target record's name at runtime.
5. Configure scalar and child-table mappings in the Resource Mapper.
6. Choose the available updated-document result handling settings.
7. Save and test the rule against a known record before activation.

The record name must resolve to a valid existing document of the selected DocType. A source document or query result can provide that name, but make sure the expression resolves to the document's name—not the entire record object.

## Field mapping behavior

- **Copy same fields** can optionally copy eligible matching field names from a source object. The source defaults to the current document; source path and excluded fields can be configured.
- **Static values** explicitly set fields.
- **Dynamic field mappings** resolve source expressions/paths and assign the result to target fields.
- **Child-table mappings** can rebuild or append mapped rows depending on the table mapping options.

For the same scalar target field, the handler applies same-field copies first, static values next, and dynamic field mappings last. A dynamic mapping can therefore override a static value for the same target field. Avoid mapping the same target from multiple sources unless this precedence is intentional.

When mapping child tables, inspect **Reset Value** and **Add If Empty** carefully. Reset Value defaults to enabled; if enabled, existing rows are cleared before mapped rows are appended. Add If Empty skips the mapping when rows already exist.

## Example

**Scenario:** update a linked Project when a Task is completed.

- **Document Mode:** Update Existing
- **Reference DocType:** Project
- **Reference DocName:** resolve the linked Project's document name from the current Task or a rule variable.
- **Field mapping:** set the desired Project field to the appropriate value.
- **Child table mapping:** configure only if the Project's child table needs to change.

Confirm that the target record exists and the current user has write permission. Frappe's save validation and document hooks still run.

## Result handling

The operation returns the updated document data. The selected result type and mutation mode control how the result is exposed to later steps; the current operation contract offers Single Record and Full Document result types and context mutation options, subject to the UI's effective policy.

## Permissions and lifecycle behavior

The handler checks write permission unless Skip Permissions is explicitly enabled and authorized by the runtime permission policy. An audit reason is required for the privileged bypass. Saving the target document triggers normal Frappe validation and save hooks. If another FlexiRule rule listens to the same DocType/event, guard against unintended recursive execution.

## Troubleshooting

- **Target not found:** verify Reference DocType and the resolved document name.
- **No changes saved:** inspect source expressions, mapping precedence, and whether the target field is actually mapped.
- **Existing child rows disappeared:** check Reset Value; it is enabled by default for configured child-table mappings.
- **Permission or validation error:** check write access, required fields, and target DocType validation.
- **Rule repeats unexpectedly:** check whether saving this DocType triggers another rule and add an appropriate guard.
