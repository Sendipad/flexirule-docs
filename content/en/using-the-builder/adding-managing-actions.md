---
title: Adding & Managing Actions
description: Learn how to add, configure, and organize actions in your rule.
weight: 20
aliases:
  - /docs/user-guide/condition-builder-guide/
  - /docs/user-guide/condition-builder/
---

# Adding & Managing Actions

Building a rule is as simple as adding and connecting actions. The **Action Zone** is your primary tool for this.

## The Action Zone

The Action Zone is the menu that appears when you want to add a new step to your rule.

<video src="/flexirule-docs/images/add-action-from-action-zone.webm" controls autoplay loop muted></video>

### How to Add an Action
1. **Trigger**: Hover over any connection point (the small dots on nodes) or empty space on the canvas.
2. **Select**: A searchable menu will appear. Choose the action you need from categories like *Data Operations*, *Control Flow*, or *Notifications*.
3. **Configure**: Once added, click on the action to open its configuration panel on the right.

## Managing Actions

### Editing Labels
You can rename any action to make its purpose clear at a glance. Just double-click the label on the node to edit it.
<video src="/flexirule-docs/images/action-label-edit.webm" controls></video>

### Connecting Steps
Logic flows from one action to the next via connections. To create a connection, click and drag from the output point of one action to the input point of another.

## Building Logic with Conditions

The **Condition Builder** is a specialized tool used within actions to define rules like "If Total is greater than 1000".

- **Guided UI**: You don't need to write code. Use the dropdowns to select fields, operators (like "is equal to"), and values.
- **Smart Field Picker**: The builder only shows you fields and variables that are actually available at that step in your rule.
- **Date Formulas**: Easily handle time-based logic, like "Created within the last 7 days", using built-in formulas.
