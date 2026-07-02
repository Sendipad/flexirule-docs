---
title: Condition Action Architecture
description: Technical implementation of logical evaluation.
---

# Condition Action Architecture

The Condition action (internally `condition`) evaluates logical expressions using a recursive grouping strategy.

## Evaluation Engine
The engine converts the UI-defined condition groups into optimized Python expressions at runtime. These expressions are evaluated within a sandboxed environment with access to the `ExecutionContext`.

## Collection Evaluation
When evaluating collections (e.g., child tables), the engine iterates through the collection and applies the nested criteria to each element. It supports three evaluation modes:
- `any`: Returns True if at least one element matches.
- `all`: Returns True if all elements match.
- `none`: Returns True if no elements match.
