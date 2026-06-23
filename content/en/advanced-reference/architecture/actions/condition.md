---
title: Condition System Architecture
description: Internal implementation details of the rule evaluation engine.
weight: 40
type: docs
---

# Condition System Architecture

The **Condition** action provides the primary branching mechanism in FlexiRule, using a high-performance evaluation engine.

---

## 1. Class Structure

- **Handler Class**: `ConditionHandler`
- **Inheritance**: `ActionHandler` -> `flexirule.ruleflow.core.action_handlers.ActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/condition.py`
- **Registry Key**: `Condition`

---

## 2. Evaluation Engine

The handler leverages `flexirule.ruleflow.core.evaluator` to process logic:

1.  **Normalization**: Filter groups (AND/OR) are converted into a standardized internal representation.
2.  **Resolution**: Variable markers (e.g., `doc.status`) are resolved against the current `ExecutionContext`.
3.  **Comparison**: The engine evaluates operators (Equals, Greater Than, Matches, etc.) against the resolved values.
4.  **Result**: Returns a boolean value (`True` or `False`).

---

## 3. Performance Optimization

- **Short-circuiting**: Evaluation stops as soon as the result is determined (e.g., an `OR` group returns `True` after the first match).
- **Caching**: Frequently used DocType schemas and field metadata are cached in the engine session to minimize database calls during evaluation.

---

## 4. UI Component Architecture

- **Component**: `ConditionConfig.vue`
- **Path**: `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/ConditionConfig.vue`
