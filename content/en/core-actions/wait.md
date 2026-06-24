---
title: Wait
description: Pause rule execution for a specified duration or until a date.
weight: 80
aliases:
  - /docs/actions/wait/
---

# Wait

The **Wait** block pauses your rule for a set amount of time. It's perfect for follow-up reminders or delayed tasks.

## Wait Options

- **Amount of Time**: Pause for a specific duration, like "2 days" or "4 hours".
- **Until a Specific Date**: Pause until a specific date and time is reached. You can use a date from your record, like a "Due Date".

## Simple Example
**Goal**: Send a follow-up email 24 hours after a quote is sent to a customer.
1. Your rule starts when a **Quote** is saved.
2. Add a **Wait** block and set it to "1 day".
3. Connect a **Notify** block after the Wait to send the reminder email.
