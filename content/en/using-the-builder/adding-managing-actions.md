---
title: Adding and Managing Actions
description: Learn how to build your logic flow by adding and configuring actions.
weight: 20
---

# Adding and Managing Actions

The core of building a rule is adding and connecting **Actions**. Actions are the building blocks that perform the actual work, like checking a condition or sending a notification.

## The Action Zone

The **Action Zone** is the quickest way to add new logic to your canvas. It provides a searchable menu of all available actions.

<video src="/flexirule-docs/images/add-action-from-action-zone.webm" controls autoplay loop muted></video>

### How to Add an Action
1. **Trigger**: Hover over any connection point (the small circles on nodes) or any empty space on the canvas.
2. **Search & Select**: A menu will appear. You can search for an action by name or browse categories like *Data Operations*, *Control Flow*, or *Notifications*.
3. **Insert**: Click on the action you want. It will be automatically placed and connected to your flow.

## Configuring Actions

Once an action is added to the canvas, you need to tell it exactly what to do.

1. **Select the Node**: Click on the node you want to configure.
2. **Use the Side Panel**: A configuration panel will slide out from the right. This panel is customized for each type of action.
3. **Set Properties**: Fill in the required fields. For example, in a **Notify** action, you would set the recipients and the message template.

### Safe Field Picking
The builder helps you avoid mistakes by only showing you variables and fields that are actually available at that point in the rule. You won't see data from "downstream" nodes that haven't executed yet.

## Managing Connections

Connections (the lines between nodes) define the path your logic takes.

- **Draw Connections**: Click and drag from one connection point to another to create a new link.
- **Remove Connections**: Click on a connection line and press **Delete** on your keyboard to remove it.
- **Automatic Cleanup**: As you move nodes around, the connection lines will automatically adjust to stay tidy and readable.

## Testing Your Logic

You don't have to wait for a real event to see if your rule works. You can test it directly from the builder.

1. **Click Test/Debug**: Use the debugger button in the toolbar.
2. **Choose a Sample**: Select an existing document (like a specific Sales Order) to run the test against.
3. **Trace the Path**: Once the test runs, the builder will highlight the path the logic took in green, so you can see exactly which conditions were met.

![Visual Execution Path](/flexirule-docs/images/debug-rule-view-execution-path.webm)

---

*Ready to explore specific actions? Check out the [Core Actions]({{< relref "core-actions/" >}}) library.*
