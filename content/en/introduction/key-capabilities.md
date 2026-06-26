---
title: Key Capabilities
weight: 90
description: A summary of the major features and functional highlights of FlexiRule.
---

# Key Capabilities

FlexiRule combines the power of visual programming with enterprise-grade governance. Here are the major features that define the platform:

## Visual Rule Builder
-   **Vue 3 Interface**: A modern, responsive canvas for designing complex logic.
-   **Drag-and-Drop**: Easily add and connect logic blocks.
-   **Real-time Validation**: The builder alerts you to missing configuration or broken connections as you work.

## Advanced Logic Control
-   **Nested Conditions**: Build multi-level `if-then-else` logic visually.
-   **Switch Blocks**: Handle multiple branching scenarios from a single node.
-   **Sub-Rules**: Call one rule from another to maintain modularity and reuse logic.

## Safety and Governance
-   **Cycle Detection**: Native protection against infinite loops in the graph.
-   **Sandboxed Environment**: Rules are executed in a safe container that prevents unauthorized database modifications.
-   **Role-Based Permissions**: Control who can view, edit, or execute specific rules.

## High-Performance Engine
-   **Condition Compilation**: Logic is pre-compiled for near-zero execution overhead.
-   **Layered Caching**: Multi-level cache (Redis + Local) for lightning-fast rule lookups.
-   **Asynchronous Processing**: Offload heavy tasks to background workers without slowing down the user.

## Observability
-   **Execution Logs**: Detailed audit trail for every rule run.
-   **Visual Path Trace**: See exactly which path a document took through your logic graph.
-   **Debug Mode**: Enable enhanced logging for complex troubleshooting.

## Developer Friendly
-   **JSON Schema Driven**: Configuration forms for custom logic are auto-generated.
-   **Extensible Actions**: Register custom Python logic as new block types.
-   **Git Friendly**: Rules are stored as DocTypes, making them easy to migrate between environments.
