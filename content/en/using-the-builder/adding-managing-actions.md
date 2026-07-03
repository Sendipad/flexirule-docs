---
title: Adding and Managing Blocks
description: Learn how to add, connect, and configure logic blocks.
weight: 20
---

# Adding and Managing Blocks

Building an automation in FlexiRule is like building with Lego blocks. Each "Action" block performs a specific task, like sending an email or checking a value.

## The Action Zone

The **Action Zone** is the easiest way to add new logic to your flow.

### How to Add a Block
1. **Hover**: Move your mouse over any connection line or empty space.
2. **Click**: Click the `+` icon that appears.
3. **Search**: Type the name of the block you need (e.g., "Notify" or "Check").
4. **Select**: Click the block to insert it. The builder will automatically connect it into your existing flow.

## Managing Connections

### Connecting Blocks
You can manually connect blocks by clicking and dragging from the output port (the circle on the right/bottom) of one block to the input port of another.

### Smart Reconnection
If you delete a block that is in the middle of a flow, the builder will intelligently reconnect the blocks before and after it, keeping your logic intact.

## Configuring Your Blocks

When you click on a block, a configuration panel opens on the right side of the screen.

- **Required Fields**: Any field marked with a red star must be filled in for the block to work.
- **Smart Pickers**: When selecting fields from your document, FlexiRule shows you a searchable list of available fields.
- **Save Changes**: Changes in the configuration panel are saved automatically as you type, but remember to click **Save** on the main builder toolbar to persist your rule changes.
