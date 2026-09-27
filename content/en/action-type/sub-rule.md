---
title: Sub-Rule
description: Execute nested reusable sub-rules within the primary rule execution flow.
weight: 90
entity_kind: action_operation
category: logic-control
mutation: true
targets: ["Rule Execution", "Context Variable"]
aliases:
  - /docs/actions/sub-rule/
---

# Sub-Rule Action

The **Sub-Rule** action (internal handler: `SubRuleHandler`) executes another rule exposed as a sub-rule directly within the parent execution context, enabling nested composition and logic reuse.

---

## 1. When to Use

Use the Sub-Rule action when you need to:
- Encapsulate reusable multi-step verification or workflow logic (e.g., standard approval workflows).
- Modularize complex rules into clean, maintainable sub-flows.
- Share automation routines across different DocTypes or trigger events.

---

## 2. Configuration

### Configuration Fields
- **Sub-Rule**: Select target Rule (must have `exposed_as_subrule = 1` enabled).
- **Target Context / Document**: Pass the target document or payload (`@doc` or custom variable).
- **Input Mappings**: Map parent context variables (`@vars`) to input fields expected by the sub-rule.
- **Output Variable**: Store the sub-rule's returned variables in parent `@vars.<output_variable>`.

---

## 3. Output

- **Sub-Context Merging**: Sub-rule execution outputs are captured and mapped into parent `@vars`.
- **Branching**: Continues down primary outbound edge after sub-rule completion.
- **Return Contract**: Returns `{"sub_rule_execution_id": "...", "outputs": {...}}`.

---

## 4. Example

### Scenario: Invoke Standard Risk Scoring Sub-Rule

1. **Sub-Rule Configuration**:
   - **Target Sub-Rule**: `"Calculate Customer Risk Score"`
   - **Input Mapping**: `customer` -> `@doc.customer`
   - **Output Variable**: `risk_score_result`
2. **Next Node (Check)**:
   - **Condition**: `@vars.risk_score_result.score > 80`
   - **True Branch**: Route to manager review.

---

## 5. Performance Notes

- **In-Memory Invocation**: Sub-rules execute in the same process thread and transaction boundary, avoiding network overhead.
- **Depth Guard**: FlexiRule enforces a maximum call depth ceiling (10 levels) to prevent stack overflow from infinite recursion.

---

## 6. Common Mistakes

- **Sub-Rule Not Exposed**: Attempting to select a target rule that does not have `Exposed as Sub-Rule` enabled in its settings.
- **Circular Sub-Rule Calls**: Creating a chain where Rule A calls Rule B, which calls Rule A.
- **Missing Variable Mappings**: Failing to supply required input variables expected by the sub-rule.
