---
title: Build Your First Rule
weight: 50
description: A guided path from rule configuration to a tested visual flow.
---

# Build Your First Rule

This tutorial introduces the complete rule-building workflow without assuming prior FlexiRule experience.

## 1. Configure the rule

Open the Rule Builder and configure:

- Rule name
- Trigger type
- Target DocType when applicable
- Trigger event
- Execution mode and other execution settings

See [Rule Configuration]({{< relref "../rule-builder/rule-configuration.md" >}}).

## 2. Add the first action

Use the Action Palette or an action insertion point to add the step that represents your business operation.

See [Adding Actions]({{< relref "../rule-builder/add-action.md" >}}).

## 3. Configure inputs

Select the action and configure its fields in Action Settings. Use Smart Values when an input should come from the triggering document, a previous result, or a supported resolver.

See [Action Settings]({{< relref "../rule-builder/action-settings.md" >}}) and [Smart Values]({{< relref "../rule-builder/smart-value-system.md" >}}).

## 4. Add decisions when needed

Use a Condition action when the flow needs different paths. Keep the business decision visible on the canvas rather than hiding it in an opaque expression.

See [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}}).

## 5. Test before activation

Run a debug simulation with representative documents. Inspect the execution path, step results, and returned values.

See [Testing & Debugging]({{< relref "../test-operate/debugging.md" >}}).

## 6. Activate deliberately

After testing, follow the lifecycle rules for your installation. Active rules can affect live document events, so confirm the trigger, permissions, side effects, and expected results before activation.

See [Rule Lifecycle]({{< relref "../test-operate/rule-lifecycle.md" >}}).
