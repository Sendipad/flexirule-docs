---
title: Start
description: The entry point for every rule.
weight: 5
---

# Start

The **Start** block (formerly *Entry Action*) is the starting point for every rule. You cannot delete this block, and every rule must have exactly one.

## What it Does
The Start block doesn't perform a specific task like sending an email or updating a field. Instead, it serves as the connection point for the "Trigger" that started the rule.

## Configuration
In most cases, the Start block requires no configuration. It simply passes the document that triggered the rule (available as `doc`) into the next block in your flow.

---

## Pro Tips
- **Trigger Info**: While the block itself is simple, remember that the data it carries depends on the **Trigger Event** you chose in the Rule dashboard (e.g., "Before Save" or "On Submit").
- **Isolated Rules**: If you see the Start block but no lines coming out of it, your rule will never do anything! Always connect the Start block to at least one other action.
