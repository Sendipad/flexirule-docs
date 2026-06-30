---
title: Wait
description: Pause your rule for a specific amount of time or until a certain date.
weight: 80
---

# Wait

The **Wait** block allows you to delay parts of your rule. This is perfect for creating follow-up automations or scheduled tasks.

## How to use Wait

- **Wait for a set time**: Choose a duration, like "2 days" or "4 hours".
- **Wait until a specific date**: Tell the rule to pause until a certain date, like the "Due Date" on a Task.

## Example: Follow-up Email

You can use a **Wait** block to send a follow-up email a few days after a sales quote is sent:

1. **Rule Starts**: When a Sales Quote is created.
2. **Wait**: Set for "3 days".
3. **Check**: See if the Quote status is still "Draft".
4. **Notify**: If it's still "Draft", send a "Just checking in" email to the customer.

## Important Note

When a rule is "waiting", it stops running for the current user and continues automatically in the background when the time is up. This means you don't have to keep your browser open or do anything else; FlexiRule handles the schedule for you.
