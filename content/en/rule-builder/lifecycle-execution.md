---
title: Rule Lifecycle
description: Understanding the stages of a rule from creation to execution and retirement.
weight: 10
---

# Rule Lifecycle

A FlexiRule goes through several stages during its existence. Understanding these stages is key to managing your automations safely.

## 1. Draft
When you create a new Rule, it starts in **Draft** mode.
- Logic and configuration can be modified freely.
- The rule will NOT trigger automatically upon system events.
- You can use the **Visual Builder** and run **Manual Tests** to verify your logic.

## 2. Active
Once you are satisfied with your logic, you can **Activate** the rule.
- The rule becomes eligible for execution when its configured trigger occurs (e.g., `Before Save` of a Sales Order).
- The visual configuration and rule fields are **locked** to prevent accidental changes in production. To edit, you must create an **Amendment**.

## 3. Versioning (Amending)
To modify an Active rule, you use the **Amend** workflow.
- FlexiRule creates a new **Draft** version of the rule with an incremented version number.
- The original version remains **Active** until the new version is activated.
- This provides a clear audit trail of logic changes over time.

---

# Rule States

| State | Active | Editable | Description |
| :--- | :---: | :---: | :--- |
| **Draft** | No | Yes | Initial state for new rules or amendments. |
| **Active** | Yes | No | Locked and eligible for automatic execution. |
| **Disabled** | No | Yes | An activated rule that has been manually stopped. |
| **Archived** | No | No | Retired rule, kept for historical audit logs. |

---

# Rule Trigger Flow

The engine follows a strict sequence when an event occurs:

1.  **Event Occurs**: A DocType event (like `Before Save`) or a Scheduled event triggers the system.
2.  **Find Matching Rules**: The engine retrieves all active rules matching the DocType and Event from the **Rule Registry**.
3.  **Sort by Priority**: Rules are sorted by their **Priority**. Higher priority rules run first.
4.  **Evaluate Trigger Condition**: Before loading the heavy action graph, the **Trigger Condition** (pre-compiled expression) is evaluated. If false, the rule is skipped entirely for performance.
5.  **Initialize Context**: A runtime context is created, holding `doc`, `old_doc`, and an empty `vars` dictionary.
6.  **Execute Graph**: Execution starts at the **Start** node and follows the outgoing connections.
7.  **Complete**: Execution ends when a **Stop** node is reached or no further connections exist.

---

# Execution Order

## 1. Priority
Rules for the same DocType and Event are executed in order of **Priority**.
- Deterministic ordering ensures predictable results when multiple rules apply to the same document.

## 2. Trigger Conditions
FlexiRule uses highly optimized **Pre-compiled Conditions** at the rule level.
- These are evaluated before any heavy graph logic or action handlers are initialized.
- This ensures near-zero overhead for rules that don't meet the immediate criteria.

---

# Safety & Validation

FlexiRule performs several safety checks during execution:

1.  **Cycle Detection**: The engine prevents infinite loops.
    - **Total Iterations**: A single rule execution is limited to **1000** steps.
    - **Node Re-entry**: (System-defined safety limits on repeating the same node).
2.  **Schema Validation**: The builder validates action configurations against their **Technical Contracts** before allowing a save.
3.  **Permission Checks**: Rule execution respects Frappe's role-based permissions. You can configure rules to "Ignore Permissions" if they need to perform administrative tasks.

---

# Error Handling

When an action encounters an error, the behavior depends on its **On Error** configuration:
- **Stop**: Terminates the rule execution and logs the error (Default).
- **Continue**: Logs a warning and proceeds to the next step.
- **Retry**: Attempts to re-execute the action based on the configured retry count.

---

# Logging

Every execution is recorded in the **Rule Execution Log**:
- **Status**: Success, Failed, or Stopped.
- **Duration**: Exact execution time in milliseconds.
- **Path Trace**: A visual record of every node visited during the run.
- **Context Snapshot**: The state of variables and document fields at the time of execution (available in Debug Mode).

---

# Testing

Before going live, use the integrated **Debugger**:
- **Manual Run**: Trigger the rule with a specific document from the UI.
- **Visual Trace**: Review the exact execution path highlighted on the canvas.
- **Log Inspection**: Inspect detailed input/output values for each step.
