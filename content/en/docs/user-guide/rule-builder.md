---
title: "Rule Builder"
description: "Visual workspace for designing business logic graphs."
weight: 10
parent: "rule-building"
aliases:
  - /docs/builder/rule_builder/
---

# Visual Rule Builder

Keywords: rule builder, visual editor, drag and drop, workflow, no-code, vueflow

## Audience

- End Users
- Developers

## Overview

The Rule Builder is a Vue 3-based visual workspace for designing business logic graphs. It provides a drag-and-drop canvas where you can orchestrate complex workflows without writing code, while maintaining full visibility into the execution flow.

### When to Use
- Use this to design new business rules and processes.
- Use this to visualize the logical flow of an existing rule.
- Use this to test and debug rules using real document data.

---

## Visual Example

![Rule Builder Overview](/flexirule-docs/landing-page/rule_builder.png)

### Dark Theme Support
![Rule Builder Canvas Dark Theme](/images/rule-builder-canvas-dark-theme.png)

---

## Key Concepts

### Nodes (Actions)
Each node in the graph represents a **Rule Action**.

- **Entry Action**: The starting point of the graph.
- **Functional Nodes**: Perform work (e.g., [Process]({{< relref "docs/actions/process" >}}), [Assignment]({{< relref "docs/actions/assignment" >}})).
- **Control Nodes**: Manage flow (e.g., [Condition]({{< relref "docs/actions/condition" >}}), [Loop]({{< relref "docs/actions/loop" >}})).

---

## No-Code & Error Prevention

<video src="/images/add-action-from-action-zone.webm" controls></video>

### Temporal Context Visibility
The builder ensures that an action can only access variables that are logically available at its point in the execution flow.

- **Upstream-Only Visibility**: The field picker *only* displays variables created by upstream nodes.
- **Dynamic Schema Switching**: Automatically switches field pickers based on the DocType context.

### Reactive & Type-Aware Controls
- **Intelligent Filter Builder**: Adapts operators based on field types.
- **Magic Formula Builder**: Guided UI for complex logic (Date math, Aggregations).

### Canvas Features
<video src="/images/remove-a-node-will-dynamically-reconnet-nodes.webm" controls></video>

<video src="/images/shift-click-nodes-to-copy.webm" controls></video>

---

## Rule Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Draft: Create Rule
    Draft --> Active: Validate & Activate
    Active --> Draft: Edit/Amend
    Active --> Disabled: Disable
    Disabled --> Active: Re-activate
    Active --> Archived: Archive
```

---

## Examples

### Basic Example
**Problem**: Create a simple rule that sets a field.
**Configuration**:
1. Add an **Entry Action**.
2. Connect it to an **Assignment** action.
3. Configure the Assignment to set `doc.status = "Open"`.
**Result**: When the rule triggers, the status is updated.

### Real-world Example
**Problem**: Complex approval workflow with notifications.
**Configuration**:
1. **Entry**: On Sales Order Submit.
2. **Condition**: Is Total > 10,000?
3. **True Path**: Send **Email** to Manager and set `doc.workflow_state = "Pending Manager"`.
4. **False Path**: Set `doc.workflow_state = "Approved"`.
**Result**: Automated routing based on order value.

---

## Testing and Debugging

The Rule Builder includes built-in tools to test and debug your rules in real-time.

![Rule Builder Run and Debug Test](/images/rule-builder-run-debug-test.png)

---

## Related Topics

- [Condition Builder]({{< relref "docs/user-guide/condition-builder.md" >}})
- [Execution Engine]({{< relref "docs/architecture/engine/execution-engine.md" >}})
- [Action Zone]({{< relref "docs/actions/" >}})
