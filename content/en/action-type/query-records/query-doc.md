---
title: Query Doc
description: Retrieve one document using the configured Query Doc strategy.
weight: 10
---

# Query Doc

**Query Doc** retrieves a single document from the selected DocType.

## Strategies

The current handler supports these strategies:

- **Get doc** — retrieve the configured document normally.
- **Get Doc from Cache** — retrieve through Frappe's cached-document path.
- **Get latest Doc** — find the newest matching document.
- **Get Single DocType** — retrieve a Single DocType as its document.

The selected strategy determines how the target document is resolved.

## Configuration

Select the Target DocType and provide the document name or the filters required by the selected strategy.

Dynamic values can be resolved through the rule execution context.

## Output

Query Doc supports these result types:

- **Single Record**
- **Full Document**

The selected result can be stored for later actions.

## Example

**Query Doc → Condition → Assignment**

Retrieve a customer document, evaluate a value from that document, and then apply the appropriate assignment.

## Common mistakes

- Using Query Doc when the requirement is to process a collection; use Query List instead.
- Assuming the latest-document strategy is the same as retrieving a specific named document.
- Forgetting that the selected strategy changes how the target record is resolved.
