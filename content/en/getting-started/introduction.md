---
title: Introduction
weight: 10
description: A high-level overview of FlexiRule and its role in the Frappe ecosystem.
---

# Introduction to FlexiRule

FlexiRule is a **Visual Rule Engineering & Orchestration Engine** built specifically for the Frappe Framework and ERPNext. It provides a visual, graph-based layer that allows you to design, execute, and manage complex business logic without writing scattered Python code.

## The Problem: "Hook Hell"

As ERPNext implementations grow, developers typically resort to:
1.  **Python Hooks**: Hidden in multiple custom apps.
2.  **Server Scripts**: Hard to version control and test.
3.  **Client Scripts**: Fragmented logic across the UI.

This leads to **Hook Hell**, where it's unclear which logic runs first, why a document was modified, or how to change a process without breaking unrelated features.

## The Solution: Visual Orchestration

FlexiRule sits as a middle layer between the Frappe Framework and your business processes. Instead of writing code, you build **Rules** on a visual canvas.

-   **Deterministic**: You define the exact execution path.
-   **Observable**: Every step is logged and traceable on the canvas.
-   **Safe**: Built-in validation and cycle detection prevent system instability.

## Why Use FlexiRule?

FlexiRule shifts the focus from **writing code** to **configuring business logic**, enabling your team to respond to changes with speed.

-   **Business Agility**: Functional consultants can update rules instantly without developer deployments.
-   **Reduced Costs**: Lower skill ceiling for 80% of automations.
-   **Easier Upgrades**: Logic is separated from application code, making system upgrades safer.
-   **Full Visibility**: Execution logs show the exact path a document took on the canvas.
