---
title: Quick Start
description: Build your first automation in under 5 minutes.
weight: 20
---

# Quick Start Guide

Ready to see FlexiRule in action? Follow this guide to build a simple automation that alerts you whenever a high-value Sales Invoice is created.

## 1. Create your First Rule
Go to **Rule List** and click **New**.
- **Rule Name**: `High Value Alert`
- **Document Type**: `Sales Invoice`
- **Trigger Event**: `Before Save`

## 2. Open the Builder
Click the **Open Rule Builder** button. You'll see a blank canvas with a **Start** block.

## 3. Add a Check (Condition)
1. Click the **+** icon on the **Start** block.
2. Select **Check**.
3. In the configuration panel:
   - Click **Add Condition**.
   - Select field: `grand_total`.
   - Operator: `is greater than`.
   - Value: `10000`.

## 4. Add a Notification
1. Drag a line from the **True** (Green) port of your Check block.
2. Select **Notify**.
3. In the configuration panel:
   - **Mode**: `Toast`.
   - **Message**: `💰 High value invoice detected! ID: {{ doc.name }}`.

## 5. Test it
1. Click **Test Run** in the top bar.
2. Pick an existing Sales Invoice with a total > 10,000.
3. Click **Run Test**.
4. You should see a success toast and the logic path highlighted in green on your canvas!

## 6. Go Live
Close the builder, set the Rule to **Enabled**, and click **Save**. You've just built your first FlexiRule!

---

### Pro Tips
- **Always Enable**: A rule only runs automatically if the **Enabled** checkbox is checked.
- **Visual Paths**: Use the execution logs to see exactly why a rule followed a specific path.
- **Before vs After**: Use `Before Save` to modify fields on the current document, and `After Save` for actions that should happen after the record is finalized (like sending emails).
