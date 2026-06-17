---
title: Wait
description: Pause your rule's execution for a specific amount of time.
weight: 110
---

# Wait Action

The **Wait** action allows you to pause the execution of your rule for a specific amount of time. This is useful for workflows that need a delay between steps.

## When to Use

- **Scheduled Follow-ups**: "Wait 2 days after a Lead is created, then send a follow-up email."
- **Status Checks**: "Wait 1 hour for a payment to be confirmed before cancelling an order."
- **Batching**: "Wait 5 minutes for more data to arrive before processing a batch."

## How it Works

When a rule hits a Wait node, the current execution stops and is scheduled to resume later. This means the system doesn't "hang"—it simply puts the rule to sleep and wakes it back up when the time is right.

## Configuration

| Field | Description |
| :--- | :--- |
| **Wait Duration** | How long to wait? You can specify this in **Minutes**, **Hours**, or **Days**. |
| **Wait Until** | (Optional) Instead of a duration, wait until a specific date and time found in a document field. |

## Real-World Example: Trial Expiry Reminder
**Goal**: Send a reminder email 3 days before a customer's free trial ends.

1. **Trigger**: Rule on `Subscription` / `After Save`.
2. **Action**: Add a **Wait** node.
   - Wait Until: `doc.trial_expiry_date - 3 days`.
3. **Action**: Add a **Notify** node to send the reminder email.
4. **Result**: The rule "sleeps" for the duration of the trial and automatically wakes up 3 days before expiry to send the email.

## Tips for Success

- **Async Only**: Wait actions are usually used in background (asynchronous) rules. They shouldn't be used in "Before Save" rules where the user is waiting for the screen to refresh.
- **Check Status After Waiting**: In long waits (like several days), it's a good idea to add a **Condition** node *after* the wait to check if the document is still relevant (e.g., "Is the order still unpaid?").
- **Visible Progress**: You can see which rules are currently "waiting" in the **Rule Execution Log**.

---

*Next: Learn how to handle errors with the [Raise Error Action]({{< relref "raise-error.md" >}}).*
