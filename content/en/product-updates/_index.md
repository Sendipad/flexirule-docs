---
title: Product Updates
weight: 15
description: Plain-language release notes, feature highlights, usability enhancements, and user-facing improvements in FlexiRule.
---

{{< product_updates_checkpoint >}}

Welcome to the **FlexiRule Product Updates** center. This page provides non-technical, business-focused release notes for FlexiRule. Here, business analysts, process owners, administrators, and rule builders can learn what changed in recent releases, what new capabilities are available, and why they matter.

---

## Recent Updates

### Native RuleFlow Workspace & Streamlined Navigation
**Publication Date**: October 4, 2026
**Target Release**: FlexiRule v1.0.4
**Source Commits**: [`1c32acc`](https://github.com/Sendipad/flexirule/commit/1c32acc451ff13950c3d5125a114cf3b59dfa01b), [`7005ca1`](https://github.com/Sendipad/flexirule/commit/7005ca1), [`4c226ca`](https://github.com/Sendipad/flexirule/commit/4c226ca)

- **What Changed**: Introduced a dedicated, native RuleFlow Workspace directly inside the Frappe Desk. Upgraded the Rule List view and removed redundant permission cards to streamline workspace navigation. Added integrated connection statistics and health indicators.
- **What You Can Now Do**: Quickly access all active rules, monitor execution counts, view system connections, and create new rule flows directly from your main desk navigation without clicking through multi-level setup menus.
- **Why It Matters**: Provides a centralized, distraction-free control center for rule management and system monitoring.
- **Related Documentation**: See [Getting Started & Workspace Overview]({{< relref "getting-started/_index.md" >}}).

---

### Enhanced Query Records Builder & Dynamic Fetch Strategies
**Publication Date**: October 2, 2026
**Target Release**: FlexiRule v1.0.3
**Source Commits**: [`b61619b`](https://github.com/Sendipad/flexirule/commit/b61619b), [`c8cb5c6`](https://github.com/Sendipad/flexirule/commit/c8cb5c6), [`c60c7d7`](https://github.com/Sendipad/flexirule/commit/c60c7d7)

- **What Changed**: Upgraded the Query Records configuration UI, introduced clearer variable controls (`isVariableSyntax`), refined dynamic DocType validation, and optimized single-document caching strategies.
- **What You Can Now Do**: Easily select between standard, cached, latest, and single record fetch strategies when referencing dynamic Frappe DocTypes in rule workflows.
- **Why It Matters**: Guarantees fast, predictable record retrieval while eliminating configuration ambiguity when querying variable document types.
- **Related Documentation**: See [Query Records Action Reference]({{< relref "action-type/which-action.md" >}}).

---

### Entry Action Configuration UX & Runtime Semantics
**Publication Date**: October 1, 2026
**Target Release**: FlexiRule v1.0.2
**Source Commits**: [`f481a73`](https://github.com/Sendipad/flexirule/commit/f481a73), [`baeb199`](https://github.com/Sendipad/flexirule/commit/baeb199), [`d8082d5`](https://github.com/Sendipad/flexirule/commit/d8082d5)

- **What Changed**: Redesigned the Entry Action setup modal with visual trigger badges, improved field descriptions, and refined runtime evaluation semantics for document event triggers (`on_change`, `on_submit`, `before_save`).
- **What You Can Now Do**: Configure trigger conditions using the visual Smart Value Selector without needing to write code or raw expression syntax.
- **Why It Matters**: Prevents accidental rule execution and ensures rules trigger only when specific document conditions are satisfied.
- **Related Documentation**: See [Entry Action Guide]({{< relref "action-type/entry-action.md" >}}).

---

### Visual Canvas Node Standardization & Action Identity
**Publication Date**: September 29, 2026
**Target Release**: FlexiRule v1.0.1
**Source Commits**: [`0a153e6`](https://github.com/Sendipad/flexirule/commit/0a153e6), [`aaf3a19`](https://github.com/Sendipad/flexirule/commit/aaf3a19), [`fd49707`](https://github.com/Sendipad/flexirule/commit/fd49707)

- **What Changed**: Standardized canvas node visual styling, headers, icons, and localized summary labels across all Action types (including Stop/Error, Assignment, Condition, and Loop nodes).
- **What You Can Now Do**: Instantly understand rule flow logic, node status, and configuration details at a glance directly from the visual canvas.
- **Why It Matters**: Improves rule readability and simplifies collaborative rule editing among business analysts and team members.
- **Related Documentation**: See [Rule Builder Visual Canvas]({{< relref "rule-builder/canvas.md" >}}).

---

### Full-Modal Raw Configuration & Transition Speed Optimizations
**Publication Date**: September 29, 2026
**Target Release**: FlexiRule v1.0.1
**Source Commits**: [`b75d4af`](https://github.com/Sendipad/flexirule/commit/b75d4af), [`9e4d246`](https://github.com/Sendipad/flexirule/commit/9e4d246)

- **What Changed**: Added a full-modal Raw Configuration view to inspect JSON/YAML definitions directly in the Rule Builder, accompanied by optimized UI view transition speeds.
- **What You Can Now Do**: Toggle between visual configuration panels and full raw definitions in less than 50 milliseconds.
- **Why It Matters**: Accelerates advanced rule inspection, bulk adjustments, and troubleshooting for technical administrators.
- **Related Documentation**: See [Rule Configuration]({{< relref "rule-builder/rule-configuration.md" >}}).

---

### Canonical Date & Time Resolvers in Smart Value System
**Publication Date**: September 28, 2026
**Target Release**: FlexiRule v1.0.0
**Source Commits**: [`ec0ead6`](https://github.com/Sendipad/flexirule/commit/ec0ead6), [`dfde4fd`](https://github.com/Sendipad/flexirule/commit/dfde4fd)

- **What Changed**: Upgraded Date and Time resolvers to the FlexiValue architecture, supporting relative date math, offset durations, and working-day logic.
- **What You Can Now Do**: Build dynamic date rules (e.g. `Due Date = Today + 5 Days` or `Check if Created Date is Weekend`) using visual dropdown selectors.
- **Why It Matters**: Simplifies automated SLA enforcement, payment reminders, and date-based approval workflows.
- **Related Documentation**: See [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}).

---

## Verified Audit & Compatibility Considerations

- **Frappe v15 Capability Audit**: Conducted an evidence-hardened backend capability audit (`322e824` to `af51f58`) confirming full query compatibility, aggregation support, and transaction safety across Frappe v15.121+ installations.
- **Backward Compatibility**: All published updates are non-breaking and fully backward-compatible with existing FlexiRule v1.0 rule definitions.
