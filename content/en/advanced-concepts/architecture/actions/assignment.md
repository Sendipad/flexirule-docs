---
title: 'Assignment: Architecture Reference'
description: Sequential mutation engine and normalization pipeline internals.
weight: 10
---

# Assignment Action: Architecture Reference

## Purpose
The **Assignment** action implements the "Mutation" logic of FlexiRule. It is designed to handle sequential state updates to both the triggering document (`doc`) and the execution context (`vars`). It integrates directly with the **Value Resolver** and **Normalization Pipeline**.

## Class Structure

### `AssignmentHandler(ActionHandler)`
- **Responsibility**: Processes a grid of assignment rows.
- **Key Method**: `execute(action, context, engine)`

## Sequential Mutation Engine
Unlike standard field mapping, assignments are processed **sequentially** (top-to-bottom) within a single node.

1. **Row Isolation**: Each row in the configuration grid is treated as an independent mutation event.
2. **Conditional Evaluation**: The `when` condition of the row is evaluated against the *current* context (which may have been modified by previous rows in the same block).
3. **Value Resolution**: The value is resolved using the unified `ValueResolver`.
4. **Pipeline Application**: If a normalization pipeline or profile is configured, it is applied to the resolved value.
5. **Mutation**: The final value is written to the target path (`doc.field` or `vars.var`).

## Integration with Normalization
The `AssignmentHandler` uses the `NormalizationService` to apply transformations.

- **Standard Operations**: `trim`, `lowercase`, `slug`, etc.
- **Profiles**: Pre-configured sets of operations stored in the database.
- **Implementation**: See `flexirule/ruleflow/utils/normalization.py`.

## Path Resolvers
The handler supports deep path resolution for targets:
- `doc.base_amount`: Standard field.
- `vars.results.0.name`: Deeply nested variable (using dot/index notation).

## Source Files
- **Backend**: `flexirule/ruleflow/core/action_handlers/assignment.py`
- **Normalization**: `flexirule/ruleflow/utils/normalization.py`
- **Value Resolver**: `flexirule/ruleflow/core/value_resolver.py`
