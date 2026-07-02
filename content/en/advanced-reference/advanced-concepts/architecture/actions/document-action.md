---
title: Document Action Architecture
description: Technical implementation of Create/Update operations.
---

# Document Action Architecture

The Document Action (internally `document_action`) handles CRUD operations on Frappe DocTypes.

## Field Mapping
Mappings define how values are transferred from the execution context to the target document. It supports:
- Direct value set-value.
- Formula-based mapping.
- Type-aware conversion.

## Asynchronous Execution
For performance-heavy operations, document actions can be configured to execute in background workers, preventing UI lag during complex record creation chains.
