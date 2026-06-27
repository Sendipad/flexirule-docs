---
title: Rule Entry Condition vs. Condition Action
description: Understand when to use a Rule Entry Condition and when to use a Condition Action in FlexiRule.
weight: 40
---

# Rule Entry Condition vs. Condition Action

When building a rule, you can add conditions in two different places:

1.  **Rule Entry Condition** (configured in the Rule's parent DocType)
2.  **Condition Action** (added as a node in the rule flow)

At first glance they may seem similar because both evaluate logic such as:

- `Status = "Draft"`
- `Amount > 1000`
- `Customer Group = "VIP"`

However, they serve very different purposes.

## Quick Summary

| Use Case | Rule Entry Condition | [Condition Action]({{< relref "/core-actions/condition.md" >}}) |
| :--- | :---: | :---: |
| Decide whether the rule should run at all | ✅ Yes | ❌ No |
| Create branching logic inside a rule | ❌ No | ✅ Yes |
| Improve performance by skipping unnecessary executions | ✅ Yes | ❌ No |
| Create "If / Else" paths | ❌ No | ✅ Yes |
| Guard a sequence of actions after the rule starts | ❌ No | ✅ Yes |
| Filter rule triggers | ✅ Yes | ❌ No |

---

## What is a Rule Entry Condition?

A **Rule Entry Condition** acts as a gatekeeper for the entire rule. It is configured as part of the [Rule Trigger Configuration]({{< relref "/advanced-reference/triggers/_index.md" >}}).

{{< info >}}
While the UI uses the term **Rule Entry Condition**, it is best understood as the **Trigger Condition** or **Trigger Filter**.
{{< /info >}}

Before FlexiRule starts executing any actions, it checks this condition. If the condition evaluates to `False`, the rule stops immediately and none of its actions are executed.

### Example

**Trigger:**
- Document Type: Sales Invoice
- Event: Before Save

**Entry Condition:**
`doc.grand_total > 1000`

**Behavior:**
- **Invoice Total = 500** → Rule does not run.
- **Invoice Total = 2000** → Rule runs.

> Should this rule start at all?

If the answer is no, FlexiRule skips the entire rule.

### Recommended Uses

Use an Entry Condition when you want to:
- **Filter Triggers**: Limit when a rule is triggered.
- **Filter Documents**: Filter documents before processing.
- **Performance**: Avoid unnecessary rule execution and improve system performance.

**Examples:**
- Only run for submitted documents.
- Only run when amount exceeds a threshold.
- Only run for a specific company.
- Only run for VIP customers.

---

## What is a Condition Action?

A **Condition Action** is a step inside the rule flow.

Unlike an Entry Condition, the rule has already started running. The Condition Action decides which path the execution should follow next or whether a specific sequence of actions should be "guarded" (executed only if the condition is met).

### Example: Branching

```text
Start
  ↓
Condition: Amount > 1000 ?
  ├─ Yes → Send Approval Notification
  └─ No  → Auto Approve
```

### Example: Guarding

```text
Start
  ↓
Condition: Customer is VIP?
  ├─ Yes → Apply VIP Benefits
  └─ No  → (Continue to next step)
```

**Behavior:**
- The rule always starts.
- The condition determines which branch is executed or whether a guarded path is taken.

> Now that the rule is running, which path should it take?

### Recommended Uses

Use a [Condition Action]({{< relref "/core-actions/condition.md" >}}) when you need:
- **If / Else logic**: Branching into different paths.
- **Guarded Sequences**: Executing specific actions only under certain conditions within a larger flow.
- **Decision Trees**: Handling complex business logic after the rule has been triggered.

---

## Real-World Example: Optimal Design

### The Best Practice

**Entry Condition (Trigger Filter):**
`doc.status == "Submitted"`

**Flow:**
```text
Start
  ↓
Condition: Amount > 10000 ?
  ├─ Yes → CFO Approval
  └─ No  → Manager Approval
```

**Why is this optimal?**
The rule only runs for submitted documents, which avoids unnecessary execution overhead. Once the rule starts, the Condition Action handles the specific business decision of who should approve the document.

---

## Performance Tip: Filter Early

Some users place all logic inside Condition Actions:

**Flow:**
```text
Start
  ↓
Condition: Status == "Submitted" ?
  ├─ Yes → Continue
  └─ No → Stop
```

This design is **valid**, but it is **less optimal** than using an Entry Condition.

> "This design works, but the rule still needs to start and initialize its context before it can decide to stop."

A cleaner and more performant design is to use the **Entry Condition** for the "Submitted" check, and keep **Condition Actions** only for branching decisions inside the flow.

---

## Decision Guide

Use this simple guide to decide which one to use:

| Question | Use |
| :--- | :--- |
| **Should this rule execute at all?** | Rule Entry Condition |
| **Which path should execution follow?** | Condition Action |
| **Is this a trigger filter for the DocType?** | Rule Entry Condition |
| **Is this an "If / Else" decision inside the flow?** | Condition Action |

---

## Best Practice Summary

Use both together for the best results:

1.  **Entry Condition** to determine whether the rule should execute.
2.  **Condition Actions** to control the flow after execution begins.

This keeps your rules:
- **Easier to understand**: Clear separation between "when it runs" and "what it does".
- **More efficient**: System resources aren't wasted on rules that shouldn't run.
- **Easier to maintain**: Logic is placed in the most appropriate location.
- **Better performing**: Filters out irrelevant events at the earliest possible stage.
