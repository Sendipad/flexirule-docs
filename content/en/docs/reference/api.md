---
title: "API"
description: "Programmatic interface for FlexiRule."
weight: 10
---

# API Reference

Keywords: API, REST, JSON, integration, automation, backend methods

## Audience

- Developers
- Administrators

---

## Overview

FlexiRule provides a comprehensive set of whitelisted backend methods for programmatic interaction, rule execution, and builder integration. All APIs are built on top of the Frappe Framework and follow its authentication and permission models.

---

## Authentication

All API requests must be authenticated using Frappe's standard methods:

- **Token Based**: `Authorization: token api_key:api_secret`
- **Session Based**: Cookie-based authentication for browser requests.

---

## Rate Limits

FlexiRule adheres to the global rate limits configured in the Frappe site's `site_config.json`. Additionally, heavy execution APIs like `execute_rule` may have specific limits based on the system's resource availability.

---

## Rule Execution APIs

### `execute_rule`

The primary API for manual or programmatic rule execution.

- **Endpoint**: `/api/method/flexirule.api.execute_rule`
- **Method**: `POST`
- **Parameters**:
    - `rule_name`: (Required) Name of the Rule.
    - `context`: (Optional) Initial variable state (dict).
    - `dry_run`: (Optional) Boolean flag to simulate execution without committing database changes.

**Example Request:**

```bash
curl -X POST https://your-site.frappe.cloud/api/method/flexirule.api.execute_rule \
     -H "Authorization: token 123:456" \
     -H "Content-Type: application/json" \
     -d '{
           "rule_name": "Update Discount on Large Orders",
           "context": {"source": "api_v1"}
         }'
```

**Example Response:**

```json
{
  "message": {
    "status": "Success",
    "execution_id": "RULE-LOG-2024-00001",
    "vars": {
      "discount_applied": true,
      "source": "api_v1"
    }
  }
}
```

### `test_rule`

Executes a rule against a document for testing purposes. Works for draft and inactive rules.

- **Parameters**:
    - `rule_name`: Name of the Rule.
    - `doctype` / `docname`: Target document.
    - `document_json`: Transient document data (alternative to docname).
    - `dry_run` (bool): If true, rolls back changes after execution.
    - `skip_log_enqueue` (bool): If true, does not persist logs.
    - `save_log` (bool): Forces log persistence regardless of dry_run.
- **Returns**: Execution payload including `status`, `path_trace`, `vars`, and legacy `context_snapshot`.

---

## Lifecycle & Management

### `transition_rule`

Moves a rule through its lifecycle states.

- **Statuses**: `Draft`, `Active`, `Disabled`, `Archived`.
- **Note**: Transitioning to `Active` triggers a full validation check.

### `validate_rule_document`

Performs deep validation of a rule's graph, configuration, and conditions.

- **Modes**: `full` (for activation), `draft` (partial check), `node` (single action).

---

## Introspection & Metadata

### `get_contract_dto`

Returns the global contract for all action types. This is the source of truth for the Rule Builder.

### `get_node_config_schema`

Returns the dynamic configuration schema for a specific action type or process operation.

---

## Error Codes

| Code | Description |
| :--- | :--- |
| 403 | Forbidden: Insufficient permissions to execute the rule or access the API. |
| 404 | Not Found: The specified rule or document does not exist. |
| 500 | Internal Server Error: An error occurred during rule execution. Check Rule Logs for details. |

---

## Related Topics

- [Execution Engine](../../engine/execution_engine/)
- [Glossary](../glossary/)
- [Rule Lifecycle](../../builder/rule_builder/#rule-lifecycle)
