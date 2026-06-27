---
title: Quick Start
description: Build your first automation in under 5 minutes.
weight: 20
---

# Quick Start Guide

Ready to see FlexiRule in action? Follow this guide to build a simple automation that alerts you whenever a high-value Sales Invoice is created.

## 1. Create your First Rule
Navigate to the **Rule List** and click **New**.
- **Rule Name**: "High Value Alert"
- **Document Type**: "Sales Invoice"
- **Trigger Event**: "Before Save"

## 2. Open the Builder
Click the **Open Rule Builder** button. You'll see the visual canvas with a "Start" block.

## 3. Add a "Check" Block
1. Hover over the **Start** block and click the **+** (plus) icon in the Action Zone.
2. Choose **Check** (Condition).
3. In the panel that appears:
   - Click **Add Condition**.
   - Select field: `Grand Total`.
   - Choose: `is greater than`.
   - Enter: `10000`.

## 4. Add an Alert
1. Drag a connection from the **True** (Green) side of your Check block.
2. Choose **Notify**.
3. In the panel:
   - **Message**: "High value invoice detected: {{ doc.name }}".
   - **Type**: "Toast Alert".

## 5. Test Your Rule
1. Click the **Test** button in the top bar.
2. Select an existing Sales Invoice.
3. Click **Run**.
4. You will see a green path showing exactly how your rule executed!

## 6. Save and Enable
Close the builder, check the **Enabled** box on the Rule page, and click **Save**. Your automation is now live!
