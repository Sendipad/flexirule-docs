---
title: How FlexiRule Works
weight: 20
description: Understand the flow from trigger to conditions, actions, outputs, and execution.
---

# How FlexiRule Works

FlexiRule turns a business policy into a visual rule that can be configured, tested, and executed consistently.

## The execution model

A typical rule follows this mental model:

**Trigger → optional trigger condition → actions → branches/loops → outputs**

1. **Trigger** defines when the rule is eligible to run.
2. **Trigger conditions** reject irrelevant events before the action flow starts.
3. **Actions** perform decisions, reads, assignments, updates, notifications, or other supported operations.
4. **Branches and loops** control which parts of the flow execute.
5. **Outputs and variables** make results available to later steps.
6. **Execution logs** record live activity for operational inspection.

## What you see is what executes

The canvas is the primary representation of the rule flow. Connections determine execution paths, while each action's configuration determines the inputs and behavior of that step.

This is why FlexiRule separates:

- **Rule configuration** — when and where the rule can run.
- **Canvas flow** — the order and branching of execution.
- **Action settings** — what each step does.
- **Smart values** — where each input comes from.
- **Testing** — what happens when the rule is simulated before production use.

## FlexiRule and custom code

FlexiRule is a declarative business-logic layer. It does not replace all custom development.

Use a rule when the policy is best represented as configurable business behavior. Use custom Frappe/Python development when the requirement needs application-specific technical logic, complex integrations, or capabilities not exposed by supported actions and processes.

## Continue

- [Core Concepts]({{< relref "core-concepts.md" >}})
- [Build Your First Rule]({{< relref "first-rule.md" >}})
- [Build Rules]({{< relref "../rule-builder/" >}})
