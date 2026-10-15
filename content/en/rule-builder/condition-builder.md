---
title: Condition Builder
description: Build, combine, and validate visual conditions in FlexiRule.
weight: 60
---

# Condition Builder

The **Condition Builder** lets you express business logic with field comparisons, nested **AND / OR** groups, and collection checks—without writing a condition expression by hand.

The same editor is reused in several places, including the **Condition** action, a Rule's **Entry Condition**, conditional Assignment rows, and collection-value filters. The available fields, whether a condition is required, and the effect of a false result depend on where you open it.

![Condition Builder rule configuration panel]({{ "images/condition-builder-panel.png" | relURL }})

## Build a condition

A simple condition compares a left-hand value with an operator and, when required, a right-hand value.

1. Select the **field or reference** on the left.
2. Choose an available **operator**.
3. Set the **value** on the right, if the operator needs one.

For example:

```text
Grand Total > 100000
```

The field picker offers choices for the current editor context. Depending on that context, these can include document fields, context references, variables, or fields scoped to a collection row. Use the picker to select a supported reference rather than assuming every field is available in every editor.

The right-hand value control supports the value types offered in that context. Use a value appropriate for the selected field and operator. For example, compare a numeric field with a number and a Link field with an appropriate linked value.

### Operators depend on the field

FlexiRule loads operator metadata from the backend when available and uses frontend defaults as a fallback. Consequently, the exact list depends on the field type and configuration.

Common operator families include:

- **Equality:** equals and does not equal.
- **Ordering:** greater than, less than, and inclusive variants where supported.
- **Membership:** is in / is not in a list.
- **Text or collection checks:** contains / does not contain where supported.
- **Value-state checks:** is set, is not set, is empty, or is not empty where available.

Some operators do not require a right-hand value. For those operators, configure the comparison itself rather than looking for a second input. Always use the choices shown by the editor; not every operator is valid for every field type.

## Combine conditions with groups

A group combines its child conditions using one logical operator:

- **AND** — every child must be true.
- **OR** — at least one child must be true.

Choose **AND** or **OR** for the root group, then use **Group** to add a nested group when part of the expression needs a different operator.

For example, suppose a high-value order needs approval when the customer is a VIP and either the order total is high or its priority is urgent:

```text
AND
├── Customer Group equals "VIP"
└── OR
    ├── Grand Total > 100000
    └── Priority equals "Urgent"
```

This means:

```text
Customer Group = "VIP"
AND
(Grand Total > 100000 OR Priority = "Urgent")
```

A nested group is a logical grouping, not a collection iteration. The builder provides **AND** and **OR** groups; it does not expose a general NOT-group toggle. Where appropriate, use a supported inverse operator and test the resulting behavior.

## Check items in a collection

Use **Collection** when you need to evaluate a condition against rows in a child table or another supported collection. This is different from adding an ordinary nested group.

Configure the collection condition by:

1. Selecting the collection source offered by the field picker.
2. Keeping or editing the row **alias** used to refer to the current item.
3. Adding conditions inside the collection's **where** group.
4. Selecting row fields using the alias-scoped field options.

For example, a child-table condition can conceptually ask whether **any** item has a quantity greater than zero. Inside the collection's **where** condition, select the row's quantity field—not the parent document's quantity field.

The Condition Builder collection node supports the **any** and **all** quantifiers:

- **Any** — the condition is true if at least one item matches.
- **All** — the condition is true if every item matches.

The source and row fields available depend on the document and editor context. A variable can be used as a collection only when the context exposes it as a supported collection.

> **Collection condition vs. Collection value resolver:** a Collection condition returns a logical result based on **any / all**. The separate Collection value resolver can perform other operations, such as counting rows, finding a row, filtering, or aggregating values. See [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}) for value resolvers.

## Available controls

| Control | Purpose |
| --- | --- |
| **AND / OR** | Choose how the current group's children are combined. |
| **Condition** | Add a field comparison to the selected group. |
| **Group** | Add a nested logical group. |
| **Collection** | Add a collection check with a row alias and nested **where** conditions. |
| **Remove** | Remove a condition, group, or collection node. |
| **Drag and drop** | Move or reorder nodes within the tree. A group cannot be moved into itself or one of its descendants. |

The builder may be read-only in some contexts. When editing is disabled, controls are hidden or disabled.

## Where the builder is used

The visual editor is shared, but the runtime meaning depends on its host:

### Condition action

The **Condition** action evaluates the configured condition and routes the flow through its **True** or **False** output. Add the action, configure a valid condition, connect both paths intentionally, then test both outcomes.

![Action card showing inline condition branching preview]({{ "images/action-card-condition-preview.png" | relURL }})

See [Condition action]({{< relref "action-type/condition.md" >}}).

### Rule Entry Condition

The Entry Condition is an **execution gate**. FlexiRule checks it before running the rule's configured actions. If it evaluates to false, the rule's actions do not start. An empty entry condition can be allowed; this differs from a Condition action, which requires a condition.

See [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}).

### Conditional Assignment

An Assignment row can have a **Run If** condition. If no condition is configured, the row is shown as **Always Run**. If a condition is configured, it determines whether that assignment row should run. This does not replace the Assignment's target, operator, or value configuration.

See [Assignment]({{< relref "action-type/assignment.md" >}}) and [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}).

## Validation and troubleshooting

Before saving or activating a rule:

- Ensure every condition has a valid field and operator.
- Supply a right-hand value when the chosen operator requires one.
- Make sure each nested group contains a condition; empty groups are invalid.
- For a collection condition, select a collection source and add at least one condition to its **where** group.
- Check that field references and values are available in the editor's context, especially inside a collection alias.
- Test representative true and false cases, including missing or empty values where relevant.

If a saved condition does not behave as expected, confirm which host uses it: an Entry Condition prevents the rule from starting, a Condition action selects a branch, and an Assignment Run If condition controls a single assignment row. Then save the rule, review validation or execution errors, and test the expected paths.

## Related guides

- [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}})
- [Adding Actions]({{< relref "rule-builder/add-action.md" >}})
- [Condition action]({{< relref "action-type/condition.md" >}})
- [Assignment]({{< relref "action-type/assignment.md" >}})
- [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}})
