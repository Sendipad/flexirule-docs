---
title: Manager Approval for Large Purchase Orders
description: Step-by-step visual guide to enforcing manager approval thresholds on Purchase Orders.
weight: 20
---

# Tutorial: Manager Approval for Large Purchase Orders

In this tutorial, you will visually construct a rule that blocks submission of Purchase Orders above $10,000 unless manager approval has been recorded.

---

## Scenario Overview

**Business Goal**: Prevent unauthorized large purchases by enforcing manager sign-off prior to submission.

- **Target DocType**: `Purchase Order`
- **Trigger Event**: `DocType Event` -> `Before Submit`
- **Visual Nodes**: `Start` -> `Check (Value)` -> `Check (Approval)` -> `Stop / Error`

---

## Step-by-Step UI Instructions

### Step 1: Create the Rule Document
1. Go to **FlexiRule -> Rule List -> New**.
2. Set **Rule Name** to `PO - Manager Approval Threshold`.
3. Set **Document Type** to `Purchase Order`.
4. Set **Trigger Event** to `Before Submit`.
5. Click **Save** and open the **Rule Builder**.

---

### Step 2: Check Purchase Order Value Threshold
1. Connect a **Check** node from the **Start** node.
2. In the Check configuration panel:
   - Click the left value field and type `@` to open the **Smart Value Selector**.
   - Search for `Grand Total` and select **Purchase Order → Grand Total**.
   - Set Operator to **Is Greater Than**.
   - In the right value field, enter `10000`.

---

### Step 3: Check Manager Approval Status
1. From the **True** outbound port (orders > $10,000), connect a second **Check** node.
2. In the configuration panel:
   - Click the left value field, type `@`, and select **Purchase Order → Manager Approved**.
   - Set Operator to **Equals**.
   - In the right value field, select or enter `No` (or `0`).

---

### Step 4: Add Stop / Error Validation Message
1. From the **True** outbound port of the second Check node (orders > $10,000 AND not approved), connect a **Stop / Error** node.
2. In the Stop / Error configuration panel:
   - Set **Mode** to `Error (Raise Validation Error)`.
   - Set **Title** to `Approval Required`.
   - In the **Message** field, type `Purchase Order `, type `@` to select **Purchase Order → Name**, and append ` exceeds $10,000 and requires Manager Approval before submission.`.

---

### Step 5: Verify Logic Flow
1. Click **Test Run** in the header action bar.
2. Test a $5,000 Purchase Order -> Execution bypasses checks cleanly.
3. Test a $15,000 unapproved Purchase Order -> Execution halts at Stop / Error.
4. Enable the rule and save.
