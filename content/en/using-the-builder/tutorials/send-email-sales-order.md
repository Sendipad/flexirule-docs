---
title: Send Email on Sales Order Submission
description: A beginner tutorial on triggering an automated email when a Sales Order is submitted.
weight: 10
---

# Tutorial: Send Email on Sales Order Submission

In this tutorial, we will create an automation that sends a "Thank You" email to a customer as soon as their Sales Order is submitted.

## Business Scenario
**Objective**: Improve customer engagement by providing instant confirmation of their order.
**Prerequisites**: A working Email Account configured in your ERPNext/Frappe site.

## Step-by-Step Instructions

### 1. Create a New Rule
1. Navigate to **Rule List** and click **New**.
2. **Rule Name**: "Customer Submission Thank You".
3. **Document Type**: "Sales Order".
4. **Trigger Event**: "On Submit".
5. Click **Save** and then click **Open Rule Builder**.

### 2. Add a Notify Action
1. On the canvas, hover over the connection point of the **Entry Action** and click the **+** icon.
2. Search for **Notify** and select it.
3. Change the node label to "Send Thank You Email".

### 3. Configure the Email
1. Click on the "Send Thank You Email" node to open the configuration panel.
2. **Mode**: Select "Email".
3. **Recipients**: Enter `{{ doc.contact_email }}`. This dynamically fetches the customer's email from the Sales Order.
4. **Subject**: `Thank you for your order! {{ doc.name }}`.
5. **Message**:
   ```html
   Hi {{ doc.customer }},<br><br>
   We've received your order <b>{{ doc.name }}</b> for a total of {{ doc.grand_total }}.<br>
   Our team is now processing it.
   ```
6. **Attach PDF**: Check this box to include the Sales Order printout.

### 4. Test the Rule
1. Click **Test Run** in the top bar.
2. Select a recent "Submitted" Sales Order.
3. Click **Run Test**.
4. Review the **Execution Trace** to ensure the path is highlighted in green.

### 5. Activate
1. Close the Rule Builder.
2. On the Rule document, toggle **Enabled** to **Yes**.
3. Click **Save**.

## Expected Result
The next time any user submits a Sales Order, the customer will receive an email automatically.

## Common Mistakes
- **Incorrect Field Name**: Using `{{ doc.email }}` instead of `{{ doc.contact_email }}`. Always use the field picker in the UI to ensure accuracy.
- **Email Account Not Set**: If your site doesn't have a default outgoing email account, the email will stay in the "Error" queue.
