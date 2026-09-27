---
title: Wait
description: Pause rule execution for a specified duration or until a scheduled date/time.
weight: 80
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Rule Execution"]
aliases:
  - /docs/actions/wait/
---

# Wait Action

The **Wait** action (internal handler: `simple_actions.WaitActionHandler`) pauses execution for a designated time duration or until a target date/time, deferring execution to background scheduler queues.

---

## 1. When to Use

Use the Wait action when you need to:
- Implement delayed follow-up notifications (e.g., send reminder email 3 days after quote creation).
- Pause execution until a target document date is reached (e.g., wait until `doc.due_date`).
- Rate-limit background processes or API interactions.

---

## 2. Configuration

### Configuration Fields
- **Wait Mode**:
  - `Duration`: Pause for relative time offset (e.g., `2 Hours`, `3 Days`).
  - `Until Date`: Pause until explicit absolute timestamp evaluated from `@doc` field or resolver (e.g., `@doc.follow_up_date`).
- **Duration Unit**: `Seconds`, `Minutes`, `Hours`, `Days`.

---

## 3. Output

- **Deferred State**: In synchronous contexts, pauses current thread. In asynchronous contexts, reschedules remaining rule execution via Frappe Scheduler.
- **Return Contract**: Returns `{"status": "deferred", "resume_at": "YYYY-MM-DD HH:mm:ss"}`.

---

## 4. Example

### Scenario: Send Follow-Up Quotation Email After 48 Hours

1. **Trigger**: Quotation `After Insert`.
2. **Wait Node**: Mode = `Duration`, Value = `48`, Unit = `Hours`.
3. **Notify Node**: Email quotation follow-up message to customer.

---

## 5. Performance Notes

- **Non-Blocking Background Worker**: In `Asynchronous` execution mode, Wait releases foreground worker threads, using scheduled background tasks (`frappe.enqueue`) to resume execution at `resume_at`.

---

## 6. Common Mistakes

- **Blocking Synchronous UI Threads**: Setting a long Wait duration on synchronous web requests, causing HTTP timeouts.
- **Past Resume Timestamps**: Supplying an `Until Date` value that has already passed (resolves immediately without waiting).
