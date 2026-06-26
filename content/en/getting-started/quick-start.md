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
Click the **Open Rule Builder** button in the dashboard. You'll see a blank canvas with an **Entry Action**.

## 3. Add a Condition (Check)
1. Hover over the **Entry Action** and click the **+** icon.
2. Search for **Condition** and add it.
3. In the config panel:
   - Click **Add Condition**.
   - Select field: `grand_total`.
   - Operator: `is greater than`.
   - Value: `10000`.

## 4. Add a Notification
1. Drag a line from the **True** (Green) port of your Condition.
2. Select **Notify**.
3. In the config panel:
   - **Mode**: "Toast".
   - **Message**: "💰 High value invoice detected! ID: {{ doc.name }}".

## 5. Test it
1. Click **Test Run**.
2. Pick an existing Sales Invoice with a total > 10,000.
3. Click **Run Test**.
4. You should see a success toast and a green path on your canvas!

## 6. Go Live
Close the builder, set the Rule to **Enabled**, and click **Save**. You've just built your first FlexiRule!

---

## Common Beginner Mistakes
- **Forgetting to Enable**: A rule won't run automatically unless the "Enabled" checkbox is checked on the main Rule document.
- **Wrong Trigger Event**: If you want to update a field on the document being saved, use "Before Save". If you use "After Save", the document is already in the database and your changes might not be persisted.
- **Broken Connections**: Ensure every node in your logic is connected. An isolated node will never execute.
