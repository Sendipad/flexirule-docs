---
title: "Entry Action"
description: "The starting point of every rule flow that anchors the trigger context."
weight: 1

capabilities:
  category: flow-control
  mutation: read-only
  targets:
    - context
    - document
  triggers:
    - any
  flow: linear
  transaction:
    - transactional

badges:
  - core
---

# Entry Action

Keywords: [start, trigger, root, entry, initialization, workflow start]

## Overview
The **Entry Action** is the mandatory starting point of every FlexiRule flow. It represents the transition from the external trigger (such as a DocType event or a Schedule) into the rule's logic graph.

While it is technically an action, it acts as a structural anchor that initializes the **Execution Context**, making the triggering document (`doc`) and temporary variables (`vars`) available to all downstream nodes.

## When To Use
- **Every Rule**: Every active rule must have exactly one Entry Action.
- **Starting Logic**: Use it as the first node to define where your business logic begins.
- **Trigger Visualization**: Use it to see at a glance which event initiated the rule.

## Configuration
The Entry Action is unique because its configuration is inherited from the **Rule Header**. It cannot be deleted or manually added; it is automatically generated when a new rule is created.

| Property | Description |
| :--- | :--- |
| **Label** | Usually set to "Start" or "TRIGGER" in the UI. |
| **DocType** | (Inherited) The Frappe DocType that triggers this rule (e.g., `Sales Order`). |
| **Trigger Event** | (Inherited) The specific event that fires the rule (e.g., `Before Save`, `After Submit`). |

## Supported Inputs
The Entry Action does not require explicit inputs from other nodes. Instead, it receives the following from the FlexiRule Engine:

- **Triggering Document (`doc`)**: The actual record being processed.
- **System Metadata**: Information about the trigger time, user, and event type.

## Supported Outputs
The Entry Action produces the initial **Execution Context**:

- **`doc`**: A reference to the triggering document.
- **`vars`**: An empty collection of variables, ready to be populated by downstream actions like [Assignment]({{< relref "docs/actions/assignment/index.md" >}}).

## Execution Behavior
The Entry Action is a **pass-through** node. When the rule executes, the engine:
1.  Locates the Entry Action.
2.  Initializes the `doc` and `vars` in memory.
3.  Immediately moves to the node connected to the `next_step_if_true` path.

It performs no calculations or database mutations itself.

## Features
- **Visual Distinction**: Rendered as a green D-shaped node (or circle) to clearly mark the beginning of the flow.
- **Uniqueness Enforcement**: The Rule Builder and Backend Validator ensure that exactly one Entry Action exists per rule to prevent ambiguous execution paths.

## Examples

### Sales Order Validation
**Problem**: Ensure a Sales Order has a "Customer Group" set before it can be submitted.

**Configuration**:
- **Entry Action**: Triggered on `Sales Order` / `Before Submit`.
- **Next Node**: A [Condition]({{< relref "docs/actions/condition" >}}) node checking `doc.customer_group`.

**Result**: The Entry Action catches the "Before Submit" event and passes the Sales Order document to the validation logic.

### Daily Inventory Sync
**Problem**: Sync inventory levels with an external system every night.

**Configuration**:
- **Entry Action**: Triggered by a `Scheduler` event at `00:00`.
- **Next Node**: A [Query Records]({{< relref "docs/actions/query-records" >}}) node to fetch Item levels.

**Result**: The Entry Action initiates the scheduled process, providing the starting point for the batch operation.

## Best Practices
- **Descriptive Labels**: While "Start" is the default, you can label the Entry Action to reflect the trigger (e.g., "On High Priority Ticket") to improve graph readability.
- **Immediate Branching**: If your rule handles multiple scenarios, follow the Entry Action immediately with a [Condition]({{< relref "docs/actions/condition" >}}) or [Switch]({{< relref "docs/actions/switch" >}}) node.

## Common Mistakes
- **Multiple Entry Points**: Trying to create a graph with two "Start" nodes. FlexiRule requires a single deterministic entry point.
- **Expecting Mutation**: Attempting to perform data changes within the Entry Action itself. Use an [Assignment]({{< relref "docs/actions/assignment" >}}) node immediately after the Entry Action for initialization.

## Limitations
- **Non-Configurable**: You cannot add custom fields or logic directly to the Entry Action node; its behavior is fixed by the engine.
- **Implicit Trigger**: It depends entirely on the Rule's Trigger configuration. If the Trigger is disabled, the Entry Action will never be reached.

## Related Topics
- [Execution Semantics]({{< relref "docs/reference/execution/entry.md" >}})
- [Architecture Reference]({{< relref "docs/architecture/actions/entry.md" >}})
- [Triggers Overview]({{< relref "docs/triggers/_index.md" >}})
