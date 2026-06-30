---
title: Why is FlexiRule better than hard-coded customizations?
weight: 50
description: A separation-of-concerns approach showing how FlexiRule complements custom development by isolating business policies from application code.
---

# Separation of Concerns in Frappe Systems

> **FlexiRule is not an alternative to custom development. It is an alternative to embedding evolving business policies inside application code.**

In Frappe and ERPNext systems, custom development and FlexiRule are not competing approaches. They operate at different layers of the system:

- **Custom development builds capabilities**
- **FlexiRule defines and manages evolving business policies on top of those capabilities**

This separation is the foundation of scalable and maintainable business automation.

---

# Technical Logic vs Business Logic

A healthy system clearly distinguishes between *what the system does* and *how business decisions are made*.

| Technical Logic (Custom Code) | Business Logic (FlexiRule) |
| :--- | :--- |
| API integrations | Approval policies |
| Database access & schema design | Discount & pricing rules |
| Framework extensions | Validation policies |
| Background workers | Escalation rules |
| Custom DocTypes | Cross-process automation |
| System hooks/events | Business workflows |

### Core principle

> **Technical logic belongs in custom development.
Business logic belongs in configurable rules.**

FlexiRule focuses exclusively on the second category.

---

# Choosing the Right Approach

Different requirements naturally belong to different layers of the system:

| Requirement | Recommended Approach |
| :--- | :--- |
| Build a new DocType | Custom App |
| Extend Frappe framework behavior | Custom Code |
| Build reusable framework components | Custom Code |
| Integrate external services | Custom Code (optionally exposed as FlexiRule Process) |
| Implement dynamic approval policies | FlexiRule |
| Define validation policies | FlexiRule |
| Define pricing/discount rules | FlexiRule |
| Automate cross-document workflows | FlexiRule |
| Combine system capabilities with business rules | Both together |

FlexiRule is most valuable when logic is **policy-driven, frequently changing, and business-owned**.

---

# What Happens Over Time?

In many real systems, business rules start simple but gradually spread across multiple layers:

- Python hooks
- Server scripts
- Custom app overrides
- Background jobs
- Patch scripts
- Edge-case fixes across modules

```

Initial implementation
↓
Server Script added
↓
Hook introduced
↓
Custom method in app
↓
Background worker added
↓
Patch script for edge case
↓
Logic scattered across multiple layers

```

At this point, understanding a single business rule requires tracing logic across the entire codebase.

### The problem

Business intent becomes fragmented across implementation details.

### The FlexiRule approach

FlexiRule centralizes this category of logic into a **single, structured, and inspectable rule layer**, making business behavior explicit rather than implicit in code paths.

---

# Maintainability & Ownership

The real cost of embedded business logic is not implementation—it is long-term evolution.

## 1. Discoverability
Instead of searching across files and modules, all business rules are visible in one place.

## 2. Ownership clarity
It becomes clear whether a change is:
- **Technical responsibility** → custom code
- **Business policy change** → FlexiRule

## 3. Change history & governance
Rules evolve with:
- version tracking
- lifecycle states
- audit-friendly change history

instead of being hidden inside distributed Git commits.

## 4. Debugging simplicity
Rather than tracing execution across code paths, you inspect:
- rule definition
- execution trace
- decision flow

## 5. Faster onboarding
New developers and functional consultants can understand system behavior without reading the entire codebase.

---

# FlexiRule and Developers: A Collaborative Model

FlexiRule does not reduce the need for developers—it **redefines how their work is reused**.

Developers remain responsible for building system capabilities, including:

- **Action Types** → reusable executable blocks
- **Value Resolvers** → dynamic data evaluation logic
- **Processes** → structured execution workflows
- **Integrations** → external system connectors

Once defined, these components become reusable building blocks inside FlexiRule.

### Key principle

> Developers build capabilities.
> FlexiRule assembles those capabilities into business behavior.

This creates a clean separation between engineering effort and business configuration.

---

# Comprehensive Comparison

| Aspect | Custom Code | FlexiRule |
| :--- | :--- | :--- |
| Primary purpose | System capability implementation | Business policy definition |
| Change frequency | Lower, stable logic | Higher, evolving rules |
| Primary users | Developers | Developers + Business users |
| Logic location | Distributed across codebase | Centralized rule registry |
| Governance model | Git + code review | Rule lifecycle + optional Git |
| Traceability | Code navigation | Visual rule inspection |
| Debugging | Code tracing | Execution flow & rule debugger |
| Reusability | Code-level reuse | Configurable reusable components |
| Upgrade impact | Depends on coupling | Reduced business logic coupling |

---

# Real-World Example: Discount Policy

## Without FlexiRule

A discount policy is typically scattered across:

- `sales_order.py`
- pricing modules
- server scripts
- hooks
- background jobs

Business intent is fragmented and difficult to audit.

## With FlexiRule

The same logic becomes a single structured rule:

```

Discount Policy Rule
├── Customer Type Check
├── Order Value Threshold
├── Credit Status Validation
└── Manager Approval Condition

```

Everything is:
- visible
- editable
- traceable
- centralized

---

# When to Use What

## Use Custom Development when:
- Building core system capabilities
- Extending Frappe framework behavior
- Designing data models (DocTypes)
- Integrating external systems or APIs
- Creating reusable technical infrastructure

## Use FlexiRule when:
- Business policies change frequently
- Non-developers need visibility or control
- Logic spans multiple processes or modules
- You need centralized governance of decision-making logic

## Use Both when:
- Technical capabilities must be exposed as configurable behavior
- Business logic depends on system-level integrations
- You want collaboration between developers and business teams

---

# Final Thought

FlexiRule is not designed to reduce the role of custom development.

It is designed to **separate concerns within it**.

By moving business policies out of application code and into a structured rule layer, systems become:

- easier to understand
- easier to evolve
- easier to govern
- more transparent in behavior

while preserving the full power of custom development where it belongs.
