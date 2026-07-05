---
title: Entry Action
description: The starting point of every business rule.
weight: 5
aliases:
  - /docs/actions/entry/
---

# Entry Action

Every business rule starts with an **Entry Action**. This node represents the document and data that triggered the rule.

## What is the Entry Action?
Think of the Entry Action as the "input" for your logic. It contains the `doc` (the record that triggered the rule) and makes it available to all following steps.

## Rule Entry Conditions
You can configure "Entry Conditions" directly on the Rule header. These act as a gatekeeper: if the condition isn't met, the rule won't even start.

**Note**: For branching logic *after* the rule has already started, use the [Condition Action]({{< relref "condition" >}}).
