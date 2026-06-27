---
title: Wait
weight: 70
description: Pause the execution of your rule.
---

# Wait

The **Wait** block allows you to pause a rule for a specific amount of time before continuing to the next step.

## When to use it
- To send a follow-up email **2 days** after a quote is sent.
- To wait for **1 hour** before checking if a payment has been received.

## How it works
When a rule hits a Wait block, the current execution is paused and "serialized" (saved) to the database. The system then schedules a background task to resume the rule once the time has passed.

## Configuration
- **Duration**: How long to wait.
- **Unit**: Minutes, Hours, Days, or Weeks.

## Important Note
Wait blocks can only be used in rules that are triggered by events that don't require an immediate response to the user (like "After Save"). They **cannot** be used in "Before Save" rules because the user cannot wait for days while a document is being saved!
