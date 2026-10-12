---
title: How FlexiRule Works
weight: 20
description: Follow the lifecycle of a visual rule, from its trigger and conditions through actions, data, and execution results.
---

# How FlexiRule Works

A FlexiRule rule describes a business decision as a connected flow. Instead of hiding every decision in code, the rule makes its entry point, steps, branches, and configured inputs visible in one place.

## The execution journey

```text
Business event or supported trigger
                 │
                 ▼
        Trigger configuration
                 │
                 ▼
      Optional trigger condition
                 │
                 ▼
           Rule starts
                 │
                 ▼
     Connected action steps
      ├── Read or query data
      ├── Evaluate a condition
      ├── Assign or update values
      └── Notify or call reusable logic
                 │
                 ▼
          Result and logs
```

1. **A trigger defines when a rule is eligible to run.** For example, a rule may be associated with a DocType event.
2. **An optional trigger condition filters early.** It can prevent the rule flow from starting when the incoming document does not meet the configured criteria.
3. **The canvas defines the path.** Connected action nodes determine the sequence and branches of work.
4. **Each action has its own configuration.** It determines what the step does and which inputs it uses.
5. **Smart Values supply data.** Inputs can reference the current document, runtime variables, earlier results, or supported value resolvers.
6. **The execution result can be inspected.** Testing and execution logs help explain which path ran and where a problem occurred.

## The canvas is more than a diagram

The canvas represents the configured execution flow; it is not merely an illustration of a separate script. A connection matters because it determines which step can run next. Action settings matter because they define the behavior of each step.

When troubleshooting, check these layers separately:

| Layer | Question to ask |
|---|---|
| Rule configuration | Is the trigger, target DocType, and event correct? |
| Flow connections | Does the intended branch lead to the correct next step? |
| Action settings | Is each action configured for the intended operation? |
| Smart Values | Does each input refer to data that is available at that point? |
| Test and execution results | What path ran, what values were returned, and where did it fail? |

## A practical example: flag a high-value invoice

Suppose a finance team wants to alert a reviewer when a Sales Invoice exceeds a configured amount.

1. Configure a rule for the appropriate Sales Invoice event.
2. Add a **Condition** that compares the invoice's grand total with the threshold.
3. Connect the matching branch to a **Notify** action.
4. Configure the notification using the relevant document information.
5. Test with one invoice above the threshold and another below it.
6. Review the trace and action outcomes before activation.

The example illustrates the pattern: **trigger → decision → action → verification**. Choose the trigger event carefully; different events have different timing and side effects.

## FlexiRule and custom code work together

FlexiRule is a declarative layer for configurable business policies, not a replacement for all development.

- Use **FlexiRule** when business behavior benefits from a visible flow that can be configured, tested, and maintained as policy changes.
- Use **custom Frappe/Python development** for new application capabilities, complex technical logic, integrations, and behavior that supported actions cannot express.
- Use **both together** when custom code provides a reliable capability and a FlexiRule rule determines the business circumstances in which it should be used.

## Next steps

- [Core Concepts]({{< relref "core-concepts.md" >}})
- [Quick Start]({{< relref "quick-start.md" >}})
- [Build Your First Rule]({{< relref "first-rule.md" >}})
- [Rule Builder guide]({{< relref "../rule-builder/_index.md" >}})
