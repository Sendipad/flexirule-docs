---
title: Notify — Email
description: Configure email delivery through the Notify Action Type.
weight: 10
---

# Email

**Email** is one of the notification types provided by the Notify Action Type.

## Required configuration

The Notify contract requires:

- Action Template: the rendered message;
- Notification Type: Email.

Email-specific validation requires:

- **recipients**
- **subject**

These values are supplied through the action configuration.

## Recipients

Recipients may be resolved from the rule context using the value/template mechanisms supported by the Rule Builder. The backend normalizes a resolved list or a field-list string into recipients.

Do not assume a fixed recipient UI; use the controls exposed by the installed Notify configuration component.

## Subject and message

The subject is supplied in the Email configuration.

The message comes from the Notify Action Template and is rendered with the rule execution context.

## Attach the current document

The Email implementation supports the configuration flag **attach_doc**. When enabled and a context document is available, FlexiRule attempts to attach a PDF representation of that document.

If attachment generation fails, the implementation logs the attachment failure rather than changing the basic notification mode.

## Flow

Notify Email is not terminal. After the email operation completes, execution follows the action's normal next step.

## Common mistakes

- Omitting recipients.
- Omitting the subject.
- Assuming an attachment exists when there is no context document.
- Treating Email as a terminal action.
