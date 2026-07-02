---
title: Performance Architecture
description: How FlexiRule maintains lightning-fast execution speeds.
weight: 10
---

# Performance Architecture

FlexiRule is designed to run in high-volume production environments without introducing significant latency to the Frappe Request-Response cycle.

## 1. Condition Pre-Compilation
Visual conditions are easy to read but slow to evaluate if parsed at runtime. FlexiRule solves this by **compiling** your visual logic into a single, optimized Python expression string when you save the rule.
- Evaluation happens in a single pass.
- No overhead from recursive JSON parsing during execution.

## 2. Layered Registry Caching
Rule lookups are extremely frequent. FlexiRule uses a three-tier caching strategy:
1.  **Request-Local Cache**: If the same rule triggers multiple times in a single request (e.g., during a bulk update), it's only fetched once from memory.
2.  **Redis Cache**: Rules are stored in Frappe's Redis instance for lightning-fast cross-request access.
3.  **Database**: The physical storage, only accessed when the cache is cold.

## 3. Watched Fields Optimization
FlexiRule automatically detects which fields are used in your rule's conditions.
- If a rule is triggered by an `on_update` event, but none of the "watched fields" have changed, the engine stops immediately.
- This prevents heavy logic from running on every minor document update.

## 4. Asynchronous Execution Log
Writing execution logs to the database can be a bottleneck.
- FlexiRule enqueues logs to a background worker.
- The main transaction completes immediately, while the trace is saved a few milliseconds later in the background.

## 5. Background Processing
For truly heavy logic (like generating 1,000 documents or calling a slow external API), use the **Run Asynchronously** flag on actions. This offloads the work to Frappe's background workers, keeping the UI responsive for the end-user.
