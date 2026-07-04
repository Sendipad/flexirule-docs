---
title: Quick Start
description: Build your first automation in under 5 minutes.
weight: 20
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

## 3. Add a Check
1. Hover over the **Start** block and click the **+** icon in the **Action Zone**.
2. Select **Check**.
3. In the configuration panel:
   - Click **Add Condition**.
   - Select field: `Grand Total`.
   - Choose: `is greater than`.
   - Enter: `10000`.

## 4. Add a Notification
1. Click and drag a line from the **True** (Green) side of your **Check** block.
2. Select **Notify**.
3. In the configuration panel:
   - **Message**: "High value invoice detected! ID: {{ doc.name }}".

## 5. Test it
1. Click **Test Run** in the top toolbar.
2. Select an existing Sales Invoice with a total greater than 10,000.
3. Click **Run Test**.
4. You will see a success message and a green path highlighting the steps taken on your canvas!

## 6. Go Live
Close the builder, check the **Enabled** box on the Rule page, and click **Save**. Your rule is now active!

---

### Tips for Success
- **Enable the Rule**: Rules only run automatically when the **Enabled** checkbox is checked.
- **Save Before Testing**: Always save your changes before running a test to ensure you are testing the latest version.
- **Check Your Connections**: Make sure all your blocks are connected. A block that isn't connected to the **Start** block will not run.
