---
title: Start (Entry Action)
description: The entry root node of every visual rule execution graph.
weight: 5
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Rule Execution Context"]
aliases:
  - /docs/actions/entry/
---

# Start (Entry Action) Action

The **Start** node (internal handler: `simple_actions.EntryActionHandler`) serves as the immutable root node of every visual rule canvas. It initializes runtime context (`@doc`, `@old_doc`, `@vars`, `@system`) when a rule is triggered.

---

## 1. When to Use

- Automatically present as the mandatory starting node on every rule canvas.
- Serves as the anchor point from which execution graph connections begin.

---

## 2. Configuration

- **Automatic Initialization**: Requires no manual configuration.
- **Fast Trigger Filters**: Trigger filters (`watched_fields` and `trigger_condition` JSON) configured on the Rule header evaluate before loading the Start node.

---

## 3. Output

- **Context Payload**: Exposes `@doc` (trigger document), `@old_doc` (pre-event state), `@vars` (initialized context dictionary), and `@system` (session user/time).
- **Execution Path**: Directs execution down its primary outbound connection edge.

---

## 4. Example

1. **Trigger Event**: `Sales Invoice` `Before Save`.
2. **Start Node**: Initializes `@doc` with current form data.
3. **Outbound Port**: Connects directly to **Check** or **Query Records** block.

---

## 5. Performance Notes

- **Zero Latency**: Context pointer binding occurs instantly in $O(1)$ time upon rule instantiation.

---

## 6. Common Mistakes

- **Attempting to Delete Start Node**: The Start node is mandatory and cannot be deleted from the rule canvas.
- **Confusing Trigger Condition with Check Node**: Putting complex multi-node branching into trigger conditions instead of connecting a **Check (Condition)** node after Start.
