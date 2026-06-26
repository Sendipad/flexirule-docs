---
title: Rule Lifecycle
description: Understanding the stages of a rule from creation to execution and retirement.
weight: 10
---

# Rule Lifecycle

A FlexiRule goes through several stages during its existence. Understanding these stages is key to managing your automations safely.

## 1. Draft
When you create a new Rule, it starts in **Draft** mode.
- Logic can be modified freely.
- The rule will NOT trigger automatically.
- You can use the **Rule Builder** and run **Manual Tests**.

## 2. Active (Enabled)
Once you are satisfied with your logic, you can **Enable** the rule.
- The rule is now "Live".
- It will trigger based on its defined events (e.g., `Before Save` of a Sales Order).
- The visual configuration is locked to prevent accidental changes.

## 3. Versioning (Amending)
To change an Active rule, you must **Amend** it.
- FlexiRule creates a new version of the rule.
- The old version is automatically disabled.
- This creates a clear audit trail of logic changes over time.

---

# Execution Order

FlexiRule provides deterministic execution, meaning you always know which rule runs first.

## 1. Priority
Rules for the same DocType and Event are sorted by **Priority**.
- **Priority 1** runs before **Priority 2**.
- You can see the execution order in the **Rule List** view.

## 2. Rule-Level Conditions
Before the graph (the Rule Builder) starts, FlexiRule evaluates the **Rule Condition**.
- If this condition is false, the rule doesn't run at all.
- This is highly optimized and happens before any heavy logic is loaded.

## 3. Graph Traversal
Within the Rule Builder:
- Execution starts at the **Entry Action**.
- It follows connections sequentially.
- If a node has multiple outgoing paths (like a Condition), it follows the one that matches the evaluation result.
- If no path matches, execution for that branch stops.

---

# Validation

FlexiRule performs several checks to ensure your rule is safe to run:

1.  **Cycle Detection**: The engine detects if the graph contains an infinite loop and will stop execution if it exceeds 100 iterations.
2.  **Schema Validation**: The Rule Builder checks that all required fields in an action (like `Recipients` in an Email) are filled before allowing you to save.
3.  **Permission Checks**: FlexiRule respects Frappe permissions by default. If a rule tries to update a document the user doesn't have access to, it will fail unless "Skip Permissions" is explicitly enabled.

---

# Testing

Before going live, use the integrated **Debugger**:
- **Dry Run**: Execute the rule without saving any changes to the database.
- **Visual Trace**: See the path the rule took highlighted on the canvas.
- **Log Inspection**: Review detailed logs for each step, including input and output values.
