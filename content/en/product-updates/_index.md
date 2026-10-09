---
title: Product Updates
weight: 15
description: See what is new in FlexiRule, with concise release notes focused on user-visible improvements and practical benefits.
---

# What's new in FlexiRule

Find the latest improvements to the FlexiRule experience, rule-building tools, and automation workflows. These notes focus on **what changed, what you can do with it, and where to learn more**—not internal development activity.

{{< card title="Get started with FlexiRule" href="getting-started/quick-start/" icon="rocket" >}}
New to FlexiRule? Start with a guided walkthrough of building and testing a rule.
{{< /card >}}

## Recent updates

### A more focused RuleFlow workspace
*October 2026 · Workspace and navigation*

The RuleFlow workspace brings rule management into a more focused place in Frappe Desk. Navigation has been streamlined so common rule-management tasks are easier to find, with workspace-level visibility into relevant connection and execution information.

**Why it helps:** Spend less time navigating between setup pages and more time managing the rules you work with.

[Explore the Rule Builder]({{< relref "rule-builder/_index.md" >}})

---

### Clearer record-query configuration
*October 2026 · Query Records*

The Query Records configuration experience has been refined to make record selection and dynamic DocType configuration clearer. Fetch strategies can be chosen to suit the rule's needs, including approaches for standard and single-record retrieval.

**Why it helps:** Configure data lookups more deliberately and make it easier to understand how a rule obtains the records it uses.

[Learn about Query Records]({{< relref "action-type/query-records.md" >}})

---

### Easier trigger configuration
*October 2026 · Entry Action*

Entry Action configuration has clearer visual cues and field descriptions for supported document events. The Smart Value Selector helps configure trigger conditions without requiring every condition to be written as raw expression syntax.

**Why it helps:** Make the circumstances that start a rule easier to review and maintain.

[Read the Entry Action guide]({{< relref "action-type/entry-action.md" >}})

---

### More consistent rule-canvas nodes
*September 2026 · Rule Builder*

Action nodes have more consistent visual styling, icons, and summaries across common action types, including Assignment, Condition, Loop, and Stop/Error.

**Why it helps:** Scan a workflow more easily and understand the role of each step while reviewing a rule.

[Explore the visual canvas]({{< relref "rule-builder/canvas.md" >}})

---

### More flexible date and time values
*September 2026 · Smart Values*

Date and time values support more expressive configurations, including relative date calculations, offsets, and working-day logic through the Smart Value system.

**Why it helps:** Build rules around due dates, time windows, and business-day requirements with less manual expression work.

[Learn about Smart Values]({{< relref "rule-builder/smart-value-system.md" >}})

---

## Choose your next step

{{< card title="Build your first rule" href="getting-started/quick-start/" icon="rocket" >}}
Follow the quick start and learn the core workflow.
{{< /card >}}

{{< card title="Choose the right action" href="action-type/which-action/" icon="list-check" >}}
Find the action that best fits a common business task.
{{< /card >}}

{{< card title="Browse all action types" href="action-type/" icon="layers" >}}
Explore the available actions and their configuration guides.
{{< /card >}}

---

*Product updates summarize user-facing changes. For source-level details and the full technical record, see the [Application Commit History]({{< relref "developer-guide/commit-history.md" >}}).*
