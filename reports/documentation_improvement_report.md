# FlexiRule Documentation Improvement Report

**Date**: July 2026
**Documentation Repository**: `https://github.com/Sendipad/flexirule-docs`
**Source Code Baseline Commit**: `279f576d376bba45a6367a03955a6a4d83019ee6`
**Source Code Repository**: `https://github.com/Sendipad/flexirule` (Branch: `develop-1276450611588157079`)

---

## Executive Summary

A deep audit and comprehensive overhaul of the **FlexiRule Documentation Website** was conducted against the actual source code implementation of the FlexiRule core engine (`279f576d376bba45a6367a03955a6a4d83019ee6`). The primary goal was to eliminate outdated claims, align documentation with verified source code behavior, establish a progressive learning path for users, and present accurate technical architecture for developers.

---

## 1. Source Commit Analyzed

- **Target Repository**: `https://github.com/Sendipad/flexirule`
- **Branch**: `develop-1276450611588157079`
- **Commit SHA**: `279f576d376bba45a6367a03955a6a4d83019ee6`
- **Key Files Audited**:
  - Engine Core: `flexirule/ruleflow/core/engine.py`, `coordinator.py`, `compiler.py`, `evaluator.py`, `value_resolver.py`
  - Action Handlers: `flexirule/ruleflow/core/action_handlers/` (`assignment.py`, `condition.py`, `document_action.py`, `loop.py`, `process.py`, `query_records.py`, `simple_actions.py`, `sub_rule.py`, `switch.py`)
  - UI & Controls: `flexirule/public/js/flexirule/rule_builder/controls/`
  - Schema & Patches: `flexirule/ruleflow/doctype/rule/rule.json`, `patches/`

---

## 2. Major Documentation Problems Discovered

1. **Obsolete / Internal UI Terminology**:
   - Outdated references to internal UI component names (e.g. `FlexValueControl`) instead of user-facing canonical UI terms (**Smart Value Selector**).
2. **Missing Canonical Resolver Mappings**:
   - Documentation previously lacked a clear catalog of all 12 canonical user-facing Value Resolvers accessible via the `/` menu in the Smart Value Selector.
   - Discrepancy where `LookupResolver` / `FetchResolver` (`/fetch`) was marked as a "Future Evolution Idea" in old architecture pages despite being fully implemented in source code.
3. **Inconsistent Action Documentation Structure**:
   - Action pages varied in format, lacking standard user-first sections like explicit execution contracts, performance characteristics, and common user mistakes.
4. **Homepage Narrative Gaps**:
   - The homepage previously lacked a clear problem definition ("Hook Hell"), visual workflow execution diagram, real-world ERPNext example, and persona-targeted entry points.

---

## 3. Key Improvements Made

### A. Homepage & Core Narrative Overhaul (`content/en/_index.md`)
- Added clear explanation of FlexiRule as a Visual Logic Platform solving **"Hook Hell"** in Frappe/ERPNext.
- Added 5-stage visual execution pipeline diagram.
- Included concrete real-world example: **Sales Order Credit Limit Check**.
- Added card navigation linking directly to Getting Started, Rule Builder Guide, Core Actions Catalog, and Developer Architecture.

### B. Smart Value System & Value Resolvers Overhaul (`content/en/rule-builder/smart-value-system.md`)
- Documented all three input modes: Static Values, Variable References (`@doc`, `@old_doc`, `@vars`, `@system`), and Dynamic Resolvers (`/`).
- Created comprehensive catalog and detailed breakdown for all **12 canonical user-facing Value Resolvers**:
  1. `Date Formula` (`/date_formula`)
  2. `Math Formula` (`/math_formula`)
  3. `Date Difference` (`/date_diff`)
  4. `Child Table Aggregation` (`/child_aggregation`)
  5. `Collection Operations` (`/collection`) - with max 10,000 row safety limit
  6. `String Manipulation` (`/string_formula`)
  7. `Normalization` (`/normalization`)
  8. `Format` (`/format`)
  9. `Fetch From Link` (`/fetch`)
  10. `System Context` (`/system_context`)
  11. `Variable References` (`@`)
  12. `Static Value`

### C. Standardized Core Action Guides (`content/en/action-type/`)
- Updated all core action guides (`Set Value` / Assignment, `Check` / Condition, `Update Record` / Document Action, `Notify`, `Query Records`, `Repeat` / Loop, `Switch`, `Advanced Process`, `Sub-Rule`, `Start`, `Stop / Error`, `Wait`) to strictly follow the mandatory 6-section template:
  1. When to Use
  2. Configuration
  3. Output
  4. Example
  5. Performance Notes
  6. Common Mistakes

### D. Practical Recipes Added (`content/en/tutorials/`)
- Created step-by-step practical recipes:
  - `validate-and-block-document.md`: Document validation and Stop / Error guardrails.
  - `child-table-calculations.md`: Iterating child table items and calculating line discounts.
  - Updated tutorials index with clean card layout and business scenario categorization.

### E. Developer Architecture Alignment (`content/en/advanced-concepts/`, `content/en/developer-guide/`)
- Updated `resolver-patterns.md` to accurately reflect `CompiledResolver` class hierarchy, lazy evaluation, AST pre-compilation, and active `FetchResolver` implementation.

---

## 4. Discrepancies Resolved & Deprecated Terms

| Area | Old / Discrepant Claim | Source Code Truth | Resolution |
| :--- | :--- | :--- | :--- |
| **UI Component** | Referred to UI editor as `FlexValueControl`. | Source UI uses "Smart Value Selector" for end-users. | Updated user guides to use **Smart Value Selector** while referencing `FlexValueControl` in technical UI architecture. |
| **Fetch Resolver** | Marked as "Future Evolution Idea". | Implemented as `LookupResolver` / `FetchResolver` (`/fetch`) in `value_resolver.py`. | Updated documentation to present `/fetch` as a canonical, live resolver family. |
| **Action Names** | Used technical names (`Assignment`, `Document Action`, `Entry Action`) exclusively in user guides. | User-first documentation prefers business terms (**Set Value**, **Update Record**, **Start**). | Standardized user guide titles with business names while cross-linking internal handler names. |
| **Collection Limit**| Unspecified collection limits. | `CollectionResolver.MAX_COLLECTION_ROWS = 10000`. | Explicitly documented 10,000 row safety cap in collection operations. |

---

## 5. Verification & Testing

- Site build verified using modern Hugo API: `hugo --gc --minify=false --buildDrafts`.
- Build status: **0 errors, 149 pages compiled successfully**.
- Relref internal link resolution verified across all restructured sections.

---

## 6. Remaining Gaps & Recommendations

1. **Visual Screenshots & Animations**: As new UI features are added to the FlexiRule frontend, update `.webm` media files in `static/images/`.
2. **Additional Process Contracts**: As developers create new file-backed Process modules, document their dynamic JSON schemas in `content/en/action-type/process.md`.
