---
title: Adding & Managing Blocks
weight: 20
description: How to build your logic by adding, connecting, and configuring blocks.
---

# Adding & Managing Blocks

Building an automation in FlexiRule involves placing blocks on the canvas and connecting them to define the flow of operations.

## Adding Blocks

There are two primary ways to add blocks to your canvas:

### 1. The Action Zone
Hover your mouse over any connection port or empty space near an existing block. A "+" icon will appear—this is the **Action Zone**. Clicking it opens a searchable menu of all available blocks. Selecting a block will automatically place it and connect it to the previous one.

### 2. Drag-and-Drop Connection
Click and drag from any output port. When you release the mouse in an empty area, the block menu will appear. Selecting a block here will create it and instantly link it to the port you started from.

## Configuring Blocks

When you select a block, the **Configuration Panel** appears on the right. This is where you define the specific behavior of that block:

-   **Title**: Give your block a descriptive name (e.g., "Check if VIP Customer") to make your logic easy to read.
-   **Settings**: Each block type has unique settings. For example, a "Notify" block will ask for a message and recipients, while a "Check" block will ask for conditions.

## Connecting Blocks

Connections define the path your automation follows.
-   **Create a Link**: Drag a line from an output port of one block to the input port of another.
-   **Reroute**: You can click and drag an existing connection line to move it to a different port.
-   **Delete a Link**: Click on a connection line to select it, then press `Delete`.

## Organizing Your Canvas

As your rules grow, keeping them organized is important:
-   **Descriptive Titles**: Always rename your blocks to reflect their purpose.
-   **Auto-Layout**: Use the Auto-Layout button in the toolbar if your canvas becomes cluttered.
-   **Grouping**: Arrange related blocks close to each other to maintain visual clarity.
