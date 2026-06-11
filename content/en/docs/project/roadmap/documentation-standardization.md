---
title: "Documentation Standardization Roadmap"
description: "Plan for migrating and standardizing FlexiRule action documentation to the 3-layer framework."
weight: 50
---

# Documentation Standardization Roadmap

This roadmap outlines the steps required to transition all existing FlexiRule action documentation to the newly established 3-layer framework.

---

## Current State Assessment

As of the implementation of the documentation framework:

-   **Layer 1 (Actions)**: Exists for primary actions (Assignment, Condition, Query Records, Notify). However, structural consistency varies. Some contain architecture details that belong in Layer 3.
-   **Layer 2 (Execution Semantics)**: Largely missing as standalone documents. Some semantics are mixed into Layer 1 or Layer 3.
-   **Layer 3 (Architecture)**: Partially exists in a consolidated `action-implementation.md` file. This violates the goal of action-specific implementation pages.
-   **Metadata**: `capabilities` and `badges` are present in Layer 1 but require auditing against the new standard.

---

## Migration Recommendations

### 1. Immediate Migrations (High Priority)

| Action | Task | Benefit |
| :--- | :--- | :--- |
| **Assignment** | Extract implementation details from `architecture/engine/action-implementation.md` to `architecture/actions/assignment.md`. | Cleans up engine docs; follows 3-layer model. |
| **Assignment** | Create `reference/execution/assignment.md` by moving "Execution Guarantees" and "State Mutation Model". | Separates runtime behavior from implementation. |
| **All Actions** | Audit and update Layer 1 frontmatter to match the new `capabilities` dimensions. | Ensures UI components render correctly. |

### 2. Structural Refactors (Medium Priority)

| Action | Task | Benefit |
| :--- | :--- | :--- |
| **Condition** | Apply the new Template structure. Move "Operator Reference" to its own section or Layer 2 if too technical. | Improves predictability of the page. |
| **Query Records** | Reorganize "Query Modes" and "Decision Tree" to follow the standard "Configuration" and "Execution Behavior" sections. | Consistency across the catalog. |
| **Notify** | Expand with "Best Practices" and "Common Mistakes" sections which are currently sparse. | Completeness. |

---

## Priority Order

1.  **Framework Foundation**: (Completed) Create standards, templates, and governance.
2.  **Assignment Refactor**: Use the most mature action as a lighthouse example for the 3-layer split.
3.  **Global Metadata Audit**: Standardize frontmatter across all actions in `content/en/docs/actions/`.
4.  **Secondary Action Refactor**: Update Condition, Query Records, and Notify.
5.  **Gap Filling**: Document Loop, Switch, Process, and Document Action using the new templates.

---

## Estimated Effort

-   **Phase 1 (Foundation)**: 1 day (Done).
-   **Phase 2 (Agent Enforcement)**: 0.5 days (Done). Updated `agents.md` to ensure future agents follow the framework.
-   **Phase 3 (Assignment Split)**: 2 days.
-   **Phase 3 (Metadata & Catalog Audit)**: 1 day.
-   **Phase 4 (Remaining Actions)**: 3-5 days.

---

## Future Opportunities

### Hugo Archetypes
Identify a clean Archetype approach to automate the creation of the 3-layer structure.
**Recommendation**: Create an `action` archetype that generates:
- `content/en/docs/actions/<name>/index.md`
- `content/en/docs/reference/execution/<name>.md`
- `content/en/docs/architecture/actions/<name>.md`
in a single command.

### Automated Metadata Validation
Develop a script to validate `index.md` frontmatter against the `action-metadata-schema.md` to ensure data integrity for the AI Copilot.

### Capability Comparison Matrix
Generate a dynamic table in the Action Zone that compares actions based on their `capabilities` metadata (e.g., Which actions are Transactional? Which can mutate the Document?).
