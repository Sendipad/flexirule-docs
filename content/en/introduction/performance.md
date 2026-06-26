---
title: How does FlexiRule achieve high performance?
weight: 60
description: An overview of the architectural optimizations that ensure FlexiRule runs efficiently in production.
---

# How does FlexiRule achieve high performance?

A common concern with visual orchestration engines is the "overhead" they might add to the system. FlexiRule is designed from the ground up with high-performance Frappe environments in mind. It uses several advanced strategies to ensure that rules execute with minimal impact on system latency.

## 1. Pre-compiled Conditions

FlexiRule does not parse complex JSON logic during every execution. Instead, when you **Save** or **Activate** a rule, the engine compiles your visual conditions into highly optimized, single-pass pure Python strings.

-   **At Design Time**: You use a user-friendly JSON condition builder.
-   **At Runtime**: The engine executes a pre-compiled string that is nearly as fast as hand-written code.

## 2. Layered Caching

Finding which rules should run for a specific document event happens in milliseconds thanks to a multi-level registry system:

1.  **Request-local Cache**: Rules are cached for the duration of a single web request.
2.  **Redis Cache**: Rules are indexed in Redis for lightning-fast lookups across workers.
3.  **Database**: Only accessed as a last resort or when the cache is invalidated.

## 3. Optimized "Watched Fields"

The engine supports **Watched Fields** optimization. You can configure a rule to only trigger if specific fields have changed (e.g., "Only run this discount check if the `Item Category` or `Quantity` changed").

This prevents unnecessary execution cycles and significantly reduces database load for documents that are frequently updated.

## 4. Minimal Runtime Overhead

The core execution engine is a lightweight dispatcher. It doesn't "load" the whole Rule Builder UI or heavy front-end assets when a rule triggers. It only loads the specific execution plan for the active rule, ensuring that the main transaction remains fast.

## 5. Non-blocking Logging

While detailed execution logs are critical for auditability, writing them can be slow. FlexiRule enqueues execution traces **asynchronously** to background workers. This ensures that your main business process completes instantly without waiting for log persistence.

---

### Performance Summary

| Optimization | Benefit |
| :--- | :--- |
| **Compilation** | Ultra-fast condition evaluation. |
| **Caching** | Near-zero overhead for rule discovery. |
| **Watched Fields** | Skip unnecessary rule triggers. |
| **Async Logging** | No impact on user transaction speed. |
