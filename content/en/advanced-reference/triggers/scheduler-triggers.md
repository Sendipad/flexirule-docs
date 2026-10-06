---
title: Scheduler Triggers
description: Scheduler triggers are used for background automation and periodic tasks
  that are not tied to a specific user action or document event.
weight: 60
---

# Scheduler Triggers

Scheduler triggers are used for background automation and periodic tasks that are not tied to a specific user action or document event.

## Scheduling Options
- **Cron Expressions**: Standard unix-style cron for precise timing.
- **Intervals**: Run every X minutes, hours, or days.
- **Standard Frappe Events**: Hourly, Daily, Weekly, Monthly.

## Usage Patterns
Since scheduler triggers aren't tied to a specific document, they often begin with a **Query Records** action to identify the set of documents that need processing.
