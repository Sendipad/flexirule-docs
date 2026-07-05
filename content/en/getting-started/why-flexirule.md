---
title: Why should I use FlexiRule?
weight: 20
description: Understanding the business value and agility provided by visual rules.
---

# Why should I use FlexiRule?

FlexiRule provides significant business value by transforming how you manage automation. It shifts the focus from **writing code** to **configuring business logic**, enabling your team to respond to changes with unprecedented speed.

## Business Agility

In a traditional setup, changing a business rule (e.g., "Increase discount for VIP customers") requires a developer to modify Python code, run tests, and deploy a new version of an app.

With FlexiRule, a functional consultant or administrator can:
1.  Open the **Visual Builder**.
2.  Update a **Condition** or **Assignment** block.
3.  Run a **Manual Test** to verify.
4.  **Activate** the change instantly.

## Reduced Customization Costs

FlexiRule significantly lowers the Total Cost of Ownership (TCO) for ERPNext implementations:
-   **Lower Skill Ceiling**: Functional consultants can handle 80% of automations that previously required senior developers.
-   **Faster Development**: Building logic on a canvas is significantly faster than writing, debugging, and documenting manual hooks.
-   **Easier Upgrades**: Because logic is separated from application code, upgrading ERPNext or Frappe is safer and less likely to break custom rules.

## Practical Examples

### 1. Dynamic Pricing
Automatically calculate complex discounts based on customer group, item category, and historical volume—all visible in one graph rather than hidden in multiple `price_list.py` overrides.

### 2. Multi-Stage Approvals
Build approval workflows that branch based on document value, department, or specific field changes. If the approval logic changes next month, you update the graph, not the code.

### 3. Data Validation & Cleaning
Ensure data integrity by checking complex conditions before a document is saved. Automatically normalize phone numbers or format addresses using built-in **Process** blocks.

## Visibility and Auditability

"Why did this Sales Order status change to On Hold?"

In a standard system, finding the answer involves searching through logs and code. In FlexiRule, you simply check the **Execution Log** for that specific document, which shows you the exact path the rule took on the canvas.
