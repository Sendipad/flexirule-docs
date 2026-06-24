---
title: Stop and Error Handling
description: Control how a rule finishes or handle errors.
weight: 100
aliases:
  - /docs/actions/stop/
  - /docs/actions/raise-error/
---

# Stop and Error

Use these blocks to control exactly when your rule should finish or to stop it if something is wrong.

## Stop
The **Stop** block ends the rule immediately.
- **When to use**: Put this on the "False" path of a **Condition** if you want the rule to just quit if a check fails.

## Raise Error
The **Raise Error** block stops the rule and shows a warning message to the person using the system.
- **When to use**: Use this for strict rules. For example, if an order is missing a required file, you can stop the rule and show a message like "You must upload a contract before you can save this."
- **What the user sees**: A standard system pop-up with your custom message.
