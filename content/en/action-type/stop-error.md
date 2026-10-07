---
title: Stop and Raise Error
description: End a flow normally or terminate it by raising an error.
weight: 50
---

# Stop and Raise Error

FlexiRule has **two separate terminal Action Types**:

- **Stop**
- **Raise Error**

They are related, but they are not one Action Type.

## Stop

Stop supports two terminal modes:

| Mode | Behavior |
|---|---|
| **Success** | Ends the current flow without raising an error. |
| **Error** | Renders the action message template and raises an error. |

Stop is terminal and has no outbound path.

## Raise Error

Raise Error is a separate Action Type.

It requires an action message template and is terminal with no outbound path.

Its message is rendered using the rule execution context. Optional JSON configuration can provide additional error details such as error type, title, and code.

## Which should I use?

Use **Stop → Success** when the current path should end normally.

Use **Stop → Error** for the Stop Action Type's Error mode.

Use **Raise Error** when an explicit error action is clearer in the flow.

## Common mistake

Do not document **Stop / Error** as one Action Type. The app registry exposes Stop and Raise Error separately.
