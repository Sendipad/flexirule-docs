---
title: Adding Actions
description: Learn how to use the Action Zone to build your rule logic.
weight: 20
---

# Adding and Managing Actions

In FlexiRule, you build your process by adding "Action" blocks to your canvas.

## The Action Zone

The **Action Zone** is how you add new steps. It's a searchable menu of every tool available to you.

{{< video src="/images/add-action-from-action-zone.webm" autoplay="true" loop="true" muted="true" >}}

### How to Add a Step
1. **Find the Spot**: Hover your mouse over any line or empty space where you want to add a step.
2. **Click `+`**: Click the plus icon that appears.
3. **Search**: Type what you want to do (like "Email" or "Check").
4. **Select**: Click the action, and it will be placed and connected automatically.

## Intelligent Connections

### Auto-Healing
If you remove a block from the middle of a flow, FlexiRule will automatically "heal" the gap by connecting the blocks on either side. This prevents your rule from breaking when you make changes.

{{< video src="/images/remove-a-node-will-dynamically-reconnet-nodes.webm" >}}

### Manual Connection
You can also draw connections yourself. Just click and drag from the circle on the right side of one block to the circle on the left side of another.

## Configuring Your Steps

When you click a block, a panel opens on the right.

- **Smart Pickers**: FlexiRule knows your data. If you're building a rule for a Sales Order, the pickers will only show you fields and information relevant to that order.
- **Instant Checks**: If a step is missing a required setting, the builder will highlight it so you can fix it before saving.
