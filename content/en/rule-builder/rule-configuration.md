---
title: Rule Configuration & Trigger Setup
description: Configure a rule's entry point, eligibility conditions, execution behavior, and access.
weight: 30
---

# Rule Configuration & Trigger Setup

A rule's configuration determines **when it can start**, **which records or callers it works with**, and **how execution is handled**. In the visual Rule Builder, most rule-level settings are on the **Start** node. They are different from action settings, which control individual steps after the flow begins.

## Choose a trigger type

Set **Trigger Type** according to how the rule should start.

| Trigger Type | Use it when | What to configure |
|---|---|---|
| **DocType Event** | The rule should respond to a Frappe/ERPNext document lifecycle event. | Select the **Document Type** and **Trigger Event**. |
| **Scheduler Event** | The rule should run on a recurring schedule, usually against a batch of records. | Create a linked **Rule Scheduler** record and configure its schedule and target records. |
| **Callable Event** | Another rule, a Process, or supported custom code should invoke the rule explicitly. | Define the rule's context and, when reusing it as a sub-rule, enable **Exposed As Sub-Rule**. |

## Configure a DocType Event

### 1. Select the Document Type and Trigger Event

Choose the DocType whose lifecycle should start the rule, then select the event that matches the business requirement.

The current Rule DocType offers these event choices:

`Before Naming`, `Before Insert`, `Before Save`, `Validate`, `Before Submit`, `After Insert`, `After Save`, `On Submit`, `Before Cancel`, `On Cancel`, `On Trash`, `On Update After Submit`, `On Change`, `Before Rename`, `After Rename`, and `Before Print`.

These events occur at different points in a document's lifecycle. Use a pre-event when the rule must validate or affect an operation before it completes; use an after-event for follow-up work. Choose based on the required timing, not just on the event name. Confirm the behavior in a test site before activating the rule.

### 2. Add an Entry Condition (optional)

Select **Open Condition Builder** under **Entry Condition (Execution Gate)** to configure a condition that is evaluated before the action flow starts.

- If the condition is **true**, the rule can proceed to its action flow.
- If the condition is **false**, execution stops before the rule's actions run.
- If no entry condition is configured, the rule is eligible to proceed whenever its trigger matches.

An entry condition is not the same as a **Condition** action on the canvas. An entry condition decides whether execution starts; a Condition action evaluates a decision during the flow and routes execution down its True or False path.

Use the Condition Builder rather than editing the stored JSON or generated compiled expression directly. The compiled expression is an internal field maintained by FlexiRule.

### Optional: Watched Fields

The underlying Rule DocType also provides **Watched Fields**, a comma-separated list for limiting change-oriented event evaluation to relevant document fields. Leave it empty when every matching event should be considered. This field is not part of the current Start-node properties panel; use the standard Rule form when that field is available in your installation.

## Configure a scheduled rule

A **Scheduler Event** does not depend on a user saving a particular document. Create a **Rule Scheduler** record, link it to the rule, and configure the schedule and batch target there. The scheduler can also link to a Callable Event rule when scheduled invocation is appropriate.

| Rule Scheduler setting | Purpose |
|---|---|
| **Frequency** | Choose **All**, **Hourly**, **Daily**, **Weekly**, **Monthly**, or **Cron**. In the current implementation, **All** means every five minutes. |
| **Cron Format** | Enter a five-part cron expression when **Cron** is selected. |
| **Filter DocType** | Choose the DocType to search for records to process. The scheduler needs a batch target; it can use the Rule's Document Type when a separate Filter DocType is not set. |
| **Filter (JSON)** | Optionally narrow the records using Frappe filter syntax, for example `{"status": "Open"}`. |
| **Batch Size** | Set the number of records handled in a batch. The default is 100. |
| **On Error** | Choose whether to **Skip** a failed record and continue, or **Stop** the batch. |

