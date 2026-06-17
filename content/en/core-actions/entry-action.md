---
title: Entry Action
description: The mandatory starting point of every rule flow.
weight: 10
---

# Entry Action

The **Entry Action** (often labeled "Start") is the mandatory starting point for every rule you build in FlexiRule. It acts as the bridge between an external event—like a document being saved or a schedule firing—and your visual logic flow.

## How it Works

Every rule needs to know where to begin. The Entry Action is that fixed starting point. When a rule is triggered, the execution starts at this node and follows the connected path through your logic.

### Context Initialization
The Entry Action is responsible for "loading" the data your rule needs. It makes two main things available to all other nodes in your flow:
- **`doc`**: The document that triggered the rule (e.g., the specific Sales Order or Lead).
- **`vars`**: A container for temporary variables you might want to create and use later in the flow.

## When to Use

- **Always**: You cannot have a rule without an Entry Action. It is automatically added to the canvas when you create a new rule.

## Configuration

Unlike other actions, the Entry Action's configuration is inherited from the **Rule Header**. You don't configure it on the canvas; you configure it when you set up the rule itself.

| Property | Description |
| :--- | :--- |
| **DocType** | The type of record that triggers the rule (e.g., `Customer`, `Task`). |
| **Trigger Event** | The specific event that starts the rule (e.g., `After Save`, `On Submit`). |

## Key Points to Remember

- **One Start Only**: A rule can only have one Entry Action.
- **Pass-through Node**: The Entry Action doesn't perform any work itself (like updating fields or sending emails). It simply starts the process.
- **Labels**: You can rename the Entry Action node on the canvas to something more descriptive, like "When Invoice is Paid," to make your flow easier to read.

---

*Next: Learn how to branch your logic with the [Condition]({{< relref "condition.md" >}}) action.*
