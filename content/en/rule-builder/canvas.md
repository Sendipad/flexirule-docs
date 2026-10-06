---
title: Rule Builder Canvas & Layout Modes
description: Learn how to navigate the visual Rule Builder canvas and configure rules using Dialog Modal or Three-Panel Workspace View.
weight: 10
aliases:
  - /docs/user-guide/rule-builder/
---

# Rule Builder Canvas & Layout Modes

The **Rule Builder** is FlexiRule's visual workspace where you build and edit rules by arranging interactive nodes on an infinite canvas.

![Rule Builder Canvas Overview](/images/rule-builder-canvas-overview.png)

{{< video src="/images/remove-a-node-will-dynamically-reconnet-nodes.webm" controls="true" muted="true" loop="true" >}}

---

## Accessing the Rule Builder

You can open the Rule Builder through three primary navigation paths:
1. **RuleFlow Workspace**: Click the **Rule Builder** shortcut button <i class="fa fa-sitemap"></i>.
2. **Rule Document**: Open any Rule document and click **Rule Builder** in the top action bar.
3. **Awesomebar**: Type `Rule Builder` in the Frappe search bar (`Ctrl K` or `Cmd K`) and select the page.

---

## Interactive Layout Modes

FlexiRule provides two distinct layout experiences to fit your workflow preferences. You can switch between them anytime via **Preferences** <i class="fa fa-sliders"></i> in the top action bar:

### 1. Three-Panel Workspace View
The **Workspace View** organizes the entire rule designer into three side-by-side desktop panels:

- **Input / Schema Panel (Left)**: Browse live schema data from the target document, child table fields, linked records, and available context variables (`@doc`, `@vars`, `@session`, `@parent`, `@loop`). Click any field token to copy or insert it into your configuration.
- **Visual Canvas (Center)**: The main interactive flowchart where nodes are rendered, dragged, connected, and rearranged.
- **Configuration & Output Panel (Right)**: Displays the configuration form for the currently selected node, validation error notices, and test execution results.

### 2. Dialog Modal View
The **Dialog View** maximizes your visual canvas space. Clicking any node opens a focused **Rule Configuration Modal** containing three organized tabs:
1. **Input / Schema**: Inspect available variables, parent fields, and child table scopes.
2. **Action Settings**: Configure the action inputs, operation modes, and field mappings.
3. **Output / Schema**: View return values, set variable outputs (`@vars`), and inspect schema contracts.

---

## Navigation & Canvas Controls

### Moving and Zooming
- **Pan**: Click and drag any empty space on the canvas to move around.
- **Zoom**: Scroll your mouse wheel, or use the zoom controls (+ / - / fit view) in the lower canvas toolbar.

### Top Menu Action Bar

The top bar provides essential rule management shortcuts:


| Action | Icon | Shortcut | Description |
| :--- | :---: | :---: | :--- |
| **Undo** | <i class="fa fa-undo"></i> | `Ctrl Z` | Revert the last visual or configuration change. |
| **Redo** | <i class="fa fa-repeat"></i> | `Ctrl Y` | Re-apply reverted changes. |
| **Save** | <i class="fa fa-floppy-o"></i> | `Ctrl S` | Save the rule configuration and canvas structure to the database. |
| **Debug** | <i class="fa fa-bug"></i> | `Alt D` | Open the live simulation debugger to test against real document records. |
| **Toggle Active** | <i class="fa fa-rocket"></i> | — | Enable or disable rule execution in production. |
| **Auto Layout** | <i class="fa fa-sitemap"></i> | `Alt L` | Automatically clean up and align node positions and connector lines. |
| **Shortcuts** | <i class="fa fa-keyboard-o"></i> | `?` | View keyboard shortcuts quick reference overlay. |
| **Copy / Paste** | <i class="fa fa-copy"></i> | `Ctrl C` | Copy selected nodes to duplicate within the canvas or across rules. |
| **Preferences** | <i class="fa fa-sliders"></i> | `Alt P` | Toggle between Dialog Modal mode and Workspace Three-Panel mode. |

### Layout direction

The canvas can be organized **Left to Right** or **Top to Bottom** according to the saved RuleFlow Settings preference.

![Top-to-bottom layout example](/images/top-to-bottom-layout.png)

![Rule Builder dark theme](/images/rule-builder-canvas-dark-theme.png)

---

## Working with Canvas Nodes

Every step in your rule flow is represented by a visual node card:
- **Start Node** <i class="fa fa-play"></i>: Root node created automatically when a rule is initialized. Holds trigger event definitions and optional trigger conditions.
- **Action Nodes**: Colored cards with feature icons representing specific operations (Check <i class="fa fa-code-fork"></i>, Set Value <i class="fa fa-list-ol"></i>, Query Records <i class="fa fa-search"></i>, Notify <i class="fa fa-bell"></i>, Update Record <i class="fa fa-file-text"></i>, etc.).
- **Branch Handles & Connectors**: Output handles (e.g. **True** green port and **False** red port on Check nodes) connecting to downstream actions.


- **Node Selection & Reordering**: Click any node to open its properties panel. Drag nodes to reposition them smoothly across the infinite canvas.
- **Deleting Nodes**: Select a node and press `Delete` or `Backspace`, or click **Delete** in its property drawer. Connecting lines automatically reconnect surrounding nodes.

---

## Visual Execution Path Highlighting

During testing or when reviewing execution logs, the canvas dynamically highlights execution paths:
- **Green Highlight**: Successfully executed nodes and active branches.
- **Dimmed Gray**: Skipped branches and non-executed nodes.
- **Red Highlight**: Nodes that encountered errors or stopped the flow.

![Debug View Return Result](/images/debug-view-return-result.png)
