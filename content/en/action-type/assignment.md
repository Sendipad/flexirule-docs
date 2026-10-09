---
title: Assignment
description: Set or transform values on the current document or rule variables using ordered assignment rows.
weight: 80
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Current Document Field", "Rule Context Variable"]
---

# Assignment

**Assignment** applies one or more value operations to the current rule context. Configure an ordered list of rows; each row selects a target, an operator, a value when required, and optionally a **Run If** condition.

Use Assignment when a rule needs to set a field, calculate a value, update a rule variable, or transform a supported value. It is the current action name; older documentation may call this “Set Value,” but that is no longer the action type name.

## When to use Assignment

| Goal | Use |
|---|---|
| Set or calculate a field on the document that triggered the rule | Assignment |
| Store an intermediate result for later actions | Assignment targeting a `vars.*` variable |
| Increase/decrease a numeric value or toggle a Check field | Assignment with the matching operator |
| Create, update, or delete a separate document | [Document Action]({{< relref "update-record/" >}}) |
| Read records before using their values | [Query Records]({{< relref "query-records/" >}}) |
| Choose which execution path to follow | [Condition](condition.md) |

Assignment is not a general-purpose create/update/delete action for arbitrary documents. Its document target is the **current document** in the rule context; use Document Action for operations on a separate target document.

## Configure an assignment row

1. Add an **Assignment** action to the rule canvas.
2. Add a row to the assignment grid.
3. Under **Run If**, optionally configure a condition. Leave it unset when the row should run every time the action is reached.
4. Select the **Target Field**. Targets must be in the current document scope (`doc.*`) or rule-variable scope (`vars.*`).
5. Choose an **Operator** that is appropriate for the target field type.
6. If the operator requires an operand, configure **Value Expression** with the value control. Use a static value or one of the dynamic modes offered by the control.
7. Arrange rows in the intended order, then save and test the rule in Debug.

The grid supports adding, removing, and reordering rows. The order matters: each row reads the target's current value when it runs, so later rows can use the result of earlier rows.

## Operators

The available operators are supplied by the operator registry and may be filtered by the target field type in the UI. The current backend registry includes:

| Operator | What it does | Target considerations |
|---|---|---|
| **Set Value** (`set`) | Replaces the current value with the resolved operand | General-purpose; operand required |
| **Clear** (`clear`) | Clears the value without an operand | Lists become empty lists, objects become empty objects, strings become empty strings, and other values become `None` |
| **Increment By** (`increment`) | Adds the operand to the current value | Numeric field types: Int, Float, Currency, Percent |
| **Decrement By** (`decrement`) | Subtracts the operand from the current value | Numeric field types: Int, Float, Currency, Percent |
| **Append To List** (`append`) | Appends the operand to a list | Table and Table MultiSelect targets |
| **Merge Object** (`merge`) | Merges operand keys into the existing object; operand keys overwrite matching keys | JSON, Code, and Text targets; operand must resolve to an object/dictionary |
| **Toggle Boolean** (`toggle`) | Switches a boolean-like value between enabled and disabled | Check targets; no operand required |

For operators with a type restriction, use the target picker and operator list rather than assuming an operator is valid for every field. If an operand is required, its resolved type must also suit the operation. For example, Merge Object requires an object/dictionary, while Increment By and Decrement By require numeric values.

## Target paths and supported scope

- **`doc.fieldname`** targets a root-level field on the document that triggered the rule.
- **`vars.name`** targets a rule context variable. Nested variable paths such as `vars.summary.total` can be created through intermediate dictionaries.
- System paths such as `meta.*`, `frappe.*`, `rule.*`, and `caller.*` are protected and cannot be Assignment targets.
- Deep document paths such as `doc.customer.address` are not supported by the current runtime. Assignment to document fields is limited to root-level fields.
- Assignment does not produce a separate result object. To pass an intermediate value to later actions, assign it to a `vars.*` variable and reference that variable in the later action.

## Values and dynamic expressions

The value control supports static and structured dynamic values, with the exact choices depending on the field/control. Dynamic values are resolved by FlexiRule's shared value resolver. Use the available picker/configuration UI instead of assuming every value mode or expression syntax is valid in every input.

See the [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}}) for supported value patterns and configuration guidance.

## Conditional rows: Run If

A row can include a **Run If** condition. If that condition evaluates to false, the row is skipped and the next assignment row is evaluated. A skipped row does not initialize or clear its target. If a later row depends on a value from an earlier row, make sure the earlier row is guaranteed to run or provide a safe default.

The condition belongs to the assignment row; it is not the same as a separate [Condition action](condition.md), which routes the rule through True and False execution paths.

## Execution and document lifecycle

Assignment processes configured rows sequentially and updates the current execution context. It does not by itself create another document or call a separate document operation. Changes to the current document participate in the rule's surrounding Frappe event/lifecycle behavior.

Some event phases restrict mutation of the triggering document. The runtime blocks `doc.*` assignment for configured after-event mutation-restricted events. If a document field does not change as expected, check the trigger event, document state, target path, and runtime logs. Use Document Action when the required operation is a supported action on a separate document.

## Troubleshooting

- **The row does not run:** inspect its **Run If** condition and confirm the action path reaches Assignment.
- **The target is rejected:** ensure it starts with `doc.` or `vars.`; use a root-level `doc.fieldname` for document fields.
- **An operator is missing or fails:** check the target field type and choose an operator supported for that type.
- **A numeric operation fails:** confirm the current value and operand are numeric.
- **Merge Object fails:** make sure the operand resolves to an object/dictionary and the current value is either an object or empty.
- **A later action sees an empty variable:** verify the assignment row ran, its target uses `vars.*`, and its value resolved as expected.
- **A document field is not updated:** verify the rule event allows mutation and that you are assigning a field on the triggering document—not trying to modify another document.

## Related guides

- [Which Action Should I Use?](which-action.md)
- [Condition](condition.md)
- [Query Records](query-records/)
- [Document Action]({{< relref "update-record/" >}})
- [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
