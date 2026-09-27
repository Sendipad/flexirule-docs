---
title: "Recipe: Validate and Block Document Submission"
description: "Learn how to build visual validation guardrails that enforce business rules using the Smart Value Selector and Stop / Error actions."
weight: 20
---

# Recipe: Validate and Block Document Submission

In ERPNext, business rules frequently require blocking document submission when critical conditions are not met—such as when an invoice exceeds a budget limit without an assigned project code.

In this recipe, you will visually configure a rule that evaluates document criteria using the **Smart Value Selector** and blocks submission with a custom error popup.

---

## Scenario Overview

**Business Goal**: Prevent submission of a **Purchase Invoice** if the invoice amount exceeds 50,000 and no Project is assigned.

- **Target DocType**: `Purchase Invoice`
- **Trigger Event**: `DocType Event` -> `Before Submit`
- **Visual Nodes**: `Start` -> `Check` -> `Stop / Error`

---

## Step-by-Step UI Instructions

### Step 1: Create the Rule Document
1. Navigate to **FlexiRule -> Rule List -> New**.
2. Set **Rule Name** to `PI - Enforce Project on Large Invoices`.
3. Set **Document Type** to `Purchase Invoice`.
4. Set **Trigger Type** to `DocType Event`.
5. Set **Trigger Event** to `Before Submit`.
6. Click **Save**, then click **Open Rule Builder**.

---

### Step 2: Configure the Check (Condition) Node
1. Hover over the **Start** node and click **+ Add Action**.
2. Select **Check** (Condition) from the action menu.
3. In the Check configuration panel on the right:
   - Set Group Logic to **ALL**.
   - Click **Add Condition**.

4. **Configure Condition 1 (Grand Total Check)**:
   - Click the left value field.
   - Type `@` to open the **Smart Value Selector**.
   - Search for `Grand Total` in the search popup.
   - Select **Purchase Invoice → Grand Total**.
   - Set the Operator dropdown to **Is Greater Than**.
   - In the right value field, enter `50000`.

5. **Configure Condition 2 (Project Assignment Check)**:
   - Click **Add Row** to add a second condition.
   - Click the left value field and type `@` to open the **Smart Value Selector**.
   - Search for `Project` in the search popup.
   - Select **Purchase Invoice → Project**.
   - Set the Operator dropdown to **Is Not Set**.

---

### Step 3: Add and Configure the Stop / Error Node
1. From the **True** (Green) outbound port of the Check node, drag a connection to a new node position.
2. Select **Stop / Error** from the action picker.
3. In the Stop / Error configuration panel:
   - Set **Mode** to `Error (Raise Validation Error)`.
   - Set **Title** to `Missing Project Assignment`.
   - Click inside the **Error Message** editor field.
   - Type `Purchase Invoice `.
   - Type `@` to open the **Smart Value Selector**, search for `Name`, and select **Purchase Invoice → Name**.
   - Type ` with total amount of `.
   - Type `@` again, search for `Grand Total`, and select **Purchase Invoice → Grand Total**.
   - Append ` exceeds 50,000 and requires a Project code before submission.`.

---

### Step 4: Verify with Visual Debugger
1. Click **Test Run** in the top action bar.
2. In the Test Run dialog, select a Purchase Invoice record with a Grand Total above 50,000 and no Project assigned.
3. Click **Run Test**.
4. Observe the visual execution path highlighted on the canvas terminating at the Stop / Error node, confirming that invalid submissions will be blocked.

---

## Key Takeaways

- **Visual Field Selection**: Use `@` or click the **Variable (@)** button in any input field to select document fields interactively.
- **Transaction Rollback**: Raising an error in `Before Submit` automatically rolls back the database transaction, keeping your data clean.
