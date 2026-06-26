---
title: Stop and Error Handling
description: Control how a rule finishes or handle errors.
weight: 100
aliases:
  - /docs/actions/stop/
  - /docs/actions/raise-error/
---

# Stop and Error Handling

These blocks allow you to explicitly finish a rule or show a message when something isn't right.

## Stop
The **Stop** block immediately ends the rule's execution.
- **When to Use**: Use this inside a [Check]({{< relref "check" >}}) to exit a rule early if certain criteria are met, preventing any further actions from running.

## Show Error
The **Show Error** block (internally Raise Error) stops the rule and displays a custom error message to the user.
- **When to Use**: Use this for strict validation. For example, if a document is missing a required attachment, show an error: "Please upload the contract before continuing."
- **Feedback**: The message will appear as a standard popup in the system interface.
