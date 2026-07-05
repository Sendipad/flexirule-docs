---
title: Advanced Process
description: Execute complex, reusable business logic operations.
weight: 110
aliases:
  - /docs/actions/process/
---

# Advanced Process Action

The **Advanced Process** action (internally called **Process**) is the primary extension point for custom business logic in FlexiRule. While blocks like "Check" or "Assignment" handle basic flow and data updates, the Process action allows you to execute sophisticated, reusable operations defined in the **Process Registry**.

## Purpose

Use the Process action for:
- **Complex Calculations**: Tax engines, freight calculators, or financial models.
- **External Integrations**: Sending data to Slack, calling a REST API, or interacting with AWS.
- **System Tasks**: Generating PDFs, bulk-creating documents, or triggering Frappe background jobs.
- **Reusable Business Logic**: Any logic that is used across multiple rules should be encapsulated as a "Process".

## Action Capabilities

| Capability | Support | Notes |
| :--- | :--- | :--- |
| **Input Mapping** | ✅ Yes | Map variables from the rule context to the Process inputs. |
| **Output Mapping** | ✅ Yes | Store the Process result back into the rule context. |
| **Schema-Aware** | ✅ Yes | The UI dynamically adapts based on the Process configuration schema. |
| **Transactional** | ✅ Yes | Supports savepoints to ensure data integrity during execution. |

## Configuration

### 1. Process Selection
Select from the list of registered Processes. Each process may have multiple **Operations** (e.g., a "Slack" process might have "Send Message" and "Upload File" operations).

### 2. Input Configuration
Based on the selected process, you will see a dynamic set of fields. You can provide:
- **Static Values**: Hardcoded strings or numbers.
- **Dynamic Resolvers**: Reference fields from `doc` or `vars`.
- **Input Mapping**: Use the mapping grid to bind complex context data to process parameters.

### 3. Execution Options
- **On Error**: Choose whether to stop, continue, or retry the rule if the process fails.
- **Is Async**: If enabled, the process will run in a background worker (using `frappe.enqueue`), and the rule will continue immediately.

### 4. Output Handling
Specify a **Return Variable** (e.g., `vars.api_response`) where the result of the process will be stored for use in subsequent blocks.

## Execution Semantics

1.  **Input Resolution**: The engine resolves all input mapping and dynamic values.
2.  **Validation**: The engine verifies inputs against the process's internal schema.
3.  **Operation Execution**: The Process Handler executes the specific Python logic for the operation.
4.  **Result Capture**: The output is captured and mapped back to the execution context.
5.  **Flow Continuation**: The engine follows the **Success** (True) branch.

## Best Practices

- **Encapsulate Logic**: If you find yourself building the same sequence of 10 nodes in multiple rules, move that logic into a single **Process**.
- **Error Handling**: Always configure an "On Error" strategy for processes that interact with external services (like APIs), as they are more likely to fail than internal logic.
- **Keep it Atomic**: A process should ideally perform one specific task and return a clear result.

## Technical Details

Processes are managed via the `Process` DocType and registered in the system's `ProcessRegistry`. Developers can add new processes by creating a Python class that implements the `ProcessContract`. For more information, see the [Architecture Reference]({{< relref "advanced-concepts/architecture/actions/advanced-process.md" >}}).
