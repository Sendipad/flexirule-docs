---
title: Switch
description: Route your logic down multiple paths based on a single field.
weight: 90
---

# Switch Action

The **Switch** action is used when you have more than two possible outcomes. While a [Condition]({{< relref "condition.md" >}}) is like a "Yes/No" question, a Switch is like a "Multi-choice" question.

## How it Works

A Switch looks at a specific field or variable and routes the logic to a different path based on the value it finds.

- **Expression**: The field you want to check (e.g., `doc.status`).
- **Cases**: The possible values you are looking for (e.g., "Draft", "Open", "Closed").
- **Default Path**: The "Fallback" path the rule takes if the value doesn't match any of your cases.

## When to Use

- **Status Routing**: "If Status is 'Draft', send to Clerk. If 'Open', send to Manager. If 'Closed', send to Archive."
- **Priority Handling**: "Route Low, Medium, and High priority tickets to different support teams."
- **Regional Logic**: "Apply different tax rules based on the customer's Country."

## Configuration

| Field | Description |
| :--- | :--- |
| **Expression** | The field you want to evaluate (e.g., `doc.priority`). |
| **Cases** | A list of values. Adding a case creates a new connection point on the Switch node. |
| **Default** | The path to take if none of the cases match. |

## Example: Ticket Routing
**Goal**: Route a Support Ticket to the right team based on its "Category."

1. **Expression**: `doc.category`
2. **Cases**:
   - `Hardware` -> Connect to "Notify Hardware Team"
   - `Software` -> Connect to "Notify Software Team"
   - `Billing` -> Connect to "Notify Accounts Team"
3. **Default Path**: Connect to "Notify General Support"
4. **Result**: Instead of four separate Condition nodes, you have one clean Switch node that routes the ticket instantly to the right people.

## Tips for Success

- **Case Sensitive**: Remember that "High" and "high" are different. Make sure your cases exactly match the data in your system.
- **Default Path is Mandatory**: Always connect the Default path to something (even just a "Stop" node). This ensures your rule doesn't just hang if it encounters an unexpected value.
- **Clean Canvas**: Use Switch to replace "nested" conditions. It makes your rule much easier for other people to read and maintain.

---

*Next: Learn how to reuse logic with the [Sub-Rule Action]({{< relref "sub-rule.md" >}}).*
