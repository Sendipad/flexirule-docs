---
title: Test & Operate
weight: 60
description: Validate rule behavior, understand test results, and manage rules safely in production.
---

# Test & Operate

Build the rule, verify its behavior, then manage its production lifecycle. FlexiRule separates **manual testing** from **live event execution**: a manual test runs a selected rule against a chosen document, while active rules can run automatically when their configured triggers match.

Use this section to learn how to test safely, investigate execution results, and control whether a rule participates in live processing.

## Recommended workflow

<ol>
<li><strong>Build and validate.</strong> Check the trigger, entry condition, action configuration, graph connections, and required values.</li>
<li><strong>Test representative cases.</strong> Run the rule against documents that should match and documents that should not. Inspect the executed path, step results, and errors.</li>
<li><strong>Review side effects.</strong> Understand the selected test mode before running actions that may create, update, submit, or notify.</li>
<li><strong>Activate deliberately.</strong> Confirm the rule configuration and permissions before allowing matching live events to execute it.</li>
<li><strong>Monitor and maintain.</strong> Inspect execution logs, disable a rule when necessary, and use the supported lifecycle workflow when changing or retiring it.</li>
</ol>

## Choose a task

| If you want to… | Read |
| --- | --- |
| Understand Draft, Active, Disabled, and Archived states | [Rule Lifecycle]({{< relref "rule-lifecycle.md" >}}) |
| Run a manual test and inspect the path and step results | [Testing & Debugging]({{< relref "debugging.md" >}}) |
| Investigate an actual production execution | [Testing & Debugging]({{< relref "debugging.md" >}}) — see the Production execution logs section. |
| Configure triggers and entry conditions | [Rule Configuration]({{< relref "../rule-builder/rule-configuration.md" >}}) |
| Check the meaning of an action before testing it | [Action Types]({{< relref "../action-type/" >}}) |

## Understand the difference

- **Validation** checks whether the rule definition is structurally and configurationally valid. A successful validation does not prove every runtime path behaves as intended.
- **Manual testing** executes a selected rule against a chosen document or supported test input. Inspect the returned path and results rather than relying only on whether the run completed.
- **Live execution** happens when an active rule matches its configured trigger. Use execution logs to investigate what actually happened in production.
- **Dry run** is a separate execution setting. Where enabled, FlexiRule wraps execution in a database savepoint and rolls back database changes made during the run. Do not assume a test is side-effect-free unless the selected test mode confirms dry-run behavior; external effects may not be reversible by a database rollback.

## Before enabling a rule

- Test both expected and unexpected cases, including conditions that should stop execution or choose a different branch.
- Check document permissions and the side effects of actions such as Document Action, Assignment, Notify, and Process.
- Review failures and step-level output; fix configuration or data issues before activation.
- Confirm the intended trigger, target DocType, watched fields, and entry condition.
- Know how to disable the rule and where to find its execution logs.

## Guides

- [Rule Lifecycle]({{< relref "rule-lifecycle.md" >}})
- [Testing & Debugging]({{< relref "debugging.md" >}})
- [Rule Configuration]({{< relref "../rule-builder/rule-configuration.md" >}})
- [Build Your First Rule]({{< relref "../getting-started/first-rule.md" >}})
