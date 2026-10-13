---
title: Getting Started
weight: 10
description: Discover how FlexiRule turns business policies into visual, testable rules for Frappe and ERPNext, then build and test your first rule.
---

# Getting Started

**Turn a business rule into a flow you can understand, test, and maintain.**

FlexiRule helps you express business policies as visual rules in Frappe and ERPNext. Instead of spreading every changing policy across scripts and hooks, you can bring supported decisions and actions into a rule flow that your team can inspect, test, and maintain.

You do not need to learn every action or setting before you start. Follow the path below to understand the basics, then build a small rule on a development or test site.

## Your learning path

<div class="grid-2">

{{< card title="1. Understand FlexiRule" href="getting-started/what-is-flexirule/" icon="compass" >}}
Learn what FlexiRule is designed to solve, how it fits into a Frappe application, and where it complements standard features and custom code.
{{< /card >}}

{{< card title="2. See how a rule runs" href="getting-started/how-it-works/" icon="workflow" >}}
Trace a rule from its trigger through its conditions and actions, and see how the configured flow determines what happens next.
{{< /card >}}

{{< card title="3. Learn the essentials" href="getting-started/core-concepts/" icon="layers" >}}
Get familiar with rules, triggers, actions, execution context, variables, and Smart Values—the building blocks you will use in the editor.
{{< /card >}}

{{< card title="4. Decide when to use it" href="getting-started/do-i-need-flexirule/" icon="check-circle" >}}
Choose the right tool for the job: FlexiRule, a standard Frappe feature, or custom development, based on the behavior you need.
{{< /card >}}

{{< card title="5. Create your first rule" href="getting-started/quick-start/" icon="rocket" >}}
Get hands-on with the essential workflow: configure a rule, add a condition and action, test the result, and understand activation.
{{< /card >}}

{{< card title="6. Follow the guided tutorial" href="getting-started/first-rule/" icon="graduation-cap" >}}
Build step by step and learn why each configuration choice matters—not just which controls to click.
{{< /card >}}

</div>

## Choose your starting point

- **New to FlexiRule?** Start with [What is FlexiRule?]({{< relref "what-is-flexirule.md" >}}), then follow the learning path.
- **Ready to try it?** Open the [Quick Start]({{< relref "quick-start.md" >}}) and build a small rule in a safe development or test environment.
- **Unsure whether it fits your use case?** Read [Do I need FlexiRule?]({{< relref "do-i-need-flexirule.md" >}}) before designing your solution.
- **Confused by values or execution context?** Review [Core Concepts]({{< relref "core-concepts.md" >}}) while working through the builder.

## Keep exploring

- [Why use FlexiRule?]({{< relref "why-flexirule.md" >}}) — understand the practical benefits of making business policies visible and testable.
- [Key capabilities]({{< relref "key-capabilities.md" >}}) — see the main capabilities available for building rule flows.
- [FlexiRule and custom code]({{< relref "better-than-hard-coded.md" >}}) — understand how visual rules and application code complement one another.
- [Architecture overview]({{< relref "architecture.md" >}}) — explore how the main parts of FlexiRule fit together.

## Your first exercise

Choose a simple business policy—for example, checking whether a document meets a threshold before taking a follow-up action.

1. **Start in a development or test site.** Avoid experimenting with a live business process.
2. **Build the smallest useful flow.** Add only the trigger, condition, and action needed for the example.
3. **Test both outcomes.** Use one example that satisfies the condition and another that does not, and inspect the execution result.
4. **Review before activation.** Confirm the target DocType, trigger, conditions, actions, and expected side effects before enabling the rule.

The goal is not to build a complicated automation on your first try. It is to learn how a rule is configured, how its path is evaluated, and how to verify that the result matches your intent.

> **A useful boundary:** FlexiRule is a visual business-logic layer, not a replacement for every Frappe feature or custom app. Use it for supported business policies that benefit from being visible and maintainable; use custom development when the requirement needs capabilities or integrations outside the available actions.
