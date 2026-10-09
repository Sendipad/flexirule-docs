---
title: Assignment
description: Set supported document or context values using the assignment grid.
weight: 80
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType", "Context Variable"]
---

# Assignment

**Assignment** applies configured value operations to supported targets in the current rule context. The current application terminology is **Assignment**; it has replaced the older “Set Value” label in the documentation.

## When to use it

Use Assignment to set or calculate a supported document field or context variable, or to apply another operator exposed by the current assignment grid. Use [Document Action]({{< relref "update-record/" >}}) when the task is a separate document operation such as creating, updating, or deleting a target record.

## Configure the assignment grid

1. Add **Assignment** to the canvas.
2. Add a row in the assignment grid.
3. Select the target using the target picker. Confirm whether it is a field on the current document or a context variable.
4. Choose an operator offered for that target. Available operators depend on the target type and the current contract; do not assume every operator applies to every target.
5. Configure the value using the value control. Choose a static value or a supported dynamic value/resolver mode offered by that control.
6. If the row exposes a condition, configure it when the assignment should only apply under that condition.
7. Save and debug the rule, checking the target and resulting value.

## Important distinctions

| Need | Use |
|---|---|
| Set a value in the current rule context | Assignment |
| Read related records | [Query Records]({{< relref "query-records/" >}}) |
| Create, update, or delete a separate target document | [Document Action]({{< relref "update-record/" >}}) |
| Branch execution based on a condition | [Condition](condition.md) |

The assignment grid applies rows in the order configured. A later row may depend on a value established by an earlier row. If a conditional row is skipped, do not assume it initialized its target.

## Values and variables

Use the shared value control to select a supported static or dynamic value. The actual modes depend on the field and control, so use the picker rather than assuming every input accepts every resolver or expression format. See the [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}}).

## Permissions and limitations

Assignment does not replace Frappe's document lifecycle or permission model. Whether a document field can be changed depends on the rule event, document state, field metadata, and runtime behavior. In particular, updating a submitted or otherwise restricted document may require a separate supported document operation rather than an assignment to the triggering document.

## Troubleshooting

- **Wrong target:** choose the field through the target picker and confirm its context path.
- **Unexpected value:** inspect the selected value mode and test the row in Debug.
- **A later action sees an empty variable:** check whether the row that assigns it was conditional or whether its execution path was reached.
- **A field is not updated:** confirm that the target is writable in the current event and document state.

## Related guides

- [Which Action Should I Use?](which-action.md)
- [Condition](condition.md)
- [Query Records](query-records/)
- [Document Action]({{< relref "update-record/" >}})
- [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
