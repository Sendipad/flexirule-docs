---
title: Send Email on Sales Order Submission
description: Step-by-step visual tutorial on configuring automated email notifications using the Smart Value Selector.
weight: 10
---

# Tutorial: Send Email on Sales Order Submission

In this tutorial, you will visually configure a rule that sends an automated order confirmation email with a PDF attachment whenever a Sales Order is submitted.

---

## Scenario Overview

**Business Goal**: Send instant order confirmation emails to customers upon Sales Order submission.

- **Target DocType**: `Sales Order`
- **Trigger Event**: `DocType Event` -> `On Submit`
- **Visual Nodes**: `Start` -> `Notify`

---

## Step-by-Step UI Instructions

### Step 1: Create a New Rule
1. Navigate to **FlexiRule -> Rule List -> New**.
2. Set **Rule Name** to `Send Order Confirmation Email`.
3. Set **Document Type** to `Sales Order`.
4. Set **Trigger Event** to `On Submit`.
5. Click **Save** and open the **Rule Builder**.

---

### Step 2: Add and Configure the Notify Node
1. Hover over the **Start** node's connection port and click **+ Add Action**.
2. Select **Notify** from the action picker.
3. In the Notify configuration panel on the right:
   - Set **Channel** to `Email`.

4. **Configure Recipients**:
   - Click the **Recipients** field.
   - Type `@` to open the **Smart Value Selector**.
   - Search for `Contact Email` and select **Sales Order → Contact Email**.

5. **Configure Subject**:
   - Click the **Subject** field.
   - Type `Thank you for your order! Order #`.
   - Type `@` to open the **Smart Value Selector**, search for `Name`, and select **Sales Order → Name**.

6. **Configure Message Body**:
   - Click inside the **Message** editor.
   - Type `Dear `.
   - Type `@`, search for `Customer Name`, and select **Sales Order → Customer Name**.
   - Type `, thank you for your order #`.
   - Type `@` and select **Sales Order → Name**.
   - Type ` for a total amount of `.
   - Type `@` and select **Sales Order → Grand Total**.
   - Type `. Our team is now processing your order.`.

7. **Attach PDF Printout**:
   - Check the **Attach PDF** box.
   - Select your preferred **Print Format** from the dropdown menu.

---

### Step 3: Test and Activate
1. Click **Test Run** in the top action bar.
2. Select a submitted Sales Order record and click **Run Test**.
3. Verify that the visual execution path highlights in green and displays the rendered email preview.
4. Close the builder, enable the rule, and click **Save**.
