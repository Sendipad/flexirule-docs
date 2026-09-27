---
title: Automatically Assign Documents
description: Visual step-by-step tutorial on routing documents to specific team members based on field selections.
weight: 30
---

# Tutorial: Automatically Assign Documents

In this tutorial, you will visually build a rule that automatically assigns high-priority Support Tickets to a Senior Engineer and updates ticket status.

---

## Scenario Overview

**Business Goal**: Instantly assign critical support tickets to senior staff without manual triage.

- **Target DocType**: `Support Ticket`
- **Trigger Event**: `DocType Event` -> `Before Save`
- **Visual Nodes**: `Start` -> `Check` -> `Update Record` -> `Set Value`

---

## Step-by-Step UI Instructions

### Step 1: Create the Rule
1. Go to **FlexiRule -> Rule List -> New**.
2. Set **Rule Name** to `Auto-Assign Critical Tickets`.
3. Set **Document Type** to `Support Ticket`.
4. Set **Trigger Event** to `Before Save`.
5. Click **Save** and open the **Rule Builder**.

---

### Step 2: Configure the Check Node for Ticket Priority
1. Connect a **Check** (Condition) node from the **Start** node.
2. In the Check configuration panel:
   - Set Group Logic to **ANY**.
   - Click the first value field, type `@` to open the **Smart Value Selector**, and select **Support Ticket → Priority**.
   - Set Operator to **Equals**, enter `High`.
   - Click **Add Condition**.
   - Select **Support Ticket → Priority**, set Operator to **Equals**, enter `Critical`.

---

### Step 3: Add Update Record Node (Create Assignment)
1. From the **True** outbound port of the Check node, connect an **Update Record** action node.
2. In the Update Record configuration panel:
   - Set **Target Operation** to `Create ToDo / Assignment`.
   - In the **Assigned To** field, enter `senior_engineer@yourcompany.com` or use `@` to select a user field.
   - Click the **Description** field, type `Critical issue requires attention for ticket `, type `@` to open the **Smart Value Selector**, and select **Support Ticket → Name**.

---

### Step 4: Update Ticket Status using Set Value
1. From the outbound port of the Update Record node, connect a **Set Value** node.
2. In the Set Value configuration panel:
   - Click **Target Path**, type `@`, and select **Support Ticket → Status**.
   - Set **Operator** to `Set`.
   - In the **Value** field, enter `Assigned`.

---

### Step 5: Test and Enable
1. Click **Test Run**, select a High priority ticket, and click **Run Test**.
2. Verify the visual path highlights in green, creating a ToDo and setting ticket status to Assigned.
3. Close the builder, enable the rule, and save.
