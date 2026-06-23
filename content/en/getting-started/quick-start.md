---
title: Quick Start Guide
description: Create your first automated business rule in minutes.
weight: 20
---

# Quick Start Guide

Ready to build your first automation? Follow these steps to create a simple rule that automatically approves low-value Sales Orders.

## 1. Create a New Rule
1.  Search for **Rule** in the Frappe search bar and open the **Rule List**.
2.  Click the **New** button.
3.  **Name**: Enter a descriptive name (e.g., "Auto-Approve Small Orders").
4.  **Reference DocType**: Select **Sales Order**.

## 2. Set the Trigger
The trigger tells FlexiRule *when* to check your logic.
1.  In the **Triggers** section, click **Add Row**.
2.  Set the **Trigger Type** to **Event**.
3.  Set the **Event** to **Before Submit**.

## 3. Build the Logic
Now, let's define the "intelligence" of your rule using the **Rule Builder**.

1.  Click the **Rule Builder** tab at the top of the page.
2.  **Add a Condition**: Hover over the bottom connection point of the **Entry Action** node. Click the `+` icon that appears (the **Action Zone**) and select **Condition**.
3.  **Configure the Condition**:
    - Click on the new Condition node to open its settings.
    - Set the check to: `doc.grand_total < 500`.
    - Click **Apply**.
4.  **Add the Action**:
    - Hover over the **True** (green) connection point of your Condition node.
    - Click the `+` icon and select **Document Action** (labeled as **Update Record**).
    - In the configuration panel, set the operation to **Update Existing**.
    - Under **Assignments**, set the `status` field to `Approved`.

## 4. Activate and Test
1.  Click **Save** on the Rule document.
2.  Toggle the **Is Active** switch at the top right to **On**.
3.  Create a new **Sales Order** with a total under 500 and try to submit it. Your rule will automatically approve it!

---
**Next Step**: Learn more about the [Rule Builder]({{< relref "using-the-builder/canvas-navigation.md" >}}) interface.
