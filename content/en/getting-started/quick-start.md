---
title: Quick Start Guide
description: Create your first business rule in minutes.
weight: 20
---

# Quick Start Guide

Follow these steps to create and activate your first automated business rule.

## 1. Create a New Rule
1. Navigate to the **Rule** list in the FlexiRule Desk.
2. Click **New**.
3. Give your rule a name (e.g., "Auto-Approve Low Value Orders").
4. Select the **Reference DocType** (e.g., Sales Order).

## 2. Define the Trigger
In the **Triggers** section, decide when this rule should run:
- **On Save**: Runs whenever the document is saved.
- **On Submit**: Runs only when the document is submitted.
- **Scheduled**: Runs at specific intervals.

## 3. Build the Logic
Click on the **Rule Builder** tab to open the visual canvas.

1. **Add a Check**: Click the `+` icon on the **Entry Action** to add a **Check** node.
2. **Configure**: Set the check to see if `grand_total < 1000`.
3. **Add an Action**: On the `True` path, add a **Set Value** to update the `status` to "Approved".

## 4. Activate and Test
1. Save the Rule document.
2. Toggle the **Is Active** switch.
3. Create a test Sales Order to see your rule in action.
