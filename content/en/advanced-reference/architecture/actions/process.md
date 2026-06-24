---
title: 'Process Action: Architecture'
description: Technical implementation of external process execution.
weight: 110
---

# Process Action Architecture

The **Process** action integrates with the `ProcessRegistry` to execute arbitrary Python or JavaScript logic.

## Core Implementation
- **Class**: `ProcessActionHandler` in `flexirule/ruleflow/core/action_handlers/process.py`.
- **Logic**: Looks up the process definition by name. It then prepares the input arguments and executes the process either synchronously or via `frappe.enqueue`.
