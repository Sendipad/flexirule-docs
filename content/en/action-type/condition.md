---
title: Condition
description: Evaluate configured conditions and route execution through True or False.
weight: 20
aliases:
  - /docs/action-type/condition/
---

# Condition

**Condition** is FlexiRule's boolean decision Action Type.

The older documentation label **“Check”** is not the current Action Type name.

## What it does

Condition has two outbound paths:

- **True** — the configured condition evaluates to true.
- **False** — the configured condition evaluates to false.

## Configuration

Condition requires its configuration payload and uses the **ConditionStep** UI.

The configuration is a condition tree. The Rule Builder validates the tree and the backend can use the compiled condition expression generated from that configuration.

Use the Condition Builder for nested logical groups rather than treating the node as a free-form text check.

## When to use it

Use Condition for boolean or compound logical questions.

Use [Switch]({{< relref "switch.md" >}}) for case-based routing among several values.

## Execution

True and False are independent visual paths. Either path may end naturally if no next action is connected.

## Common mistakes

- Calling the node **Check**.
- Replacing the condition tree with an assumed free-form expression.
- Forgetting that True and False are separate execution paths.

## Related

- [Which Action Should I Use?]({{< relref "which-action.md" >}})
- [Switch]({{< relref "switch.md" >}})
- [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}})
