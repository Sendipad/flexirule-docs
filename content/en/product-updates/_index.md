---
title: Product Updates
weight: 15
description: Plain-language release notes, feature highlights, usability enhancements, and user-facing improvements in FlexiRule.
---

Welcome to the **FlexiRule Product Updates** hub. Here, process managers, administrators, and business users can discover recent feature additions, usability enhancements, and operational improvements in FlexiRule—explained in clear, non-technical language.

---

## Features

### Native RuleFlow Workspace & Desk Integration
**Release Date**: October 2026

- **What Changed**: FlexiRule now features a dedicated RuleFlow Workspace integrated directly into the Frappe Desk navigation menu. Redundant setup shortcuts were removed to keep the workspace clean and focused.
- **What You Can Do**: Access active rules, monitor execution counts, view system connections, and trigger rule creation directly from your primary desk workspace without navigating through complex settings.
- **Why It Matters**: Provides a centralized, distraction-free dashboard for monitoring business automation and rule flow health.
- **Related Documentation**: See [Getting Started & Workspace Overview]({{< relref "getting-started/_index.md" >}}).

---

## Improvements

### Enhanced Query Records Builder & Caching Controls
**Release Date**: October 2026

- **What Changed**: Streamlined the Query Records builder interface, clarified dynamic document type selection, and improved single-record caching strategies.
- **What You Can Do**: Select between standard, cached, and single-record retrieval modes when querying dynamic Frappe document types in rule workflows.
- **Why It Matters**: Prevents configuration errors when querying variable record types and ensures fast, predictable data access.
- **Related Documentation**: See [Query Records Action Reference]({{< relref "action-type/which-action.md" >}}).

### Simplified Entry Action Configuration
**Release Date**: October 2026

- **What Changed**: Redesigned the Entry Action configuration screen with clear visual trigger indicators, step-by-step guidance, and refined document event evaluation semantics.
- **What You Can Do**: Configure trigger conditions (such as running on save, change, or submit) using visual dropdown selectors without writing code or raw expression syntax.
- **Why It Matters**: Reduces rule setup time and guarantees rules trigger only when specific document conditions are satisfied.
- **Related Documentation**: See [Entry Action User Guide]({{< relref "action-type/entry-action.md" >}}).

### Standardized Visual Canvas Node Styling
**Release Date**: September 2026

- **What Changed**: Updated visual node styling, headers, icons, and localized summary labels across all Action types on the rule builder canvas.
- **What You Can Do**: Instantly identify node types, logic branching, and action summaries when inspecting complex rule flow diagrams.
- **Why It Matters**: Makes complex rule flows easier to read, audit, and troubleshoot visually.
- **Related Documentation**: See [Rule Builder Visual Canvas]({{< relref "rule-builder/canvas.md" >}}).

### Fast Raw Configuration View
**Release Date**: September 2026

- **What Changed**: Added a full-screen Raw Configuration modal view with optimized view transition speeds inside the Rule Builder.
- **What You Can Do**: Switch between visual rule controls and full raw definitions in less than 50 milliseconds.
- **Why It Matters**: Enables quick inspection and bulk editing for advanced rule administrators without leaving the builder context.
- **Related Documentation**: See [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}).

### Flexible Date & Time Calculations
**Release Date**: September 2026

- **What Changed**: Upgraded Date and Time value selectors to support relative offsets, working day calculations, and dynamic time spans.
- **What You Can Do**: Build rules with dynamic date conditions (such as `Due Date = Today + 5 Working Days`) using visual dropdown controls.
- **Why It Matters**: Simplifies automated payment reminders, SLA deadline tracking, and scheduled document processing.
- **Related Documentation**: See [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}).

---

## Compatibility & Quality Standards

- **Frappe v15 Verification**: Confirmed full database query execution and transaction compatibility across Frappe v15.121+ environments.
- **Seamless Upgrades**: All updates are fully non-breaking and backward-compatible with existing FlexiRule v1.0 rule definitions.
