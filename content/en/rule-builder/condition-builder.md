---
title: Condition Builder
description: Learn how to create visual logical condition groups in FlexiRule.
weight: 60
---

# Condition Builder

The **Condition Builder** lets you define business logic as structured conditions instead of writing an expression by hand. It is used by the **Condition** action and other configuration flows that accept a condition tree, such as supported query filters.

A condition tree contains comparison rows and nested groups. The visual editor configures the tree; the backend evaluates the saved and compiled condition.

![Condition Builder rule configuration panel]({{ "images/condition-builder-panel.png" | relURL }})

## 1. Build a condition row

A condition row has three parts:

1. **Field / left operand** — select a document field or context reference from the field picker. Available options depend on where the builder is used.
2. **Operator** — choose a comparison supported for the selected field type.
3. **Value / right operand** — enter a static value or configure a supported dynamic value using the value control.

For example, an approval rule might compare **Grand Total** with `100000`. Operators and inputs are field-aware: not every operator is available for every field type, and operators such as **Is Set** or **Is Not Set** do not need a right-hand value.

The application can supply operator choices from backend configuration, with frontend defaults as a fallback. Use the options actually displayed by the editor rather than assuming every operator is available in every context.

## 2. Choose values

The value control uses FlexiRule's shared structured-value system. Depending on the editor context, you may be able to choose a literal value, a reference, or a supported resolver.

Examples of references used in FlexiRule include:

- `@doc.grand_total` — a value from the current document.
- `@vars.calculated_total` — a rule variable, when exposed in that context.
- `@system.today` — system context, when available.
- Resolver values configured through the value control.

These examples are context-dependent, not a guarantee that every reference or resolver is available in every Condition Builder. The left operand uses the field picker; the right operand uses the value control.

See [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}).

## 3. Combine conditions with groups

Each group combines its children using one logic operator:

- **AND** — every child condition or nested group must evaluate to true.
- **OR** — at least one child condition or nested group must evaluate to true.

Use **Group** to add a nested AND/OR group. For example:

`Customer Group = "VIP" AND (Grand Total > 100000 OR Priority = "Urgent")`

The visual group controls expose **AND** and **OR**; they do not provide a general **NOT group** toggle. If you need negated logic, use a supported inverse comparison where appropriate and test the result.

### Collection conditions

The builder also provides a **Collection** control. A collection condition evaluates a nested `where` condition against items in a collection, using an alias for the current row. This differs from simply nesting an AND/OR group. Use it only when you need to test items in a child or related collection and configure it using the available controls.

## 4. Available controls

- **AND / OR** — select the logic for the current group.
- **Condition** — add a comparison row.
- **Group** — add a nested AND/OR group.
- **Collection** — add a collection-based condition with a nested `where` group.
- **Remove** — remove a row, group, or collection condition.
- **Drag and drop** — reorder or move items in the condition tree. A group cannot be moved into itself or one of its descendants.

Some embedding contexts may be read-only, in which case editing controls may be hidden or disabled.

## 5. Example: high-value VIP approval

**Goal:** require manager approval when the customer is a VIP and either the order exceeds the threshold or its priority is urgent.

1. Set the root group to **AND**.
2. Add a row: **Customer Group** equals `VIP`.
3. Add a nested **OR** group.
4. Inside the nested group, add:
   - **Grand Total** greater than `100000`
   - **Priority** equals `Urgent`

Conceptually:

```text
AND
├── Customer Group equals "VIP"
└── OR
    ├── Grand Total > 100000
    └── Priority equals "Urgent"
```

Use values that match each field's type. Test both true and false cases with representative data, including unset values where relevant.

## 6. Condition action and execution paths

The **Condition** action evaluates its saved condition and routes execution through its **True** or **False** connection. Configure both paths intentionally and test both outcomes. The backend evaluates the compiled condition; if a saved configuration is not reflected at runtime, save the rule again and inspect validation or execution errors.

![Action card showing inline condition branching preview]({{ "images/action-card-condition-preview.png" | relURL }})

See the [Condition action]({{< relref "action-type/condition.md" >}}) for branching behavior and troubleshooting, and [Which Action Should I Use?]({{< relref "action-type/which-action.md" >}}) to choose the right action.
