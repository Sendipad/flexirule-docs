---
title: Quick Start Guide
description: Create, test, and review a first visual rule in Frappe or ERPNext.
weight: 100
---

# Quick Start Guide

This guide walks through a small, practical rule: check a document value and notify someone when it passes a threshold. The goal is to learn the end-to-end workflow, not to cover every builder option.

> **Before you begin:** Use a development or test site. A live rule may run automatically, and actions such as notifications or document updates can have real effects.

## What you'll build

A rule for Sales Invoices that sends a notification when the invoice's grand total is greater than a threshold. Adapt the DocType, event, and action to your actual business requirement.

## 1. Open RuleFlow

In Frappe or ERPNext, open **RuleFlow** from the application navigation or search for it using the Awesomebar. Open the rule list and create a new Rule.

If RuleFlow or the rule builder is unavailable, confirm that FlexiRule is installed and enabled for the site and that your user has the required permissions.

## 2. Configure the rule

Give the rule a clear, descriptive name such as `High Value Invoice Review`. For a document-triggered example, the configuration may look like this:

| Setting | Example | What to verify |
|---|---|---|
| Trigger Type | DocType Event | The rule should respond to a document lifecycle event. |
| Document Type | Sales Invoice | Use the DocType relevant to your requirement. |
| Trigger Event | Validate | Choose an event whose timing matches the behavior you need. |
| Execution Mode | Synchronous | Use the mode appropriate to the work and event. |

The available settings and event choices depend on the installed version. Save the rule, then open the visual builder. Do not select an event simply because it appears in an example: validation, save, and submit events occur at different points and can have different consequences.

## 3. Understand the canvas

The canvas shows connected action nodes. Start with the entry point, add the action steps you need, and connect them to express the intended path. A node that is present but not connected to the right path will not produce the intended flow.

### Video: Configure a condition and query

This short demonstration shows the Rule Builder canvas while adding a condition and configuring a query.

{{< video src="/images/demo-condition-and-query.webm" title="Configure a condition and query in FlexiRule" description="A FlexiRule Rule Builder walkthrough demonstrating condition setup and a query action on the visual canvas." thumbnail="/images/rule-builder-canvas-overview.png" controls="true" >}}

## 4. Add a Condition

Add a **Condition** action and configure a comparison:

- **Left value:** the current document's grand total, selected using Smart Values (commonly referenced as `@doc.grand_total`).
- **Operator:** greater than.
- **Right value:** `10000` for this example.

Prefer the field/value picker where available. Confirm that the selected field and operator match the installed builder and the field's type.

## 5. Add a follow-up action

Connect the branch for invoices above the threshold to a **Notify** action. Configure the intended recipient and message, using supported dynamic values for relevant document information. Leave the other branch without a follow-up action or connect it to the alternative behavior your process requires.

Use **Assignment** when you need to assign a value in the rule context or a supported document field. Use **Document Action** when the intent is to perform an operation on a document. These are different jobs; choose based on the behavior you need.

## 6. Test both outcomes

Use the builder's available **Debug** or test tools with representative data. Check:

- An invoice whose total is above the threshold.
- An invoice whose total is at or below the threshold.
- The branch selected in each run.
- Each action's outcome, resolved inputs, and any errors.

A successful run for only one example is not enough to verify a condition.

## 7. Review before activation

Activate the rule only after reviewing its configuration and expected side effects. Follow any activation approval process required by your installation.

- [ ] The trigger, DocType, and event are intentional.
- [ ] Both matching and non-matching cases have been tested.
- [ ] Smart Values refer to data available at that step.
- [ ] Notifications, writes, and other side effects are understood.
- [ ] Execution mode and permissions are appropriate.
- [ ] You know where to inspect the execution log after a real run.

## If something does not work

1. Confirm the rule is saved and the trigger configuration matches the event you are testing.
2. Check that the nodes are connected along the intended path.
3. Review the Condition inputs and confirm the field/operator combination is valid.
4. Run the test again and inspect the path and error details.
5. Check permissions and action-specific requirements.

## Continue learning

- [Build Your First Rule]({{< relref "first-rule.md" >}})
- [Rule configuration]({{< relref "../rule-builder/rule-configuration.md" >}})
- [Canvas guide]({{< relref "../rule-builder/canvas.md" >}})
- [Testing and debugging]({{< relref "../test-operate/debugging.md" >}})
- [Choosing an action type]({{< relref "../action-type/which-action.md" >}})
