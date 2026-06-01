---
title: "Introduction"
description: "Advanced Visual Rule Engine & Orchestration for Frappe and ERPNext."
lead: "FlexiRule is a high-performance visual logic layer that transforms how you build and manage business processes in Frappe applications."
date: 2024-03-20T00:00:00+00:00
lastmod: 2024-03-20T00:00:00+00:00
draft: false
weight: 1
---

FlexiRule provides a powerful visual interface for orchestrating complex business logic in Frappe and ERPNext. It moves logic from scattered code hooks into a centralized, observable, and auditable visual graph.

{{< grid >}}
{{< card title="Centralized Logic" href="builder/rule_builder/#centralized-logic" >}}
Move rules out of scattered `.py` files into a single, auditable dashboard for better visibility.
{{< /card >}}
{{< card title="No-Code Configuration" href="builder/rule_builder/#no-code-configuration" >}}
Custom UI controls allow complex logic setup without writing code, powered by JSON schemas.
{{< /card >}}
{{< card title="Explicit Execution" href="builder/rule_builder/#explicit-execution" >}}
Connections define deterministic paths, ensuring you always know exactly how your logic flows.
{{< /card >}}
{{< /grid >}}

## Why FlexiRule?

In modern enterprise systems, business logic often evolves into a fragmented web of Python hooks scattered across multiple custom applications. This technical debt lead to "hook-hell," where execution order is implicit, debugging is difficult, and upgrades become risky.

FlexiRule changes this paradigm by providing a **visual, graph-based orchestration layer**. Instead of writing hidden code, you design executable business logic visually — with full control, observability, and safety.

## Core Concepts

FlexiRule is built around three primary components that define how your business logic is structured and executed.

### 1. The Rule
Defines **when** logic should trigger. Rules can be tied to DocType Events (like `on_update` or `after_insert`), Schedulers, or manual Callables.

### 2. The Action
Represents a **node** in the visual graph. Each action is a specific step in your business process, such as a condition check, a notification, or a data transformation.

### 3. The Process
The code-backed reusable modules that perform the actual heavy lifting. Processes are modular and can be used across multiple different rules.

## Quick Start

Get FlexiRule installed and running in your Frappe environment in just a few steps:

{{< steps >}}
{{< step number="1" title="Download the App" >}}
Fetch the FlexiRule repository using the Bench CLI.
```bash
bench get-app flexirule https://github.com/Sendipad/flexirule.git
```
{{< /step >}}

{{< step number="2" title="Install to Site" >}}
Install the application onto your specific Frappe site.
```bash
bench --site [your-site] install-app flexirule
```
{{< /step >}}

{{< step number="3" title="Build Assets" >}}
Compile the necessary frontend assets for the visual builder.
```bash
bench build --app flexirule
```
{{< /step >}}
{{< /steps >}}

{{< info >}}
After installation, you can access the FlexiRule Dashboard from your Frappe Desk to begin building your first rule.
{{< /info >}}

## Visual Tour

The Visual Rule Builder is the canonical representation of FlexiRule logic — what you see is exactly what executes.

![Visual Rule Builder](/flexirule-docs/landing-page/rule_builder.png)

*Declarative, deeply nested condition trees with deterministic evaluation ensure your business logic remains clear and maintainable.*
