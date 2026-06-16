---
title: How Rules Execute
description: A high-level overview of the rule execution lifecycle for users and designers.
weight: 50
---

# How Rules Execute

A high-level overview of the rule execution lifecycle for users and designers.

## The 5-Step Lifecycle

1.  **Trigger Fires**: An event (DocType save, Scheduler interval) matches a rule.
2.  **Conditions Evaluated**: The system checks if the trigger conditions are met.
3.  **Actions Execute**: The engine follows the graph path from the Entry node.
4.  **Rule Completes**: The execution ends when a terminal node is reached.
5.  **Audit Trail**: The system logs the result, path taken, and variable states.

---

> **Developer Note**: For deep implementation details, see **[Execution Engine]({{< relref "docs/architecture/engine/execution-engine.md" >}})**.
