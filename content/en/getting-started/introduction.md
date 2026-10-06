---
title: "Introduction to FlexiRule"
description: "Learn what FlexiRule is, why visual rules orchestration outperforms hard-coded customizations, and core concepts for Frappe / ERPNext."
weight: 20
aliases:
  - /getting-started/what-is-flexirule/
  - /getting-started/core-concepts/
  - /docs/introduction/
---

# Introduction to FlexiRule

**FlexiRule** is an enterprise-grade visual rule automation engine for Frappe and ERPNext applications. It empowers functional consultants, business analysts, and developers to design, test, and maintain complex business rules, validation workflows, and data transformations without writing fragmented Python scripts or cluttering standard Frappe hooks.

---

## Why FlexiRule?

In custom ERPNext implementations, business logic frequently gets spread across Python document hooks (`validate`, `on_submit`, `before_save`), Client Scripts, Scheduled Jobs, and custom server scripts. This fragmentation leads to:

- **Visibility Gaps**: Business stakeholders cannot easily inspect or audit current workflow rules.
- **Maintenance Bottlenecks**: Modifying simple discount calculations or approval routing requires code deployment and developer intervention.
- **Regression Risks**: Custom scripts lack visual dependency tracking, increasing the risk of broken workflows during system upgrades.

FlexiRule centralizes all dynamic business decisions into **visual rule flows** managed directly through the Frappe UI.

---

## Core Concepts

Understanding a few basic concepts will help you build rules efficiently:

### 1. Document Triggers & Events
Rules are automatically invoked when specific actions happen on a target **DocType** (e.g., Sales Order, Purchase Invoice, Lead):
- **On Validate**: Triggers during document validation before saving. Ideal for checks and field calculations.
- **On Submit**: Triggers when a document is submitted. Ideal for posting updates or sending notifications.
- **On Cancel**: Triggers when a document is cancelled.
- **Scheduled / API**: Triggers periodically on a timer or on-demand via REST API calls.

### 2. The Visual Canvas & Actions
Rules are constructed by dragging and connecting **Actions** on a visual canvas:
- **Set Value**: Assign static values, calculated formulas, or dynamic context inputs to document fields.
- **Check (Condition)**: Evaluate logical rules (`IF / ELSE`) to route execution down specific paths.
- **Query Records**: Read database records or aggregated summaries (count, sum, average) without writing custom SQL.
- **Update Record**: Modify or create related database documents across your site.
- **Notify**: Send targeted emails, alerts, or system messages to users or customer roles.
- **Repeat (Loop)**: Iterate through child table rows or fetched collections to execute downstream actions on each item.

### 3. Smart Value System
When configuring fields or condition checks inside actions, FlexiRule provides the **Smart Value Selector**—a context-aware picker allowing you to select values from:
- **Triggering Document (`@doc`)**: Current field values (e.g., `@doc.grand_total`).
- **Context Variables (`@vars`)**: Temporary workflow variables passed between actions.
- **System / Session (`@session`)**: Current logged-in user, company, or current date/time.

---

## Next Steps

- Proceed to the [Quick Start Guide]({{< relref "getting-started/quick-start.md" >}}) to build your first working rule flow in minutes.
- Learn how to navigate the canvas in [Canvas Navigation]({{< relref "using-the-builder/canvas-navigation.md" >}}).
- Explore the full list of available actions in the [Core Actions Index]({{< relref "core-actions/_index.md" >}}).
