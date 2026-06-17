---
title: Technical Specifications
description: A consolidated reference for FlexiRule terminology, DocTypes, and query filters.
weight: 20
---

# Technical Specifications

## Core DocTypes

FlexiRule relies on the following primary DocTypes for its operation:

- **Rule**: Stores the visual graph, trigger configuration, and metadata for a business rule.
- **Rule Action**: Individual nodes within a Rule's graph.
- **Process**: Definitions for custom logic modules.
- **Rule Execution Log**: Audit trails for every time a rule is triggered.

## Terminology Mapping

| Term | Description |
| :--- | :--- |
| **Execution Context** | The sandboxed environment where a rule runs, containing `doc` and `vars`. |
| **Mutation Mode** | Defines how an action's result is applied to the document or context. |
| **normalization** | The process of cleaning or transforming data before it is used in a condition or assignment. |
| **Watched Fields** | Specific fields on a DocType that, when changed, trigger the rule. |

## Query Filter Operators

When using the [Query Records]({{< relref "core-actions/query-records.md" >}}) action, the following operators are supported:

| Operator | SQL Equivalent | Description |
| :--- | :--- | :--- |
| `==` | `=` | Equality |
| `!=` | `!=` | Inequality |
| `>` | `>` | Greater than |
| `<` | `<` | Less than |
| `in` | `IN` | Value exists in a list |
| `not in` | `NOT IN` | Value does not exist in a list |
| `like` | `LIKE` | Pattern matching (uses `%`) |

## Timespan Keywords

FlexiRule supports natural language keywords for date filtering:

- `today`
- `yesterday`
- `tomorrow`
- `this week`
- `last week`
- `next month`
- `last year`
