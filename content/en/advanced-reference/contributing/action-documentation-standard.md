---
title: Action Documentation Standard
description: The authoritative specification for documenting any FlexiRule action.
weight: 20
---

# Action Documentation Standard

This document defines the authoritative specification for documenting actions within the FlexiRule ecosystem. All contributors must follow these standards to ensure consistency, maintainability, and a high-quality experience for our users.

---

## 1. Documentation Philosophy

Our documentation is guided by five core principles:

1.  **Business Intent First**: Every action page must start by explaining *why* a user would use the action. Focus on business outcomes before technical mechanics.
2.  **Progressive Disclosure**: Information is layered to provide only what is necessary for the current audience. Users should not need to understand engine internals to build rules.
3.  **Zero Redundancy**: Content should not be duplicated across layers. Action docs describe usage; Execution semantics describe guarantees; Architecture docs describe implementation.
4.  **Real-World Over Abstract**: Use realistic ERPNext/Frappe business scenarios. Avoid generic examples like `field_a = field_b` unless illustrating a purely technical point.
5.  **Consistency Over Creativity**: Every action must answer the same core questions in the same order. Predictability is a feature.

---

## 2. Documentation Layering Model

FlexiRule uses a 3-layer architecture for action documentation:

### Layer 1: Action Documentation
-   **Location**: `/docs/actions/<action-slug>/index.md`
-   **Audience**: Rule builders, Business analysts, Low-code users.
-   **Purpose**: "What does this action do and how do I use it?"
-   **Focus**: Intent, configuration, examples, and best practices.

### Layer 2: Execution Semantics
-   **Location**: `/docs/reference/execution/<action-slug>.md`
-   **Audience**: Solution architects, Advanced implementers.
-   **Purpose**: "Exactly how does this action behave at runtime?"
-   **Focus**: Engine guarantees, transaction behavior, failure modes, and performance.

### Layer 3: Architecture Reference
-   **Location**: `/docs/architecture/actions/<action-slug>.md`
-   **Audience**: Contributors, Core developers, Plugin authors.
-   **Purpose**: "How is this implemented?"
-   **Focus**: Class structures, execution pipelines, internal events, and source files.

---

## 3. Audience Segmentation

| Segment | Primary Layer | Key Concern |
| :--- | :--- | :--- |
| **Business Analyst** | Layer 1 | Can I solve this business requirement without code? |
| **Solution Architect** | Layer 1 & 2 | Will this behave predictably in a high-volume transaction? |
| **Developer / Contributor** | Layer 3 | Where is the code and how do I extend it? |

---

## 4. Content Standards

### Naming Conventions
-   **Action Titles**: Use the formal name of the action (e.g., "Assignment", "Query Records").
-   **Filenames**: Always use kebab-case for directories and filenames (e.g., `query-records/index.md`).
-   **Slug Stability**: Do not change slugs once published. Use Hugo `aliases` if a move is unavoidable.

### Examples Convention
-   **Preference**: Always prefer ERPNext/Frappe-based examples.
-   **Common DocTypes**: Use standard entities such as `Sales Order`, `Sales Invoice`, `Item`, `Customer`, `Support Ticket`, or `Employee`.
-   **Structure**: Provide a "Problem", "Configuration", and "Result" for each example.

### Cross-Linking Convention
-   **Hugo `relref`**: All internal links must use the `relref` shortcode pointing to the `.md` file path.
-   **Format**: `{{</* relref "core-actions/assignment.md" */>}}`
-   **Why**: This ensures link stability across refactors and URL changes.

---

## 5. Metadata & AI Conventions

### Frontmatter Requirements
Every Layer 1 action page must include:
-   `entity_kind`: The entity classification.
    -   `action`: For the main action landing page (e.g., `docs/actions/document-action/_index.md`).
    -   `action_operation`: For specific operation pages within an action (e.g., `docs/actions/document-action/create-new.md`).
-   `capabilities`: Metadata describing what the action can do (Category, Mutation, Targets, etc.).
-   `badges`: Status indicators (Core, Experimental, External).
-   `description`: A concise, one-sentence summary of the action.

### AI Metadata
Actions should include a reference to their AI metadata schema to support rule generation and copilot features. See the [AI Metadata Schema]({{< relref "advanced-reference/reference/ai/action-metadata-schema.md" >}}) for details.

---

## 6. Architecture Documentation Conventions

Layer 3 documents must:
-   Link directly to source code files in the primary `flexirule` repository.
-   Describe the **Context Mutation Model** (how it changes data).
-   Define **Extension Points** for other developers.
-   Avoid duplicating user-facing "how-to" content.
