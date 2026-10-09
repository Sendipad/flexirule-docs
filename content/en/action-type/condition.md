---
title: Condition
description: Evaluate configured conditions and route execution through True or False paths.
weight: 20
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
---

# Condition

**Condition** evaluates configured logic and routes the rule through a True or False path. Older documentation called this action “Check”; use **Condition**, which matches the current application terminology.

## When to use it

Use Condition when a rule must answer a yes/no question, for example:

- Is the invoice total above the approval threshold?
- Does the triggering document have a required field?
- Does a query result contain the expected value?
- Does a current context variable meet a business requirement?

Use [Switch](switch.md) when you need to route among multiple configured value cases rather than evaluate a true/false condition.

## How it works

Condition evaluates the configured condition structure against the current execution context. The result determines which outbound path is followed:

```text
                  ┌── True  ──→ matching path
Condition ────────┤
                  └── False ──→ alternative path
```

Connect the branch that represents each outcome. If a branch is not connected, execution has no configured next action on that path.

## Configure it

1. Add **Condition** to the canvas.
2. Configure the condition group using the controls available in the condition editor.
3. Select the left operand, comparison operator, and right operand where required.
4. Use nested groups when the business rule requires grouped AND/OR logic and the editor supports that structure.
5. Connect the True and False outputs to the intended next actions.
6. Save and test both outcomes with representative documents.

The available operators and value modes depend on the condition editor and field types. Choose fields and values from the actual controls; do not assume every operator applies to every data type.

## Values and comparisons

Condition operands may reference document fields, context variables, or supported dynamic values exposed by the shared value/condition controls. A value that looks numeric but is stored as text can compare differently from a numeric value. Check empty/null values explicitly when they are possible, and verify the result in Debug.

For more detail on constructing nested groups, see the [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}}) and [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}}).

## Common mistakes

- **Using the old name:** search for and configure **Condition**, not “Check.”
- **Wrong branch connection:** test both true and false cases and verify each path reaches the intended step.
- **Type mismatch:** compare values of compatible types.
- **Empty values:** add a suitable empty/not-empty check where supported rather than relying on an implicit conversion.
- **Assuming collection operators:** use only collection operations exposed by the current editor and verify them with real test data.

## Related guides

- [Which Action Should I Use?](which-action.md)
- [Switch](switch.md)
- [Assignment](assignment.md)
- [Query Records](query-records/)
- [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}})
- [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
