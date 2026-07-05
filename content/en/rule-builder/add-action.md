---
title: Adding Actions
description: Learn how to add new logic blocks to your rule.
weight: 20
---

# Adding Actions

Building a rule involves adding "Actions" (Blocks) to the canvas and connecting them to form a logical flow. FlexiRule makes this process intuitive with the **Action Zone**.

## The Action Zone

The Action Zone is the primary way to insert new logic into your rule. It appears dynamically as you work on the canvas.

{{< video src="/images/add-action-from-action-zone.webm" autoplay="true" loop="true" muted="true" >}}

### How to Add an Action
1.  **Trigger the Menu**: Hover your mouse over any connection line (the arrows between blocks) or click the `+` icon that appears in empty spaces on the canvas.
2.  **Browse or Search**: An action menu will pop up. You can:
    -   **Search**: Type keywords like "Email," "Update," or "Check" to find specific actions quickly.
    -   **Categories**: Browse through categorized lists like *Data Operations*, *Communications*, or *Flow Control*.
3.  **Select**: Click the action you want to add.
4.  **Auto-Insertion**: The new block will be automatically placed on the canvas. If you clicked a connection line, the new block will be inserted *between* the two existing blocks, and the connections will be automatically updated.

## Types of Actions

When adding an action, you will see several types of blocks categorized by their purpose:

-   **Set Value**: Used for calculations and updating variables within the rule.
-   **Check (Condition)**: Creates a fork in the road based on logic (True/False).
-   **Update Record**: Saves changes directly to a record in your system.
-   **Notify**: Sends alerts via Email, SMS, or System Notifications.
-   **Repeat (Loop)**: Runs a series of actions for every item in a list.
-   **Process**: Triggers advanced system operations or external integrations.

## Organizing Blocks

Once an action is added, you can click and drag it to any position on the canvas.

### Inserting Between Blocks
The easiest way to add logic to an existing flow is to hover over the arrow connecting two blocks. When the `+` icon appears, clicking it and selecting an action will "splice" the new action into the flow, saving you from manually deleting and re-drawing connection lines.

{{< video src="/images/remove-a-node-will-dynamically-reconnet-nodes.webm" >}}

### Quick Configuration
As soon as you add an action, it is selected by default, and its **Action Settings** panel opens on the right. This allows you to immediately configure the details of the new block without extra clicks.

## Managing Actions
-   **Renaming**: You can customize the name of any block by clicking its title in the settings panel. This helps make your flow more readable (e.g., instead of "Notify," name it "Send Approval Email").
-   **Deleting**: To remove a block, select it and press `Delete` on your keyboard, or click the trash icon in its settings panel. The builder will attempt to reconnect the preceding and following blocks automatically.
