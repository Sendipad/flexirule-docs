---
title: Actions
weight: 30
description: Explore FlexiRule actions, choose the right operation, and configure it with confidence.
---

# Actions

Actions are the steps a rule performs after its trigger starts execution. They can evaluate a decision, read records, assign values, change documents, send notifications, call reusable logic, or end a path.

A rule's **trigger** determines when execution starts. A **Condition** evaluates a question and routes execution down a True or False path. An **action** performs the next operation on the selected path. These concepts work together, but they are not interchangeable.

## Start here

- **Choosing an action?** Use the [Which Action Should I Use?](which-action.md) decision guide.
- **Working with values?** Learn the [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}) and how static and dynamic values are selected.
- **Need to read records?** Start with [Query Records](query-records/), then choose a [query mode](query-records/which-query-mode.md).
- **Building a decision?** See [Condition](condition.md) and [Switch](switch.md).
- **Need to change a document?** Compare [Assignment](assignment.md) with the available operations under [Document Action]({{< relref "action-type/update-record/" >}}).

## Action catalog

### Decisions and flow control

| Action | What it does | Use it when |
|---|---|---|
| [Condition](condition.md) | Evaluates configured conditions and exposes True/False paths. | The flow must branch on a yes/no question. |
| [Switch](switch.md) | Routes execution using configured cases. | One value may match one of several cases. |
| [Loop](loop.md) | Repeats a connected path for supported collection items. | Each row or returned record needs processing. |
| [Wait](wait.md) | Defers supported work according to its configuration. | A supported rule flow needs a wait step. |
| [Stop / Error](stop-error.md) | Ends a path or raises a configured error. | Stop execution deliberately or reject an operation. |
| [Sub-Rule](sub-rule.md) | Calls another reusable FlexiRule rule. | Shared visual rule logic should be reused. |

### Data and documents

| Action | What it does | Use it when |
|---|---|---|
| [Assignment](assignment.md) | Applies configured assignments to document fields or context values. | Set or calculate values within the current rule context. |
| [Query Records](query-records/) | Reads records or runs one of its supported query modes. | A rule needs data beyond its current context. |
| [Document Action]({{< relref "action-type/update-record/" >}}) | Performs supported document operations such as create, update, and delete. | A separate document must be changed or an operation performed on it. |

### Communication and reusable logic

| Action | What it does | Use it when |
|---|---|---|
| [Notify](notify/) | Sends a configured notification. | A user or team should be informed. |
| [Process](process.md) | Runs a configured Process operation. | The required operation is provided by a registered process. |

This catalog describes the action families documented in this section. The actual options available in a rule depend on the installed FlexiRule version, registered handlers, selected operation, execution context, and permissions.

## Configure an action

1. Add the action to the rule canvas.
2. Choose its operation or mode when the action supports more than one.
3. Select the required DocType, fields, values, or other inputs.
4. Configure any optional filters, conditions, result handling, or permissions shown by that action's panel.
5. Connect the action's available output path or paths to the next step.
6. Save and use the rule builder's debugging tools to inspect the actual result before activating the rule.

The configuration panel is contract-driven for many action fields: the backend publishes action and operation metadata for the frontend. Not every field applies to every operation, so follow the controls visible for the selected mode rather than copying options from another mode.

## Static and dynamic values

Many value inputs support a static value or a dynamic value chosen through FlexiRule's shared value controls. Dynamic values can depend on the current document, context variables, or supported resolver/expression modes. The modes available depend on the specific control and field; do not assume every input accepts every value form.

See the [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}) for how to choose and inspect values. For query filters, use the filter editor supplied by the selected query mode.

## Permissions and execution context

Actions execute in the context of a rule run. The current document, configured variables, user, and execution mode can affect what data is available and which operations are allowed.

Some data/document actions expose a **Skip Permissions** option. This is a privileged permission bypass, not a general performance setting; the application enforces additional checks and an audit reason for supported actions. Keep normal permission checks enabled unless there is an approved reason to bypass them. See the specific action guide for its actual behavior.

## Feature maturity

A visible option is not a promise that every query shape or edge case is supported by the current Frappe version. **Fetch Records** is a newer Query Records mode and is documented separately from legacy modes. Its filter, field, sorting, and pagination behavior is delegated to Frappe's Query Builder compatibility layer; review its limitations and test representative data before relying on it.

## Next steps

- [Which Action Should I Use?](which-action.md)
- [Query Records](query-records/)
- [Fetch Records](query-records/fetch-records.md)
- [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}})
- [Rule Builder]({{< relref "rule-builder/" >}})
