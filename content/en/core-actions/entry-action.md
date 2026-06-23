---
title: Entry Action
description: The starting point of every business rule flow.
weight: 5
aliases:
  - /docs/actions/entry/
---

# Entry Action

Every rule flow begins with an **Entry Action**. This node represents the start of your logic and is automatically created when you open a new rule in the builder.

## Purpose

The Entry Action serves two critical roles:
1.  **The Start Line**: It is the fixed point where execution begins. You cannot delete this node.
2.  **The Context Provider**: It brings in the data from the record that triggered the rule (available as `doc`).

## Configuration

While the Entry Action is mostly automatic, you can configure high-level settings that affect the entire rule:

- **Label**: You can rename this node (e.g., "Start: New Order Process").
- **Entry Conditions**: These are filters defined in the Rule header that determine if the rule should even start. For example, "Only run if Order Amount > 0".

## Connection

The Entry Action has a single output point at the bottom. Connect this to your first piece of logic, such as a **Condition** to check a field or a **Query Records** action to fetch more data.

---
**Tip**: If you find yourself adding the same "check" at the start of every rule, move that logic into the **Rule Entry Condition** in the main Rule document to keep your builder canvas clean.
