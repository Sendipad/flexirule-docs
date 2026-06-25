---
title: Wait
description: Pause the rule for a set amount of time.
weight: 80
aliases:
  - /docs/actions/wait/
---

# Wait

The **Wait** block tells the rule to pause before moving on to the next step. This is great for follow-ups or delayed actions.

## Ways to Wait

- **For a Duration**: Wait for a specific amount of time, like "2 days" or "4 hours".
- **Until a Date**: Wait until a specific date is reached. You can use a date from your record, like the `Due Date`.

## Example
**Scenario**: Send a "Thank You" email 24 hours after a customer makes a purchase.
1. The rule starts when a new "Sales Invoice" is created.
2. **Wait**: Set the block to wait for "1 day".
3. **Notify**: Send the thank you email.

The rule will start immediately when the invoice is created, but it will "sit" at the Wait block for 24 hours before sending the email.
