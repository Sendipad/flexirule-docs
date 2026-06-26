---
title: Entry Action
description: The starting point of every business rule.
weight: 5
aliases:
  - /docs/actions/entry/
---

# Entry Action

Every business rule begins with an **Entry Action**. This block represents the data that triggered the rule.

## What is the Entry Action?
Think of the Entry Action as the "Start" of your logic. It contains the record (the `doc`) that triggered the rule and makes all of its fields available to every other block in your flow.

## Gatekeepers (Entry Conditions)
You can set "Entry Conditions" on the rule itself. These act like a gatekeeper—if the conditions aren't met, the rule won't even start.

For making decisions *after* the rule has started, use a [Check]({{< relref "check" >}}) block.
