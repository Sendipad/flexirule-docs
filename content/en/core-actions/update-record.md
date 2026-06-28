---
title: Update Record
weight: 60
description: Create new documents or modify existing ones in the system.
---

# Update Record

While the **Set Value** block modifies the current document, the **Update Record** block is designed to interact with *other* documents in the system. Use this to create new records or update existing ones based on your automation logic.

## Common Scenarios

-   **Create a Task**: Automatically create a "Follow-up" Task when a Lead is created.
-   **Update a Project**: Change the status of a Project when the final Sales Invoice is paid.
-   **Stock Adjustments**: Create a Stock Entry when a specific manufacturing step is completed.

## Configuration Options

1.  **Operation Type**: Choose whether you want to **Create New** or **Update Existing**.
2.  **Target DocType**: Select the type of document you want to work with (e.g., `Task`, `Customer`, `Journal Entry`).
3.  **Field Mapping**: Define which values should be set on the target document. You can pull these values from your current automation context.

## How it Differs from "Set Value"

-   **Set Value**: Changes data on the document that is *currently* being processed by the rule.
-   **Update Record**: Reaches out to the database to find or create *different* documents.

## Safety and Permissions

When this block runs, FlexiRule respects the standard Frappe permission system. If the user triggering the rule doesn't have permission to create a Task, the block will fail with a clear error message. This ensures your automations always follow your organization's security policies.
