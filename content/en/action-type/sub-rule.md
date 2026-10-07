---
title: Sub-Rule
description: Invoke another rule that is exposed as a sub-rule.
weight: 70
---

# Sub-Rule

**Sub-Rule** invokes another FlexiRule rule from the current visual flow.

## Required configuration

The Action Type requires a target Rule.

The Rule link is constrained to rules that use the **Callable Event** trigger type and are exposed as a sub-rule.

The action also provides **Skip Trigger Check**.

## Inputs and outputs

Sub-Rule supports context result handling and can return:

- Single Record
- List of Records

The selected result can be stored using the Rule Action result-handling fields.

## When to use it

Use Sub-Rule to reuse a visual rule as a modular unit.

Use [Process]({{< relref "process.md" >}}) when the reusable operation is a registered Process rather than another visual rule.

## Permissions

The Rule Action supports **Ignore Permissions** for Sub-Rule, Query Records, and Document Action. Enabling it requires a **Permission Audit Reason**.

Use this capability deliberately because it changes the normal permission path.
