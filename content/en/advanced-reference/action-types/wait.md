---
title: Wait
description: Pause rule execution for a specified duration or until a date.
weight: 80
aliases:
  - /docs/actions/wait/
---

# Wait Action

The **Wait** action pauses the execution of your rule. This is useful for follow-up automations or time-delayed tasks.

## Wait Options

- **Duration**: Wait for a specific amount of time (e.g., "2 days", "4 hours").
- **Until Date**: Wait until a specific date and time reached. You can use fields from the document (e.g., `doc.due_date`).

## Example
**Scenario**: Send a reminder email 24 hours after a quote is sent.
1. Rule triggers when Quote is saved.
2. **Wait** action set for "1 day".
3. **Notify** action sends the reminder email.
