---
title: "Action Metadata Schema"
description: "Reference specification for action metadata used by AI and programmatic tools."
weight: 10
---

# Action Metadata Schema

This document defines the recommended metadata structure for FlexiRule actions. This metadata is intended to support AI rule generation, automated validation, search optimization, and Copilot features.

---

## Purpose

Standardized metadata allows AI models and system tools to understand the capabilities and requirements of an action without parsing natural language documentation. This enables:

-   **AI Rule Generation**: Helping LLMs select the correct action for a business requirement.
-   **Validation**: Catching configuration errors before execution.
-   **Discovery**: Powering the "Action Zone" search and filtering.
-   **Recommendations**: Suggesting relevant next steps in a rule flow.

---

## Field Definitions

| Field | Type | Description |
| :--- | :--- | :--- |
| `action` | `string` | The unique identifier of the action (e.g., `assignment`, `query-records`). |
| `category` | `string` | The high-level grouping (e.g., `data`, `flow`, `integration`). |
| `targets` | `array` | List of data types this action can modify (`doc`, `vars`, `db`). |
| `operators` | `array` | List of supported operations (if applicable). |
| `supports_conditions` | `boolean` | Whether individual components support row-level guards. |
| `supports_batch_operations` | `boolean` | Whether the action can perform multiple operations in one node. |
| `triggers_compatible` | `array` | Lifecycle events where this action is safe to use. |

---

## Constraints

1.  **Lower-case**: All string identifiers should be lower-case and use hyphens for separation (kebab-case).
2.  **Explicit Targets**: If an action does not modify data, `targets` should be an empty list `[]`.
3.  **Strict Operators**: Only list operators that are formally supported by the backend handler.

---

## Example Payloads

### 1. Assignment Action
```json
{
  "action": "assignment",
  "category": "data",
  "targets": ["doc", "vars"],
  "operators": ["set", "clear", "increment", "decrement", "append", "merge", "toggle"],
  "supports_conditions": true,
  "supports_batch_operations": true,
  "triggers_compatible": ["any"]
}
```

### 2. Query Records Action
```json
{
  "action": "query-records",
  "category": "data",
  "targets": ["vars"],
  "operators": ["list", "doc", "exists", "count", "sum", "avg", "min", "max"],
  "supports_conditions": false,
  "supports_batch_operations": false,
  "triggers_compatible": ["any"]
}
```

### 3. Condition Action
```json
{
  "action": "condition",
  "category": "flow",
  "targets": [],
  "operators": ["and", "or", "any", "all", "none"],
  "supports_conditions": false,
  "supports_batch_operations": true,
  "triggers_compatible": ["any"]
}
```

---

## Future Extensibility

As the FlexiRule engine evolves, the metadata schema may be expanded to include:
-   **Type Safety**: Expected data types for inputs and outputs.
-   **Resource Cost**: Estimated performance impact (e.g., `low`, `medium`, `high`).
-   **Security Scopes**: Required permissions to execute the action.
