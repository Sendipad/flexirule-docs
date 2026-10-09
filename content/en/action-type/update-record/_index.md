---
title: Document Action
description: Create, update, and delete other documents, or add linked ToDo tasks and timeline comments.
weight: 100
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType"]
---

# Document Action

**Document Action** performs a supported operation on a target Frappe document. Use it when a rule must create a separate record, update or delete an existing record, create a ToDo linked to the triggering document, or add a timeline comment.

This action was previously described in some places as **Update Record**. The current action type is **Document Action**; the selected **Document Mode** determines what it does.

## Choose a mode

| Mode | Use it for | Target DocType |
|---|---|---|
| [Create New](create-new.md) | Create a new record and populate its fields and child tables | The DocType you want to create |
| [Update Existing](update-existing.md) | Load an existing record, apply mapped field changes, and save it | The DocType of the existing record |
| [Delete Record](delete-record.md) | Permanently delete one specified record | The DocType of the record to delete |
| [Create ToDo](create-todo.md) | Create a task assigned to a user and linked to the current document | Must be ToDo |
| [Add Comment](add-comment.md) | Add a timeline comment to the current document | Must be Comment |

## Assignment or Document Action?

Use **Assignment** to change root-level fields on the document that triggered the rule, or to set rule variables. Use **Document Action** when the operation targets another document or creates a separate record or related item.

For example, setting the triggering Sales Invoice's internal note is an Assignment; creating a Project from that invoice is Document Action → Create New; updating a linked Sales Order is Document Action → Update Existing.

## Common configuration concepts

### Target DocType and target record

Select the target DocType in the action's Setup panel. Update Existing and Delete Record also need a record name, provided through the **Reference DocName** field or a configured document-name expression. A name expression is useful when the target record is determined at runtime—for example, from a field on the current document or a value stored in rule variables.

Create ToDo and Add Comment are specialized: they require the target DocType to be ToDo and Comment respectively, and link the created item to the current context document.

### Resource Mapper

Create New and Update Existing expose the **Resource Mapper** for mapping scalar fields and child-table rows. The builder supports Classic and Visual views. Mapping configuration is stored under the action config and compiled for runtime use.

- Scalar mappings assign source values to target fields.
- Static values explicitly set configured fields.
- Optional same-field copying maps matching field names from a source object, with exclusions available.
- Child-table mappings can source a collection, map fields per row, and configure row inclusion/filtering and whether existing target rows are reset.

When the same target field is supplied by more than one mapping source, review precedence carefully. For Create New, same-field values are applied first, dynamic field mappings next, and explicit static values last. Update Existing applies same-field values, static values, then dynamic field mappings.

### Input and output mapping

The action can receive input mappings that hydrate its configuration from the current execution context. Its operation returns a result to the rule engine; Create New and Update Existing return the saved document data, while Delete Record returns a deletion result. Create ToDo and Add Comment return the created record data.

Use the action's output/result settings and the rule's supported context-mutation options to make the result available to later actions. The available result type and mutation options depend on the selected mode; they are not interchangeable across all modes.

### Permissions and safety

Document Action normally follows Frappe permission checks. **Skip Permissions** is privileged and may only be used when the runtime's permission policy authorizes it; an audit reason is required. Do not use it as a routine workaround for permission errors.

Delete Record is destructive. Confirm the target DocType and record name, and test the rule with representative data before enabling it.

### Synchronous and asynchronous creation

Create New supports asynchronous creation where the action's async setting is enabled. In asynchronous mode the action enqueues creation and returns an acknowledgement, not the newly saved document. The background job runs separately, so later actions must not assume that the created document is already available in the current execution context.

## Troubleshooting

- **The target record is not found:** verify the target DocType and resolved document name.
- **A field remains unchanged:** inspect the Resource Mapper target field, source expression, static-value overrides, and mapping order.
- **Child rows are missing:** check the source collection, target table field, row mappings, and row inclusion/filter expressions.
- **Permission is denied:** verify the current user's permissions. Use Skip Permissions only where explicitly authorized and provide the required audit reason.
- **A later action cannot use the created document:** check the selected result type/mutation settings; for asynchronous Create New, the saved document is not returned synchronously.
- **A ToDo or Comment fails validation:** ensure the correct mode, required values, and a current context document are available.

## Mode guides

- [Create New](create-new.md)
- [Update Existing](update-existing.md)
- [Delete Record](delete-record.md)
- [Create ToDo](create-todo.md)
- [Add Comment](add-comment.md)

## Related guides

- [Which Action Should I Use?](../which-action.md)
- [Assignment](../assignment.md)
- [Query Records](../query-records/)
- [Document Action: Architecture Reference]({{< relref "../../advanced-concepts/architecture/actions/document-action.md" >}})
- [Document Action: Execution Semantics]({{< relref "../../advanced-concepts/reference/execution/document-action.md" >}})
