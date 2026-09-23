---
title: Public API Reference
description: Complete public whitelisted REST & Python API endpoints for FlexiRule on Frappe.
weight: 10
---

# Public API Reference

FlexiRule exposes whitelisted Frappe API endpoints (`@frappe.whitelist()`) located in `flexirule.ruleflow.api`.

---

## Complete API Endpoint Catalog

| API Endpoint | Method / Purpose | Parameters |
| :--- | :--- | :--- |
| `test_rule` | Dry-run / test rule execution | `rule_name`, `doctype`, `docname`, `doc_json`, `dry_run`, `save_log` |
| `execute_rule` | Production rule execution | `rule_name`, `doc`, `vars`, `dry_run`, `skip_permissions` |
| `simulate_rule` | Step-by-step trace simulation | `rule_name`, `docname`, `doc_json` |
| `get_execution_preview` | Generate execution node graph preview | `rule_name`, `docname` |
| `initialize_rule_graph` | Pre-compile rule graph | `rule_name` |
| `validate_rule_document` | Validate rule structure | `doc`, `mode` (`full` / `light`) |
| `validate_node` | Validate single action node | `rule_name`, `action_id` |
| `get_node_config_schema` | Get JSON schema for node config | `rule_name`, `action_id` |
| `get_contract_dto` | Get system action type contracts | None |
| `get_operator_config` | Get condition builder operators | None |
| `get_doctype_fields` | Get searchable fields for DocType | `doctype`, `filters` |
| `get_schema_field_options` | Get field option metadata | `doctype`, `fieldname` |
| `search_actions` | Fuzzy search action types/operations | `query`, `filters`, `limit` |
| `get_process_operations` | List operations for process | `process_name` |
| `get_all_process_operations` | List all process operations | None |
| `get_action_context_schema` | Get upstream variable context schema | `rule_name`, `action_id` |
| `test_action_query` | Dry-run test Query Records | `action_config`, `docname` |
| `get_rule_versions` | List historical versions of rule | `rule_name`, `limit` |
| `restore_rule_version` | Rollback rule to version | `rule_name`, `version_name` |
| `export_rule` | Export rule JSON payload | `rule_name` |
| `import_rule` | Import rule JSON payload | `import_data`, `overwrite` |
| `clone_rule` | Clone rule and graph | `rule_name`, `new_name` |
| `amend_rule` | Create new version amendment | `rule_name` |
| `transition_rule` | Transition lifecycle state | `rule_name`, `target_status` |
| `get_allowed_transitions` | Get valid lifecycle states | `rule_name` |
| `get_rule_stats` | Get rule metrics & execution logs | `rule_name` |
| `clear_cache` | Flush Redis & in-memory caches | `doctype` |
| `normalize_test_value` | Test value resolver normalization | `value`, `target_type` |

---

## Security & Permission Gating

1. **Authentication**: All endpoints require an active Frappe session or valid API key authentication (`Authorization: token api_key:api_secret`).
2. **Authorization & Role Checks**: Gated by `Rule Permission` DocType records and system role permissions (`System Manager`, `FlexiRule Manager`).
