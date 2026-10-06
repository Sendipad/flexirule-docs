---
title: Start (Entry Action)
description: The starting root node on every visual rule canvas.
weight: 10
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Rule Execution Context"]
aliases:
  - /docs/actions/entry/
---

# Start Node

The **Start** node is the mandatory starting point of every visual rule canvas. It initializes rule data when a triggering event occurs and directs execution to your first action node.

---

## 1. What is it?

Every rule canvas begins with a Start node. It represents the entry point when a rule is triggered (such as when a document is saved or submitted). It makes document data (`@doc`), historical pre-event data (`@old_doc`), variables (`@vars`), and system context (`@system`) available to all downstream actions.

```
Start (Event Trigger) ──→ Check / Set Value / Query Records
```

---

## 2. How it Works

- **Automatic Presence**: The Start node is created automatically whenever you create a new rule. It cannot be deleted.
- **No Manual Configuration**: It requires no manual configuration settings on the canvas.
- **Outbound Edge**: Connect its outbound port directly to your rule's first action (such as a **Check** or **Query Records** block).

---

## 3. Available Data Provided at Start

When execution begins at the Start node, the following context data is made available through the **Smart Value Selector**:

| Category | Description |
| :--- | :--- |
| **Document Fields (`@doc`)** | The current values of the document that triggered the rule. |
| **Previous Values (`@old_doc`)** | Document values prior to the current save/update (useful for change tracking). |
| **System Info (`@system`)** | Active session user, timestamp, and company information. |
| **Variables (`@vars`)** | Temporary rule variables available for storage throughout execution. |

---

## 4. Practical Example

1. **Trigger Event**: Set rule header trigger to `Sales Invoice` on `Before Save`.
2. **Start Node**: Automatically initializes with form field values when a user clicks Save.
3. **First Connection**: Connect the Start node's outbound port directly to a **Check** or **Set Value** block.

---

## 5. Related Features

- [Rule Lifecycle]({{< relref "test-operate/rule-lifecycle.md" >}}): Understand how triggers initiate rule execution.
- [Canvas]({{< relref "rule-builder/canvas.md" >}}): Learn how to build visual flows starting from the Start node.

---

## 6. Developer & Technical Details

For graph traversal bootstrapping and context initialization mechanics:
- [Entry Action Architecture Reference]({{< relref "advanced-concepts/architecture/actions/entry.md" >}})
