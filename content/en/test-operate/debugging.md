---
title: Testing & Debugging
description: Safely simulate rule execution and inspect execution paths, results, and live logs.
weight: 20
aliases:
  - /rule-builder/debugging/
---

# Testing & Debugging

FlexiRule provides visual testing and auditing tools so you can verify a rule before production and inspect live execution afterward.

## Debug simulation

The **Debug** tool simulates rule execution against selected document records without modifying the database.

1. Open the Rule Builder.
2. Click **Debug** in the top action bar.
3. Select a test document and any supported simulation context.
4. Click **Run Test**.
5. Inspect the execution path and step results.

![Rule Builder canvas showing debug execution run dialog](/images/rule-debugger-canvas-execution.png)

![Debug Run dialog showing JSON test context](/images/rule-debugger-dialog.png)

![Run Debug Test control](/images/rule-builder-run-debug-test.png)

## Inspect results

The debugger shows which nodes executed, which branches were skipped, and where errors occurred. Select a step to inspect its inputs, outputs, and execution details.

![Debug View Return Result](/images/debug-view-return-result.png)

{{< video src="/images/debug-rule-view-execution-path.webm" >}}

## Production execution logs

Active rules produce **Rule Execution Logs** for operational inspection. Use execution IDs, rule information, trigger details, status, duration, and step traces to understand what happened.

Debug simulation and live execution are different contexts: testing verifies behavior safely, while live logs describe actual production executions.
