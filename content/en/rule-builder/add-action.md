---
title: Adding Actions to a Rule
description: Find, add, configure, connect, and manage actions in the FlexiRule visual Rule Builder.
weight: 40
---

# Adding Actions to a Rule

Actions are the steps a rule performs after its entry point. In the visual Rule Builder, each action is represented by a node on the canvas. The nodes and their connections define the execution flow, including branches and loops.

This guide covers how to add and manage actions. Configure each selected node in its properties panel, then save and test the rule.

## Add an action to the flow

### Insert an action on a connection

The most direct way to insert an action into an existing flow is the **+** control on a connection.

1. Find the connection where the new action should run.
2. Select the **+** button on that connection.
3. Search for or choose an action in the action selector.
4. Complete any selection steps, such as choosing an operation or Process, if prompted.
5. Confirm the selection and configure the new node.

The new node is inserted into that connection. This is useful when you want a step to run between two existing nodes without manually rebuilding the connection.

{{< video src="/images/add-action-from-action-zone.webm" controls="true" muted="true" loop="true" >}}

### Add a node from an action selector

The canvas also uses an **ActionZone** selector when a node placeholder or insertion point needs an action. Search for the action or operation you want, select it, and follow the prompts shown by the builder. Depending on the action type, you may need to choose an operation, select a registered Process and its operation, or provide a custom label before the node is added.

The available choices are driven by FlexiRule's action contracts and registered Process operations. The exact options therefore depend on the action type and the installed app's registered Processes.

## Find the right action

Use these descriptions to choose the appropriate action type. An action type may offer multiple operations or modes; select the specific operation that matches your goal.

| Action type | Typical purpose |
|---|---|
| **Condition** | Evaluate a decision and route execution along the True or False branch. |
| **Switch** | Route execution among multiple cases. |
| **Loop** | Repeat work for items in a collection, such as rows in a child table. |
| **Assignment** | Calculate or assign values to variables or document fields. |
| **Query Records** | Retrieve records or perform a supported query operation. |
| **Document Action** | Perform supported operations on a Frappe document. |
| **Notify** | Send a supported notification. |
| **Wait** | Pause execution according to the configured wait behavior. |
| **Raise Error** | Stop execution by raising a configured error. |
| **Sub-Rule** | Invoke another rule that is available for reuse. |
| **Process** | Run an operation supplied by a registered FlexiRule Process. |
| **Stop** | End the flow where a stop node is supported. |

The builder's visible labels may be business-friendly labels, while the saved action type and operation use FlexiRule's internal contract. Do not assume every action has a single configuration form: for example, Query Records offers different query modes, and Process requires selecting a registered Process and operation.

## Choose an operation and label

After selecting an action type, the selector may ask you to choose a mode or operation. For **Process**, choose the registered Process and then the operation it provides. The selector can also let you set a label for the node.

Use a short label that describes the business purpose, such as **Calculate Discount** or **Find Open Invoices**. A custom label helps people understand the flow, but it does not change the underlying action type or operation.

## Connect and arrange nodes

- Connect the output of a node to the node that should run next.
- For a **Condition**, connect the True and False paths to the appropriate follow-up steps. Decide explicitly what should happen on each path.
- For a **Loop**, configure the collection and connect the repeated work to the intended loop path. Review the loop's exit or continuation path as well.
- Use the canvas layout controls to make larger flows easier to read. Moving nodes changes their visual arrangement; the connections define the flow.
- Use the connection **+** control when you need to insert a step into an existing connection.

If the canvas has separate branches, make sure the action is connected to the correct branch. An unconnected node should not be treated as part of the intended execution path.

## Configure and manage an action node

Select a node to open its configuration. The available fields depend on the selected action type and operation.

- **Configure the action:** Complete required fields and choose values using the available controls.
- **Custom label:** Use a descriptive label when the builder offers one.
- **Enabled state:** If the node supports disabling, check that it is enabled when you expect it to run. A disabled node can affect the reachability of downstream nodes.
- **Copy and paste:** Use the builder's supported copy/paste controls to duplicate a node when available. Review copied settings and connections before relying on the duplicate.
- **Delete:** Select a node and use the builder's supported delete control or keyboard command. Review the surrounding connections after deletion.
- **Read-only rules:** If the rule is read-only, you must return it to an editable lifecycle state before changing its nodes.

Some action nodes can contain nested execution details, and some display badges that summarize configured capabilities. Treat these as status cues; open the node's configuration to review the actual settings.

{{< video src="/images/action-label-edit.webm" controls="true" muted="true" loop="true" >}}

## Use the command palette for navigation

The **Command Palette** can be opened with **Ctrl+K** where supported. It searches existing canvas nodes and builder commands such as **Save Rule**, **Auto Layout**, and **Keyboard Shortcuts**. It is useful for navigating to a node or invoking a builder command.

**Do not confuse the Command Palette with the action selector.** To insert a new action, use the connection **+** control or the ActionZone insertion point. The Command Palette is not the documented method for creating a new action node.

## Save and test the flow

1. Configure the new action and check all required fields.
2. Confirm that it is connected to the intended path.
3. Save the rule.
4. Test the rule using representative data, including cases that follow different branches.
5. Review execution results and logs if the action does not behave as expected.

Before activating a rule, check for missing configuration, disconnected nodes, disabled steps, incorrect branch connections, and unexpected document changes or other side effects.

## Troubleshooting

- **The action selector does not appear:** Confirm you used an available insertion point and that the rule is editable.
- **The action type needs more choices:** Some action types require a second step to choose an operation or mode. Process also requires a registered Process and operation.
- **The node appears but does not run:** Check its connections, enabled state, branch conditions, and the rule's entry condition.
- **A downstream step is skipped:** Inspect the branch or loop path and check whether an earlier node is disabled or terminates execution.
- **A Process is missing:** Confirm that the Process and its operation are registered and available in the current installation.
- **The Command Palette does not add a node:** Use the ActionZone selector or the connection **+** insertion control instead.

## Related guides

- [Building Rules]({{< relref "rule-builder/building-rules.md" >}})
- [Rule Configuration & Trigger Setup]({{< relref "rule-builder/rule-configuration.md" >}})
- [Condition action]({{< relref "action-type/condition.md" >}})
- [Fetch Records]({{< relref "action-type/query-records/fetch-records.md" >}})
- [Rule Lifecycle]({{< relref "test-operate/rule-lifecycle.md" >}})
