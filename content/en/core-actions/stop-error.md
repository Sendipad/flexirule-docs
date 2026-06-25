---
title: Stop and Errors
description: Control how a rule finishes or block actions with an error.
weight: 100
aliases:
  - /docs/actions/stop/
  - /docs/actions/raise-error/
---

# Stop and Errors

These blocks give you final control over how a rule finishes its work.

## Stop
The **Stop** block tells the rule to finish immediately.
- **When to use it**: Use this if you want to exit a rule early. For example, if a check fails and there's no more work to do, just use a Stop block to end the process cleanly.

## Raise Error
The **Raise Error** block stops the rule and shows a warning message to the user.
- **When to use it**: Use this for strict rules. For example, if a Sales Order is missing an important attachment, you can use a **Raise Error** block with the message: *"Please upload the signed contract before saving."*
- **What happens**: The system will stop everything, and the user will see your message in a popup.

## Simple Tip
- **Stop vs. Error**: Use **Stop** when everything is fine but the rule is just done. Use **Raise Error** when something is wrong and the user needs to fix it before they can continue.
