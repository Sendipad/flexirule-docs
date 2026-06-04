---
title: "Triggers"
weight: 35
---

# Trigger System

Triggers act as the entry point for all business logic in FlexiRule. They determine **when** a rule should begin its execution.

## Comparison of Trigger Types

| Trigger Type | Best For | Execution | Context Provided |
| :--- | :--- | :--- | :--- |
| **[Event]({{< relref "event-triggers.md" >}})** | Real-time response | Sync/Async | `doc`, `old_doc` |
| **[Scheduler]({{< relref "scheduler-triggers.md" >}})** | Background tasks | Async | System context |
| **[Callable]({{< relref "callable-triggers.md" >}})** | Reusable logic | Managed | Caller context |

---

## Detailed Sections
- **[Event Triggers]({{< relref "event-triggers.md" >}})**: React to DocType state changes.
- **[Scheduler Triggers]({{< relref "scheduler-triggers.md" >}})**: Run on time-based intervals.
- **[Callable Triggers]({{< relref "callable-triggers.md" >}})**: Invoked programmatically or by other rules.
- **[Context Reference]({{< relref "context-reference.md" >}})**: Variables available at trigger time.

---

## Technical Details
For implementation details on the dispatcher, see **[Rule Coordinator]({{< relref "docs/architecture/runtime/overview.md" >}})**.
