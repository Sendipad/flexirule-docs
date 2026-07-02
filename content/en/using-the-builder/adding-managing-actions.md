---
title: Adding and Managing Actions
description: Learn how to use the Action Zone to build your rule logic.
weight: 20
---

# Adding and Managing Actions

Building logic in FlexiRule is centered around adding and connecting functional **Blocks**.

## The Action Zone

The **Action Zone** is the primary way to add new logic. It provides a searchable menu of all available actions.

{{< video src="/images/add-action-from-action-zone.webm" autoplay="true" loop="true" muted="true" >}}

### How to Add a Block
1. **Hover**: Hover your mouse over any connection line or an output port (the colored circles) of an existing block.
2. **Trigger**: Click the `+` icon that appears.
3. **Search & Select**: Browse categories or type to find the block you need (e.g., "Notify" or "Update Record").
4. **Insert**: The new block is automatically inserted and connected into your flow.

## Managing Connections

### Connecting Blocks
Connections define the order in which your logic executes.
- **Drag and Drop**: Click an output port of a block and drag a line to the input port of another block.
- **Color Coding**:
    - **Grey**: Standard execution path.
    - **Green (True)**: The path taken if a condition is met.
    - **Red (False)**: The path taken if a condition is NOT met.

### Reconnecting and Deleting
If you delete a block between two others, FlexiRule intelligently "heals" the connection by linking the previous block directly to the next one, ensuring your logic flow isn't broken.

{{< video src="/images/remove-a-node-will-dynamically-reconnet-nodes.webm" >}}

## Intelligent Configuration

When you select a block, a configuration panel opens on the right.

- **Dynamic Pickers**: Field selectors only show data and variables that are actually available at that specific point in the rule.
- **Real-time Validation**: The builder alerts you if required fields are missing or if there are logic errors (like a loop) before you save.
