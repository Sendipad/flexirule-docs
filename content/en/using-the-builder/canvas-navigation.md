---
title: Canvas Navigation
description: Learn how to move around and interact with the visual rule canvas.
weight: 10
---

# Canvas Navigation

The Visual Rule Builder is your workspace for designing business logic. It provides a flexible, infinite canvas where you can arrange and connect logic nodes.

## Moving Around

Navigating the canvas is designed to be intuitive and fluid:

- **Pan**: Click and drag any empty space on the canvas to move the view.
- **Zoom**: Use your mouse wheel or trackpad pinch gesture to zoom in and out.
- **Fit View**: Use the "Fit View" button (usually in the bottom toolbar) to instantly center all nodes in your view.

## Interacting with Nodes

Each box on the canvas is a **Node** representing a specific action or step in your rule.

- **Select**: Click a node to select it. This usually opens its configuration panel on the right side of the screen.
- **Move**: Click and drag a node to reposition it on the canvas.
- **Edit Label**: Double-click the label on a node to quickly rename it. This helps you keep your flow organized and readable.

![Action Label Edit](/flexirule-docs/images/action-label-edit.webm)

## Layout Options

Depending on the complexity of your rule, you might prefer different layouts. You can switch between **Horizontal** (Left to Right) and **Vertical** (Top to Bottom) layouts using the orientation buttons in the toolbar.

![Top to Bottom Layout](/flexirule-docs/images/top-to-bottom-layout.png)

## Organizing Your Workspace

### Bulk Actions
You can select multiple nodes at once by holding **Shift** and dragging a selection box over them. Once selected, you can move them as a group or copy/paste them.

### Intelligent Reconnection
When you delete a node that is in the middle of a flow, the builder is smart enough to automatically reconnect the nodes before and after it, keeping your logic intact.

<video src="/flexirule-docs/images/remove-a-node-will-dynamically-reconnet-nodes.webm" controls autoplay loop muted></video>

---

*Next: Learn how to [Add and Manage Actions]({{< relref "adding-managing-actions.md" >}}).*
