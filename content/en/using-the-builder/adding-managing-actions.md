---
title: Adding and Managing Actions
weight: 20
description: How to build your logic flow using the Action Zone.
---

# Adding and Managing Actions

Building a rule is a process of adding and configuring "Actions" (which we call Blocks). The Rule Builder makes this easy with the **Action Zone**.

## The Action Zone

The **Action Zone** is a smart interface that appears when you interact with the canvas. It helps you add the right block at the right place.

### Adding a Block
1. **Hover** over an existing block's output port or the connection line.
2. Click the **+ (Plus)** button that appears.
3. A menu will open showing all available blocks.
4. **Search or Select**: Type the name of the action you need (e.g., "Notify" or "Set Value") and click it.

### Intelligent Reconnection
If you add a block in the middle of an existing connection, FlexiRule is smart enough to "splice" it in. It will disconnect the old line and connect your new block automatically.

## Configuring Your Blocks

Once a block is added, you need to tell it what to do.

1. **Click the Block**: This opens the Configuration Panel on the right side of the screen.
2. **Fill in the Details**: Each block has different settings.
   - A **Check** block needs conditions.
   - A **Notify** block needs a message and a recipient.
   - A **Set Value** block needs to know which field to change.
3. **Automatic Save**: Your changes in the panel are captured as you type.

## Organizing Your Flow

### Grouping and Layout
While you can place blocks anywhere, keeping a clean "left-to-right" flow makes your rules much easier for others (and your future self) to understand.

### Copy and Paste
You can copy a block (including its configuration) by selecting it and pressing `Ctrl+C`, then `Ctrl+V` to paste it elsewhere on the canvas. This is great for repetitive logic.

### Disconnecting
To remove a connection without deleting the blocks:
1. Click on the connection line.
2. Press `Delete`.
3. You can now drag a new line from a port to a different block.
