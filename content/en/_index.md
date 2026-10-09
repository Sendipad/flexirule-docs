---
title: "FlexiRule: Visual Business Automation for Frappe"
description: "Build, test, and manage business rules visually in Frappe and ERPNext."
---

# Build business rules visually

**FlexiRule helps teams turn business policies into visible, testable automations** for Frappe and ERPNext. Build a rule from a trigger, decisions, data lookups, assignments, and follow-up actions—without scattering every policy across custom scripts.

{{< figure src="/landing-page/rule_builder.png" alt="FlexiRule visual rule builder canvas" >}}

{{< video src="/images/flexirule-overview-demo.webm" controls="true" muted="true" loop="true" >}}

<div class="grid-2">

{{< card title="Start here" href="getting-started/quick-start/" icon="rocket" >}}
Create a rule, add a condition, test the flow, and understand what happens when it runs.
{{< /card >}}

{{< card title="Build a rule" href="rule-builder/" icon="canvas" >}}
Learn the canvas, trigger setup, action configuration, and visual debugging.
{{< /card >}}

{{< card title="Find the right action" href="action-type/" icon="catalog" >}}
Explore data queries, assignments, conditions, notifications, and reusable processes.
{{< /card >}}

{{< card title="Understand data queries" href="action-type/query-records/" icon="database" >}}
Learn when to fetch records, check existence, count, aggregate, or reuse a report.
{{< /card >}}

{{< card title="What’s new" href="product-updates/" icon="sparkles" >}}
See recent improvements, new capabilities, and practical guidance for using FlexiRule.
{{< /card >}}

</div>

## How FlexiRule works

<ol>
<li><strong>Choose a trigger.</strong> A rule can respond to a supported document event, a scheduler event, or a callable entry point.</li>
<li><strong>Set entry conditions.</strong> Trigger conditions and watched fields can help avoid unnecessary rule execution.</li>
<li><strong>Build the flow.</strong> Add action nodes, configure their inputs, and connect the paths that represent your business policy.</li>
<li><strong>Test before relying on it.</strong> Use the builder's debug tools and execution logs to inspect the path, step outcomes, and errors.</li>
<li><strong>Activate deliberately.</strong> Confirm the rule is configured for the intended DocType and event before enabling it.</li>
</ol>

## What can you automate?

- **Validation:** prevent a document from proceeding when a business requirement is not met.
- **Field assignments:** calculate or populate values from the current document and related data.
- **Data-driven decisions:** query records and use the result to choose the next path.
- **Notifications:** inform users or teams when a defined business event occurs.
- **Reusable logic:** call a callable rule or reusable process where appropriate.

## A practical example: high-value invoice review

A Sales Invoice rule might run during **Validate**, check whether the grand total exceeds a configured threshold, and follow a different path when it does. The matching branch could notify a reviewer or apply another configured action.

The exact result depends on the action types, configuration, permissions, and execution mode you choose. Test the rule with representative documents before activating it.

> **A useful boundary:** FlexiRule is a visual business-logic layer, not a replacement for every custom app or integration. Use it for rules that benefit from being centrally visible and maintained; use custom development when the behavior requires code or integration beyond the available actions.
