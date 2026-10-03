---
title: Rule Configuration & Trigger Setup
description: Learn how to set up global rule parameters, target DocTypes, trigger events, and gatekeeper conditions.
weight: 30
---

# Rule Configuration & Trigger Setup

Before designing your flow on the visual canvas, define the global metadata and execution triggers for your rule in **Rule Configuration**.

---

## Accessing Rule Configuration

You can access rule configuration settings at any time:
- **Rule Document**: Open the Rule record in Frappe.
- **Rule Builder Canvas**: Click **Setup / Configuration** <i class="fa fa-cog"></i> in the top action bar or double-click the **Start Node** <i class="fa fa-play"></i>.

---

## Global Setup Parameters

### 1. Basic Rule Metadata
- **Rule Name**: A unique, descriptive business title (e.g. `Auto Approve Low Value Sales Orders`).
- **Target DocType**: The Frappe document type this rule applies to (e.g. `Sales Order`, `Purchase Invoice`, `Customer`).

### 2. Trigger Events (When the Rule Runs)
Select when FlexiRule wakes up to evaluate the rule:

| Trigger Event | Execution Timing | Ideal Use Case |
| :--- | :--- | :--- |
| **Before Save** | Fires immediately before the document is saved to the database. | Field calculations, input validations, and value assignments. |
| **After Save** | Fires immediately after the document is saved. | Notifications, audit logging, and downstream document creation. |
| **Before Submit** | Fires before document submission. | Pre-submission approval checks and blocking validation errors. |
| **After Submit** | Fires after document submission. | Post-submission ledger updates or external system sync. |
| **On Cancel** | Fires when a submitted document is cancelled. | Reversing actions or clearing status flags. |
| **On Trash** | Fires before a record is deleted. | Preventing accidental deletion or logging deletion events. |
| **Scheduled** | Fires automatically on a defined time schedule (e.g. Daily, Hourly). | Periodic background jobs, overdue checks, and summary reports. |
| **Manual / Event** | Triggered on-demand via custom buttons or external API calls. | User-initiated workflows. |

### 3. Trigger Condition (Fast Gatekeeper Check)
The **Trigger Condition** is an optional pre-check evaluated at the entry point.
- **Purpose**: If the trigger condition evaluates to `False`, FlexiRule halts execution before loading the rule canvas or evaluating downstream action nodes.
- **Example**: `@doc.grand_total > 5000 AND @doc.docstatus == 0`
- **Performance Benefit**: Prevents unnecessary rule executions for irrelevant documents, keeping your system fast.

### 4. Rule Priority & Execution Order
When multiple active rules share the same Target DocType and Trigger Event, **Priority** dictates execution sequence:
- Higher priority numbers run before lower priority numbers (e.g. Priority `10` runs before Priority `1`).
- **Best Practice**: Give calculation and data assignment rules higher priority than notification rules so notifications contain updated values.
