---
title: Assignment Action Architecture
description: Technical implementation details of the Assignment action.
---

# Assignment Action Architecture

The Assignment action (internally `set-value`) is responsible for state mutation within the FlexiRule engine.

## Normalization Value Resolver
The set-value action leverages the `NormalizationValueResolver` to process values before they are applied to the target. This includes:
- Type casting.
- String transformations (trim, uppercase, lowercase).
- Handling of complex formula evaluation via the `FormulaEvaluator`.

## Batch Assignments
Assignments are executed as a batch. The engine iterates through the defined rows, evaluates the `when` condition for each row, and if true, resolves the value and applies the operator to the target path.

## Target Resolution
Targets are resolved against the `ExecutionContext`.
- `doc.*` paths are mapped to the primary document object.
- `vars.*` paths are mapped to the local execution variables.
