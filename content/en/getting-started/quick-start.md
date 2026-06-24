---
title: Quick Start Guide
description: Create your first business rule in minutes.
weight: 20
---

# Quick Start Guide

Create and activate your first automated business rule in just a few minutes.

## 1. Start Your Rule
1. Open the **Rule** list from your sidebar.
2. Click the **New** button.
3. Name your rule (e.g., "Auto-Approve Small Orders").
4. Choose which record type triggers the rule (e.g., **Sales Order**).

## 2. Choose When it Runs
In the **Triggers** section, pick the moment the rule should start:
- **On Save**: Every time you save the record.
- **On Submit**: Only when the record is officially submitted.
- **Scheduled**: At a specific time of day or interval.

## 3. Design the Flow
Open the **Rule Builder** tab to see your visual workspace.

1. **Add a Check**: Click the `+` on the starting block and select **Condition**.
2. **Set the Rule**: Configure it to check if the `Total Amount` is less than `1,000`.
3. **Add an Action**: On the **True** (Green) path, click `+` and select **Update Record**. Set the `Status` to "Approved".

## 4. Go Live
1. **Save** your rule.
2. Turn on the **Is Active** switch.
3. Create a test record (like a Sales Order) and watch FlexiRule do the work for you!
