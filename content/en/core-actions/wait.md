---
title: Wait
description: Pause rule execution for a specific duration or until a condition is met.
weight: 80
aliases:
  - /docs/actions/wait/
---

# Wait Action

The **Wait** action allows you to "pause" a rule flow. This is essential for automations that shouldn't happen immediately or that depend on external timing.

## When to Use
- **Follow-up Reminders**: Wait 3 days after a quote is sent before sending a follow-up email.
- **SLA Management**: Wait 2 hours; if a ticket is still "Open", escalate it.
- **Retry Logic**: If an API call fails, wait 5 minutes before trying again.

## Types of Waiting

1.  **Fixed Duration**: Pause for a specific amount of time (e.g., "10 Minutes", "2 Days").
2.  **Until a Date**: Pause until a specific date and time reached (e.g., `doc.due_date`).
3.  **Until Condition**: Pause the rule and check every hour; continue only when a specific condition becomes true (e.g., "Wait until Status is 'Paid'").

## How it Works
When a rule hits a Wait node, the current execution is "suspended" and saved to the database. The system then monitors the rule and "wakes it up" automatically when the time is right.

## Important Considerations
- **Non-Blocking**: Waiting does NOT stop your Frappe server. Other rules and users continue to work normally while one rule is "asleep".
- **Rule Updates**: If you change a rule while a version of it is waiting, the waiting rule will usually finish using the logic it started with.

---
**Advanced**: To understand how the scheduler handles thousands of waiting rules, see the [Wait Action Architecture]({{< relref "advanced-reference/architecture/actions/wait.md" >}}).
