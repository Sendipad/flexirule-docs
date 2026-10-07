---
title: Which Action Should I Use?
weight: 5
description: Choose the FlexiRule Action Type that matches the operation you need.
---

# Which Action Should I Use?

Choose the action from the operation you need to perform.

| I need to… | Use |
|---|---|
| Start the rule | **Entry Action** |
| Ask a True/False question | **Condition** |
| Route by several known cases | **Switch** |
| Repeat a connected flow for a collection | **Loop** |
| Pause execution | **Wait** |
| End successfully | **Stop → Success** |
| End by raising an error | **Stop → Error** or **Raise Error** |
| Reuse another visual rule | **Sub-Rule** |
| Apply configured value assignments | **Assignment** |
| Read records or calculate query results | **Query Records** |
| Use the upcoming Query Builder-based record retrieval | **Query Records → Fetch Records** |
| Create, update, or delete a document | **Document Action** |
| Create a ToDo or add a document comment | **Document Action** |
| Send a notification | **Notify** |
| Execute registered reusable process logic | **Process** |

## Condition or Switch?

Use **Condition** when the result is a boolean decision: **True** or **False**.

Use **Switch** when one resolved value must be matched against several configured cases.

**True/False → Condition**  
**Case matching → Switch**

## Assignment or Document Action?

Use **Assignment** to apply assignment configuration to document or context targets.

Use **Document Action** when the operation itself is a document operation: **Create New**, **Update Existing**, **Delete Record**, **Create ToDo**, or **Add Comment**.

**Assignment → set values through assignment configuration**  
**Document Action → perform a document operation**

Do not describe Assignment as the old “Set Value” Action Type, and do not describe Document Action as “Update Record.”

## Query Records or Document Action?

Use **Query Records** when the rule needs to read data.

Use **Document Action** when the rule needs to create, update, delete, or otherwise operate on a document.

Query Records currently supports Query List, Query Doc, Exist Record, Query Report, Count, Sum, Average, Min, Max, and Group By.

See [Which Query Mode Should I Use?]({{< relref "query-records/which-query-mode.md" >}}).

## Sub-Rule or Process?

Use **Sub-Rule** when the reusable unit should remain another visual FlexiRule rule.

Use **Process** when the reusable unit is a registered Process and operation.

## Stop or Raise Error?

**Stop → Success** ends the current execution normally.

**Stop → Error** is the error mode of the Stop Action Type and renders its message template before raising the error.

**Raise Error** is a separate terminal Action Type with its own configuration.

## Example flows

**Entry Action → Query Records → Condition → Assignment → Notify**

**Entry Action → Query Records → Loop → Document Action → Notify**
