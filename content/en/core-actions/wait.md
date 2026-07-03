---
title: Wait
description: Pause your automation for a specific time or until a date.
weight: 80
---

# Wait (Delay)

The **Wait** block allows you to pause your automation. This is useful for follow-up tasks, reminders, or any action that shouldn't happen immediately.

## Wait Options

-   **Wait for Duration**: Pause for a set amount of time, such as "2 days" or "4 hours."
-   -   **Wait Until Date**: Pause until a specific date or time is reached. You can use a field from your document, like a "Follow-up Date" or "Due Date."

## Example: The Follow-up Reminder
1.  **Rule Trigger**: A new "Lead" is created.
2.  **Wait**: Set the block to wait for "3 days."
3.  **Check**: See if the lead is still in the "New" status.
4.  **Notify**: If it is, send a reminder email to the sales person.

## Important Note
Wait blocks only work for rules that run in the background. If a rule is designed to show a "Toast" message or block a user from saving (Raise Error), a **Wait** block should not be used as it will cause the user's browser to hang.
