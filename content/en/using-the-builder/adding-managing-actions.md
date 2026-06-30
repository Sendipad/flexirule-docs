---
title: Adding & Managing Blocks
description: Learn how to add and connect logic blocks in your rule.
weight: 20
---

# Adding & Managing Blocks

You build your rules by adding "Blocks" to the canvas. Each block represents a specific task, like sending an email or checking a value.

## Adding a New Block

The easiest way to add a block is using the **Action Zone**:

1. **Find a spot**: Hover your mouse over a connection line or any empty space on the canvas.
2. **Click the Plus**: A `+` icon will appear. Click it.
3. **Choose your block**: A menu will pop up. You can scroll through the list or type to search (e.g., "Email", "Check", "Update").
4. **Place it**: Select the block, and it will be added to your canvas. If you clicked on a line, it will be automatically connected.

## Setting Up a Block

Once a block is on the canvas, you need to tell it what to do:

1. **Select it**: Click on the block.
2. **Configure**: A settings panel will open on the right.
3. **Fill in the details**: Enter the required information, like the email message or the field you want to update.
   - **Smart Suggestions**: When picking fields, the builder will suggest relevant options based on your setup.

## Managing Connections

- **Connect**: Click and drag from one block's output (circle on the right) to another block's input (circle on the left).
- **Auto-Repair**: If you delete a block that is in the middle of a chain, FlexiRule will try to automatically reconnect the blocks before and after it to keep your process flowing.
- **Change Path**: You can delete a connection by selecting the line and pressing `Delete`, then draw a new line to a different block.
