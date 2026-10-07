---
title: Assignment
description: Apply configured assignments to document fields or context values.
weight: 80
aliases:
  - /docs/action-type/assignment/
---

# Assignment

**Assignment** applies one or more configured assignment rows during rule execution.

The older documentation label **“Set Value”** is not the current Action Type name.

## When to use it

Use Assignment when the rule needs to apply configured value changes, such as assigning a document field, storing a context value, or applying several assignments in one action.

Use [Document Action]({{< relref "document-action/" >}}) for create, update, delete, ToDo, or comment operations.

## Configuration

The Action Type requires its configuration payload and uses the **AssignmentConfig** UI.

The Rule Action also supports an **Input Source** for Assignment:

- Context Doc
- Context Variable
- Both

The Assignment configuration is authoritative for the individual assignment rows.

## Result and flow

Assignment does not produce a stored action result. It has one normal outbound path and no False branch.

Assignment is not a document CRUD operation merely because a target is a document field.

## Common mistakes

- Calling the Action Type **Set Value**.
- Using Document Action for a simple assignment.
- Expecting Assignment to behave like a query that returns a result.

## Related

- [Document Action]({{< relref "document-action/" >}})
- [Condition]({{< relref "condition.md" >}})
