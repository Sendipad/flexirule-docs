---
title: Stop
description: Gracefully end the execution of your rule.
weight: 130
---

# Stop Action

The **Stop** action is a "terminal node"—meaning it is the final destination for a logic path. It tells the rule engine: "We're done here, you can stop now."

## When to Use

- **Successful Exit**: "The document is already correct, so no further changes are needed."
- **Conditional End**: "If the customer is from the US, process taxes. If they are international, **Stop** (because another rule handles them)."
- **Alternative to Raise Error**: Use Stop when you want to finish without showing an error message to the user.

## How it Works

When the rule reaches a Stop node, it finishes its execution for that specific run. Any changes made by earlier nodes (like Assignments) are kept, and the system moves on to the next task.

## Configuration

| Field | Description |
| :--- | :--- |
| **Label** | Give the node a name like "Exit" or "Finish Rule." |

## Example: Skipping Already-Processed Documents
**Goal**: Ensure a rule doesn't run twice on the same document.

1. **Action**: Add a **Condition** to check if `doc.is_processed == 1`.
2. **Action (True Path)**: Add a **Stop** node.
3. **Action (False Path)**: Add your logic nodes (Assignment, Notify, etc.).
4. **Result**: If the document is already processed, the rule hits the Stop node and exits instantly, saving system resources.

## Tips for Success

- **Visual Clarity**: Even though rules end automatically if there are no more nodes, using an explicit **Stop** node makes your logic much easier for other people to follow.
- **Multiple Stops**: You can have several Stop nodes in one rule, ending different logic branches whenever it makes sense.
- **Success vs Error**: If you want to stop *and* prevent the user from saving, use [Raise Error]({{< relref "raise-error.md" >}}) instead.

---

*This completes our guide to the Core Actions. For more technical details, see the [Advanced Reference]({{< relref "advanced-reference/" >}}).*
