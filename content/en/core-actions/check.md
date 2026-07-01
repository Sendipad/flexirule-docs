---
title: Check
description: Evaluate logic to decide which path the rule should follow.
weight: 40
aliases:
  - /docs/action-types/condition/
---

# Check

The **Check** block is the decision-maker of your rule. It evaluates your logic and directs the flow down one of two paths: **True** (if the check passes) or **False** (if it doesn't).

## Why use it?
- **Validation**: Check if a document is ready before proceeding (e.g., "Is the amount greater than zero?").
- **Branching**: Do different things based on the data (e.g., "If the customer is VIP, go to the priority path; otherwise, go to the standard path").

## How it works
A Check consists of one or more conditions.

### 1. Simple Conditions
A single condition compares two things:
- **Field**: What you are checking (e.g., `doc.status`).
- **Logic**: How you are comparing it (e.g., `Equals`, `Contains`, `is Greater Than`).
- **Criteria**: What you are checking against (e.g., `Approved`).

### 2. Combining Logic
You can group multiple conditions together:
- **AND (All)**: Every single condition in the group must be true for the whole check to pass.
- **OR (Any)**: If even one condition in the group is true, the whole check passes.

## The Two Paths
- **True path**: Connect this to the actions you want to take when the conditions are met.
- **False path**: Connect this to the actions you want to take when the conditions are *not* met.

## Pro Tips
- **Empty Paths**: If you don't connect anything to the "False" path, the rule will simply stop there if the check fails (which is often what you want!).
- **Readability**: Keep your checks simple. If you have a very complex set of conditions, try breaking them into two separate Check blocks to make the rule easier to read.
