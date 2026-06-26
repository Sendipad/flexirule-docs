---
title: Canvas Navigation
description: Learn how to navigate and use the visual Rule Builder canvas.
weight: 10
aliases:
  - /docs/user-guide/rule-builder/
---

# Canvas Navigation

The Rule Builder is your visual workspace for designing business logic. It provides a drag-and-drop canvas where you can orchestrate workflows while maintaining full visibility into the execution flow.

![Rule Builder Overview](/images/flexirule-canvas-view.png)

## Core Canvas Interactions

### Moving and Zooming
- **Pan**: Click and drag any empty space on the canvas to move around.
- **Zoom**: Use your mouse wheel or the zoom controls in the corner to adjust the view.

### Working with Blocks
- **Select**: Click a block to select it and open its configuration panel.
- **Move**: Drag a block to reposition it.
- **Delete**: Select a block and press `Backspace` or `Delete`. The builder will automatically attempt to reconnect the remaining blocks.

### Bulk Actions
You can select multiple blocks by holding `Shift` and dragging a selection box. This allows you to move or copy groups of logic at once.

{{< video src="/images/shift-click-nodes-to-copy.webm" >}}

## Debugging on the Canvas

The Rule Builder includes built-in tools to test your rules in real-time.

### Visual Execution Path
When you run a test, the builder highlights the exact path taken during execution, showing you exactly which blocks were triggered.

{{< video src="/images/debug-rule-view-execution-path.webm" >}}

### Inspecting Results
You can click on any block after a test run to see its specific results, including modified variables and return values.

![Debug View Return Result](/images/debug-view-return-result.png)

## Examples {#examples}

For more information on how to build rules, see our [Quick Start Guide]({{< relref "getting-started/quick-start" >}}).
