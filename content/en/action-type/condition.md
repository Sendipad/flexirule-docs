---
title: Condition
description: Evaluate a configured logical condition and route execution through True or False paths.
weight: 20
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
---

# Condition

**Condition** evaluates a configured logical rule and chooses the **True** or **False** execution path. Older documentation called this action “Check”; the current action name is **Condition**.

Use it when a business rule needs a yes/no decision. For multiple configured value cases, consider [Switch](switch.md).

## When to use Condition

Typical examples include:

- Continue an approval flow only when an invoice exceeds a threshold.
- Check whether a required field is populated.
- Test a value returned by a previous Query Records action.
- Check whether a context variable meets a business requirement.
- Decide whether the current item in a Loop should follow one path or another.

If the rule should not start at all unless a condition is true, consider the rule's **Entry Condition** instead. An Entry Condition is evaluated before configured actions begin; when it is false, execution terminates without running those actions. An in-flow Condition is a separate action that branches execution after the rule has started.

## How execution branches

Condition evaluates the saved configuration using its compiled expression. The result selects the corresponding outbound connection:

```text
                  ┌── True  ──→ actions for a matching condition
Condition ────────┤
                  └── False ──→ actions for an unmet condition
```

Connect both outcomes intentionally. If a path has no next action connected, there is no configured downstream step for that outcome.

## Configure a Condition

1. Add **Condition** to the canvas.
2. Open its configuration and build the logical condition.
3. For each row, choose the left-hand field/context reference, a supported operator, and a right-hand value when the operator requires one.
4. Use nested **AND / OR** groups when the logic requires them. The current Condition Builder also offers a **Collection** control for collection-based checks; this is different from an ordinary nested group.
5. Connect the **True** and **False** outputs to the intended next steps.
6. Save the rule and test representative cases that should produce both outcomes.

The exact field options, operators, and dynamic value choices depend on the context and field type. Use the options displayed by the editor rather than assuming every operator applies to every field.

For the full editor walkthrough, see [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}}).

## Example: manager approval threshold

Suppose an invoice needs manager review when its total is greater than 100,000:

- Condition: `Grand Total > 100000`
- **True** path: continue to the manager-approval step.
- **False** path: continue to the standard approval path.

For combined business rules, nest groups—for example, require that the customer is a VIP **AND** (the total is above the threshold **OR** the priority is urgent).

## Values and comparisons

Condition operands can use fields and context values available in the builder. The right-hand value control can offer static or structured/dynamic values depending on context.

Keep operand types compatible. A number stored as text may not behave like a numeric value, and empty values should be handled deliberately. Use supported set/unset operators where appropriate, then verify the result with realistic test data.

## Common mistakes

- **Using the old name:** choose **Condition**, not “Check.”
- **Reversing the branches:** confirm which connection handles True and which handles False.
- **Assuming an Entry Condition is the same as an in-flow Condition:** an Entry Condition gates the rule before actions start; a Condition action branches within the flow.
- **Using the wrong value type:** compare compatible values and test empty/null cases.
- **Expecting an automatic fallback:** connect both paths if both outcomes need downstream behavior.
- **Changing configuration without recompiling:** the backend expects configured conditions to be compiled when the rule is saved. If configuration exists but the compiled expression is missing, re-save/compile the rule before testing.

## Related guides

- [Which Action Should I Use?](which-action.md)
- [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}})
- [Switch](switch.md)
- [Assignment](assignment.md)
- [Query Records](query-records/)
- [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
