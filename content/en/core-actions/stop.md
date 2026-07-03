---
title: Stop
description: Successfully end a rule or block a document from being saved.
weight: 100
---

# Stop (Exit)

The **Stop** block is used to end your automation rule. It can be used to simply finish the rule early or to block a user from saving a document if something is wrong.

## Modes of Operation

### 1. Success (Silent Stop)
The rule finishes immediately. This is useful if you determine that no further action is needed.
-   **Example**: "If the total is less than $10, Stop (Success)."

### 2. Error (Block Save)
The rule stops and shows an error message to the user. This also **prevents the document from being saved**.
-   **Example**: "If the delivery date is in the past, Stop (Error) with message: 'Delivery date cannot be in the past!'"

## When to use Stop

-   **Early Exit**: Use it at the beginning of a rule to stop execution if the document doesn't meet certain criteria, saving system resources.
-   **Validation**: Use the "Error" mode to enforce your business rules and prevent users from entering invalid data.

## Pro Tip: Clear Messages
When using the "Error" mode, make your message as clear as possible. You can use data from your document, like `{{ doc.name }}`, to help the user understand exactly what went wrong.
