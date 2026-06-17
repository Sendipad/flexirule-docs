---
title: Condition
description: Branch your logic based on field values or document states.
weight: 20
---

# Condition Action

The **Condition** action is the brain of your rule. It allows you to ask a "Yes/No" question about your data and branch your logic path based on the answer.

## How it Works

A Condition node evaluates a set of rules you define. If the rules are met, the execution follows the **True** (Success) path. If they aren't met, it follows the **False** (Failure) path.

### The Condition Builder
When you click on a Condition node, you'll use the **Condition Builder** to define your logic. It's a visual interface that lets you build complex logic without writing code.

- **Simple Checks**: `Amount is greater than 1000`.
- **Groups**: `Customer is "VIP" AND Status is "Open"`.
- **Lists (Collections)**: `ANY Item in the table has a discount greater than 20%`.

## When to Use

- **Approvals**: "If Total > 5000, send to Manager."
- **Validation**: "Only proceed if the Email field is filled in."
- **Status Checks**: "If the Status changed from 'Open' to 'Closed', send a notification."

## Configuration

| Field | Description |
| :--- | :--- |
| **Action Label** | Give your node a clear question as a name (e.g., "Is High Priority?"). |
| **Logic** | Use the builder to add your criteria. |
| **True Path** | What happens next if the answer is Yes. |
| **False Path** | What happens next if the answer is No. |

## Examples

### 1. Basic Field Check
**Goal**: Check if a Support Ticket is high priority.
- `priority == "High"`
- **True**: Notify Support Lead.
- **False**: End Rule.

### 2. Change Detection
**Goal**: Only trigger when a document is *submitted*, not just saved.
- `doc.docstatus == 1`
- `old_doc.docstatus == 0`
- **True**: Post to Slack.

## Tips for Success

- **Readable Labels**: Always name your Condition nodes as questions (e.g., "Is Discount Too High?") so your flow is easy to understand at a glance.
- **Child Tables**: You can easily check lists of items. For example, "Check if **any** row in the Items table has an empty Warehouse field."
- **Multiple Branches**: If you have more than two possibilities (like "Low", "Medium", "High"), consider using the [Switch]({{< relref "switch.md" >}}) action instead.

---

*Next: Learn how to perform actions on documents with the [Document Action]({{< relref "document-action.md" >}}).*
