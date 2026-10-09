---
title: Create New
description: Create a new Frappe document using field and child-table mappings.
weight: 10
---

# Document Action: Create New

Choose **Create New** when the rule needs to create a separate record in a target DocType. The action builds a new document payload, applies the configured mappings, and inserts it.

## Configure it

1. Add a **Document Action** node.
2. In the Setup panel, set **Document Mode** to **Create New**.
3. Select the target **Reference DocType**.
4. Configure the Resource Mapper in Classic or Visual view.
5. Map the required target fields and any child-table rows.
6. Choose the available created-document result handling settings.
7. Save and test the rule before activation.

## Map scalar fields

The Resource Mapper can populate the new record from the execution context:

- **Dynamic field mappings** map a source expression/path to a target field.
- **Static values** set explicit values and take precedence over the other scalar mappings.
- **Copy same fields** optionally copies eligible fields with matching names from a source object. The source defaults to the current document; configure the source path and field exclusions when needed.
- **Input mapping** can hydrate configuration values from the context before execution.

Map the target fields that the DocType requires. Frappe still runs the target document's normal validation and lifecycle hooks during insertion.

## Map child tables

Use a table mapping when the new document needs child rows, such as the Items table on a Sales Order.

- Select the target child-table field.
- Provide a source collection expression/path that resolves to a list or tuple.
- Map source row fields to fields on each target child row.
- Optionally configure a row condition (only include rows that pass) and a row filter (skip rows that pass the filter expression).
- Configure whether the target table is reset and whether mapping should only run when the target table is empty.

Each row is evaluated in a row context. The current row is available as **item** and through the configured item alias; loop metadata includes zero-based **loop.index**, **loop.first**, **loop.last**, and **loop.length**.

## Example

**Scenario:** create a Project when a Sales Order is submitted.

- **Document Mode:** Create New
- **Reference DocType:** Project
- **Field mappings:** map the project name from the order or a related rule variable, and map Customer from the current order's customer field.
- **Static values:** optionally set a fixed Project status if the target DocType allows it.
- **Child tables:** map rows only if the target Project DocType has a relevant child table and the source data matches its schema.

Ensure the target DocType's mandatory fields are populated and the acting user has permission to create the record.

## Created-document result and async mode

The result settings determine how the created document is exposed to subsequent rule steps. The available options include a single-record result or full-document data, subject to the operation contract.

When asynchronous creation is enabled, FlexiRule queues the insert in a background job and immediately returns an acknowledgement containing the queued state and target DocType. It does **not** return the newly created document at that point. Do not connect a following action that expects to read the newly created document from the synchronous result.

## Permissions and failure cases

- Normal Frappe create permission and document validation apply unless the privileged Skip Permissions option is explicitly authorized.
- Skip Permissions requires authorization by the runtime permission policy and an audit reason.
- Missing mandatory fields, invalid mapped values, invalid child-table data, or validation hooks can cause insertion to fail.
- In async mode, creation can fail after the rule has continued; check background job logs when a record was not created.

## Troubleshooting

- **No record is created:** verify the target DocType, required fields, mapping values, permissions, and validation messages.
- **A field has the wrong value:** check static values and the documented precedence; static values override dynamic and same-field mappings.
- **Child rows are empty:** verify the source resolves to a list/tuple and that the target table and row mappings are correct.
- **Later steps cannot see the new record:** confirm synchronous mode and the configured result handling.
