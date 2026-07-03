---
title: Quick Start
description: Build your first automation in under 5 minutes.
weight: 10
---

# Quick Start Guide

Ready to see FlexiRule in action? Follow this guide to build a simple automation that alerts you whenever a high-value Sales Invoice is created.

## 1. Create your First Rule
Go to **Rule List** and click **New**.
- **Rule Name**: "High Value Alert"
- **Document Type**: "Sales Invoice"
- **Trigger Event**: "Before Save"

## 2. Open the Builder
Click the **Open Rule Builder** button. You'll see a blank canvas with a **Start** block.

## 3. Add a Check (Condition)
1. Hover over the **Start** block and click the **+** icon.
2. Search for **Check** (Condition) and add it.
3. In the configuration panel:
   - Click **Add Condition**.
   - Select field: `Grand Total`.
   - Operator: `is greater than`.
   - Value: `10000`.

## 4. Add a Notification
1. Drag a line from the **True** (Green) port of your Check block.
2. Select **Notify**.
3. In the configuration panel:
   - **Mode**: "Toast".
   - **Message**: "💰 High value invoice detected! ID: {{ doc.name }}".

## 5. Test it
1. Click **Test Run** in the builder.
2. Pick an existing Sales Invoice with a total > 10,000.
3. Click **Run Test**.
4. You should see a success message and a highlighted green path on your canvas!

## 6. Go Live
Close the builder, set the Rule to **Enabled**, and click **Save**. You've just built your first FlexiRule!

---

## Common Tips
- **Enable the Rule**: A rule won't run automatically unless the **Enabled** checkbox is checked.
- **Save First**: Always save your Rule document before opening the builder for the first time.
- **Connect the Blocks**: Ensure every block in your logic is connected. An isolated block will not run.
