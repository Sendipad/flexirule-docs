---
title: Adding and Managing Actions
description: Learn how to use the Action Zone to build your rule logic.
weight: 20
---

# Adding Actions

Building your rule is as simple as adding and connecting blocks. Each block performs a specific task, like sending an email or checking a value.

## The Action Zone

The **Action Zone** is how you add new blocks to your rule. It's a searchable menu of everything FlexiRule can do.

{{< video src="/images/add-action-from-action-zone.webm" autoplay="true" loop="true" muted="true" >}}

### How to Add a Block
1. **Hover**: Move your mouse over any line or empty space on the canvas.
2. **Click**: Click the `+` icon that appears.
3. **Pick**: Search or browse for the action you want (like "Email" or "Update Record").
4. **Place**: The block is automatically placed and connected into your flow.

## Managing Connections

### Auto-Healing
If you remove a block between two others, FlexiRule automatically reconnects the remaining blocks so your rule doesn't break.

{{< video src="/images/remove-a-node-will-dynamically-reconnet-nodes.webm" >}}

### Manual Connections
You can also connect blocks yourself by dragging a line from one block to another.

## Smart Settings

When you click a block, its settings open on the right. FlexiRule makes this easy:

- **Helpful Suggestions**: When picking fields, the builder only shows you options that make sense at that stage of the rule.
- **Instant Alerts**: If you forget a required setting, the builder will let you know before you save.
