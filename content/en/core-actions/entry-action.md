---
title: Entry Action
description: The starting point of every business rule.
weight: 5
aliases:
  - /docs/actions/entry/
---

# Entry Action

Every business rule starts with an **Entry Action**. This block represents the starting point and the record that triggered the rule.

## What is it?
Think of the Entry Action as the "start" button. It holds all the information from the record that kicked off the rule (like a Sales Order or a Support Ticket) and makes that information available to every other block in your flow.

## Setting Early Limits
You can set "Entry Conditions" on your rule. These act like a gatekeeper: if the record doesn't meet these requirements, the rule won't even start. This is great for keeping your system efficient.

**Note**: If you want to make decisions *after* a rule has already started running, use a [Condition]({{< relref "condition" >}}) block instead.
