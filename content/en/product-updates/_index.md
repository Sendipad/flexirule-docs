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

### Fetch Records (Experimental)
**Release Date**: October 2026  
**Status**: Experimental — not production-ready

- **What Changed**: Added a new Fetch Records mode built around Frappe's Query Builder API, with a dedicated configuration flow for selecting fields, defining filters, sorting and grouping results, and configuring retrieval options.
- **What You Can Do**: Build nested AND/OR filter conditions, choose output fields and aliases, and configure supported options such as distinct results, offset, and limits. The mode is intended to evolve separately from the existing Query List behavior.
- **Important Limitations**: Fetch Records is still experimental and should not be treated as a production-ready replacement for existing query modes. On the verified Frappe v15 Query Builder API, this path cannot enforce normal record-level read-permission filtering in the same way as `frappe.get_list`. Use a permission-filtered query mode when those checks are required. Skipping permissions should only be used when explicitly approved and accompanied by an audit reason. Dotted child-table aggregate expressions (for example, aggregating a child-row quantity through a parent query) are not supported by the current path.
- **Why It Matters**: Provides a more expressive foundation for record retrieval while making its permission and query-capability boundaries explicit during ongoing development.
- **Related Documentation**: See [Fetch Records]({{< relref "action-type/query-records/fetch-records.md" >}}) and [Query Records Action Reference]({{< relref "action-type/which-action.md" >}}).

---

## Improvements

### Sub-Rule Input/Output Contracts
**Release Date**: October 2026

- **What Changed**: Added explicit input and output contracts for callable Sub-Rules, making the values a Sub-Rule accepts and returns more visible and structured.
- **What You Can Do**: Configure declared inputs, map values from a calling rule, and inspect declared outputs for use by subsequent actions. Contract-aware configuration helps identify missing or incompatible mappings earlier.
- **Compatibility Note**: Existing Sub-Rules that rely on inferred inputs or parent execution context should continue to be assessed against the documented compatibility behavior when adopting explicit contracts.
- **Why It Matters**: Makes reusable rule components easier to understand, validate, and maintain without requiring users to infer their interface from implementation details.
- **Related Documentation**: See [Sub-Rule Action Reference]({{< relref "action-type/sub-rule.md" >}}) and [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}).

### Autocomplete Control: Navigable Field Picker
**Release Date**: October 2026

- **What Changed**: Improved the Autocomplete control used as a field picker with navigable field-selection support.
- **What You Can Do**: Browse and navigate available field choices while configuring rules, rather than relying only on manually typing field names. This is especially helpful when the picker presents a longer list of metadata-driven options.
- **Why It Matters**: Reduces friction when discovering and selecting fields in supported Rule Builder controls. The picker improves field selection; it does not itself add query operators or expand backend query capabilities.
- **Related Documentation**: See [Condition Builder]({{< relref "rule-builder/condition-builder.md" >}}), [Fetch Records]({{< relref "action-type/query-records/fetch-records.md" >}}), and [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}).

### More Consistent Selection Controls and Rule Builder Layout
**Release Date**: October 2026

- **What Changed**: Refined selection controls and tightened spacing in parts of the Rule Builder to make configuration panels more consistent and compact.
- **What You Can Do**: Move through rule configuration with a more consistent selection experience and less unnecessary visual spacing.
- **Why It Matters**: Keeps complex rule configuration easier to scan while preserving the information needed to configure actions and conditions.
- **Related Documentation**: See [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}) and [Condition Builder]({{< relref "rule-builder/condition-builder.md" >}}).

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
- **Why It Matters**: Reduces rule setup time and helps rules run only when their configured document conditions are satisfied.
- **Related Documentation**: See [Entry Action User Guide]({{< relref "action-type/entry-action.md" >}}).

### Standardized Visual Canvas Node Styling
**Release Date**: September 2026

- **What Changed**: Updated visual node styling, headers, icons, and localized summary labels across Action types on the rule builder canvas.
- **What You Can Do**: Identify node types, logic branching, and action summaries when inspecting complex rule flow diagrams.
- **Why It Matters**: Makes complex rule flows easier to read, audit, and troubleshoot visually.
- **Related Documentation**: See [Rule Builder Visual Canvas]({{< relref "rule-builder/canvas.md" >}}).

### Fast Raw Configuration View
**Release Date**: September 2026

- **What Changed**: Added a full-screen Raw Configuration modal view with optimized view transitions inside the Rule Builder.
- **What You Can Do**: Switch between visual rule controls and raw definitions without leaving the builder context.
- **Why It Matters**: Enables quick inspection and bulk editing for advanced rule administrators.
- **Related Documentation**: See [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}).

### Flexible Date & Time Calculations
**Release Date**: September 2026

- **What Changed**: Upgraded Date and Time value selectors to support relative offsets, working day calculations, and dynamic time spans.
- **What You Can Do**: Build rules with dynamic date conditions (such as `Due Date = Today + 5 Working Days`) using visual dropdown controls.
- **Why It Matters**: Simplifies automated payment reminders, SLA deadline tracking, and scheduled document processing.
- **Related Documentation**: See [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}).

---

## Compatibility & Quality Standards

- **Frappe v15 Compatibility**: Query behavior depends on the specific Frappe API used by each mode. Fetch Records remains experimental, and its documented permission and child-table aggregation limitations should be reviewed before use.
- **Existing Configurations**: Existing query modes retain their established configuration behavior; review the feature-specific documentation before migrating a workflow to Fetch Records or adopting explicit Sub-Rule contracts.
