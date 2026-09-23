---
title: Advanced Process
description: Execute complex, reusable business logic operations using built-in or registered process operations.
weight: 110
aliases:
  - /docs/actions/process/
---

# Advanced Process Action

The **Advanced Process** action (internally called **Process**) is the primary extension point for modular business logic in FlexiRule. It executes configurable operations through the `ProcessOperationExecutor` decoupled from rule graph definition.

## Purpose

Use the Process action for:
- **Data Validation Operations**: Run schema or rule-based validation (`validation`).
- **Record Deduplication**: Execute scoring and fuzzy matching algorithms (`deduplication`).
- **Batch Processing**: Process collections of records in chunked batches (`batch`).
- **Data Enrichment**: Fetch and auto-populate missing record details (`enrichment`).
- **Custom Registered Operations**: Invoke custom domain handlers registered in `ProcessRegistry`.

## Built-In Operations

| Operation Name | Module | Primary Capability |
| :--- | :--- | :--- |
| `validation` | `ruleflow.process.validation` | Document/field validation and error collection. |
| `deduplication` | `ruleflow.process.deduplication` | Duplicate detection and match scoring algorithms. |
| `batch` | `ruleflow.process.batch` | Chunked processing of multi-record collections. |
| `enrichment` | `ruleflow.process.enrichment` | External/internal data enrichment pipeline. |

## Configuration

### 1. Process & Operation Selection
Select the target **Process** and specific **Operation**. The UI dynamically renders required inputs based on `process_operation.json` definitions.

### 2. Inputs & Parameter Mapping
Inputs accept standard **Smart Value** configurations (Static, `@doc` / `@vars`, or `/resolver` functions).

### 3. Execution Options
- **On Error**: Choose error recovery policy (`Stop`, `Raise Error`, `Continue`).
- **Async Execution**: Enable background task queue processing (`frappe.enqueue`).

### 4. Output Storage
Results are stored in `vars.<return_variable>` for access by subsequent actions in the flow.

## Technical Architecture

For backend class structures, registration contracts, and custom process operation creation, refer to the [Process Architecture Reference]({{< relref "advanced-concepts/architecture/actions/advanced-process.md" >}}).
