---
title: Entry Action
description: The starting point of every business rule.
weight: 5
aliases:
  - /docs/actions/entry/
---

# Entry Action

Every business rule starts with an **Entry Action**. This is the green "Start" block on your map.

## What is the Entry Action?
Think of this block as the "input" for your rule. It represents the record (the "Doc") that triggered the rule to run.

Because this is the starting point, all the information from this record is automatically available for you to use in every following step.

## Rule Entry Conditions
You can set "Gatekeeper" rules on the main Rule document. These are called **Entry Conditions**.
- If these conditions aren't met, the rule won't even start.
- **Example**: Only run this rule if the `Customer Type` is "Individual".

**Tip**: If you want to perform different actions *after* the rule has already started based on certain information, use a [Check (Condition)]({{< relref "condition" >}}) block instead.
