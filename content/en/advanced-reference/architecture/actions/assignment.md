---
title: 'Assignment Action: Architecture'
description: Technical implementation of the value mutation engine.
weight: 50
---

# Assignment Action Architecture

The **Assignment** action is implemented via the `AssignmentActionHandler`. It handles the sequential execution of mutations on the execution context.

## Core Implementation
- **Class**: `AssignmentActionHandler` in `flexirule/ruleflow/core/action_handlers/assignment.py`.
- **Logic**: Iterates through the `assignments` list and applies `frappe.set_value` or variable updates using the `ValueResolver`.
- **Normalization**: If a pipeline is defined, it passes the value through `NormalizationValueResolver` before assignment.
