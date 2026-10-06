---
title: Adding Actions & The Action Palette
description: Learn how to add, connect, and arrange logic actions on the Rule Builder canvas.
weight: 20
---

# Adding Actions & The Action Palette

Building a rule flow involves inserting action blocks onto the canvas and connecting them into a visual flowchart. FlexiRule makes inserting actions easy with the **Action Palette** and the interactive **Add Action** controls.

---

## Methods for Adding Actions

You can insert new actions using three intuitive methods:

### 1. Connector Line Plus Button (`+`)

Hover over any connector arrow between existing nodes on the canvas. A **+** button appears.

1. Click the **+** button on the connector line.
2. The **Action Palette** drawer opens.
3. Select an action. The new block is automatically spliced into the connector line between the two nodes without breaking the flow.

{{< video src="/images/add-action-from-action-zone.webm" controls="true" muted="true" loop="true" >}}

### 2. Output Port Dragging

Click and drag out from an outbound connector handle (such as the **True** green port or **False** red port on a Check node) and release on empty canvas space to immediately open the Action Palette.

### 3. Command Palette (`Ctrl K`)

Press `Ctrl K` or `/` anywhere on the canvas to launch the quick **Command Palette**. Type the action name (e.g. `Notify` or `Query Records`) and press **Enter** to place it on the canvas.

---

## Exploring the Action Palette Drawer

When the Action Palette opens, actions are organized into clear business categories:

![Action Type Selector dropdown menu](/images/action-type-selector-menu.png)

### Action Categories

| Category | Icon | Featured Action Types | Typical Business Use Case |
| :--- | :---: | :--- | :--- |
| **Logic & Flow** | <i class="fa fa-code-fork"></i> | **Check** <i class="fa fa-code-fork"></i>, **Switch** <i class="fa fa-random"></i>, **Repeat (Loop)** <i class="fa fa-refresh"></i>, **Wait** <i class="fa fa-clock-o"></i>, **Raise Error** <i class="fa fa-exclamation-triangle"></i> | Conditional decision making, branching, multi-case matching, and iteration over child tables. |
| **Data Operations** | <i class="fa fa-database"></i> | **Set Value** <i class="fa fa-list-ol"></i>, **Query Records** <i class="fa fa-search"></i> | Assigning document or variable values, running database queries, aggregations, and counts. |
| **Document Operations** | <i class="fa fa-file-text"></i> | **Update Record** <i class="fa fa-file-text"></i> | Creating, updating, submitting, cancelling, or deleting Frappe records. |
| **Communication & Notifications** | <i class="fa fa-bell"></i> | **Notify** <i class="fa fa-bell"></i> | Dispatching Emails, System Toast Alerts, SMS, or Webhook/Slack notifications. |
| **Advanced Process & Integration** | <i class="fa fa-cogs"></i> | **Sub-Rule** <i class="fa fa-cube"></i>, **Process** <i class="fa fa-cog"></i> | Calling modular child rules or executing custom Python server processes. |

---

## Node Header Toolbars & Managing Actions

Every action node on the canvas includes an interactive top toolbar:

![Action card header toolbar showing Run Test, Copy, and Delete actions](/images/action-card-header-toolbar.png)

![Action card badges and toolbar state](/images/action-card-badges-toolbar.png)

{{< video src="/images/action-label-edit.webm" controls="true" muted="true" loop="true" >}}

- **Rename / Custom Title**: Click the block title in the configuration panel to set a business-friendly label (e.g. change `Set Value` to `Calculate High-Value Discount`).
- **Capability Badges**: Badges on the card indicate enabled features (such as **Conditions Enabled** or **Output Mapped**).
- **Sub-Nodes Tree View**: Actions with nested steps (such as Loops or Sub-Rules) display an expandable tree view showing nested execution steps.

![Action card sub-nodes tree view](/images/action-card-sub-nodes.png)

- **Copy Node**: Duplicate the configured block across the canvas or into another rule using `Ctrl C` / `Ctrl V`.
- **Delete Node**: Delete the block using `Delete` or `Backspace`. Surrounding connector lines automatically re-link.

{{< video src="/images/shift-click-nodes-to-copy.webm" controls="true" muted="true" loop="true" >}}
