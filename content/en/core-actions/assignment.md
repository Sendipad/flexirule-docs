---
title: Assignment
description: Update fields and variables to keep your data accurate.
weight: 50
---

# Assignment Action

The **Assignment** action is used to change data as your rule runs. It's the most common way to update fields on a document or store temporary information for later use.

## How it Works

Think of an Assignment as a way to say: "Set this field to this value." You can update multiple fields in a single Assignment node, and they will be processed from top to bottom.

### Targets: Where does the data go?
- **Document Fields (`doc.*`)**: These are the actual fields on your record (e.g., `doc.status`, `doc.priority`). Updates here are visible to users and saved to the database.
- **Variables (`vars.*`)**: These are temporary notes the rule keeps for itself. They disappear once the rule finishes. Great for intermediate calculations.

## When to Use

- **Updating Status**: "Set Status to 'Approved'."
- **Calculations**: "Calculate Tax as Total * 0.1."
- **Data Enrichment**: "Set the Sales Person based on the Customer's territory."
- **Temporary Flags**: "Set a variable `vars.is_vip` to 'Yes' if the customer has spent over $10,000."

## Configuration

When you add an Assignment node, you'll see a list where you can add "Assignments":

| Property | Description |
| :--- | :--- |
| **Target** | The field or variable you want to change (e.g., `doc.status`). |
| **Operator** | How to apply the change (e.g., **Set**, **Increment**, **Clear**). |
| **Value** | The new value. This can be a fixed value, another field, or a formula. |
| **Run If** | (Optional) Only perform this specific update if a certain condition is met. |

## Operators

- **Set**: Replaces the old value with a new one.
- **Clear**: Empties the field.
- **Increment / Decrement**: Adds or subtracts from a number (great for counters).
- **Toggle**: Switches a checkbox from Yes to No (or vice-versa).

## Example: Auto-Escalation
**Goal**: If a Support Ticket is marked as "Urgent," set the priority to "High" and record who did it.

1. **Target**: `doc.priority` | **Operator**: Set | **Value**: `"High"`
2. **Target**: `doc.last_updated_by` | **Operator**: Set | **Value**: `{{ frappe.session.user }}`
3. **Target**: `vars.escalation_count` | **Operator**: Increment | **Value**: `1`

## Tips for Success

- **Batching**: You don't need a separate node for every field. Group related updates (like status and date) into one node to keep your canvas clean.
- **Formulas**: You can use simple math or date functions. For example, set a "Due Date" to `today + 7 days`.
- **Top to Bottom**: Remember that rows are processed in order. You can calculate a value in the first row and then use it in the second row of the same node.

---

*Next: Learn how to send messages with the [Notify Action]({{< relref "notify-action.md" >}}).*
