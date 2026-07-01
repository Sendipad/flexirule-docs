---
title: Introduction
weight: 10
description: Understand how FlexiRule helps you build better business processes visually.
aliases:
  - /docs/introduction/what-is-flexirule/
---

# Introduction

FlexiRule is a visual automation engine for Frappe and ERPNext. It allows you to design and manage your business logic on a clear, visual canvas instead of writing complex code.

## Why FlexiRule?

As your business grows, your system logic often becomes scattered and hard to manage. FlexiRule centralizes this logic into "Rules" that anyone can understand and audit.

- **Visual Clarity**: See exactly how your business processes work at a glance.
- **Easy to Change**: Update your logic by moving blocks on a canvas, not by rewriting code.
- **Reliable**: Every step is tracked, making it easy to see exactly what happened and why.

## Key Concepts

### The Canvas
The canvas is where you build your rules. You drag and drop **Blocks** and connect them to define the flow of your business logic.

### Blocks
Each block represents a specific action or decision:
- **Check**: Make a decision based on data.
- **Set Value**: Update information in the system.
- **Notify**: Send an email or alert.
- **Query Records**: Find and retrieve data.

### Connections
Connections are the arrows between blocks. They tell the system which step to take next. For example, a **Check** block has two connections: one for when the check passes (True) and one for when it doesn't (False).

## Ready to start?
Head over to the [Quick Start]({{< relref "quick-start" >}}) guide to build your first rule!
