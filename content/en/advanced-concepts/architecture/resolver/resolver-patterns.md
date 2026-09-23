---
title: Resolver Patterns & Architecture
description: Comprehensive catalog and architecture of compiled Value Resolvers in FlexiRule.
weight: 10
aliases:
- /docs/resolver/resolver_patterns/
---

# Resolver Patterns & Architecture

The FlexiRule Value Resolver engine processes dynamic inputs across rules, conditions, and actions. Every dynamic input is backed by a compiled resolver strategy (`CompiledResolver`) in `flexirule.ruleflow.core.value_resolver`.

---

## Catalog of Compiled Resolvers

| Resolver Type | Internal Class | Description & Key Parameters |
| :--- | :--- | :--- |
| `none` | `NoneResolver` | Returns `None` constant. |
| `static` | `StaticResolver` | Returns literal string, number, or boolean value. |
| `variable` / `var` | `VariableResolver` | Evaluates dot-notation context variables (`doc.total`, `vars.order.status`, `system.user`). |
| `date_formula` | `DateFormulaResolver` | Adds/subtracts units (`days`, `weeks`, `months`, `years`, `hours`) from `today` or a document field. |
| `math_formula` | `MathFormulaResolver` | Performs arithmetic (`+`, `-`, `*`, `/`, `%`) between fields or numeric constants. |
| `date_diff` | `DateDiffResolver` | Calculates numerical difference (`days`, `hours`, `minutes`, `seconds`) between two dates. |
| `child_aggregation` | `ChildAggregationResolver` | Aggregates child table fields (`sum`, `avg`, `min`, `max`, `count`) directly without requiring loops. |
| `string_formula` | `StringFormulaResolver` | String operations (`concat`, `uppercase`, `lowercase`, `trim`, `replace`, `substring`). |
| `normalization` | `NormalizationResolver` | Normalizes values (modes: `slug`, `lowercase`, `uppercase`, `strip`, `clean_spaces`, `digits_only`, `email`). |
| `format` | `FormatResolver` | Formats dates, numbers, currency, or JSON strings. |
| `system_context` | `SystemContextResolver` | Injects active session/system values (`user`, `company`, `roles`, `today`, `now`). |
| `collection` | `CollectionResolver` | Evaluates, filters, plucks, or checks conditions on list/child-table collections. |
| `fetch` | `FetchResolver` | Direct single-value database lookup via link fields (`frappe.db.get_value`). |
| `jinja` | `JinjaResolver` | Renders Jinja templates with full context access. |
| `safe_eval` / `expression` | `SafeEvalResolver` / `ExpressionResolver` | Evaluates safe expressions and tokenized template strings. |

---

## Smart Value Input Integration

In the user interface, the **Smart Value Selector** abstracts these resolvers into three primary visual modes:

1. **Static Value Mode**: Converts to `StaticResolver`.
2. **Variable Mode (`@`)**: Interactively searches context variables and maps to `VariableResolver`.
3. **Resolver / Function Mode (`/`)**: Formats configurations for formulas, collections, formatting, fetches, and context resolvers.

---

## Execution & Compilation Lifecycle

1. **Instantiation**: `ValueResolver.compile_resolver(config)` parses the raw dict.
2. **Strategy Matching**: Maps `config.type` to the corresponding `CompiledResolver` subclass.
3. **Evaluation**: Called via `resolver.resolve(context)` during rule engine execution with zero runtime parsing overhead.
