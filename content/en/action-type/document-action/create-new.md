---
title: Document Action — Create New
description: Create a new Frappe document from mapped and static values.
---

# Create New

**Create New** creates a new document of the selected Target DocType.

## Required setup

Select the target DocType in **Reference DocType**, then configure the values for the new document.

The handler supports:

- field mappings;
- static values;
- child-table mappings;
- optional same-field copying through mapper options.

Static values are applied explicitly and take precedence over dynamically resolved field mappings.

## Result

The operation can return:

- Single Record
- Full Document

The result can be stored using the action's result-handling configuration.

## Async execution

Document Action supports the Rule Action **Async** setting. When asynchronous creation is selected, the document creation is queued rather than performed inline.

Verify your rule's execution model before depending on the created document immediately in the next step.

## Permissions

Creation normally respects permissions. The Action Type also supports the common Ignore Permissions control with an audit reason.

## Common mistakes

- Forgetting the Target DocType.
- Leaving required field mappings unresolved.
- Assuming an asynchronously queued creation is immediately available to the following synchronous step.
