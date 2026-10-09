---
title: Which Action Should I Use?
description: Choose the right FlexiRule action for common business tasks, from decisions and data lookup to document changes and repetition.
weight: 1
---

# Which Action Should I Use?

Choose an action by the **business outcome** you want—not just by the name of a control. The guides below use the current action terminology. The controls, operations, and supported behavior can vary by installed FlexiRule version.

## Find an action by task

| Common business task | Use | Why / what to check |
|---|---|---|
| Continue one way when a yes/no rule is true, and another way when false | [Condition](condition.md) | Creates True and False execution paths. |
| Choose among several known cases, such as status = Draft, Submitted, or Cancelled | [Switch](switch.md) | Better for multiple configured cases than chaining many Condition blocks. |
| Set a value or calculate a value for later steps | [Assignment](assignment.md) | Assigns a value to a supported current-document field or rule variable. |
| Read a list of records matching filters | [Query Records → Fetch Records](query-records/fetch-records.md) | A newer Query Builder-backed mode. Verify filters, permissions, and returned row shape. |
| Keep an existing list-style record query | [Query Records → Query List](query-records/query-list.md) | Legacy mode with a different implementation/contract from Fetch Records. |
| Read one document | [Query Records → Query Doc](query-records/query-doc.md) | Check how the configured result is exposed to later steps. |
| Test whether a matching record exists | [Query Records → Exist Record](query-records/exist-record.md) | Use an existence result rather than retrieving a full list just to test presence. |
| Count or aggregate matching data | [Query Records](query-records/) | Select the supported Count, Sum, Average, Min, Max, or Group By mode that matches the result you need. |
| Create a new document | [Document Action → Create New](update-record/create-new.md) | Maps fields and optional child-table rows, then inserts the target document. |
| Update an existing document | [Document Action → Update Existing](update-record/update-existing.md) | Requires a target DocType and record name; mapped fields are saved. |
| Delete a document | [Document Action → Delete Record](update-record/delete-record.md) | Destructive operation for one explicitly resolved record. |
| Create a user task linked to the current document | [Document Action → Create ToDo](update-record/create-todo.md) | Requires an assignee and description; links the ToDo to the current context document. |
| Add a timeline comment to the current document | [Document Action → Add Comment](update-record/add-comment.md) | Requires comment text; links the Comment to the current context document. |
| Run the same steps for each row in a child table or each item in a list | [Loop](loop.md) | The iterator must resolve to a list/tuple; configure an item alias for the current item. |
| Send a notification | [Notify](notify/) | Use the supported notification configuration. |
| Reuse logic from another visual rule | [Sub-Rule](sub-rule.md) | The target rule must be configured for the supported callable/reusable use case. |
| Run a registered business process operation | [Process](process.md) | The operation must exist in the installed Process registry. |
| Pause supported execution | [Wait](wait.md) | Check execution-mode and lifecycle restrictions for the intended trigger. |
| Finish a path or deliberately raise an error | [Stop / Error](stop-error.md) | A normal stop and a failed execution have different meanings. |

## Quick decision guide

### Condition or Switch?

Use **Condition** for one logical yes/no decision. Use **Switch** when a value should select among several configured cases. For example, “total exceeds approval threshold?” is a Condition; “route by document status” is often a Switch.

### Assignment or Document Action?

Use **Assignment** to set or transform a supported root-level field on the document that triggered the rule, or to update a rule variable. Use **Document Action** when the task is to create, update, or delete a separate target document, or to create a linked ToDo or Comment.

### Query Records or Document Action?

Use **Query Records** to read information for later steps. Use **Document Action** to change data. A query does not itself create, update, or delete a document.

### Fetch Records or Query List?

Both are modes of Query Records, but they are not interchangeable implementations. Fetch Records uses the Frappe Query Builder compatibility path and has its own configuration and result contract. Query List is a legacy mode. Keep existing configurations unless you have verified that a migration preserves their behavior.

### Query Records or Loop?

Use **Query Records** to retrieve data. Add **Loop** when you need to perform steps for each returned item. Avoid running the same database lookup inside every loop iteration when one query before the loop can provide the collection.

### Condition or Loop?

Use **Condition** to decide which path to take. Use **Loop** to repeat a body of actions for each item in a list. A Condition does not iterate through a collection by itself.

### Sub-Rule or Process?

Use **Sub-Rule** to reuse visual rule logic. Use **Process** to execute a registered Process operation. They serve different extension points.

### Stop or Error?

Use a normal stop when the current path should finish intentionally. Use an error when the outcome should be treated as a failure. Check the [Stop / Error guide](stop-error.md) and test the relevant trigger lifecycle.

## A safe workflow for choosing

1. **Describe the outcome** in plain language: decide, read, change, repeat, notify, reuse, wait, or stop.
2. **Choose the smallest fitting action** and its specific operation or mode.
3. **Check its inputs and output shape**, especially when later actions consume a value or collection.
4. **Review permissions and side effects** before enabling document changes or permission bypasses.
5. **Test the normal, alternate, empty-result, and error paths** in Debug before activation.

→ [Actions catalog](./)  
→ [Document Action and all modes](update-record/)  
→ [Query Records modes](query-records/which-query-mode.md)  
→ [Condition Builder]({{< relref "../rule-builder/condition-builder.md" >}})  
→ [Smart Value System]({{< relref "../rule-builder/smart-value-system.md" >}})
