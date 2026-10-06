---
title: API Reference
description: Public whitelisted methods for programmatic interaction with FlexiRule.
weight: 10
---

# Public API Reference

FlexiRule provides a comprehensive set of whitelisted backend methods accessible via `frappe.call()`. These APIs follow standard Frappe conventions and are gated by the same permissions as the Rule Builder.

## Rule Execution & Testing

### `test_rule`
Execute a rule manually for testing purposes.
- **Parameters**:
    - `rule_name`: Name of the rule to test.
    - `doctype`: (Optional) DocType of the test document.
    - `docname`: Name of the test document.
    - `dry_run`: If true, database changes are not committed.
    - `save_log`: If true, an execution log is persisted.
- **Returns**: Execution results including status, duration, and path trace.

### `execute_rule`
The pure execution API for running a rule programmatically.
- **Parameters**:
    - `rule_name`: Name of the rule.
    - `context`: JSON object of initial variables (`vars`).
    - `dry_run`: Boolean.
- **Returns**: Resulting context and execution trace.

### `simulate_rule`
Dry-run simulation that provides deep introspection of variable states at each step.
- **Returns**: Success status and full `step_details` array.

---

## Lifecycle Management

### `transition_rule`
Change the status of a rule (e.g., from Draft to Active).
- **Parameters**:
    - `target_status`: One of `Draft`, `Active`, `Disabled`, `Archived`.

### `amend_rule`
Create a new version (amendment) of an existing rule.
- **Returns**: Name of the new draft rule version.

### `clone_rule`
Create a full copy of a rule.
- **Parameters**:
    - `new_name`: (Optional) Name for the new rule.

---

## Introspection & Search

### `get_contract_dto`
Returns the canonical contract for all action types, including schemas and capabilities. Primarily used by the Rule Builder UI.

### `get_doctype_fields`
Fetch fields for a DocType, optimized for use in Rule Builder pickers. Supports grouping and child table field extraction.

### `search_actions`
Fuzzy search across all registered Action Types and Process Operations.

---

## Maintenance

### `clear_cache`
Clears the multi-level Rule Registry cache (Request-local, Redis, and Database). Recommended after manual database changes to rules.

### `get_rule_stats`
Returns performance and reliability metrics for a specific rule (Execution count, Success rate, Avg duration).
