---
title: Condition Builder
description: Build and validate nested ALL/ANY condition groups with field-aware operators and dynamic values.
weight: 60
---

# Condition Builder

The **Condition Builder** lets you express a business rule as structured conditions instead of writing a Python expression by hand. It is used by the **Condition** action and is also embedded in other configuration flows that need a condition tree, such as collection filters.

A condition tree is made from comparison rows and nested groups. The saved structure is compiled for evaluation by the backend; the visual editor is the configuration interface, not the runtime evaluator itself.

![Condition Builder rule configuration panel]({{ "images/condition-builder-panel.png" | relURL }})

## 1. Build a condition row

A basic row has three parts:

1. **Field / left operand** — choose a field or context reference from the available field picker, such as `doc.grand_total`. The options depend on the context where the builder is opened.
2. **Operator** — choose a comparison supported for the selected field type. The operator list is supplied by backend configuration when available, with frontend defaults as a fallback.
3. **Value / right operand** — enter a static value or configure a supported dynamic value using the value control. The control adapts to field type and operator.

For example, an invoice approval condition could compare `Grand Total` with `100000`. Operators and value inputs are **field-aware**: not every operator is available for every field type, and some operators (such as `is set` / `is not set`) do not require a right-hand value.

Common operator labels include equality and inequality, numeric/date comparisons, list membership, text matching, and set/unset checks. The exact available choices depend on the field and the operator configuration loaded by the application; use the choices shown in the editor rather than assuming every operator is universal.

## 2. Choose values

The right-hand value control supports the shared structured-value system. Depending on the context and available options, you may be able to use a literal value or a dynamic reference/resolver rather than hard-coding a value.

Examples of value references used elsewhere in FlexiRule include:

- `@doc.grand_total` — a document value
- `@vars.calculated_total` — a rule/context variable, when exposed in that editor
- `@system.today` — system context, when available
- Resolver values configured through the value control

The options presented are context-dependent. Do not assume every reference or resolver is available in every Condition Builder embedding. The left operand is selected through the field picker; the right operand uses the value control.

For background, see the [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}).

## 3. Combine conditions with groups

Each group has a logic operator:

- **AND** — every child condition/group must evaluate as true.
- **OR** — at least one child condition/group must evaluate as true.

Use **Group** to nest another AND/OR group. Nested groups let you express rules such as:

`Customer Group = "VIP" AND (Grand Total > 100000 OR Priority = "Urgent")`

The current visual group controls expose **AND** and **OR**. They do not expose a general **NOT group toggle**, so do not document or rely on a NOT button in this UI. If a rule needs negated logic, express it with a supported inverse comparison/operator where possible, and test the resulting rule.

### Collection conditions

The builder also has a **Collection** control. A collection condition evaluates a nested `where` condition against rows in a collection, with an alias for the current row. This is different from simply nesting an AND/OR group: use it when the rule needs to test items within a child/related collection. Configure the collection and its nested conditions using the controls shown in the editor.

## 4. Available controls

- **AND / OR** — select the logic for the current group.
- **Condition** — add a comparison row to the current group.
- **Group** — add a nested AND/OR group.
- **Collection** — add a collection-based condition with its own nested `where` group.
- **Remove** — remove a row, group, or collection condition.
- **Drag and drop** — move rows/groups within the condition tree. A group cannot be moved into itself or one of its descendants.

Some embedding contexts may present the builder in read-only mode. In that case, editing controls are disabled or hidden.

## 5. Example: high-value VIP approval

**Goal:** require manager approval when the customer is a VIP and either the order is above the threshold or the priority is urgent.

1. Set the root group to **AND**.
2. Add a row: `Customer Group` **equals** `VIP`.
3. Add a nested **OR** group.
4. Inside that group, add:
   - `Grand Total` **greater than** `100000`
   - `Priority` **equals** `Urgent`

Conceptually:

```text
AND
├── Customer Group equals "VIP"
└── OR
    ├── Grand Total > 100000
    └── Priority equals "Urgent"
```

Choose values that match the field's type, and test both the true and false cases with representative data. Empty or incompatible values can change the result; use explicit set/unset comparisons when appropriate.

## 6. Condition action and execution paths

The **Condition** action evaluates its saved condition configuration and routes execution through the **True** or **False** connection. Configure both paths intentionally and test both outcomes. The backend uses the compiled condition expression; if configuration exists but compilation is missing, the rule needs to be saved/compiled again.

![Action card showing inline condition branching preview]({{ "images/action-card-condition-preview.png" | relURL }})

See [Condition action]({{< relref "action-type/condition.md" >}}) for branch behavior and troubleshooting, and [Which Action Should I Use?]({{< relref "action-type/which-action.md" >}}) for choosing the right action.
