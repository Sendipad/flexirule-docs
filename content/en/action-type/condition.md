---
title: Check (Condition)
description: Evaluate logical condition groups to branch execution path between True and False branches.
weight: 40
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
---

# Check (Condition) Action

The **Check** action (internal handler: `Condition`) is the visual decision-making block in FlexiRule. It evaluates condition expressions against runtime context and branches the execution path along either the **True** or **False** outbound edge.

---

## 1. When to Use

Use the Check action when you need to:
- Validate document attributes before allowing workflow progression (e.g., check if `grand_total > 50000`).
- Route execution down different business branches based on customer tier, region, or status.
- Evaluate child table collection rules (e.g., verify whether **all** line items have warehouse assigned).
- Compare current document values against historical `@old_doc` values or `@vars`.

---

## 2. Configuration

The Check action is configured using the **Condition Builder**:

### Structure & Operators
- **Logic Grouping**: Combine conditions with `ALL` (AND), `ANY` (OR), or `NOT` logic.
- **Comparison Operators**:
  - `==` (Equals), `!=` (Not Equals)
  - `>`, `>=`, `<`, `<=` (Numeric comparisons)
  - `contains`, `not contains`, `in`, `not in` (Text/List search)
  - `is set`, `is not set` (Null/empty checks)
- **Operands**: Configured using the **Smart Value Selector** (`@doc`, `@vars`, `@system`, or `/ Resolvers`).
- **Collection Conditions**: Evaluate child table lists using `any`, `all`, `none`, or `count` operations.

---

## 3. Output

- **Boolean Decision**: Evaluates to `True` or `False`.
- **Branching**:
  - If `True`: Execution continues along the **True** outbound edge.
  - If `False`: Execution continues along the **False** outbound edge.
- **Return Contract**: Returns `{"result": true, "evaluated_expression": "..."}`.

---

## 4. Example

### Scenario: High-Value VIP Credit Check

- **Condition Group**: `ALL`
  - **Row 1**: `@doc.grand_total` `>` `100000`
  - **Row 2**: `@doc.customer_group` `==` `"VIP"`
  - **Row 3**: `/fetch` (`customer`, `Customer`, `credit_limit`) `>=` `@doc.grand_total`
- **True Branch**: Connect to **Set Value** (`doc.status = "Approved"`).
- **False Branch**: Connect to **Notify** (Alert Credit Manager).

---

## 5. Performance Notes

- **Pre-Compiled Expressions**: Condition expressions are pre-compiled into optimized Python Bytecode by `ConditionEvaluator`, executing in under 0.1ms per evaluation.
- **Short-Circuit Evaluation**: Logical groups evaluate lazily (`ALL` stops at first `False`; `ANY` stops at first `True`), avoiding unnecessary resolver evaluations.

---

## 6. Common Mistakes

- **Disconnected Branch**: Leaving either the `True` or `False` outbound port disconnected when action logic was expected on both paths.
- **Null Reference Errors**: Comparing fields that may be empty without using an `is set` check first.
- **Type Mismatch**: Comparing text string `"100"` with numeric integer `100`.
