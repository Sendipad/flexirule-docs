---
title: Initial Configuration
description: Prepare FlexiRule for safe use after installation.
weight: 15
---

# Initial Configuration

After installing FlexiRule, prepare the site and verify the basic workflow before creating production automations.

## 1. Confirm installation and access

Confirm that FlexiRule is installed on the intended site and that the users who will create or manage rules have the appropriate roles. Rule and settings permissions are controlled by the installed DocType permissions; do not assume a role name from an older guide is present on every site.

## 2. Review RuleFlow Settings

Open **RuleFlow Settings** from the Desk. Review:

- Debug logging and log retention
- Default maximum execution time
- Whether asynchronous actions are allowed
- Excluded DocTypes
- Builder configuration mode, canvas theme, and layout direction
- Whether activation approval is required
- Whether editing active rules is permitted

Choose operational values with your site's workload and change-control practices in mind.

## 3. Check background processing if needed

If your rules use asynchronous actions or scheduler-driven work, confirm that the site's background workers and scheduler are running using your normal Frappe operations procedures. Check the Desk's background job views and logs for failures. Synchronous rules do not require you to start a worker manually from a documentation example.

## 4. Create a low-risk test rule

Create a rule for a safe test DocType or a development site. Configure a supported trigger, add one simple action, and save it. Use the Rule Builder's Debug tools with representative test data and inspect the execution log.

## 5. Verify before production

- [ ] The intended users can open the Rule Builder and edit rules.
- [ ] The rule's trigger type, DocType, and event are correct.
- [ ] The flow was tested with matching and non-matching data.
- [ ] Actions with side effects have been reviewed.
- [ ] Timeouts, asynchronous behavior, permissions, and log retention are appropriate.
- [ ] Activation approval requirements are understood.

For the next step, follow the [Quick Start Guide]({{< relref "getting-started/quick-start.md" >}}).
