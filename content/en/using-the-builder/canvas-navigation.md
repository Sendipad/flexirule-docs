---
title: Canvas Navigation
description: Learn how to navigate and use the visual Rule Builder canvas.
weight: 10
aliases:
  - /docs/user-guide/rule-builder/
---

# Canvas Navigation

The Rule Builder is your visual workspace. It's a drag-and-drop canvas where you can design business processes by simply connecting blocks (nodes).

![Rule Builder Overview](/images/flexirule-canvas-view.png)

## Navigating the Canvas

### Move and Zoom
- **Move Around**: Click and hold any empty space on the canvas to drag it around.
- **Zoom In/Out**: Use your mouse wheel or the zoom buttons in the bottom corner to get a better view of your rule.

### Managing Blocks
- **Select**: Click once on any block to open its settings on the right.
- **Move**: Drag a block to change its position.
- **Delete**: Select a block and press the `Delete` key. FlexiRule will automatically try to keep your other blocks connected.

### Copying Multiple Blocks
You can select several blocks at once by holding the `Shift` key and dragging a box around them. This is great for moving or copying entire sections of logic.

{{< video src="/images/shift-click-nodes-to-copy.webm" >}}

## Testing Your Rule

You don't have to guess if your rule works. The builder has tools to show you exactly what happens when it runs.

### See the Path
When you run a test, the builder lights up the path your rule took. You can see exactly which conditions were met and which actions were triggered.

{{< video src="/images/debug-rule-view-execution-path.webm" >}}

### Check the Results
After a test, click on any block to see what it did. For example, you can see the exact email that would have been sent or the new value of a field.

![Debug View Return Result](/images/debug-view-return-result.png)

## Examples {#examples}

For more information on how to build rules, see our [Quick Start Guide]({{< relref "getting-started/quick-start" >}}).
