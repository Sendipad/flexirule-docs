---
title: What is FlexiRule?
weight: 10
description: A high-level overview of FlexiRule and its role in the Frappe ecosystem.
---

# What is FlexiRule?

FlexiRule is a **Visual Rule Engineering & Orchestration Engine** built specifically for the Frappe Framework and ERPNext. It provides a visual, graph-based layer that allows you to design, execute, and manage complex business logic without writing scattered Python code.

In modern enterprise systems, business logic often evolves into a fragmented web of Python hooks, server scripts, and custom app overrides. This "technical debt" makes execution order difficult to track, debugging nearly impossible, and system upgrades risky. FlexiRule changes this paradigm by centralizing logic into a visual, auditable orchestration layer.

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
-   **Safe**: Built-in validation, cycle detection, and sandboxing prevent system instability.

## Role in the Ecosystem

FlexiRule is not a replacement for Frappe; it is an enhancement. It leverages standard Frappe features—like DocTypes, Events, and Permissions—while providing a superior way to organize the logic that connects them.

Whether you are automating a simple notification or a multi-stage credit approval process, FlexiRule provides the tools to build it visually and manage it professionally.
