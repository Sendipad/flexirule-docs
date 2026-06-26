---
title: 'Update Record: Architecture Reference'
description: Internal implementation details for the Document Action.
weight: 30
---

# Update Record: Architecture Reference

## Purpose
The **Update Record** block (internally Document Action) implementation abstracts Frappe's CRUD operations into a declarative mapping-based engine. It centralizes document manipulation logic to ensure consistent application of permissions, background enqueuing, and context-aware value resolution.

## Field Mapping
Field mapping logic is implemented in `flexirule/ruleflow/utils/mapping.py`. It provides the binding between rule context (doc, vars) and the target document fields.

## Asynchronous Execution
When `is_async` is enabled, the action is enqueued using `frappe.enqueue`. The engine logs the background job ID and continues execution if there are no immediate dependencies on the result.

## Class Structure
- **Handler Class**: `DocumentActionHandler`
- **Source File**: `flexirule/ruleflow/core/action_handlers/create_doc.py`
