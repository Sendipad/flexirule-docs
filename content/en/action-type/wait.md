---
title: Wait
description: Pause rule execution for a specified duration or until a target date and time.
weight: 60
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Rule Execution"]
aliases:
  - /docs/actions/wait/
---

# Wait Action

The **Wait** action pauses rule execution for a set duration or until a specific date/time, deferring remaining actions until the waiting period expires.

---

## 1. What is it?

A Wait block creates a timed delay in your rule. When execution reaches a Wait node, the system pauses the rule and automatically resumes execution from the next action node when the time arrives.

```
Action A (Send Quote) ──→ Wait (48 Hours) ──→ Action B (Send Follow-up Email)
```

---

## 2. When to Use

Use the Wait action when you need to:
- **Schedule delayed follow-ups** (e.g., send a reminder email 3 days after a quote is created).
- **Pause until a document date** (e.g., wait until the document's `Follow-up Date` is reached).
- **Stagger background actions** or rate-limit automated operations.

---

## 3. How to Configure

1. **Add the Action**: Add a **Wait** block to your visual canvas.
2. **Select Wait Mode**:
   - **Duration**: Pause for a relative time offset (e.g., `2 Hours`, `3 Days`).
   - **Until Date**: Pause until an absolute date/time field or variable (e.g., `@doc.follow_up_date`).
3. **Configure Duration / Date Field**:
   - For **Duration**: Enter the numeric value and select the time unit (`Seconds`, `Minutes`, `Hours`, `Days`).
   - For **Until Date**: Select the target date field using the **Smart Value Selector**.
4. **Connect Outbound Edge**: Connect the Wait block's outbound port to the action that should execute after the delay completes.

---

## 4. UI Configuration Options

| Option | Description |
| :--- | :--- |
| **Wait Mode** | Choose **Duration** (relative offset) or **Until Date** (absolute target timestamp). |
| **Duration Value & Unit** | Set the number and select unit: **Seconds**, **Minutes**, **Hours**, or **Days**. |
| **Target Date Field** | Select the document date field (`@doc.due_date`) using the **Smart Value Selector** when in *Until Date* mode. |

---

## 5. Practical Example

### Scenario: Follow Up on Open Quotation After 48 Hours

1. **Trigger**: Set rule trigger to Quotation `After Insert`.
2. **Wait Block**:
   - **Mode**: `Duration`
   - **Value**: `48`
   - **Unit**: `Hours`
3. **Notify Block**: Connect Wait block to a **Notify** action (Email quotation follow-up message to customer).

---

## 6. Common Mistakes

- **Blocking Synchronous UI Threads**: Placing long delays on web form events (like `Before Save`). Long delays work best with background or scheduled event rules.
- **Past Date Targets**: Supplying an *Until Date* value that is already in the past, causing the wait step to complete immediately without pausing.

---

## 7. Related Features

- [Notify]({{< relref "action-type/notify/" >}}): Frequently combined with Wait blocks for delayed follow-up notifications.
- [Rule Lifecycle]({{< relref "test-operate/rule-lifecycle.md" >}}): Learn how background execution works in FlexiRule.
