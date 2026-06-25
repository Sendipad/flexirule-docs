---
title: Using the Builder
description: Learn how to navigate and use the visual Rule Builder canvas.
weight: 10
aliases:
  - /docs/user-guide/rule-builder/
---

# Navigating the Builder

The Rule Builder is your visual workspace. It’s where you "draw" your business processes using blocks and connections.

![Rule Builder Overview](/images/flexirule-canvas-view.png)

## Moving Around

- **Move the Map**: Click and drag on any empty space to pan around your rule.
- **Zoom In/Out**: Use your mouse wheel or the zoom buttons in the corner to see more or less of your flow.

## Working with Blocks

Each block represents a step in your process (like a check or an action).

- **Select**: Click a block to open its settings on the right.
- **Move**: Drag a block to a new position to keep your map organized.
- **Delete**: Click a block and press `Delete`. FlexiRule is smart—it will automatically try to reconnect the blocks before and after the one you deleted to keep the flow intact.

### Selecting Multiple Blocks
Hold `Shift` and drag a box around several blocks to select them all at once. You can then move them as a group or copy them.

{{< video src="/images/shift-click-nodes-to-copy.webm" >}}

## Testing Your Rule

You don't have to guess if your rule works. You can test it right inside the builder.

### See the Path
When you run a test, the builder lights up the exact path the rule followed. This makes it easy to see if a "Condition" worked the way you expected.

{{< video src="/images/debug-rule-view-execution-path.webm" >}}

### Check the Results
After a test, click on any block to see what it did. For example, if you updated a record, you can see exactly which fields were changed.

![Debug View Return Result](/images/debug-view-return-result.png)

## Learn More
Ready to start building? See [How to Add Actions]({{< relref "adding-managing-actions" >}}).
