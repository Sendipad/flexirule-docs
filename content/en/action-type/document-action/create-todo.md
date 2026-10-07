---
title: Document Action — Create ToDo
description: Create a ToDo linked to the current rule context document.
---

# Create ToDo

**Create ToDo** creates a Frappe ToDo linked to the current context document.

## Required setup

This operation requires:

- Reference DocType = ToDo
- Assigned To
- Description

Priority is supported and defaults to **Medium** when not supplied.

The rule must have a context document because the created ToDo is linked to that document.

## Result

The operation returns the created ToDo as a **Single Record**.

## Example

A rule can:

**Condition → Document Action (Create ToDo) → Notify**

Use the condition to decide when follow-up work should be created, then notify the appropriate user if required.
