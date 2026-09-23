---
title: Collection Resolver Architecture
description: Technical architecture, operations, configuration schemas, and runtime execution of the CollectionResolver.
weight: 20
---

# Collection Resolver Architecture

The `CollectionResolver` (registered as resolver type `collection`) is a compiled, high-performance evaluation strategy designed for querying, checking, filtering, and extracting values from collection arrays, child table lists, or list variables (`list` / `dict` structures).

---

## Technical Overview

The `CollectionResolver` inherits from `CompiledResolver` in `flexirule.ruleflow.core.value_resolver.CollectionResolver`. It compiles child row expressions using `ConditionEvaluator` for $O(N)$ execution speed over child items.

### Key Capabilities

1. **Child Table & List Querying**: Operates directly on `doc.get(child_table_field)` or context variables (`vars.get(variable_name)`).
2. **Compiled Row Filtering**: Reuses `ConditionEvaluator` to filter rows matching complex condition trees.
3. **Execution Safety Limits**: Enforces a strict upper bound of **10,000 items** (`MAX_COLLECTION_ROWS = 10000`). If a collection exceeds 10,000 items at runtime, a `MethodExecutionError` is raised to prevent memory exhaustion.
4. **Alias Resolution**: Automatically maps the UI alias `"find"` to `"first"`.

---

## Supported Operations

| Operation | Return Type | Description / Output Behavior |
| :--- | :--- | :--- |
| `count` | `Integer` | Returns the count of matching rows. Returns `0` for empty/missing lists. |
| `any` | `Boolean` | Returns `True` if at least one row matches the conditions; otherwise `False`. |
| `all` | `Boolean` | Returns `True` if all rows match the conditions or if list is valid; otherwise `False`. |
| `first` / `find` | `Dict / Any` | Returns the first row matching the condition, or `None`. (`find` is an alias for `first`). |
| `filter` | `List[Dict]` | Returns a list of all matching rows. Returns `[]` for empty/missing lists. |
| `pluck` | `List[Any]` | Extracts the value of `target_field` from each matching row. |
| `unique` | `List[Any]` | Extracts unique values of `target_field` across matching rows (deduplicated). |

---

## Configuration Schema

The serialized resolver configuration in rule action payloads is structured as follows:

```json
{
  "type": "collection",
  "config": {
    "source": "doc.items",
    "operation": "pluck",
    "target_field": "rate",
    "condition": [
      {
        "field": "qty",
        "operator": ">",
        "value": 10
      }
    ]
  }
}
```

### Configuration Fields

- `source` *(string, required)*: The context path resolving to a list (e.g., `doc.items`, `vars.qualifying_orders`).
- `operation` *(string, default `"any"`)*: One of `count`, `any`, `all`, `first`, `find`, `filter`, `pluck`, `unique`.
- `target_field` *(string, optional)*: Field name required when using `pluck` or `unique`.
- `condition` *(dict | list, optional)*: Standard FlexiRule condition structure or array of condition objects evaluated per row.

---

## Null & Empty List Handling

- **Missing/Non-list source**:
  - `count` $\rightarrow$ `0`
  - `filter`, `pluck`, `unique` $\rightarrow$ `[]`
  - `any` $\rightarrow$ `False`
  - `all` $\rightarrow$ `False`
  - `first` / `find` $\rightarrow$ `None`

---

## Security & Permission Boundaries

- Inherits permissions from the primary document or query context.
- Does not execute arbitrary Python code; condition filtering strictly uses `ConditionEvaluator`.
