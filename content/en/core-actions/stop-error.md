---
title: Stop (Error)
weight: 100
description: Immediately end a rule, optionally with an error message.
---

# Stop

The **Stop** block allows you to immediately terminate the execution of a rule.

## Modes

### 1. Success (Normal Stop)
The rule ends quietly. This is useful for exiting a rule early if certain conditions are met and no further action is needed.

### 2. Error (Validation Stop)
The rule stops and displays an error message to the user.
- **In "Before Save"**: This will **prevent the document from being saved**. This is the standard way to enforce business validation rules (e.g., "You cannot save a Sales Order for this customer because they have exceeded their credit limit").

## Configuration
- **Message**: The text to show the user if stopping with an error.
- **Type**: Select "Success" or "Error".
