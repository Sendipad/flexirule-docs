---
title: How does FlexiRule achieve high performance?
weight: 60
description: An in-depth look at the architectural decisions that ensure FlexiRule remains fast and scalable in production environments.
---

# Performance Architecture

Visual rule engines are often assumed to be slower than handwritten Python because they must interpret rules at runtime. FlexiRule is designed differently. Most expensive work happens before a rule is activated for execution, allowing runtime execution to remain lightweight, predictable, and production-ready.

---

## The Execution Pipeline

To understand FlexiRule's performance, it helps to see how a business event is processed:

```text
Business Event (e.g. Sales Order Save)
        │
        ▼
Trigger Lookup (Registry-based)
        │
        ▼
Trigger Condition Evaluation (Compiled Python)
        │
        ▼
Load Compiled Rule (From Cache)
        │
        ▼
Create Execution Context (Lightweight)
        │
        ▼
Execute Blocks (Sequential/Branching)
        │
        ▼
Finish Execution & Async Logging
```

At every stage of this pipeline, the engine is designed to minimize execution cost by following a pre-optimized path.

---

## Design-Time vs. Runtime

The cornerstone of FlexiRule's performance is the strict separation between **Design-time** (when rules are built) and **Runtime** (when rules execute).

### Design-Time: The Preparation Phase
When you save or activate a rule, it passes through four distinct phases to ensure it is ready for high-speed execution:

1.  **Validation**: The engine checks graph connectivity, cycle detection, and metadata consistency.
2.  **Compilation**: Visual logic (JSON) is transformed into optimized pure Python expressions and a structured execution plan.
3.  **Registration**: The rule is indexed in the system registry by its Trigger, DocType, and Event.
4.  **Caching**: The compiled plan and registry entry are pushed to high-speed memory (Local/Redis).

### Runtime: The Execution Phase
Because the preparation is finished upfront, the execution engine remains extremely lightweight:
- It **does not** perform graph validation at runtime.
- It **does not** compile conditions during execution.
- It **does not** discover action behaviors dynamically; it follows the prepared plan.
- It **does not** interpret raw JSON logic.

---

## Registry-Based Lookup

FlexiRule uses a centralized **Rule Registry** to ensure that adding more rules doesn't slow down unrelated parts of the system. Rules are indexed so they can be retrieved instantly without scanning the entire database.

**Example Registry Structure:**
```text
Sales Order
└── Before Save
    ├── Credit Limit Check
    ├── Automatic Discounting
    └── Validation Rule

Purchase Invoice
└── On Submit
    ├── Budget Availability Check
    └── Notify Finance Team
```

When a **Sales Order** is saved, FlexiRule immediately retrieves only the rules registered under `Sales Order → Before Save`. Rules belonging to Purchase Invoices, Stock Entries, or other events are never examined or loaded into memory.

---

## Contract-Driven Architecture

Every Action Type in FlexiRule publishes a **Technical Contract**. This contract defines:
- Required configuration fields.
- Validation rules for inputs and outputs.
- Specific runtime behavior and execution logic.

During execution, the engine works against these pre-defined contracts rather than discovering behavior dynamically through inspection. This significantly reduces runtime complexity and allows the engine to handle a wide variety of actions with a single, highly efficient execution loop.

---

## Trigger Filtering

Before the engine even initializes the action graph, it uses two high-speed filters to avoid unnecessary work:

-   **Trigger Conditions**: Small, pre-compiled Python expressions that act as a "fast gate." If the condition isn't met, the rule stops immediately.
-   **Watched Fields**: An optimization that tracks which document fields the rule cares about. If a document is updated but none of the "watched" fields have changed, the rule is skipped entirely.

---

## Execution Cost Philosophy

**What actually costs time in an ERP system?**

Users often worry that a rule engine will add latency. However, in modern enterprise environments, time is almost always dominated by:
- Database queries and index lookups.
- Loading and saving large, complex documents (DocTypes).
- External API calls and network latency.
- Sending emails or generating PDFs.

The orchestration layer provided by FlexiRule is designed to be a tiny fraction of the total transaction time. Its primary job is to **coordinate** the expensive operations above in the most efficient sequence possible.

---

## Scalability and Relevance

FlexiRule maintains performance in enterprise environments through **Relevance Filtering**. Whether you have 10 rules or 1,000 rules, the impact on a single document save remains stable because only the rules matching the specific DocType and Event are ever considered.

---

## Common Misconceptions

**Does FlexiRule interpret JSON every time a rule runs?**
No. JSON is used for the UI and storage. At runtime, the engine uses pre-compiled Python expressions and structured execution plans.

**Does every rule execute on every document save?**
No. Only rules matching the specific registry index (DocType + Event) are considered.

**Does the visual UI affect runtime performance?**
No. The Rule Builder exists only at design time. The runtime engine is a lightweight Python dispatcher.

---

## Layered Architecture

This diagram illustrates how FlexiRule organizes its responsibilities to maintain a high-performance balance between flexibility and speed:

```text
Rule Builder (Design Time)
        │
        ▼
Validation Layer (Integrity & Cycles)
        │
        ▼
Compilation Layer (JSON → Python)
        │
        ▼
Registry & Cache (Redis / Local)
        │
        ▼
Execution Engine (Orchestration)
        │
        ▼
ERPNext / Frappe APIs (Operations)
        │
        ▼
Database & External Services
```
