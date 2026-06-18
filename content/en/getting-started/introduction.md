---
title: Introduction
description: What is FlexiRule and why should you use it?
weight: 10
---

# Why FlexiRule?

FlexiRule is a high-performance, visual automation engine for the Frappe Framework. It allows you to design, execute, and manage complex business logic without writing boilerplate code.

In modern enterprise systems, business logic often evolves into a fragmented web of Python hooks scattered across multiple custom applications. This technical debt leads to "hook-hell," where execution order is implicit, debugging is difficult, and upgrades become risky.

FlexiRule changes this paradigm by providing a **visual, graph-based orchestration layer**. Instead of writing hidden code, you design executable business logic visually — with full control, observability, and safety.

## Core Concepts

FlexiRule is built around three primary components that define how your business logic is structured and executed.

### 1. The Rule
Defines **when** logic should trigger. Rules can be tied to DocType Events (like `on_update` or `after_insert`), Schedulers, or manual Callables.

### 2. The Action
Represents a **node** in the visual graph. Each action is a specific step in your business process, such as a condition check, a notification, or a data transformation.

### 3. The Process
The code-backed reusable modules that perform the actual heavy lifting. Processes are modular and can be used across multiple different rules.
