---
title: Quick Start
description: Build your first automation in under 5 minutes.
weight: 20
---

# Quick Start Guide

Ready to see FlexiRule in action? Follow this guide to build a simple automation that sends a notification whenever a high-value Sales Invoice is created.

## 1. Create your First Rule
Go to the **Rule List** in your system and click **New**.
- **Rule Name**: "High Value Alert"
- **Apply To**: "Sales Invoice"
- **Trigger**: "Before Save"

## 2. Open the Builder
Click the **Open Rule Builder** button. You'll see a blank canvas with a **Start** block.

## 3. Add a Check
1. Hover over the **Start** block and click the **+** icon.
2. Select **Check** from the menu.
3. In the configuration panel:
   - Click **Add Condition**.
   - Select field: `Grand Total`.
   - Logic: `is greater than`.
   - Value: `10000`.

## 4. Add a Notification
1. Click the **True** (Green) connection point on your **Check** block.
2. Select **Notify**.
3. In the configuration panel:
   - **Type**: "System Alert".
   - **Message**: "💰 High value invoice detected! ID: {{ doc.name }}".

## 5. Test your Rule
1. Click the **Test Run** button at the top of the canvas.
2. Select an existing Sales Invoice from the list.
3. Click **Run**.
4. You will see a green path showing exactly how your rule executed!

## 6. Enable and Save
Close the builder, check the **Enabled** box on the Rule document, and click **Save**. Your rule is now live!

## Tips for Success
- **Enabled Status**: Remember that a rule only works if the **Enabled** checkbox is checked.
- **Connections**: Every block must be connected to the flow. A block sitting by itself on the canvas won't do anything.
- **Save Often**: While the builder saves your layout, don't forget to save the main Rule document after you close the builder.
