---
title: Switch
description: Route execution by matching a configured value against cases.
weight: 30
---

# Switch

**Switch** provides multi-way routing.

It evaluates the configured switch value/expression and selects the matching case.

## Configuration

Switch requires its configuration payload and uses **SwitchConfig**.

The configuration contains the value/expression to evaluate and the configured cases. A default path can be provided for values that do not match an explicit case.

## When to use it

Use Switch when one value determines which of several known paths should execute.

Examples include priority, status, or category values.

Use [Condition]({{< relref "condition.md" >}}) for boolean or compound logical questions.

## Important behavior

Switch does not use the Condition Action Type's True/False contract. Its routing comes from the configured case structure.

## Common mistakes

- Building a long chain of Conditions for simple value-to-case routing.
- Treating cases as arbitrary boolean expressions.
- Omitting deliberate default behavior for unmatched values.
