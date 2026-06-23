---
title: Adding and Managing Actions
description: How to build your logic flow by adding, configuring, and connecting action nodes.
weight: 20
aliases:
  - /docs/using-the-builder/adding-actions/
---

# Adding and Managing Actions

Building a rule is a process of adding "Action Nodes" to your canvas and configuring them to perform specific tasks.

## The Action Zone

The easiest way to build your rule is using the **Action Zone**.

1.  **Find a Connection Point**: Hover your mouse over any node's output point (usually at the bottom) or over an existing connection line.
2.  **Trigger the Menu**: Click the `+` icon that appears.
3.  **Choose an Action**: A searchable menu will pop up. Select the action you want to add (e.g., *Query Records* or *Notify*).

FlexiRule will automatically insert the node and maintain the flow of your logic.

## Configuring an Action

Once a node is on the canvas, you need to tell it exactly what to do.

1.  **Open Settings**: Click on the node. A configuration panel will slide out from the right.
2.  **Basic Info**: Every action has a **Label** (give it a clear name like "Find Customer") and a **Description**.
3.  **Settings**: This is where you define the specific behavior (e.g., which records to search for or what message to send).
4.  **Apply Changes**: Always click the **Apply** button at the bottom of the panel to save your node's settings.

## Connecting Nodes Manually

While the Action Zone is recommended, you can also connect nodes manually:

1.  Click and hold a **Connection Point** at the bottom of a node.
2.  Drag the line to the **Top Connection Point** of another node.
3.  Release to create the link.

## Date Formulas and Expressions

Many actions (like filtering records or setting values) allow you to use dynamic formulas.

- **The Formula Builder**: Look for the "Formula" or "Expression" icon next to input fields.
- **Guided UI**: Use the guided builder to create complex date ranges like "Start of Last Month" or "7 Days from Now" without writing code.

---
**Next Step**: Explore the [Core Actions]({{< relref "core-actions/_index.md" >}}) library to see what each node can do.
