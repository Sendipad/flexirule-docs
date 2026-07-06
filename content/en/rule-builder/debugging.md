---
title: Debugging & Execution Logs
description: Learn how to test your rules and understand why they run.
weight: 80
---

# Debugging & Execution Logs

FlexiRule provides built-in tools to help you understand exactly what happens when a rule runs. Whether you are testing a new idea or investigating why a live rule didn't behave as expected, these tools give you full visibility.

## Testing with the Debugger

The **Debug Rule** tool allows you to run your logic in a "sandbox" mode before you activate it.

### How to Run a Test
1.  **Open Debugger**: Click the **Debug Rule** button at the top of the canvas.
2.  **Select a Record**: Pick a real document from your system (e.g., a specific Sales Order) to use as the test data.
3.  **Simulate**: Click **Run Test**.

### Understanding the Results
-   **Visual Path Trace**: On the canvas, the path taken by the logic is highlighted. You can see exactly which "Check" blocks were true and which actions were triggered.
-   **No Real Changes**: The debugger simulates the actions but **does not** save any changes to your database. It is 100% safe to use on production data.
-   **Result Inspection**: Click on any highlighted block after the test to see its specific inputs and outputs (e.g., what value was calculated or what email would have been sent).

![Debug View Return Result](/images/debug-view-return-result.png)

## Execution Logs

For **Active** rules, FlexiRule keeps a history of every time the rule was triggered. This is your primary tool for troubleshooting live automations.

### Why did the rule trigger?
The logs will show you:
-   **The Event**: Which document and event (e.g., Save) triggered the run.
-   **The Outcome**: Whether the rule finished successfully, was skipped, or hit an error.

### Why did the rule NOT trigger?
If you expected a rule to run but it didn't, check the logs for:
-   **Trigger Condition Failed**: The high-level "gatekeeper" condition you set in the Rule Configuration wasn't met.
-   **Disabled State**: The rule was set to "Disabled" at the time of the event.
-   **Priority Conflict**: Another rule with higher priority might have stopped the execution chain.

## Understanding the Visual Path

When viewing a log or a debug run, the canvas uses color-coded highlights:

-   **Green/Highlighted**: The block was executed successfully.
-   **Grey/Dimmed**: The block was skipped (e.g., it was on the "False" path of a "Check" block).
-   **Red**: The block encountered an error.

{{< video src="/images/debug-rule-view-execution-path.webm" >}}

## Common Troubleshooting Tips

-   **Check the Variables**: If a "Set Value" block isn't working, use the debugger to see if the input variables actually have the data you expect.
-   **Look for Loops**: If a rule stops unexpectedly, it might have hit the safety limit (FlexiRule stops any rule that exceeds 1,000 steps to prevent system crashes).
-   **Validation Errors**: If a rule fails to activate, the builder will usually point you directly to the block that is missing a setting or has an invalid formula.
