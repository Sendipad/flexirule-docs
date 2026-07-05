---
title: Canvas Navigation
description: Learn how to navigate and use the visual Rule Builder canvas.
weight: 10
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

## Core Interactions

### Moving Around
- **Pan**: Click and hold any empty area of the canvas, then drag to move your view.
- **Zoom**: Use your mouse wheel or the zoom controls in the bottom-right corner to get a bird's-eye view or focus on a specific section.

### Arranging Your Logic
- **Moving Blocks**: Click and drag any block to reposition it. The connected arrows will automatically adjust to follow the block.
- **Selecting**: Click a block to select it. This highlights the block and opens its **Action Settings** panel on the right side of the screen.
- **Multi-Select**: Hold `Shift` and drag a box around multiple blocks to move them as a group.

{{< video src="/images/shift-click-nodes-to-copy.webm" >}}

### Connecting Blocks
To create a connection, click and drag from the bottom handle of one block to the top handle of another.
- **Valid Paths**: The builder will highlight valid connection points as you drag.
- **Auto-Healing**: If you delete a block that sits between two others, the builder will often attempt to "heal" the connection by linking the preceding block directly to the following one.

## Visual Indicators

The canvas uses visual cues to help you understand your rule at a glance:
- **Active State**: Selected blocks are highlighted with a distinct border.
- **Validation**: If a block is missing required configuration, a warning icon or red outline may appear to alert you before you save.
- **Logical Branching**: For decision blocks (like "Check"), paths are clearly labeled (e.g., "True" and "False") so you can follow the logic easily.

## Tips for a Clean Canvas
- **Alignment**: Keep your blocks organized vertically to make the logic easier for others to read.
- **Labels**: Use descriptive labels for your blocks so the purpose of each step is clear without opening the settings.
- **Sub-rules**: For very complex logic, consider using a **Sub-rule** block to keep your main canvas simple and readable.

![Ruleflow with Sub-rule](/images/flexirule-canvas-with-sub-rule.png)
