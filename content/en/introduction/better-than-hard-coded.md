---
title: Why is FlexiRule better than hard-coded customizations?
weight: 50
description: A detailed comparison focusing on the separation of business logic from application code.
---

# Separation of Concerns

> **FlexiRule is not an alternative to custom development. It is an alternative to embedding evolving business policies directly into application code.**

In Frappe and ERPNext systems, custom development and FlexiRule are not competing approaches. They serve different layers of the system. Custom development is used to build **capabilities**, while FlexiRule is used to define and manage the **evolving business policies** that sit on top of those capabilities.

---

## Technical Logic vs. Business Logic

To maintain a healthy system, it is essential to distinguish between these two categories of logic:

| Technical Logic (Custom Code) | Business Logic (FlexiRule) |
| :--- | :--- |
| API integrations | Approval policies |
| Database access & schema | Discount & Pricing rules |
| Framework extensions | Validation policies |
| Background workers | Escalation rules |
| Custom DocTypes | Cross-process automation |

**FlexiRule does not replace technical logic; it orchestrates business logic.** Technical logic belongs in custom applications and framework extensions, whereas business logic is better represented as configurable rules that can evolve independently of the application code.

---

## Choosing the Right Approach

Use this table as a guide for deciding where new logic should live:

| Requirement | Recommended Approach |
| :--- | :--- |
| Add a new DocType | Custom App |
| Extend Frappe framework behavior | Custom Code |
| Build reusable framework components | Custom Code |
| Integrate external services | Custom Code, optionally exposed as a FlexiRule Process |
| Define dynamic approval policies | FlexiRule |
| Define validation policies | FlexiRule |
| Define pricing/discount rules | FlexiRule |
| Automate cross-document workflows | FlexiRule |
| Combine capabilities with configurable rules | **Both together** |

---

## What Happens Over Time?

As systems grow, business rules naturally appear in many different implementation points:
-   Python Hooks
-   Server Scripts
-   Custom App overrides
-   Background jobs
-   Patch scripts

Over time, understanding "why something happens" requires tracing logic across these scattered points. **FlexiRule centralizes this category of logic**, moving it from hidden code into a structured, visual rule layer.

---

## Maintainability & Ownership

The real cost of hard-coded logic isn't the initial development—it's the long-term maintenance:

-   **Discoverability**: In FlexiRule, all automation for a DocType is visible in one dashboard. With custom code, you must navigate the entire codebase.
-   **Onboarding**: New developers or consultants can understand a visual graph in minutes. Reading 500 lines of nested `if-else` Python code takes hours.
-   **Ownership**: Functional teams can review and even modify policies in FlexiRule, reducing the dependency on the development team for simple policy changes.
-   **Change History**: Every rule change is tracked through a visual lifecycle and version history, making audits straightforward.

---

## Extensibility: Developers and FlexiRule

FlexiRule does not remove the need for development—it standardizes how development becomes reusable. Developers can build:
-   **Custom Action Types**: New visual blocks for the canvas.
-   **Processes**: Reusable Python logic modules.
-   **Value Resolvers**: Custom ways to calculate data at runtime.

Once registered, these technical capabilities become reusable building blocks that business users can combine visually without writing additional code.

---

## Comprehensive Comparison

| Aspect | Custom Code | FlexiRule |
| :--- | :--- | :--- |
| **Purpose** | System capability | Business policy |
| **Change Frequency** | Lower | Higher |
| **Primary Users** | Developers | Business + Developers |
| **Logic Location** | Distributed in files | Centralized in Dashboard |
| **Traceability** | Codebase navigation | Visual rule inspection |
| **Governance** | Git only | Rule lifecycle + Git |
| **Reusability** | Code-level reuse | Config + reusable blocks |
| **Testing** | Unit tests | Integrated Debugger + Dry Run |

---

## Guidance: When to Use What

Both approaches are essential in a healthy Frappe system.

**Use Custom Code when:**
-   Building core system capabilities.
-   Extending framework-level behavior.
-   Integrating with external systems or APIs.
-   Designing fundamental data models (DocTypes).

**Use FlexiRule when:**
-   Business policies change frequently.
-   Non-developers need visibility or control over logic.
-   Rules span multiple business processes or DocTypes.
-   You want centralized governance and an audit trail of logic execution.

### FlexiRule and custom development work best together
FlexiRule is designed to complement—not replace—the Frappe development model. This separation enables developers to focus on technical functionality while allowing business teams to manage policies and workflows without repeatedly modifying application code.
