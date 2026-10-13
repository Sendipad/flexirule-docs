---
title: Build Your First Rule
weight: 50
description: Learn the complete rule-building workflow, from defining a business outcome to testing and activating a visual rule.
---

# Build Your First Rule

This tutorial explains how to turn a business requirement into a rule you can understand, test, and maintain. It focuses on the reasoning behind each step so you can apply the same method to your own process.

## Start with the business outcome

Before opening the builder, write down the behavior in one sentence.

**Example:** “When a Sales Invoice exceeds the review threshold, notify the finance reviewer.”

Identify three things:

- **When should it run?** The trigger and event.
- **What decision should it make?** The condition and its inputs.
- **What should happen next?** The action for each outcome.

If you cannot describe the expected behavior clearly, clarify the business requirement before configuring the rule.

## 1. Configure the rule

Open RuleFlow and create a Rule. Give it a name that describes its purpose, then choose the appropriate trigger type, target DocType when applicable, event, and execution settings.

Do not copy a trigger event from an example without checking its timing. For instance, a validation rule and a post-submit rule serve different purposes.

See [Rule Configuration]({{< relref "../rule-builder/rule-configuration.md" >}}).

## 2. Sketch the flow

Before adding details, outline the steps:

```text
Entry
  │
  ▼
Condition: invoice total exceeds threshold?
  ├── Yes → Notify finance reviewer
  └── No  → No additional action
```

Treat this as a planning sketch, not a promise that every installation displays identical node names or branch labels. The connected nodes and configured action settings define the actual flow.

## 3. Add and connect the action steps

Use the Action Palette or a supported insertion point to add a **Condition** and a **Notify** action. Connect the nodes so the notification follows only the matching branch.

If the task is different, select actions by intent rather than by name alone. [Which action should I use?]({{< relref "../action-type/which-action.md" >}}) compares common business goals and the corresponding action types.

See [Adding Actions]({{< relref "../rule-builder/add-action.md" >}}).

## 4. Configure inputs with Smart Values

For the Condition, select the invoice's grand total as the left value, choose **greater than**, and provide the threshold as the right value. Use the Smart Value controls to select fields and supported dynamic values instead of manually guessing references.

Configure the notification using only values available to that action. A value produced by a later step cannot be assumed to exist earlier in the flow.

See [Action Settings]({{< relref "../rule-builder/action-settings.md" >}}) and [Smart Values]({{< relref "../rule-builder/smart-value-system.md" >}}).

## 5. Test the decision, not just the happy path

Run the available debug or simulation tools with representative documents. Test one invoice above the threshold and one below it, then inspect the path and action results.

Confirm that:

- The expected branch is selected for each input.
- The condition uses the intended field and operator.
- The notification action receives the expected values.
- Errors or missing values are resolved before activation.

See [Testing and Debugging]({{< relref "../test-operate/debugging.md" >}}).

## 6. Review and activate

Before activation, confirm the trigger, permissions, execution mode, and all side effects. Follow any approval process configured by your installation. Active rules can affect live events, so do not use production activation as your first test.

See [Rule Lifecycle]({{< relref "../test-operate/rule-lifecycle.md" >}}).

## What you learned

You have followed the core rule-building cycle:

1. Describe the desired business outcome.
2. Choose when the rule should run.
3. Make the decision visible as a Condition.
4. Connect the appropriate action.
5. Configure inputs with Smart Values.
6. Test both outcomes and review results.
7. Activate only after verification.

## Next steps

- [Core Concepts]({{< relref "core-concepts.md" >}})
- [Rule Builder guide]({{< relref "../rule-builder/_index.md" >}})
- [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}})
- [Choosing an action type]({{< relref "../action-type/which-action.md" >}})
