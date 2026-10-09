---
title: Actions Documentation Audit
description: Source-to-documentation audit for the Actions documentation refresh.
---

# Actions Documentation Audit

**Source repository:** `Sendipad/flexirule`, branch `feat/fetch-records-mode`  
**Documentation repository:** `Sendipad/flexirule-docs`  
**Scope:** Documentation only. No application files were changed.

## Summary

This pass refreshed the Actions discovery flow and corrected high-impact terminology, Query Records documentation, and the shared Condition Builder guide. The source was traced from the Query Records handler contract through its Vue configuration panel, runtime validation, query dispatch, result handling, and permission guard. The Condition Builder UI and Condition action handler were also inspected to align documented controls and branching behavior with the implementation.

## Application source inspected

| Area | Evidence inspected | Findings used in documentation |
|---|---|---|
| Action contracts | `flexirule/ruleflow/core/action_handlers/query_records.py`; handler/contract framework | Query Records exposes mode-specific contracts, required fields, allowed result types, and UI metadata. Fetch Records' result type is fixed to List of Records. |
| Configuration UI | `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/QueryRecordsConfig.vue` | Fetch Records has its own `FetchRecordsConfig` panel. Query List has separate filter, fields, sorting, limit, group-by, parent DocType, and DISTINCT controls. Permission controls appear in the shared Query Records panel. |
| Runtime dispatch | `QueryRecordsHandler.execute` in `query_records.py` | Mode selection dispatches Fetch Records separately from Query List, Query Doc, Exist Record, Query Report, aggregates, and Group By. |
| Fetch Records execution | `validate_fetch_records`, `_fetch_records` in `query_records.py` | FlexiRule resolves dynamic values recursively, passes supported query arguments to the compatibility helper, and converts the canonical filter tree when detected. Frappe Query Builder owns most native field/filter semantics. |
| Permissions | `can_ignore_permissions` integration and Query Records UI fields | Skip Permissions is an explicit privileged path with a conditional audit reason; documentation warns against casual use. |
| Query Builder behavior | Existing query capability audit and tests in the app repository | Infix string `"or"` list-filter form is documented as unsupported/broken in the inspected capability audit. Nested filter groups and field-path behavior must be tested against the installed Frappe version. |
| Condition Builder UI | `components/condition_builder/ConditionBuilder.vue`, `ConditionNode.vue`, and `SimpleCondition.vue` | The editor exposes AND/OR group logic, Condition, Group, and Collection controls. Leaf operators are field-aware and sourced from backend configuration when available, with frontend defaults as fallback. The UI does not expose a general NOT group toggle. |
| Condition execution | `flexirule/ruleflow/core/action_handlers/condition.py` | The Condition handler evaluates the compiled condition expression and routes through True/False connections. Configuration present without a compiled expression requires the rule to be saved/compiled again. |
| Shared action terminology | Action handler contract and current documentation inventory | Documentation now uses **Assignment** rather than “Set Value” and **Condition** rather than “Check.” Document Action is distinguished from Assignment. |

## Documentation pages changed

- `content/en/action-type/_index.md` — reorganized the Actions landing page into discoverable categories, clarified trigger/condition/action roles, dynamic values, permissions, and feature maturity.
- `content/en/action-type/which-action.md` — refreshed the outcome-based action decision guide and distinguished Fetch Records from legacy Query List.
- `content/en/action-type/assignment.md` — corrected obsolete “Set Value” terminology and removed unsupported universal claims about operators.
- `content/en/action-type/condition.md` — corrected obsolete “Check” terminology and focused the guide on the True/False contract.
- `content/en/action-type/query-records/_index.md` — clarified mode-specific contracts and result shapes.
- `content/en/action-type/query-records/which-query-mode.md` — rebuilt the mode decision table around result shape and implementation differences.
- `content/en/action-type/query-records/fetch-records.md` — expanded UI walkthrough, configuration behavior, result handling, permissions, validation, performance, compatibility, and limitations.
- `content/en/rule-builder/condition-builder.md` — documented actual AND/OR, row, nested group, Collection, field-aware operator, value-control, and drag/drop behavior; removed unsupported claims about a NOT group toggle and corrected the action terminology.
- `content/en/action-type/actions-documentation-audit.md` — this audit and verification record.

## Important findings and documented gaps

1. **Fetch Records is a distinct Query Records mode.** It uses `frappe.qb.get_query` through a compatibility helper, not the same legacy path as Query List. The docs explicitly advise preserving legacy configurations unless an application migration is verified.
2. **The filter editor and backend adapter have two representations.** The UI uses a structured tree; the backend resolves values recursively and converts its canonical tree format when detected. Native Frappe Query Builder behavior still governs the resulting query.
3. **Native query support is not unlimited.** The inspected capability audit identifies infix `"or"` in list filters as unsupported/broken. Linked-field paths, child-table conditions, and other complex filter shapes should be tested rather than promised.
4. **Fetch Records returns a list of rows.** Its contract does not offer a configurable full-document output type. The documentation recommends inspecting actual results in Debug before downstream use.
5. **The mode supports configured query arguments, not an automatic pagination iterator.** Limit, offset, fields, filters, order_by, group_by, and distinct are passed when present, but the action itself does not promise automatic traversal of multiple pages.
6. **Permission bypass is sensitive.** The UI exposes Skip Permissions and a conditional Permission Audit Reason. The docs recommend leaving it disabled unless explicitly approved.
7. **Condition groups expose AND and OR, not a general NOT toggle.** The documentation describes the current UI rather than claiming controls that are not present. A Collection condition is a distinct node with its own nested `where` group.
8. **No screenshot was fabricated.** This change documents the actual controls based on source inspection. Existing media was not presented as newly captured UI.

## Verification status

- Source branch was explicitly selected for inspected application files: `feat/fetch-records-mode`.
- Documentation changes were committed through the GitHub repository API on a new branch.
- A local Hugo build, link checker, and formatter could not be executed in this environment because no local checkout or build runner was available through the connected GitHub actions used for editing.
- Internal links in the edited pages were reviewed against the existing content paths and Hugo `relref` conventions, but a full-site generated-link check remains required in CI or a local checkout.

## Action inventory considered

The existing action documentation and registry-oriented source were reviewed in the context of these action families: Condition, Switch, Loop, Assignment, Query Records (including Fetch Records and legacy modes), Document Action, Notify, Process, Sub-Rule, Wait, and Stop / Error. This pass concentrates on the Actions landing/discovery experience, Condition Builder behavior, and Query Records/Fetch Records accuracy; it is not a claim that every individual action guide has received a complete source-to-runtime audit in this change.
