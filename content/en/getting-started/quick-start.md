---
title: Quick Start
description: Build your first automation in under 5 minutes.
weight: 20
---

# Quick Start Guide

Ready to see FlexiRule in action? Follow this guide to build a simple automation that alerts you whenever a high-value Sales Invoice is created.

## 1. Create your First Rule
1. Go to **Rule List** in your desk.
2. Click **New**.
3. Fill in the basics:
   - **Rule Name**: "High Value Alert"
   - **Document Type**: "Sales Invoice"
   - **Trigger Event**: "Before Save"
4. Click **Save**.

## 2. Open the Builder
Click the **Open Rule Builder** button on the dashboard. You'll see a blank canvas with a **Start** block (Entry Action).

## 3. Add a Check (Condition)
1. Hover over the **Start** block and click the **+** icon in the **Action Zone**.
2. Search for **Condition** and add it.
3. In the configuration panel on the right:
   - Click **Add Condition**.
   - Select field: `Grand Total`.
   - Operator: `is greater than`.
   - Value: `10000`.

## 4. Add a Notification
1. Drag a connection line from the **True** (Green) port of your Check block.
2. Select **Notify** from the menu.
3. In the configuration panel:
   - **Mode**: "Toast".
   - **Message**: "💰 High value invoice detected! ID: {{ doc.name }}".

## 5. Test it
1. Click **Test Run** in the top bar.
2. Select an existing Sales Invoice with a total greater than 10,000.
3. Click **Run Test**.
4. You should see a success toast and the path highlighting in green on your canvas!

## 6. Go Live
1. Close the builder.
2. Check the **Enabled** box on the Rule document.
3. Click **Save**.

Your automation is now live and will run every time a Sales Invoice is saved!
