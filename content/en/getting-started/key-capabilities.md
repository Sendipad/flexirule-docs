---
title: Key Capabilities
weight: 50
description: Explore the core capabilities of FlexiRule and how they support configurable business automation.
aliases:
  - /introduction/key-capabilities/
---

# Key Capabilities

FlexiRule brings rule configuration, visual flow design, dynamic values, and execution inspection into one Frappe-native business-automation experience. The capabilities available to you depend on the installed version, permissions, and configuration.

## Visual rule design

Build a rule from connected action nodes. The canvas helps communicate the order of work and the branches that represent different business outcomes.

## Conditions and flow control

Use **Condition** actions to evaluate criteria and choose a path. Use other supported flow-control actions when a process requires repeated work or multiple outcomes. Keep decisions explicit so a reviewer can understand why the flow proceeds in a particular direction.

## Smart Values and dynamic inputs

Configure action inputs using the available value controls. Values may come from the current document, prior state where available, runtime variables, earlier action results, or supported resolvers. Selecting a value through the UI helps reduce mistakes caused by manually entering references that are unavailable at that point in the flow.

## Data access and document operations

Supported actions can retrieve records or perform configured document operations. Choose the action based on the goal—reading data, assigning a value, or performing a document operation are distinct tasks. Permissions and supported query or operation options still apply.

## Testing and execution visibility

Use the available debug or test tools to check representative scenarios before activation. Execution information can help you inspect the path and action outcomes, but it should be paired with careful test cases and review of side effects.

## Lifecycle and governance

Rule lifecycle controls and permissions help teams manage who can edit and activate business logic. Follow the lifecycle behavior of your installed version, and review activation requirements before a rule is allowed to affect live events.

## Extensibility alongside custom development

FlexiRule does not eliminate the need for developers. Custom apps remain responsible for technical capabilities such as new DocTypes, APIs, and integrations; supported rules can coordinate those capabilities around changing business policies.

## Explore a capability

- [How FlexiRule Works]({{< relref "how-it-works.md" >}})
- [Core Concepts]({{< relref "core-concepts.md" >}})
- [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
- [Choosing an action type]({{< relref "../action-type/which-action.md" >}})
- [Testing and debugging]({{< relref "../test-operate/debugging.md" >}})
