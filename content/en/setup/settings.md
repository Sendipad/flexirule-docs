---
title: RuleFlow Settings
description: Configure global runtime behavior and Rule Builder preferences.
weight: 30
---

# RuleFlow Settings

**RuleFlow Settings** controls site-wide FlexiRule behavior and preferences for the visual builder. Open it from the Frappe Desk by searching for **RuleFlow Settings**. The available fields in your installed version are the source of truth; this page explains the intent of the settings represented in the current RuleFlow Settings DocType.

## Runtime and operational settings

| Setting | What it controls | Guidance |
|---|---|---|
| Debug Logging | Detailed execution diagnostics | Enable when investigating a rule; verbose logs can add overhead and volume |
| Log Retention Days | Retention period for execution logs | Choose a period that balances troubleshooting needs and database maintenance |
| Default Max Execution Time | Default time limit for rule execution | Keep the limit appropriate for the type of work performed |
| Allow Async Actions | Whether asynchronous actions are permitted | Enable only when background processing is configured and appropriate |
| Excluded DocTypes | DocTypes excluded from applicable rule behavior | Use this carefully to prevent unwanted execution on selected types |

## Rule Builder preferences

| Setting | Options / purpose |
|---|---|
| Action Configuration Mode | Choose Sidebar or Dialog for configuring actions |
| Open Configuration On | Choose Click, Double Click, or Icon Only according to your workflow |
| Canvas Theme | System, Light, or Dark |
| Layout Direction | Left to Right or Top to Bottom |
| Sidebar Position | Left or Right when Sidebar mode is selected |
| Enable Edge Insertion | Controls the edge-insertion canvas convenience |
| Require Approval to Activate | Adds an approval requirement to rule activation |
| Allow Editing Active Rules | Controls whether active rules may be edited; changing active rules can affect production behavior |

## Recommended setup

1. Review logging and retention before enabling production rules.
2. Confirm whether asynchronous actions are needed and that the site's background workers are operating.
3. Choose builder preferences that suit the team; these preferences affect editing experience, not the business meaning of the rule.
4. Decide whether activation approval is appropriate for your change-control process.
5. Be cautious with **Allow Editing Active Rules**. For controlled production systems, prefer a review-and-test workflow before changes affect active automation.

## Important distinction

RuleFlow Settings does not replace per-rule configuration. A rule still has its own trigger type, target DocType where applicable, trigger event, execution mode, timeout, permissions, actions, and activation state. Review both the global settings and the individual Rule when troubleshooting unexpected behavior.
