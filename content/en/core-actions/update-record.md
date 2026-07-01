---
title: Update Record
description: Automatically create or update records in the system.
weight: 30
aliases:
  - /docs/action-types/update-record/create-new/
  - /docs/action-types/update-record/update-existing/
---

# Update Record

The **Update Record** block allows FlexiRule to change existing information or create brand-new records in your system automatically.

## Why use it?
This is a powerful tool for automating follow-up actions.
- Automatically create a **Project** when a **Sales Order** is confirmed.
- Update the status of a **Project** when its final **Task** is finished.
- Create a **Service Note** after an **Invoice** is paid.

## Modes

### 1. Create a New Record
Use this when you want the system to generate a new document for you.
- **How to set it up**: You select the type of record to create (e.g., `Project`) and then "map" the information. For example, you can tell the system: "Set the Project's *Customer* field to be the same as the current Sales Order's *Customer*."

### 2. Update an Existing Record
Use this when you want to change information on a record that already exists.
- **How to set it up**: First, you tell the system *which* record to update (e.g., the Project linked to this Task). Then, you only specify the fields you want to change (e.g., set the *Status* to "Completed").

## Mapping Information (Fields)
"Mapping" is just a way of saying "put this information here." For both modes, you will define:
- **Source**: Where the information is coming from (e.g., a field in your current document).
- **Target**: Where the information should go in the new or updated record.

## Working with Tables
If the record you are creating or updating has a table (like a list of items), you can also map those. You can take a list of items from your current document and have FlexiRule automatically fill out the table in the new record.
