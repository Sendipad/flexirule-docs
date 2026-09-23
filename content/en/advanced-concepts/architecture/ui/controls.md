---
title: Controls & Dynamic Form Architecture
description: Vue component architecture, ControlFactory, control registry, multi-select, and async option sources in FlexiRule.
weight: 40
aliases:
- /docs/CONTROLS/
---

# UI Controls & Control Architecture

The FlexiRule UI employs a decoupled, schema-driven component architecture. Action configuration forms are generated dynamically from backend contract schemas via a control factory (`ControlFactory.vue`) and component registry (`control_registry.js`).

---

## Control Registry & Control Factory

### `control_registry.js`
Maps logical schema control types to Vue component implementations:

| Control Type / Key | Vue Component / Resolver | Description |
| :--- | :--- | :--- |
| `smart-value` | `FlexStructuredValueControl.vue` | Smart Value Selector supporting Static, Variable (`@`), and Resolver (`/`) modes. |
| `combo` / `select` | `ComboBoxControl.vue` | Searchable dropdown with async option loading and portal positioning. |
| `multi-select` | `MultiSelectList.vue` | Tag-based multi-selection list with drag/reorder support. |
| `resource-mapper` | `ResourceMapperControl.vue` | Schema-aware visual mapping tool for payload transforms. |
| `text-generator` | `TextGeneratorControl.vue` | Rich text / Jinja template generator based on Tiptap. |
| `condition-builder` | `ConditionBuilder.vue` | Visual boolean condition tree editor with child table query support. |
| `filter-group` | `FilterGroup.vue` | Structured query filter builder used by Query Records. |

---

## Key Composables & Hooks

### `useAsyncOptionsSource`
Composable for fetching dynamic option lists for select/multi-select controls (e.g., DocTypes, field lists, user roles, process operations):
- Supports debounced server searching (`search_actions`, `get_doctype_fields`).
- Caches results per execution context.

### `useControlContext`
Provides access to current rule context, active document schema, available upstream action variables (`vars`), and current node configuration.

---

## Unified Input Terminology

In all user documentation, dynamic input components are referred to as the **Smart Value Selector** (or Smart Value System). Internal component names like `FlexValueControl` or `FlexStructuredValueControl` are restricted to developer architecture documentation.
