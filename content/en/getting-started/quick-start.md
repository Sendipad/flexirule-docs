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
- **Applies to**: "Sales Invoice"
- **Run when**: "Before Save"

## 2. Open the Builder
Click the **Open Rule Builder** button. You'll see a blank canvas with a **Start** block.

## 3. Add a Check (Condition)
1. Hover over the **Start** block and click the **+** icon.
2. Select **Check (Condition)**.
3. In the settings panel:
   - Click **Add Row**.
   - Choose: `Grand Total`.
   - Select: `is greater than`.
   - Enter: `10000`.

## 4. Add a Notification
1. Drag a line from the **Yes** (Green) port of your Check block.
2. Select **Notify**.
3. In the settings panel:
   - **Type**: "Pop-up Message".
   - **Message**: "💰 High value invoice detected! ID: {{ doc.name }}".

## 5. Test it
1. Click **Test Run** at the top of the canvas.
2. Select an existing Sales Invoice with a total over 10,000.
3. Click **Run Test**.
4. You should see a success message and the path on your canvas will light up!

## 6. Save and Enable
Close the builder, check the **Enabled** box on the main page, and click **Save**. Your automation is now live!

---

### Tips for Success
- **Remember to Enable**: Your rule won't run automatically until you check the **Enabled** box.
- **Choose the Right Moment**: If you want to change a value on the record being saved, use "Before Save".
- **Keep it Connected**: Make sure all your blocks are connected by lines, or they won't know when to run.
