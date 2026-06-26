---
title: Automatically Assign Documents
description: Tutorial on routing documents to users based on round-robin or specific field values.
weight: 30
---

# Tutorial: Automatically Assign Documents

In this tutorial, we will build a rule that automatically assigns a "High Priority" Support Ticket to a Senior Support Engineer.

## Business Scenario
**Objective**: Ensure that critical issues are immediately brought to the attention of the right personnel without manual intervention.
**Prerequisites**: A "Support Ticket" DocType with a "Priority" field.

## Step-by-Step Instructions

### 1. Create the Rule
1. Go to **Rule List** and click **New**.
2. **Rule Name**: "Auto-Assign Critical Tickets".
3. **Document Type**: "Support Ticket".
4. **Trigger Event**: "Before Save".
5. Click **Save** and **Open Rule Builder**.

### 2. Add Priority Check
1. Add a **Condition** node after the Entry Action.
2. Config: `priority` is `High` OR `Critical`.

### 3. Add Assignment Action
1. From the **True** branch of the Condition, add an **Update Record** action.
2. **Mode**: "Create ToDo".
3. **Assigned To**: `senior_engineer@yourcompany.com` (or use a dynamic expression to pick from a list).
4. **Description**: `High priority ticket {{ doc.name }} requires your attention.`

### 4. Update Ticket Status
1. Add an **Assignment** node after the "Create ToDo" action.
2. **Target**: `doc.status`.
3. **Operator**: `Set`.
4. **Value**: `Assigned`.

### 5. Test and Enable
1. Run a **Test Run** with a High priority ticket.
2. Verify that a ToDo is created and the ticket status changes to "Assigned".
3. Enable the rule.

## Tips and Best Practices
- **Round-Robin**: For more advanced routing, you can use a **Process Operation** that keeps track of the last assigned user in a custom DocType and picks the next one in line.
- **Notification**: Consider adding a **Notify** action (Toast) to tell the person saving the ticket that it has been automatically assigned.
