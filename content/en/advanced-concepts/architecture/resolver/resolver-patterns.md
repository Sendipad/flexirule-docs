---
title: Resolver Architecture & Execution Patterns
description: Technical breakdown of compiled Value Resolvers, class hierarchy, dispatching, and execution semantics.
weight: 20
aliases:
- /docs/resolver/resolver_patterns/
---

# Value Resolver Architecture & Execution Patterns

The **Value Resolver Engine** in FlexiRule evaluates dynamic expressions at runtime. It decouples action handlers from value resolution, providing compiled, type-safe transformers for data inputs.

---

## Class Hierarchy & Execution Model

All value resolvers inherit from `CompiledResolver` (`flexirule.ruleflow.core.value_resolver`):

```text
CompiledResolver (Base Strategy)
├── StaticResolver (Constant values)
├── VariableResolver (@doc, @old_doc, @vars, @system)
├── DateFormulaResolver (Date addition/subtraction via frappe.utils)
├── MathFormulaResolver (Arithmetic operations +, -, *, /)
├── DateDiffResolver (Date differences in days/months/years)
├── ChildAggregationResolver (Sum, Avg, Count over child table rows)
├── CollectionResolver (Count, Any, All, First, Filter, Pluck, Unique over collections)
├── StringFormulaResolver (Concat, Uppercase, Lowercase, Fmt Money)
├── NormalizationResolver (Clean text pipelines)
├── FormatResolver (Date formatting, Money formatting)
├── SystemContextResolver (Session user, role checks)
├── LookupResolver -> FetchResolver (frappe.db.get_value single-field lookups)
└── JinjaResolver / ExpressionResolver (Template string evaluation)
```

---

## Canonical Resolver Capabilities

### 1. Dynamic Context Traversal (`VariableResolver`)
Reads runtime values from context maps using dot-notation:
- `@doc.items.0.amount`: Accesses first item amount in triggering document.
- `@vars.query_result.name`: Accesses field from stored query results.
- `@old_doc.status`: Compares pre-mutation document state.

### 2. Time & Date Math (`DateFormulaResolver`, `DateDiffResolver`)
Executes safe date math using `frappe.utils`:
- `DateFormula`: Adds/subtracts offset days, months, or years relative to `today` or `@doc.posting_date`.
- `DateDiff`: Computes total days/months/years between start and end dates.

### 3. Collection Filtering & Aggregation (`CollectionResolver`, `ChildAggregationResolver`)
Operates on child table collections and list variables in memory:
- `CollectionResolver`: Supports `count`, `any`, `all`, `first` / `find`, `filter`, `pluck`, `unique`, `sum`, `avg`. Enforces a safety limit of **10,000 rows**.
- `ChildAggregationResolver`: Direct `Sum`, `Average`, or `Count` aggregation over child tables.

### 4. Lightweight Database Fetching (`FetchResolver`)
- Performs single-field `frappe.db.get_value(dt, name, field)` lookups without instantiating full document models.

### 5. String Manipulation & Normalization (`StringFormulaResolver`, `NormalizationResolver`)
- Sanitizes and formats text strings, trims whitespace, converts casing, and applies custom pipelines.

---

## Performance & Optimization

- **Bytecode Pre-Compilation**: Expression and condition resolvers compile AST nodes during rule compile time (`CompileService`), reducing execution time to <0.1ms per evaluation.
- **Lazy Evaluation**: Context variables and lookups are resolved on demand when accessed by active action nodes.
- **Memory Safety**: Array operations enforce strict row caps to avoid RAM depletion during large batch operations.
