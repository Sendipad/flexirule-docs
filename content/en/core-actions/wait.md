---
title: Wait
description: Pause rule execution for a specified duration or until a date.
weight: 80
aliases:
  - /docs/actions/wait/
---

# Wait Action

The **Wait** action pauses the execution of your rule. This is useful for building time-delayed automations or follow-up tasks.

## Wait Options

- **For a Duration**: Pause for a specific amount of time (e.g., "2 days" or "4 hours").
- **Until a Date**: Pause until a specific date and time is reached. You can use fields from your record, like "Due Date".

## Example Use Cases
- **Reminders**: Send a follow-up email 3 days after a quote is sent.
- **Delayed Updates**: Wait until a specific date to change a record's status.
- **Scheduled Checks**: Pause execution to allow for external processes to complete before proceeding.
