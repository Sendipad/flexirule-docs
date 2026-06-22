---
title: Stop and Error Handling
description: Control how a rule finishes or handle errors.
weight: 100
aliases:
  - /docs/actions/stop/
  - /docs/actions/raise-error/
---

# Stop and Error Handling

These nodes allow you to explicitly control the end of a rule or handle situations where something goes wrong.

## Stop Action
The **Stop** action immediately ends the execution of the rule.
- **Use Case**: Use this inside a **Condition** to exit a rule early if certain criteria aren't met, preventing subsequent actions from running.

## Raise Error Action
The **Raise Error** action stops the rule and displays an error message to the user.
- **Use Case**: Use this for strict validation. For example, if a Sales Order is missing a required attachment, you can "Raise Error" with a custom message like "Please upload the signed contract before submitting."
- **Visual Feedback**: In the Frappe UI, this will appear as a standard error popup.
