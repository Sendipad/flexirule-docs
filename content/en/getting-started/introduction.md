---
title: Introduction
description: Welcome to FlexiRule, the visual logic platform for Frappe.
weight: 10
---

# Introduction to FlexiRule

FlexiRule is a high-performance, visual automation engine built specifically for the Frappe Framework. It allows you to design, execute, and manage complex business logic through an intuitive drag-and-drop interface, eliminating the need for scattered boilerplate code.

## Why use FlexiRule?

In traditional Frappe development, business logic often ends up buried in various Python files and hooks. As your system grows, this can lead to "hook-hell"—where it's difficult to see the full picture of how your logic flows, making debugging and maintenance a challenge.

FlexiRule solves this by providing a **visual, graph-based orchestration layer**. Instead of writing hidden code, you design your business logic visually.

### Key Benefits
- **Visual Clarity**: See exactly how your logic flows at a glance.
- **Centralized Logic**: Manage all your rules in one place rather than searching through code.
- **Safe Customization**: Business users can participate in logic design without risking system stability.
- **Deep Integration**: Built natively into Frappe, FlexiRule has direct access to your DocTypes and data.

## Core Concepts

FlexiRule is built around three main ideas:

### 1. The Rule
A **Rule** defines **when** something should happen. For example, a rule can trigger when a Sales Order is submitted, on a daily schedule, or even manually via a button.

### 2. The Action
An **Action** is a single step in your logic flow. This could be a simple condition check, sending an email, or updating a field in a document. You connect these actions on the canvas to build your workflow.

### 3. The Process
A **Process** is a reusable module that handles more complex tasks. While rules define the "when" and "how," processes handle the technical "heavy lifting."

## Visual Rule Builder

The Visual Rule Builder is where you'll spend most of your time. It’s a powerful canvas where what you see is exactly what executes.

![Rule Builder Canvas](/flexirule-docs/landing-page/rule_builder.png)

---

*Ready to start building? Move on to the [Quick Start]({{< relref "quick-start.md" >}}) guide.*
