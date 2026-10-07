---
title: Document Action — Update Existing
description: Update an existing Frappe document using field and child-table mappings.
---

# Update Existing

**Update Existing** loads an existing document, applies configured mappings, and saves it.

## Required setup

Select the Target DocType and identify the target record.

The record can be supplied through the Rule Action Reference Document or supported configuration such as a document-name expression.

## Configuration

The handler supports:

- same-field mappings;
- static values;
- dynamic field mappings;
- compiled scalar mappings;
- child-table mappings.

The document is saved after the mappings are applied.

## Result

The operation can return:

- Single Record
- Full Document

The updated document can be stored using the action's result-handling configuration.

## Permissions

Normal document write permission is checked unless the Action Type's Ignore Permissions option is deliberately enabled with an audit reason.

## Common mistakes

- Providing a DocType but no target record.
- Assuming Update Existing means updating the triggering document; it targets the configured reference document.
- Forgetting child-table mappings when related rows also need to change.
