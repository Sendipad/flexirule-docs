---
title: Quick Start Guide
description: Create, test, and activate a first visual rule in Frappe or ERPNext.
weight: 100
---

# Quick Start Guide

This walkthrough shows the typical workflow for a simple rule: check a document value, then take an action when the condition is met. Exact labels can vary slightly with your FlexiRule version and builder preferences.

> **Before you begin:** Use a development or test site first. Notifications and other actions may have real effects when a rule is active.

## 1. Open RuleFlow

In Frappe or ERPNext, open **RuleFlow** from the application navigation or search for it in the Awesomebar. From the workspace, open the rule list or create a new Rule.

## 2. Configure the rule

Give the rule a clear name, such as `High Value Invoice Review`. For a document-triggered rule, choose:

| Setting | Example | Meaning |
|---|---|---|
| Trigger Type | DocType Event | Run in response to a document lifecycle event |
| Document Type | Sales Invoice | The document the rule applies to |
| Trigger Event | Validate | Evaluate the rule during validation |
| Execution Mode | Synchronous | Run as part of the current request; use asynchronous execution only when appropriate |

Save the rule before opening the visual builder. Choose an event that fits the intended behavior: validation is usually appropriate for checks that must stop an invalid document, while post-save or submit events suit other kinds of follow-up work.

## 3. Open the Rule Builder

Open **Rule Builder** from the Rule form or workspace. The canvas represents the flow as connected action nodes. Start with the entry node, then add the action types needed for your scenario.

## See the flow in action

{{< video src="/images/demo-condition-and-query.webm" controls="true" muted="true" loop="true" >}}

## 4. Add a condition

Add a **Condition** action (the exact display label may be **Check** in some UI areas). Configure a comparison using the Smart Value Selector rather than guessing field names:

- Left value: the current document's Grand Total, commonly represented as `@doc.grand_total`
- Operator: greater than
- Right value: `10000`

This creates a decision based on the current Sales Invoice. Confirm the field and operator shown in your installed builder.

## 5. Add the next action

Connect the matching branch to an action such as **Notify**. Configure the channel and message using values from the current document, such as its document name. Leave the other branch empty or connect it to the appropriate alternative action for your use case.

## 6. Debug with a representative document

Use the builder's **Debug** tools to run a test with a suitable existing document. Inspect the path taken, action outcomes, and any errors. Test both sides of the condition, not just the successful case.

## 7. Activate only after review

Return to the Rule form and enable the rule using the activation control available in your version. Save, then verify that the rule status and activation state are as expected. If your site requires approval to activate rules, follow that process.

## Before using the rule in production

- [ ] Confirm the trigger type, DocType, and event.
- [ ] Test a document that should match and one that should not.
- [ ] Review any actions that write data, send messages, or create documents.
- [ ] Confirm the rule's execution mode, permissions, and timeout.
- [ ] Check the execution log after the first real run.

## Helpful next steps

- [Rule configuration and triggers]({{< relref "rule-builder/rule-configuration.md" >}})
- [Canvas guide]({{< relref "rule-builder/canvas.md" >}})
- [Debugging guide]({{< relref "rule-builder/debugging.md" >}})
- [Query Records]({{< relref "action-type/query-records/_index.md" >}})
