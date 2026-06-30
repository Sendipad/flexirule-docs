---
title: Troubleshooting
description: Common issues and how to resolve them.
weight: 10
---

# Troubleshooting

If FlexiRule is not behaving as expected, follow these steps to identify and fix the issue.

## 1. Rule is not triggering
- **Is it Enabled?**: Check the "Enabled" toggle on the Rule document.
- **Is Execution Globally Enabled?**: Check **RuleFlow Settings** to ensure "Enable Rule Execution" is checked.
- **Event Mismatch**: Ensure the "Trigger Event" (e.g., Before Save) matches when you expect the rule to run.
- **Cache Issue**: If you recently modified a rule via the database or import/export, run **Clear Cache** from the Rule List "Actions" menu.

## 2. Actions are not running
- **Broken Path**: In the Rule Builder, ensure there is a clear green line from the Entry Action to your node.
- **Condition Failed**: Check the execution logs. A condition might be evaluating to `False` when you expect `True`.
- **Permission Denied**: If an action fails with a "Permission Error", ensure you have checked **Skip Permissions** (with an audit reason) if the triggering user doesn't have access to the target record.

## 3. "Error in Rule Execution" Popup
This usually means a Python exception occurred during execution.
- Go to **Rule Execution Log**.
- Find the latest entry for your rule.
- Look at the **Traceback** field for the exact error message (e.g., `AttributeError`, `NameError`).

## 4. UI Issues in Rule Builder
- **Build Assets**: Ensure you have run `bench build --app flexirule`.
- **Browser Console**: Check for JavaScript errors (Press F12 → Console).
- **Clear Browser Cache**: Sometimes old JavaScript files are cached by the browser.
