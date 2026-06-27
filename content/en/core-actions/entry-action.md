---
title: Start (Entry Action)
weight: 1
description: The beginning of every rule.
---

# Start

The **Start** block (internally called Entry Action) is the entry point for your rule logic. Every rule must have exactly one Start block.

## How it works
When the event that triggers your rule occurs (e.g., a Sales Invoice is saved), the data for that document is loaded and passed into the Start block.

## Configuration
The Start block typically doesn't require much configuration, as its main job is to provide the "Doc" (the current document) to the rest of your flow.

## Accessing Data
From this point forward, you can access any field on the triggering document using the `doc` prefix:
- `{{ doc.name }}`
- `{{ doc.grand_total }}`
- `{{ doc.customer_name }}`
