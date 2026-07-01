---
title: Canvas Navigation
description: Learn how to use the visual rule canvas.
weight: 10
aliases:
  - /docs/user-guide/rule-builder/
---

# Canvas Navigation

The canvas is your visual workspace for building rules. It's designed to be simple and intuitive, allowing you to focus on your business logic.

## Moving Around the Canvas

### Panning and Zooming
- **Move the Canvas**: Click and drag any empty space to move around your rule.
- **Zoom In/Out**: Use your mouse wheel to zoom. This is helpful for seeing the "big picture" of a complex rule or focusing on a single block.

## Working with Blocks

### Managing Blocks
- **Select**: Click a block to open its settings.
- **Move**: Click and drag a block to reposition it on the canvas.
- **Delete**: Select a block and press `Delete` on your keyboard. If you delete a block that is in the middle of a flow, the builder will try to reconnect the blocks for you.

### Adding New Blocks
The easiest way to add a block is to use the **Action Zone**:
1. Hover your mouse over a connection point (the small circles on the edges of a block).
2. Click the **+** icon that appears.
3. Choose the block you want to add. It will be automatically connected!

## Testing your Rule

You can test your rule directly on the canvas without affecting any live data.

### Visual Results
When you run a **Test Run**, the canvas will light up with a green path. This shows you exactly which blocks were executed. If a **Check** block failed, you'll see where the flow stopped or which other path it took.

### Checking Values
After a test run, you can click on any block to see what it did. For example, you can see the exact email that would have been sent or the new value that was set on a field.

## Pro Tip: Grouping Blocks
You can select multiple blocks at once by holding the `Shift` key and dragging a box around them. This is great for moving entire sections of logic at once.
