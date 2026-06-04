---
title: "Execution Context Reference"
weight: 40
---

# Execution Context Reference

This reference describes the variables available to the engine at the moment of triggering.

## DocType Events
- `doc`: The current document object.
- `old_doc`: The document state before the current transaction.
- `user`: The user who initiated the event.

## Scheduler Events
- `now`: The current system timestamp.