Check the scheduler's **Stopped**, **Next Execution At**, and last-run fields when scheduled work does not run. The linked rule must be active, and the schedule's DocType and filters must be valid.

## Configure a callable rule

Choose **Callable Event** when the rule is designed to be invoked explicitly rather than automatically from a document event.

To make it available to the **Sub-Rule** action, enable **Exposed As Sub-Rule**. Define its public inputs and outputs in the **Sub-Rule Interface** when those fields are available. Required inputs must be provided by callers, and declared outputs must be produced by the rule.

Exposing a rule makes it reusable; it does not mean it runs automatically on every document event. See the [Callable Triggers guide]({{< relref "advanced-concepts/triggers/callable-triggers.md" >}}) for the detailed contract.

## Set execution behavior

| Setting | How it works | Recommended use |
|---|---|---|
| **Priority** | A value from **0 to 20**. Higher values run first when multiple active rules match the same event. | Use higher values for rules that need precedence. Keep priority intentional when rules can affect the same document. |
| **Execution Mode** | **Synchronous** runs in the current request; **Asynchronous** queues work in the background for saved documents. | Use synchronous execution when the current save or submit must wait for the rule's result. Use asynchronous execution for follow-up work that can happen later. |
| **Max Execution Time (seconds)** | Timeout protection for a rule. The default is **30 seconds**. | Keep document-event rules focused. Increase the limit only when the work genuinely needs it. |
| **Debug Mode** | Enables more detailed execution diagnostics. | Turn it on while investigating a rule, then turn it off when the extra detail is no longer needed. |

Do not use asynchronous execution for logic that must block the current request, reject a submission, or provide a value before the document save completes. Background execution cannot serve as an immediate result for the current request.

## Configure description and access

- **Description:** Record the business purpose of the rule so others can understand why it exists.
- **Skip for Roles:** Exclude execution for users who have any of the selected roles. Review these exclusions carefully; they can cause a rule not to run for some users.
- **Rule Permissions:** Configure role-based permission to execute the rule. Review permissions alongside role exclusions; they serve different purposes.
- **Status and Version:** These are informational in the Start-node panel. Status is managed by the rule lifecycle rather than edited directly.

In the current Rule Builder, an **Active** rule is read-only. Return it to an editable state using your site's rule lifecycle workflow before changing its configuration. Some installations also require approval before activation.

## Recommended setup sequence

1. Give the rule a clear name and description.
2. Choose the correct trigger type and configure its required event or schedule.
3. Add an entry condition only when the rule should be skipped for some otherwise matching triggers.
4. Choose synchronous or asynchronous execution based on whether the current request needs the result.
5. Review priority, timeout, debug settings, role exclusions, and rule permissions.
6. Test matching and non-matching cases on a development or test site.
7. Activate the rule only after you have checked the execution path and any document changes, notifications, or other side effects.

## Troubleshooting checklist

- **The rule does not start:** Check that it is active and that its trigger type, DocType, event, and entry condition match the test case.
- **The rule runs at the wrong time:** Verify the selected lifecycle event and whether the action must finish before or after the document operation.
- **Scheduled work does not run:** Check the linked Rule Scheduler, whether it is stopped, its next execution time, and its target DocType and filters.
- **A rule is missing from the Sub-Rule picker:** Confirm that it uses **Callable Event**, is active, and has **Exposed As Sub-Rule** enabled.
- **You cannot edit the rule:** Check its current lifecycle state. Active rules are read-only in the current builder.

## Related guides

- [Quick Start Guide]({{< relref "getting-started/quick-start.md" >}})
- [Building Rules]({{< relref "rule-builder/building-rules.md" >}})
- [Condition action]({{< relref "action-type/condition.md" >}})
- [Callable Triggers]({{< relref "advanced-concepts/triggers/callable-triggers.md" >}})
- [Rule Lifecycle]({{< relref "test-operate/rule-lifecycle.md" >}})
- [RuleFlow Settings]({{< relref "setup/settings.md" >}})
