---
title: Actions
weight: 30
description: Choose and configure the actions available in the FlexiRule Rule Builder.
---

# Actions

An **Action** is a step in a FlexiRule flow. Each node has a canonical **Action Type**, a configuration contract, and defined execution behavior.

> **Source of truth:** the installed FlexiRule application is authoritative for Action Type names, operations, required fields, configuration, and runtime behavior.

## Available Action Types

| Action Type | Purpose |
|---|---|
| **Entry Action** | Start the rule flow. |
| **Condition** | Evaluate conditions and choose the True or False path. |
| **Switch** | Route execution among configured cases. |
| **Loop** | Repeat a connected flow for items in a collection. |
| **Wait** | Pause execution for a configured duration. |
| **Stop** | End execution successfully or with the Error terminal mode. |
| **Raise Error** | Raise an execution/validation error with a rendered message. |
| **Sub-Rule** | Invoke another rule exposed as a sub-rule. |
| **Assignment** | Apply configured assignments to document/context targets. |
| **Query Records** | Read records, reports, existence, counts, aggregates, or grouped data. |
| **Document Action** | Create, update, delete, create a ToDo, or add a comment. |
| **Notify** | Send Toast, System, Email, System Notification, or Provider notifications. |
| **Process** | Execute a registered Process operation. |

Start with [Which Action Should I Use?]({{< relref "which-action.md" >}}) if you know the business outcome but not the right Action Type.

## Categories

### Flow control

- [Entry Action]({{< relref "entry-action.md" >}})
- [Condition]({{< relref "condition.md" >}})
- [Switch]({{< relref "switch.md" >}})
- [Loop]({{< relref "loop.md" >}})
- [Wait]({{< relref "wait.md" >}})
- [Stop and Raise Error]({{< relref "stop-error.md" >}})
- [Sub-Rule]({{< relref "sub-rule.md" >}})

### Data and documents

- [Assignment]({{< relref "assignment.md" >}})
- [Query Records]({{< relref "query-records/" >}})
- [Document Action]({{< relref "document-action/" >}})

### Communication and extensibility

- [Notify]({{< relref "notify/" >}})
- [Process]({{< relref "process.md" >}})

## Terminology

The application uses **Action Type** as the registry/configuration concept. Documentation uses **Action** when discussing the node users add to the canvas, but the exact Action Type names above should be preserved.

Older labels such as **Set Value**, **Check**, **Update Record**, and **Advanced Process** are not the current Action Type names.
