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

## 2. Active (Enabled)
Once you are satisfied with your logic, you can **Activate** the rule.
- The rule becomes eligible for execution when its configured trigger occurs (e.g., `Before Save` of a Sales Order).
- The visual configuration and rule settings are **locked** to prevent accidental changes. To edit, you must either deactivate the rule or create an amendment.

## 3. Versioning (Amending)
To modify an Active rule, you use the **Amend** workflow.
- FlexiRule creates a new **Draft** version of the rule with an incremented version number (e.g., `MY_RULE_v2`).
- The original version remains **Active** until you manually disable it or activate the new version.
- This provides a clear audit trail of logic changes over time, tracked via the built-in version history.

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

1.  **Event Occurs**: A DocType event (like `Validate`) or a Scheduled event triggers the check.
2.  **Find Matching Rules**: The engine retrieves all active rules matching the DocType and Event.
3.  **Sort by Priority**: Rules are sorted by their **Priority** (0-20). Higher priority rules run first.
4.  **Evaluate Rule Condition**: Before loading the graph, the **Trigger Condition** is evaluated. If false, the rule is skipped entirely.
5.  **Execute Entry Action**: Execution starts at the **Start** node in the Visual Builder.
6.  **Traverse Graph**: The engine follows the outgoing connections according to each action's execution flow.
7.  **Complete**: Execution ends when a **Stop** node is reached or no further connections exist.

---

# Execution Order

## 1. Priority
Rules for the same DocType and Event are executed in order of **Priority**.
- **Priority 20** runs before **Priority 0**.
- Deterministic ordering ensures predictable results when multiple rules apply to the same document.

## 2. Rule-Level Conditions
FlexiRule uses highly optimized **Pre-compiled Conditions**.
- These are evaluated before any heavy graph logic or actions are initialized.
- This ensures minimal overhead for rules that don't meet the immediate criteria.

## 3. Graph Traversal
Within the Visual Builder:
- Execution starts at the **Entry Action**.
- It follows outgoing connections based on the result of each block.
- For branching nodes (like **Check**), it follows the path that matches the evaluation (True or False).
- If a path leads to a dead end without a **Stop** node, execution for that branch simply completes.

---

# Validation

FlexiRule performs several safety checks:

1.  **Cycle Detection**: The engine prevents infinite loops. It limits visits to any single node to **100** times and total execution steps to **1000**.
2.  **Schema Validation**: The builder validates action configurations against their technical contracts before allowing a save.
3.  **Permission Checks**: Rule execution respects role-based permissions. You can define which roles are allowed to execute a rule or which roles should skip it. Actions that modify documents also respect Frappe's permission system unless "Ignore Permissions" is explicitly enabled.

---

# Error Handling

When an action encounters an error, the behavior depends on its **On Error** configuration:
- **Stop**: Terminates the rule execution and logs the error.
- **Continue**: Logs the warning and proceeds to the next step.
- **Retry**: Attempts to re-execute the action with exponential backoff (if not in a synchronous hook).
- **Rollback**: Reverts changes made within that specific action's transactional scope.

---

# Logging

Every execution is recorded in the **Rule Execution Log**:
- **Status**: Success, Failed, or Stopped.
- **Duration**: Exact execution time in milliseconds.
- **Path Trace**: A visual record of every node visited during the run.
- **Context Snapshot**: The state of variables and document fields at the time of execution (if Debug Mode is enabled).

---

# Testing

Before going live, use the integrated **Debugger**:
- **Dry Run**: Simulate execution without committing any changes to the database.
- **Visual Trace**: Review the exact execution path highlighted on the canvas.
- **Log Inspection**: Inspect detailed input/output values and variable states for each step.
