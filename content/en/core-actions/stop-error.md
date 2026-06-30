---
title: Stop
description: End your rule execution or block an action with an error message.
weight: 100
---

# Stop

The **Stop** block is used to end your rule. It's especially useful for validation—when you want to prevent a user from saving a record if it doesn't meet certain criteria.

## How to use Stop

There are two ways to use this block:

### 1. Success (Silent Stop)
The rule finishes normally and everything is saved.
- **When to use**: Use this if you want to "exit early" from a rule. For example, if a rule starts but you realize it's not relevant for the current record, you can use a **Check** followed by a **Stop (Success)**.

### 2. Error (Raise Error)
The rule stops immediately and shows an error message to the user.
- **When to use**: Use this to enforce business rules. For example, "You cannot save this order because the shipping address is missing."
- **Important**: When you stop with an error, the system will **cancel** any changes the rule tried to make. It's like the rule never ran.

## Example: Minimum Order Amount

If you want to make sure every Sales Order is at least $50:

1. **Check**: Is `Grand Total` less than `50`?
2. **If Yes**: Connect to a **Stop** block.
   - **Mode**: `Error`
   - **Message**: `❌ Sorry, orders must be at least $50. Your current total is {{ doc.grand_total }}.`

When the user clicks "Save", they will see your message, and the order will not be saved until they add more items.

## Best Practices

- **Be Clear**: If you are stopping with an error, tell the user exactly what they need to do to fix it.
- **Don't Overuse**: You don't need a **Stop** block at the end of every path. If a path just ends, FlexiRule will finish successfully on its own.
