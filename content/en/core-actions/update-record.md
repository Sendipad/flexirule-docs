---
title: Update Record
description: Create or modify records anywhere in your system.
weight: 30
---

# Update Record (Data Storage)

The **Update Record** block allows your rule to create new documents or modify existing ones across your entire system.

## Common Uses

-   **Create New**: Automatically create a "Task" whenever a "Project" is saved.
-   **Update Another**: When a "Sales Order" is completed, update the "Customer" record to increase their loyalty points.
-   **Add a Comment**: Automatically post a message to the timeline of a record.

## How to Configure

### 1. Select the Mode
-   **Create New**: Choose this to generate a fresh record.
-   **Update Existing**: Choose this to change a record that already exists. You'll need to provide the name (ID) of the record to update.

### 2. Map Your Fields
This is where you define which data goes into the new or updated record.
-   **Target Field**: The field you want to fill in the target record (e.g., `Customer Name`).
-   **Source**: Where the data comes from. This could be a fixed value, a field from your current document (`doc.customer`), or a variable you calculated earlier.

### 3. Map Tables (Lists)
If you are creating a document with a table (like items in an invoice), you can map an entire list of items from your current document into the new one.

## Pro Tips

-   **Background Processing**: If you are creating a document that has a lot of complex logic, you can turn on **Run Asynchronously**. This tells FlexiRule to handle the creation in the background so the user doesn't have to wait.
-   **Recursive Updates**: Be careful when updating the *same* document that triggered the rule. This can sometimes cause the rule to trigger itself again. For simple field updates on the current document, it's usually better to use the **Set Value** block.
-   **Permission Bypass**: In some cases, you might want the rule to create a record even if the user who triggered the rule doesn't have permission to do so. You can enable "Ignore Permissions," but you'll be asked to provide a reason for the audit log.
