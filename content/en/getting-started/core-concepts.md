---
title: Core Concepts
weight: 60
description: "Learn the essential FlexiRule concepts: rules, triggers, actions, execution context, Smart Values, conditions, and lifecycle."
aliases:
  - /introduction/core-concepts/
---

# Core Concepts

You do not need to memorize every action before building a rule. Start with the concepts below: they explain when a rule runs, how its steps connect, where data comes from, and how to test changes safely.

## The big picture

```text
Trigger
  │
  ▼
Optional trigger condition
  │
  ▼
Rule flow on the canvas
  ├── Read data
  ├── Evaluate a Condition
  ├── Assign values or perform document operations
  └── Notify or run supported reusable logic
  │
  ▼
Result and available execution details
```

## Rule

A **Rule** is the automation definition. It brings together when the automation can run, the flow of action steps, and each step's configuration.

*Ask:* What business behavior should this rule implement?

## Trigger

A **Trigger** determines when a rule is eligible to run, such as a supported DocType event. Choose an event whose timing matches the business requirement; different lifecycle events can have different consequences.

*Ask:* When should this rule start?

## Trigger condition

A **Trigger Condition** is an optional early filter that determines whether the rule should start for a particular event or document. It is different from a **Condition** action inside the flow: the trigger condition gates entry, while a Condition action chooses what happens after the rule starts.

*Ask:* Should this event enter the rule at all?

## Action node and Action Type

An **action node** is a step on the canvas. Its **Action Type** defines the kind of work it performs. Depending on the installed version and configuration, actions may evaluate conditions, read records, assign values, perform document operations, notify users, or call supported reusable logic.

Choose an action by intent, not by a similar-sounding label. **Assignment** is for assigning a value; **Document Action** is for a supported operation on a document. They are not interchangeable.

*Ask:* What work should this step do?

See [Which action should I use?]({{< relref "../action-type/which-action.md" >}}).

## The canvas and connections

The canvas is the connected flow of action nodes. Connections describe which step can follow another and which branch is taken. A node's presence alone does not guarantee it will run; its position and connections matter.

*Ask:* Does the connected path match the intended business process?

## Execution context

The **execution context** is the data available while a rule runs. Depending on the trigger and runtime, it may include the current document as `doc`, the previous document state as `old_doc` when available, runtime variables as `vars`, and results produced by earlier actions.

A value should only be referenced where it is available. Do not assume a later action's result exists before that action runs.

*Ask:* What data is available at this point in the flow?

## Smart Values and value resolvers

**Smart Values** are the value-selection experience used to configure inputs. They help you select a field or supported dynamic value instead of manually guessing a reference. A **value resolver** is a supported mechanism for resolving a dynamic input at runtime.

Examples of common references include `@doc.grand_total` for a field on the current document and `@vars.some_name` for a runtime variable, where those references are supported in the relevant control. The exact choices depend on the input, runtime context, and installed version.

*Ask:* Where should this input come from, and will it be available when this action runs?

See [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}}).

## Condition and Switch

A **Condition** evaluates criteria and directs execution along an appropriate outcome, commonly a true/false branch. A **Switch** is intended for choosing among multiple cases when that action type is available and appropriate.

Use a Condition for a yes/no decision; consider Switch when the business decision is naturally expressed as several alternatives. Confirm the available action configuration in your installed version.

*Ask:* Is this a yes/no decision or a choice among multiple cases?

## Reading data versus changing data

These goals should be kept distinct:

- **Read/query records:** retrieve data that the rule needs for a decision or later step. Use the supported record-query action available in your version.
- **Assignment:** assign a value to a supported target, such as a runtime variable or eligible document field.
- **Document Action:** perform a supported operation on a document.
- **Notify:** send a configured message or alert.

A read action does not itself mean a document is changed. Likewise, assigning a value in the runtime context is not the same as performing a persistent document operation.

*Ask:* Am I retrieving information, assigning a value, or changing a document?

## Variables

**Variables** store intermediate values for reuse during a rule's execution. They are useful for holding a calculation or a result from an earlier step so that later steps can refer to it, where supported.

*Ask:* What result needs to be reused later in this rule?

## Testing and execution details

Use the available debug or simulation tools with representative inputs before activation. Test both sides of a decision, inspect the path and action outcomes, and resolve missing or invalid values. Available logs and trace details depend on the execution path and installation.

*Ask:* Does the rule behave correctly for both expected and unexpected inputs?

## Lifecycle and versioning

Rule lifecycle controls determine whether a rule can be edited, tested, or run automatically. Exact states and transitions can vary by installed version and site configuration. Follow the lifecycle controls shown by your installation rather than assuming every environment uses identical labels.

When changing an active rule, use the supported lifecycle or amendment process for your installation so changes are reviewed and tested before they affect live events.

*Ask:* Is this a draft I can test, or a live rule that can affect business data?

## Summary

| Concept | Main question |
|---|---|
| Rule | What business behavior should be automated? |
| Trigger | When is the rule eligible to start? |
| Trigger condition | Should this event enter the rule? |
| Action node / Action Type | What should this step do? |
| Canvas connections | Which step or branch runs next? |
| Execution context | What data is available now? |
| Smart Values / resolvers | Where does an input come from? |
| Condition / Switch | Which path should be selected? |
| Query action | What data needs to be read? |
| Assignment / Document Action | What value should be assigned, or what document operation should occur? |
| Variables | What intermediate result is reused later? |
| Testing and logs | Did the rule follow the expected path? |
| Lifecycle | Can the rule run live, and how should it be changed safely? |

## Continue learning

- [How FlexiRule Works]({{< relref "how-it-works.md" >}})
- [Build Your First Rule]({{< relref "first-rule.md" >}})
- [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
- [Choosing an action type]({{< relref "../action-type/which-action.md" >}})
- [Testing and debugging]({{< relref "../test-operate/debugging.md" >}})
