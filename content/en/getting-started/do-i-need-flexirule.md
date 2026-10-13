---
title: Do I need FlexiRule?
weight: 30
description: Decide whether a requirement belongs in FlexiRule, a standard Frappe feature, or custom application code.
aliases:
  - /introduction/do-i-need-flexirule/
---

# Do I need FlexiRule?

FlexiRule is most useful when a business policy changes over time and the team needs to understand, test, and maintain the logic without tracing it through several unrelated code paths. It is not necessary for every automation.

## A quick decision guide

| Your requirement | A sensible starting point |
|---|---|
| A straightforward approval or validation policy | Consider a standard Frappe workflow or feature first; use FlexiRule if the decision logic needs more flexibility or visibility. |
| A business rule changes frequently | FlexiRule may help make the policy easier to adjust and test. |
| A decision depends on several fields, related records, or multiple branches | FlexiRule can make the decision flow explicit, if supported actions cover the requirement. |
| A process needs readable, inspectable execution steps | Consider FlexiRule and its testing and execution-inspection tools. |
| You need a new DocType, API integration, or application capability | Build the capability in a custom app; FlexiRule may orchestrate it where supported. |
| The logic is tiny, stable, and already easy to maintain | Existing Frappe functionality or a small, well-tested customization may be simpler. |

## FlexiRule is a strong candidate when…

### Business policy changes regularly
Examples include approval thresholds, customer-specific rules, discount eligibility, and escalation criteria. A visual rule can make the policy easier to review when requirements change.

### The decision spans multiple steps
When a process reads data, evaluates conditions, follows different paths, and performs follow-up actions, a connected flow can be easier to understand than logic scattered across hooks.

### You need to explain why a result occurred
A visible rule definition and available execution information can help a team investigate which decisions and steps were involved. Logging and trace detail depend on the configuration and execution path; do not treat them as a substitute for testing.

### Business and technical responsibilities should be separated
Developers can implement reusable capabilities while administrators or functional owners maintain supported business policies within the permissions and governance of the installation.

## When another approach may be better

- **Use standard Frappe features** when a Workflow, permission rule, notification, or existing setting already solves the problem cleanly.
- **Use custom code** when the requirement needs complex algorithms, external integrations, new data models, or technical behavior not exposed by supported actions.
- **Keep the existing solution** when it is small, stable, well-tested, and inexpensive to maintain. Moving it only to use a new tool may add needless complexity.

## A useful rule of thumb

Choose FlexiRule when the logic is **policy-driven, likely to change, and easier to govern as a visible flow**. Choose custom development when you are building technical capabilities. Many solutions benefit from both.

Before committing to an approach, prototype one representative rule on a development or test site. Verify that the required trigger, action types, values, permissions, and expected side effects are supported.

## Related guides

- [What is FlexiRule?]({{< relref "what-is-flexirule.md" >}})
- [FlexiRule and custom code]({{< relref "better-than-hard-coded.md" >}})
- [Key capabilities]({{< relref "key-capabilities.md" >}})
- [Quick Start]({{< relref "quick-start.md" >}})
