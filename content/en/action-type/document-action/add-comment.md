---
title: Document Action — Add Comment
description: Add a timeline comment to the current rule context document.
---

# Add Comment

**Add Comment** adds a Frappe timeline Comment linked to the current context document.

## Required setup

This operation requires:

- Reference DocType = Comment
- Comment Text

Comment Type is supported and defaults to **Comment**.

The rule must have a context document because the comment is attached to that document.

## Result

The operation returns the created Comment as a **Single Record**.

## Example

Use Add Comment when a rule should leave an auditable timeline message after a business event.

For a user-facing notification, use [Notify]({{< relref "../notify/" >}}) instead.
