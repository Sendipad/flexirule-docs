---
title: Which Action Should I Use?
description: Choose the FlexiRule action that matches the business outcome you need.
weight: 1
---

# Which Action Should I Use?

Start with the outcome you need, then choose the action that performs it. Action availability and options can vary with the installed FlexiRule version and the selected operation.

## Choose by outcome

| I need to… | Choose | Notes |
|---|---|---|
| Decide whether a condition is true | [Condition](condition.md) | Routes through True/False outputs. |
| Route by one of several configured value cases | [Switch](switch.md) | Use for multi-case branching. |
| Set a value or calculate within the current rule context | [Assignment](assignment.md) | The current name; older docs may say “Set Value.” |
| Read a collection of records | [Query Records → Fetch Records](query-records/fetch-records.md) | Newer Query Builder-backed mode; test query/filter behavior on your Frappe version. |
| Keep an existing list-style query configuration | [Query Records → Query List](query-records/query-list.md) | Legacy mode; do not assume its contract is identical to Fetch Records. |
| Read one document | [Query Records → Query Doc](query-records/query-doc.md) | Check the configured output shape. |
| Check whether a record exists | [Query Records → Exist Record](query-records/exist-record.md) | Returns an existence result. |
| Get a count or supported aggregate | [Query Records](query-records/) | Choose Count, Sum, Average, Min, Max, or Group By only when that mode fits. |
| Create, update, or delete a target document | [Document Action]({{< relref "update-record/" >}}) | Use the operation that matches the target document task. |
| Process each item in a collection | [Loop](loop.md) | The collection must be available in the execution context. |
| Send a notification | [Notify](notify/) | Configure the notification using the supported UI. |
| Reuse another visual rule | [Sub-Rule](sub-rule.md) | Requires a suitable callable/reusable rule configuration. |
| Run a registered process operation | [Process](process.md) | The operation must be available in the installed process registry. |
| Pause supported work | [Wait](wait.md) | Check the execution-mode and lifecycle constraints. |
| End a path intentionally | [Stop / Error](stop-error.md) | Choose stop behavior versus an error. |

## Common decisions

### Condition or Switch?

Use **Condition** for a yes/no question. Use **Switch** when the rule should select among several configured cases.

### Assignment or Document Action?

Use **Assignment** for supported value assignments in the current rule context. Use **Document Action** for operations on a target document, such as create, update, or delete. Assignment is not named “Set Value” in the current UI terminology.

### Fetch Records or Query List?

Both are Query Records modes, but they are different implementations. Fetch Records uses Frappe's Query Builder compatibility path and supports its own configuration controls. Query List is a legacy mode. Do not rewrite existing Query List configurations just because Fetch Records is available.

### Query Records or Document Action?

Query Records reads data and stores a result for later steps. Document Action performs a supported document operation. Reading a record does not itself update it.

### Sub-Rule or Process?

Use Sub-Rule to reuse visual rule logic. Use Process to run a registered Process operation.

### Stop or Raise Error?

Choose the terminal behavior that matches the intended outcome. A clean stop and an error are not equivalent; consult the [Stop / Error guide](stop-error.md) and test the relevant trigger lifecycle.

## Recommended workflow

1. Identify the business outcome.
2. Choose the action and operation.
3. Configure only the fields shown for that operation.
4. Verify permission behavior and result shape.
5. Debug success, failure, and empty-result cases before activation.

→ [Actions catalog](./)  
→ [Query Records](query-records/)  
→ [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
