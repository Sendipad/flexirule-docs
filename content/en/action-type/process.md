---
title: Advanced Process
description: Execute complex, reusable business logic operations using registered Process contracts.
weight: 110
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType", "Context Variable"]
aliases:
  - /docs/actions/process/
---

# Advanced Process Action

The **Advanced Process** action (internal handler: `Process`) executes registered business operations created by developers or system plugins. It decouples complex orchestration tasks (such as deduplication, validation pipelines, batch operations, or enrichment) from visual rule layout.

---

## 1. When to Use

Use the Advanced Process action when you need to:
- Run complex multi-step algorithms (e.g., deduplication matching, tax engines, credit score calculation).
- Perform external API integrations or system operations (e.g., generating PDFs, calling webhooks).
- Reuse standard business operations across multiple rules without repeating node logic.
- Execute heavy background operations asynchronously using `frappe.enqueue`.

---

## 2. Configuration

### Configuration Fields
- **Process**: Select registered Process definition (e.g., `Deduplication`, `Validation`, `Batch`, `Enrichment`).
- **Operation**: Select specific operation within the process (e.g., `Score Duplicates`, `Validate Tax ID`).
- **Operation Config**: Input parameters rendered dynamically based on the operation's schema contract.
- **Input Mapping**: Map `@doc` or `@vars` fields to required operation input parameters.
- **Output Variable**: Destination variable name in `@vars` where process outputs will be stored.
- **Error Handling Strategy**: Choose action behavior on failure (`Stop Rule`, `Continue`, or `Branch on Error`).

---

## 3. Output

- **Context Variable Mutation**: Stores structured operation output dictionary in `@vars.<output_variable>`.
- **Branching**:
  - Success: Continues down primary outbound edge.
  - Failure: Halts rule execution (or branches to error port if configured).
- **Return Contract**: Returns dictionary of outputs defined by the operation's `ProcessContract`.

---

## 4. Example

### Scenario: Deduplicate Customer Records on Insert

1. **Advanced Process Block Configuration**:
   - **Process**: `Deduplication`
   - **Operation**: `Find Duplicates`
   - **Input Mapping**:
     - `email_id` -> `@doc.email_id`
     - `tax_id` -> `@doc.tax_id`
   - **Output Variable**: `duplicate_result`
2. **Next Node (Check)**:
   - **Condition**: `@vars.duplicate_result.is_duplicate == true`
   - **True Branch**: Connect to **Stop / Error** (`"Duplicate Customer Detected!"`).

---

## 5. Performance Notes

- **Registry Execution**: Process operations are executed via `ProcessOperationExecutor`, incurring minimal dispatch latency (<0.5ms).
- **Asynchronous Execution**: Processes configured as `Async` run in Frappe Background Workers (`frappe.enqueue`), keeping foreground requests fast and responsive.

---

## 6. Common Mistakes

- **Unmapped Required Inputs**: Failing to map mandatory operation parameters defined in `ProcessContract`.
- **Ignoring Execution Errors**: Choosing `Continue on Error` without checking the error status in subsequent nodes.
- **Overusing Custom Processes for Simple Logic**: Writing custom Python Process code for basic field updates that could be handled natively by a **Set Value** block.
