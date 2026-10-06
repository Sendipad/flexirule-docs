---
title: Building Rules
weight: 10
description: Follow the complete Rule Builder workflow from configuration through a tested flow.
---

# Building Rules

Use this page as the end-to-end map for building a FlexiRule automation.

## Build sequence

### 1. Define the entry point

Configure the rule's target and trigger so you know exactly when it is eligible to run.

→ [Rule Configuration]({{< relref "rule-configuration.md" >}})

### 2. Design the flow

Use the canvas to place nodes, connect paths, and keep the execution flow readable.

→ [Canvas]({{< relref "canvas.md" >}})

### 3. Choose actions

Select the action that matches the business operation instead of starting from an implementation detail.

→ [Actions]({{< relref "../action-type/" >}})

### 4. Configure each step

Select an action node and configure its inputs, options, and outputs.

→ [Action Settings]({{< relref "action-settings.md" >}})

### 5. Supply dynamic values

Use document fields, rule variables, supported commands, and visual value resolvers.

→ [Smart Values]({{< relref "smart-value-system.md" >}})

### 6. Add decisions and repetition

Use conditions, switches, and loops when the flow needs branching or repeated work.

### 7. Test the complete flow

Debug the rule against representative documents before activating it.

→ [Testing & Debugging]({{< relref "../test-operate/debugging.md" >}})

### 8. Operate safely

Activate, disable, amend, and archive rules according to the lifecycle.

→ [Rule Lifecycle]({{< relref "../test-operate/rule-lifecycle.md" >}})

## The core principle

Build rules so another person can understand the business policy by looking at the canvas and opening each action's configuration. Avoid relying on hidden implementation knowledge when the same behavior can be expressed explicitly in the supported builder.
