---
title: Introduction
description: An overview of FlexiRule and its core philosophy.
weight: 10
aliases:
  - /docs/getting-started/
---

# Introduction to FlexiRule

FlexiRule is a visual automation platform for the Frappe Framework. It enables business users and developers alike to design, execute, and manage complex business logic through an intuitive, node-based interface.

## Why FlexiRule?

Business logic is often buried in code, making it difficult to visualize, maintain, and audit. FlexiRule changes this by making logic **transparent** and **accessible**.

- **Visualize Your Logic**: See exactly how decisions are made in your business flows.
- **Empower Business Teams**: Allow non-developers to understand and participate in logic design.
- **Speed Up Development**: Build and deploy automation faster than writing boilerplate Python scripts.
- **Native Integration**: Works seamlessly with your existing Frappe DocTypes and security permissions.

<video src="/images/flexirule-overview-demo.webm" controls autoplay loop muted></video>

## Core Philosophy: The Rule Flow

Every automation in FlexiRule follows a simple, three-stage philosophy:

1.  **The Trigger (When)**: Defines the event that starts the rule. This could be saving a document, a specific schedule, or a manual action.
2.  **The Logic (How)**: The visual path designed in the **Rule Builder**. This includes checking conditions, querying data, and making decisions.
3.  **The Result (What)**: The final actions taken by the system, such as updating a record, sending a notification, or calling an external process.

By separating these stages, FlexiRule makes it easy to build robust automations that are easy to understand and even easier to change as your business evolves.
