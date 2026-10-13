---
title: Why should I use FlexiRule?
weight: 20
description: Understand how visible, testable business rules can improve change management and operational clarity in Frappe and ERPNext.
aliases:
  - /introduction/why-flexirule/
---

# Why should I use FlexiRule?

FlexiRule is valuable when a business decision needs to be understood and changed over time—not simply implemented once. It gives supported business policies a visible home where the team can review the flow, configure inputs, test outcomes, and inspect available execution information.

## Make business decisions easier to see

A rule can show the trigger, conditions, and follow-up actions in a connected flow. This helps reviewers understand the intended decision path without first tracing every relevant code path across a project.

## Change policy without confusing it with application engineering

Consider a finance team that changes its invoice-review threshold. If the decision is represented in a supported FlexiRule configuration, the team may be able to adjust and test the policy without rewriting the underlying technical capability. Changes should still follow the site's permissions, review, and activation practices.

## Test before a change affects live work

A visual flow is only useful if it behaves as intended. Use available debug or simulation tools to test representative inputs, including cases that should take different branches. Review action results and side effects before activating a rule.

## Keep technical capabilities and business policies separate

Custom Frappe development is still essential for new data models, integrations, APIs, and complex technical behavior. FlexiRule can orchestrate supported capabilities while expressing the policy that decides when they should be used.

## Common use cases

- **Approvals:** branch based on document value, department, or other supported fields.
- **Validation:** check business-specific requirements at an appropriate document event.
- **Notifications:** alert the right people when configured conditions are met.
- **Cross-document decisions:** read related data and use it to determine the next step, where supported actions and permissions allow.
- **Reusable behavior:** organize repeated supported logic into maintainable rules or reusable processes.

These are examples, not a guarantee that every scenario can be implemented without custom development. Check the action types, trigger support, and permission model for your installed version.

## Is FlexiRule the right fit?

FlexiRule is most useful when a policy is likely to change, involves meaningful branching, or needs to be understandable by more than the developer who first implemented it. A standard Frappe feature or a small, stable customization may be simpler for straightforward requirements.

See [Do I need FlexiRule?]({{< relref "do-i-need-flexirule.md" >}}) and [FlexiRule and custom code]({{< relref "better-than-hard-coded.md" >}}).

## Start with a small rule

Choose one low-risk, representative business decision. Build it on a development or test site, test both positive and negative cases, and review its effects before moving to production.

[Open the Quick Start guide]({{< relref "quick-start.md" >}}).
