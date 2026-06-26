---
title: How does FlexiRule achieve high performance?
weight: 60
description: An in-depth look at the architectural decisions that ensure FlexiRule remains fast and scalable in production environments.
---

# Performance Architecture

Visual rule engines are often assumed to be slower than handwritten Python because they must interpret rules at runtime. FlexiRule is designed differently. Most expensive work happens before a rule is activated for execution, allowing runtime execution to remain lightweight, predictable, and production-ready.

---

## The Execution Pipeline

To understand FlexiRule's performance, it helps to see what actually happens when a business event occurs:

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

At every stage of this pipeline, the engine is designed to skip unnecessary work and execute only what is strictly required to fulfill the business logic.

---

## Design-Time vs. Runtime

One of FlexiRule's biggest architectural advantages is the strict separation between **Design-time** (when you build and save a rule) and **Runtime** (when the rule executes).

### Design-Time: Validate Once
When you save or activate a rule, the engine performs heavy lifting to ensure the rule is ready for fast execution:
- **Condition Compilation**: Visual JSON logic is transformed into optimized pure Python strings.
- **Graph Validation**: Connectivity and cycles are checked to prevent runtime errors.
- **Metadata Validation**: Every action is checked against its technical contract.
- **Execution Plan Generation**: The engine prepares a structured roadmap for the executor.

### Runtime: Execute Many
Because the heavy work is done upfront, the runtime work is minimal:
- **Locate matching rules**: Using high-speed indexed registries.
- **Evaluate conditions**: Executing pre-compiled strings (no JSON parsing).
- **Follow the plan**: The executor simply follows the prepared execution plan node-by-node.

---

## Architectural Themes

FlexiRule's speed is the result of deliberate architectural choices grouped into these core themes:

### Compilation
The engine **compiles** instead of interprets. By transforming visual conditions into Python expressions during the Save process, FlexiRule removes the overhead of parsing complex logic trees during every document save.

### Registry-Based Lookup
FlexiRule uses a centralized **Rule Registry**. Rules are indexed by Trigger Type, DocType, and Event. When a Sales Order is saved, the engine doesn't scan every rule in the system; it only looks at the small subset registered for that specific event.

### Intelligent Caching
The system employs **Layered Caching**:
1. **Request-local Cache**: Rules are cached in memory for the life of the web request.
2. **Redis Cache**: Rules are indexed in Redis, ensuring all background workers and web processes share the same high-speed access to compiled rules.
3. **Smart Invalidation**: The cache is only rebuilt when an active rule is modified, ensuring performance remains stable.

### Trigger Filtering
Before a rule even "loads" its action graph, it must pass through two fast filters:
- **Trigger Conditions**: A high-speed pre-check evaluated against the document.
- **Watched Fields**: An optimization that skips execution if the modified fields don't match the fields the rule cares about.

### Deferred Work
Non-critical operations, such as generating detailed **Execution Logs** and visual path traces, are offloaded to **Asynchronous Workers**. This ensures that the user's transaction completes instantly, while the audit data is saved in the background.

---

## Scalability

**What happens when there are hundreds of rules?**

In a traditional system, adding more hooks can slow down every transaction. FlexiRule maintains performance through **Relevance Filtering**:
- **Indexing**: Only rules matching the specific DocType and Event are considered.
- **Optimization**: Rules that don't meet their Trigger Condition or Watched Fields filter are discarded in microseconds.
- **Predictability**: Adding a rule for "Purchase Invoice" has zero impact on the performance of "Sales Order."

---

## Common Misconceptions

**Does FlexiRule interpret JSON every time a rule runs?**
No. JSON logic is used only in the UI. Before a rule is deployed, it is compiled into optimized Python expressions.

**Does every rule execute on every document save?**
No. The engine uses a registry to find only the rules that apply to the current document and event.

**Does the visual UI affect runtime performance?**
No. The Rule Builder is a design-time tool. The runtime engine is a lightweight Python dispatcher that doesn't load any UI components.

**Is FlexiRule slower than handwritten Python?**
The engine introduces a tiny orchestration overhead (measured in milliseconds), but this is negligible compared to the time spent on database queries or network calls. For 99% of business scenarios, the performance difference is undetectable.

---

## Architectural Principles

The performance of FlexiRule is guided by these simple principles:
- **Validate once, execute many times.**
- **Compile instead of interpret.**
- **Find only relevant rules.**
- **Skip unnecessary execution whenever possible.**
- **Cache aggressively but invalidate safely.**
- **Execute only required blocks.**
- **Defer non-critical work to the background.**

This architecture ensures that FlexiRule remains fast and reliable, even as your business automation library grows to hundreds of complex rules.
