---
title: Raise Error
description: Stop execution and show a custom error message to the user.
weight: 120
---

# Raise Error Action

The **Raise Error** action is used to stop the rule immediately and show an error message to the user. This is primarily used for **Validation**—preventing a user from saving or submitting a document if it doesn't meet your business requirements.

## When to Use

- **Mandatory Fields**: "Stop the save if the 'Customer Reference' is missing."
- **Business Limits**: "Prevent submission if the discount is higher than 15%."
- **Safety Checks**: "Don't allow a shipment to be created if the items aren't in stock."

## How it Works

When the rule reaches this node:
1. The execution stops immediately.
2. Any changes made by the rule during this run are "rolled back" (not saved).
3. A pop-up window appears for the user with the message you've configured.

## Configuration

| Field | Description |
| :--- | :--- |
| **Error Message** | The text to show the user. You can use `{{ }}` to include data, like "Discount of {{ doc.discount_percentage }}% is too high!". |
| **Error Type** | Usually set to "Validation Error". |

## Real-World Example: Minimum Order Value
**Goal**: Prevent users from submitting a Sales Order if the total is less than $100.

1. **Trigger**: Rule on `Sales Order` / `Before Submit`.
2. **Action**: Add a **Condition** to check if `doc.grand_total < 100`.
3. **Action**: On the "True" path, add a **Raise Error** node.
   - Message: "Orders must be at least $100. Current total is only ${{ doc.grand_total }}."
4. **Result**: If a user tries to submit a $50 order, they will see your error message and the document will remain as a "Draft."

## Tips for Success

- **Be Helpful**: Write error messages that tell the user exactly what they need to do to fix the problem.
- **Use in "Before" Triggers**: This action is most effective in `Before Save` or `Before Submit` triggers, as it can actually stop the database from updating.
- **Context is Key**: Use document data in your message (e.g., `doc.name`) so the user knows exactly which record is causing the issue.

---

*Next: Learn how to gracefully finish a rule with the [Stop Action]({{< relref "stop.md" >}}).*
