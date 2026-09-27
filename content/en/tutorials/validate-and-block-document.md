---
title: "Recipe: Validate and Block Document Submission"
description: "Learn how to build validation guardrails that enforce business rules and prevent invalid document submission."
weight: 20
---

# Recipe: Validate and Block Document Submission

In ERPNext, business rules frequently require blocking document submission when critical conditions are not met—such as when a customer exceeds their credit limit, required fields are missing, or posting dates fall into a closed fiscal period.

In this recipe, you will build a rule that evaluates document criteria and raises a user-facing validation error using the **Stop / Error** action.

---

## Scenario Overview

**Business Need**: Prevent submission of a **Purchase Invoice** if the invoice amount exceeds 50,000 and no project code is assigned (`doc.project` is empty).

- **Target DocType**: `Purchase Invoice`
- **Trigger Event**: `DocType Event` -> `Before Submit`
- **Actions Used**: `Check` (Condition) -> `Stop / Error`

---

## Step-by-Step Configuration

### Step 1: Create the Rule
1. Navigate to **FlexiRule -> Rule List -> New**.
2. Set **Rule Name**: `"PI - Enforce Project on Large Invoices"`.
3. Set **Document Type**: `"Purchase Invoice"`.
4. Set **Trigger Type**: `"DocType Event"`.
5. Set **Trigger Event**: `"Before Submit"`.
6. Click **Save**, then click **Open Rule Builder**.

### Step 2: Configure the Check (Condition) Node
1. Hover over the **Start** node and click **+ Add Action**.
2. Select **Check** (Condition).
3. In the Check configuration panel:
   - Group Logic: `ALL`
   - **Condition 1**: `@doc.grand_total` `is greater than` `50000`
   - **Condition 2**: `@doc.project` `is not set`

### Step 3: Add the Stop / Error Terminal Node
1. From the **True** port (Green) of the Check node, drag a connection to a new action.
2. Select **Stop / Error**.
3. In the Stop / Error configuration panel:
   - **Mode**: `Error (Raise Validation Error)`
   - **Title**: `"Missing Project Assignment"`
   - **Error Message**:
     ```text
     Purchase Invoice {{ doc.name }} (Amount: {{ doc.grand_total }}) exceeds 50,000 and requires a Project code before submission.
     ```

### Step 4: Test in Debugger
1. Click **Test Run** in the header.
2. Select a Purchase Invoice document with `grand_total = 75000` and `project = ""` (empty).
3. Click **Run Test**.
4. Observe the execution path highlighted in red leading to the Stop / Error node, confirming that submission will be blocked.

---

## Key Takeaways

- **Transaction Safety**: Raising an error in `Before Submit` or `Validate` causes a database transaction rollback, keeping invalid records out of your database.
- **Dynamic Messaging**: Use Smart Value variables (`{{ doc.name }}`, `{{ doc.grand_total }}`) in error templates to provide actionable guidance to users.
