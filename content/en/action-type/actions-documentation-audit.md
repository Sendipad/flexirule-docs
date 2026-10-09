---
title: Actions Documentation Audit
description: Source-to-documentation audit for the Actions documentation refresh.
---

# Actions Documentation Audit

**Source repository:** `Sendipad/flexirule`, branch `feat/fetch-records-mode`  
**Documentation repository:** `Sendipad/flexirule-docs`  
**Scope:** Documentation only. No application files were changed.

## Summary

This pass refreshed the Actions discovery flow and corrected high-impact terminology, Query Records documentation, the shared Condition Builder guide, the Condition action guide, and the Loop guide. The source was traced from Query Records contracts and runtime through its Vue configuration, and from Condition Builder controls through the Condition and Loop handlers.

## Application source inspected

| Area | Evidence inspected | Findings used in documentation |
|---|---|---|
| Query Records contracts | `flexirule/ruleflow/core/action_handlers/query_records.py`; handler/contract framework | Query Records exposes mode-specific contracts, required fields, allowed result types, and UI metadata. Fetch Records' result type is fixed to List of Records. |
| Query Records UI | `flexirule/public/js/flexirule/rule_builder/components/rule_config/types/QueryRecordsConfig.vue` | Fetch Records has its own configuration panel. Query List has separate filter, fields, sorting, limit, group-by, parent DocType, and DISTINCT controls. Permission controls appear in the shared panel. |
| Fetch Records runtime | `validate_fetch_records`, `_fetch_records`, and `QueryRecordsHandler.execute` | Mode selection dispatches Fetch Records separately from Query List and other modes. Dynamic values are resolved and supported query arguments passed to the compatibility helper; native Frappe Query Builder behavior still governs much of query semantics. |
| Permissions | `can_ignore_permissions` integration and Query Records UI fields | Skip Permissions is an explicit privileged path with a conditional audit reason; documentation warns against casual use. |
| Query Builder behavior | Existing query capability audit and tests in the app repository | Infix string `"or"` list-filter form is documented as unsupported/broken in the inspected capability audit. Complex filter shapes should be tested against the installed Frappe version. |
| Condition Builder UI | `components/condition_builder/ConditionBuilder.vue`, `ConditionNode.vue`, `ConditionGroupUI.vue`, and `SimpleCondition.vue` | The editor exposes AND/OR group logic, Condition, Group, and Collection controls. Leaf operators are field-aware and sourced from backend configuration when available, with frontend defaults as fallback. The UI does not expose a general NOT group toggle. |
| Condition configuration | `components/rule_config/types/ConditionStep.vue` | The Condition action requires a condition; other action/entry contexts can use the same editor as an optional execution filter. Entry Condition is evaluated before rule actions start and stops the rule when false. |
| Condition execution | `flexirule/ruleflow/core/action_handlers/condition.py` | The Condition handler evaluates the compiled condition expression and routes through True/False connections. Configuration present without a compiled expression requires the rule to be saved/compiled again. |
| Loop configuration | `components/rule_config/types/LoopConfig.vue`, `components/node_configs/LoopNodeConfig.vue` | Loop configuration requires an iterator list and an Item Alias. The UI filters available variables to table fields or values exposing nested fields. |
| Loop execution | `flexirule/ruleflow/core/action_handlers/loop.py` | The runtime accepts a list or tuple, assigns the current item to the configured return variable, exposes index/first/last/length under `vars.loop`, routes to True while items remain, and uses False when complete. Non-list/tuple values are warned about and treated as empty. |
| Shared action terminology | Action handler contracts and documentation inventory | Documentation uses **Assignment** rather than “Set Value” and **Condition** rather than “Check.” Document Action is distinguished from Assignment. |

## Documentation pages changed

- `content/en/action-type/_index.md` — reorganized the Actions landing page into discoverable categories and clarified trigger/condition/action roles, dynamic values, permissions, and feature maturity.
- `content/en/action-type/which-action.md` — expanded the outcome-based guide with common business tasks and clearer comparisons between Condition/Switch, Assignment/Document Action, Query Records/Loop, and Fetch Records/Query List.
- `content/en/action-type/assignment.md` — corrected obsolete “Set Value” terminology and removed unsupported universal claims about operators.
- `content/en/action-type/condition.md` — clarified the Condition action's branching contract, its difference from Entry Condition, compilation expectations, and testing guidance.
- `content/en/action-type/loop.md` — replaced stale Repeat/Set Value/Check language, documented iterator and alias requirements, runtime list/tuple behavior, loop metadata, and True/False paths.
- `content/en/action-type/query-records/_index.md` — clarified mode-specific contracts and result shapes.
- `content/en/action-type/query-records/which-query-mode.md` — rebuilt the mode decision table around result shape and implementation differences.
- `content/en/action-type/query-records/fetch-records.md` — expanded UI walkthrough, configuration behavior, result handling, permissions, validation, performance, compatibility, and limitations.
- `content/en/rule-builder/condition-builder.md` — documented actual AND/OR, row, nested group, Collection, field-aware operator, value-control, and drag/drop behavior; removed unsupported claims about a NOT group toggle.
- `content/en/action-type/actions-documentation-audit.md` — this audit and verification record.

## Important findings and documented gaps

1. **Fetch Records is a distinct Query Records mode.** It uses `frappe.qb.get_query` through a compatibility helper, not the same legacy path as Query List. The docs advise preserving legacy configurations unless a migration is verified.
2. **Native query support is not unlimited.** The inspected capability audit identifies infix `"or"` in list filters as unsupported/broken. Linked-field paths, child-table conditions, and other complex filter shapes should be tested rather than promised.
3. **Fetch Records returns a list of rows.** Its contract does not offer a configurable full-document output type. The documentation recommends inspecting actual results in Debug before downstream use.
4. **Permission bypass is sensitive.** The UI exposes Skip Permissions and a conditional Permission Audit Reason. The docs recommend leaving it disabled unless explicitly approved.
5. **Condition groups expose AND and OR, not a general NOT toggle.** The documentation describes the current UI rather than claiming controls that are not present. A Collection condition is a distinct node with its own nested `where` group.
6. **Entry Condition differs from an in-flow Condition.** The entry gate runs before rule actions; a Condition action branches after execution has started.
7. **Loop accepts list/tuple iterators.** The handler exposes the current item and loop metadata, and routes to its completion path after the collection is exhausted. Documentation does not claim that Loop retrieves data itself.
8. **No screenshot was fabricated.** The guides describe controls based on source inspection; existing media was not presented as newly captured UI.

## Verification status

- Source branch was explicitly selected for inspected application files: `feat/fetch-records-mode`.
- Documentation changes were committed through the GitHub repository API on a new branch.
- A local Hugo build, full generated-link checker, and formatter could not be executed in this environment because no local checkout/build runner was available through the connected GitHub actions used for editing.
- Internal links in edited pages were reviewed against existing content paths and Hugo `relref` conventions, but a full-site generated-link check remains required in CI or a local checkout.

## Scope boundary

The existing action documentation and registry-oriented source were reviewed in the context of Condition, Switch, Loop, Assignment, Query Records (including Fetch Records and legacy modes), Document Action, Notify, Process, Sub-Rule, Wait, and Stop / Error. This pass improves discovery and selected high-impact guides; it is not a claim that every individual action guide has received a complete source-to-runtime audit.
