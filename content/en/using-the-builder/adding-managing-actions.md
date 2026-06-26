---
title: Adding and Managing Actions
description: Learn how to use the Action Zone to build your rule logic.
weight: 20
---

# Adding and Managing Actions

Building logic in FlexiRule is centered around adding and connecting logic blocks.

## The Action Zone

The **Action Zone** is the primary way to add new logic. It provides a searchable menu of all available actions.

{{< video src="/images/add-action-from-action-zone.webm" autoplay="true" loop="true" muted="true" >}}

### How to Add an Action
1. **Hover**: Hover your mouse over any connection line or empty space on the canvas.
2. **Trigger**: Click the `+` icon that appears.
3. **Search & Select**: Browse categories or type to find the block you need (e.g., "Email" or "Update Record").
4. **Insert**: The new block is automatically inserted and connected into your flow.

## Managing Connections

### Reconnecting Blocks
If you delete a block between two others, FlexiRule intelligently heals the connection to maintain your logic flow.

{{< video src="/images/remove-a-node-will-dynamically-reconnet-nodes.webm" >}}

### Manual Connections
You can also manually connect blocks by dragging from the output handle of one block to the input handle of another.

## Intelligent Configuration

When you select a block, a configuration panel opens on the right.

- **Smart Pickers**: Field pickers only show variables that are actually available at that point in the rule.
- **Validation**: The builder alerts you if required fields are missing before you save.
