---
title: Canvas Navigation
description: Learn how to navigate and use the visual Rule Builder canvas.
weight: 10
aliases:
  - /docs/user-guide/rule-builder/
---

# Canvas Navigation

The Rule Builder provides a visual workspace where you can design your business logic by dragging, dropping, and connecting different "Blocks." This visual approach allows you to see exactly how data flows through your system.

![Rule Builder Overview](/images/flexirule-canvas-view.png)

## The Visual Workspace

The canvas is an infinite workspace that represents your rule's logic as a flowchart.

### How Logic is Represented
- **Blocks**: Each step in your rule is represented by a Block (node). Blocks have a clear icon, a title, and often a sub-label describing their specific configuration.
- **Connections**: Arrows between blocks show the direction of execution. The flow typically moves from the **Start** block at the top towards various outcomes or a **Stop** block.
- **Entry & Exit Points**: Most blocks have a circular handle at the top (input) and one or more handles at the bottom (output).

## Navigation & Zooming
- **Panning**: Click and drag any empty space on the canvas to move around.
- **Zooming**: Use the mouse wheel or the zoom controls in the corner to adjust your view.

## Core Canvas Interactions

### Moving and Zooming
- **Pan**: Click and drag any empty space on the canvas to move around.
- **Zoom**: Use your mouse wheel or the zoom controls in the corner to adjust the view.

### Working with Nodes
- **Select**: Click a node to select it and open its configuration panel on the right.
- **Move**: Click and drag a node to reposition it.
- **Delete**: Select a node and press `Backspace` or `Delete`. The builder will intelligently attempt to reconnect remaining nodes to maintain the flow.

### Bulk Actions
- **Multi-Select**: Hold `Shift` and drag a selection box over multiple nodes.
- **Copy/Paste**: You can copy selected nodes and paste them elsewhere on the canvas or into a different rule.

{{< video src="/images/shift-click-nodes-to-copy.webm" >}}

## Debugging on the Canvas

The Rule Builder includes built-in tools to test your rules in real-time.

### Visual Execution Path
When you run a test, the builder highlights the exact path taken during execution, showing you exactly which nodes were triggered.

{{< video src="/images/debug-rule-view-execution-path.webm" >}}

### Inspecting Results
You can click on any node after a test run to see its specific results, including modified variables and return values.

![Debug View Return Result](/images/debug-view-return-result.png)

## Examples {#examples}

For more information on how to build rules, see our [Quick Start Guide]({{< relref "getting-started/quick-start" >}}).
