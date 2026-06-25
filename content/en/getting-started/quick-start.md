---
title: Quick Start Guide
description: Create your first business rule in minutes.
weight: 20
---

# Your First Rule

Let's build a simple rule: **"If a Sales Order is over $1,000, mark it for review."**

## 1. Create the Rule
1. Go to the **Rule** list in your Desk.
2. Click **New**.
3. Name it: `High Value Order Review`.
4. Set the **Reference DocType** to `Sales Order`.

## 2. Set the Trigger
We want this to run every time someone saves an order.
1. In the **Triggers** section, ensure **On Save** is selected.

## 3. Build the Path
Click the **Rule Builder** tab at the top to open the canvas.

1. **Add a Check**: Hover over the line coming from the **Entry Action** (the green start node) and click the `+` icon. Select **Condition**.
2. **Configure the Check**: In the panel that opens, set it to check if `Grand Total` is `Greater than` `1000`.
3. **Add an Action**: On the **True** (green) path coming out of your condition, click `+` and select **Update Record**.
4. **Set the Update**: Choose the operation **Update Existing**. Set the `Status` field to `Pending Review`.

## 4. Activate
1. Click **Save** on the Rule document.
2. Switch the **Is Active** toggle to **On**.

**That's it!** Now, whenever a Sales Order over $1,000 is saved, FlexiRule will automatically change its status to "Pending Review".
