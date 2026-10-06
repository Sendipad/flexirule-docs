---
title: Debugging & Execution Logs
description: Learn how to test rules visually in sandbox mode and inspect live execution logs.
weight: 80
---

# Debugging & Execution Logs

FlexiRule provides visual testing and auditing tools to help you test rules in a safe sandbox environment and monitor live executions.

---

## Live Simulation Debugger

The **Debug** tool allows you to simulate rule execution on real document records without modifying your database.

### How to Run a Visual Test
1. On the Rule Builder canvas, click **Debug** <i class="fa fa-bug"></i> in the top action bar (or press `Alt D`).
2. The **Debug Panel** opens:
   - **Select Test Document**: Pick an existing record from your system (e.g. a specific Sales Order) to test with.
   - **Custom Context (Optional)**: Provide custom JSON overrides if testing specific scenarios.
3. Click **Run Test**.

![Rule Builder canvas showing debug execution run dialog](/images/rule-debugger-canvas-execution.png)

![Debug Run dialog showing JSON test context](/images/rule-debugger-dialog.png)

---

## Inspecting Debug Results

After clicking **Run Test**, FlexiRule evaluates your flow step-by-step:

- **Visual Canvas Path**: The path taken by execution highlights in **Green**. Unexecuted or skipped branches dim in **Gray**. Errors highlight in **Red**.
- **Step Inspector**: Click any highlighted node card on the canvas to inspect its step results:
  - **Inputs Received**: Dynamic values resolved for that step.
  - **Outputs Produced**: Modified variables (`@vars`) or return payloads.
  - **Step Duration**: Execution time in milliseconds.
  - **Status**: Success, Skipped, or Failed.

![Debug View Return Result](/images/debug-view-return-result.png)

{{< video src="/images/debug-rule-view-execution-path.webm" >}}

---

## Rule Execution Logs

For active rules running in production, FlexiRule logs every execution event in **Rule Execution Logs**.

### Accessing Execution Logs
- **RuleFlow Workspace**: Click the **Execution Logs** shortcut <i class="fa fa-list"></i>.
- **Rule Document**: Click **Execution Logs** in the document view menu.

### Log Audit Fields
Each execution log entry details:
- **Execution ID**: Unique tracking identifier.
- **Rule Name & Target DocType**: Name of the executed rule and document.
- **Trigger Event**: Event that triggered execution (e.g. `Before Save`).
- **Status**:
  - `Success`: Rule completed all actions successfully.
  - `Skipped`: Trigger condition evaluated to false, skipping execution.
  - `Failed`: Rule encountered a runtime error or user-raised error.
- **Execution Duration**: Total run time in seconds/milliseconds.
- **Detailed Step Trace**: Complete breakdown of every node executed, variables evaluated, and error stack trace (if failed).
