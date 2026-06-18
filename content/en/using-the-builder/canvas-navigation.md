---
title: Canvas Navigation
description: Learn how to navigate and use the Rule Builder canvas.
weight: 10
aliases:
  - /docs/user-guide/rule-builder/
---

# Canvas Navigation

The Rule Builder is your primary workspace for designing business logic. It provides a visual, drag-and-drop interface where you can see exactly how your rules flow.

![Rule Builder Overview](/flexirule-docs/images/flexirule-canvas-view.png)

## Core Interface

- **The Canvas**: The main area where you place and connect actions.
- **Actions (Nodes)**: Each box on the canvas represents a specific step or logic check.
- **Connections**: The lines between actions that define the order of execution.

## Useful Features

### Layout Options
You can change the orientation of your rule to suit your preference (e.g., Top-to-Bottom or Left-to-Right).
![Top to Bottom Layout](/flexirule-docs/images/top-to-bottom-layout.png)

### Bulk Actions
Need to move or copy multiple steps at once? Hold `Shift` and click to select multiple nodes to move or copy them together.
<video src="/flexirule-docs/images/shift-click-nodes-to-copy.webm" controls></video>

### Intelligent Reconnection
If you remove a step from the middle of a flow, the builder automatically reconnects the remaining steps to keep your logic intact.
<video src="/flexirule-docs/images/remove-a-node-will-dynamically-reconnet-nodes.webm" controls></video>

## Testing Your Rules

You can test your rules directly within the builder using real data from your system.

1. **Interactive Debugging**: Click the debug icon to select a sample document and simulate the rule.
2. **Visual Execution Path**: After running a test, the builder highlights the path taken, showing you exactly which steps were executed.
<video src="/flexirule-docs/images/debug-rule-view-execution-path.webm" controls></video>

## Mobile Support
You can review and even make quick edits to your rules from your mobile device. The interface adapts to smaller screens, making on-the-go adjustments easy.
![Mobile Action Label Edit](/flexirule-docs/images/mobile-action-label-edit.png.jpg)
