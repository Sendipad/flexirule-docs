---
title: Do I need FlexiRule?
weight: 40
description: A decision guide to help you determine if FlexiRule is appropriate for your organization.
---

# Do I need FlexiRule?

Not every ERPNext implementation requires a visual orchestration engine. Use this guide to determine if FlexiRule is the right investment for your organization based on your current pain points and future growth.

## You Need FlexiRule if...

### 1. Your Business Processes are Growing
As your company scales, simple automations become complex multi-stage processes. If you find yourself adding more and more "hacks" to standard DocTypes to handle new business cases, it's time for a professional logic layer.

### 2. Workflow Changes are Frequent
If your business rules change seasonally (e.g., promotional pricing) or in response to market shifts, waiting for code deployments is a competitive disadvantage. FlexiRule allows you to pivot logic in minutes.

### 3. You Manage Customer-Specific Rules
If you have multiple customers with unique validation or approval requirements, managing these through standard Python hooks leads to "spaghetti code." FlexiRule allows you to build separate, named rules for specific scenarios.

### 4. You Have Heavy Custom Scripting
If your `hooks.py` or `server_scripts` list is becoming unmanageable, FlexiRule can help you consolidate and document that logic visually.

### 5. You Need Better Auditability
If "Who changed this value?" and "Why did this rule trigger?" are common questions in your organization, FlexiRule's detailed execution logs provide the necessary transparency.

## You May NOT Need FlexiRule if...

### Your Requirements are Static
If your business logic hasn't changed in three years and your current automations work perfectly, the overhead of introducing a new tool may not be justified.

### You Have a Simple Setup
If you are using ERPNext for basic accounting and lead management without complex custom workflows, standard features are likely sufficient.

### You Have Very Few Customizations
If you only have 2 or 3 simple scripts, moving them to FlexiRule might be overkill.

## Summary Checklist

| Pain Point | Solution with FlexiRule |
| :--- | :--- |
| "I'm afraid to change code because I might break something." | **Visual Trace & Validation** |
| "I can't tell which script modified this document." | **Execution Logs** |
| "It takes too long to deploy a simple logic change." | **One-click Activation** |
| "Only our senior developer knows how the approval works." | **Visual Rule Builder** |
