---
title: Document Action
description: Create, update, or delete records in your system automatically.
weight: 30
---

# Document Action

The **Document Action** allows your rules to interact with any record in your Frappe system. While the [Assignment]({{< relref "assignment.md" >}}) action is great for simple field updates, the Document Action is used for more complex tasks like creating new records or managing ToDos.

## How it Works

You can choose from several different "modes" depending on what you want to achieve:

### 1. Create New
Automatically create a new record.
- **Example**: Create a **Project** automatically whenever a **Sales Order** is submitted.
- **How**: You map fields from your current document (the Sales Order) to the new document (the Project).

### 2. Update Existing
Modify a specific record that already exists.
- **Example**: Update a **Lead** status to "Interested" when they open a specific email.
- **How**: You tell the rule which document to find and which fields to change.

### 3. Create ToDo
Assign a task to a user.
- **Example**: Assign a ToDo to the Sales Manager if an invoice remains unpaid for 30 days.

### 4. Add Comment
Post an automated message to a document's timeline.
- **Example**: Add a comment to a Ticket saying "Automated follow-up sent to customer."

### 5. Delete Record
Permanently remove a record.
- **Example**: Delete temporary "Draft" records that are older than 7 days.

## Configuration

| Field | Description |
| :--- | :--- |
| **Mode** | Choose what you want to do (Create, Update, etc.). |
| **Target DocType** | Select the type of record you want to act on (e.g., `Task`, `ToDo`). |
| **Mapping** | Define which data goes where. For example, set the `Subject` of a new ToDo to "Follow up with {{ doc.customer }}". |
| **Skip Permissions** | If checked, the rule will run even if the current user doesn't have permission to edit that record. You must provide a reason for this. |

## Real-World Example: Lead to Opportunity
**Goal**: When a Lead's status is changed to "Qualified," automatically create an Opportunity.

1. **Trigger**: Rule on `Lead` when `Status` is updated to `Qualified`.
2. **Action**: Add a **Document Action** node.
3. **Configure**:
   - Set Mode to **Create New**.
   - Set Target DocType to **Opportunity**.
   - Map `Lead Name` to the Opportunity's `Lead` field.
4. **Result**: Your sales team gets a new Opportunity created for them instantly without manual data entry.

## Tips for Success

- **Avoid Infinite Loops**: Be careful when a rule updates the *same* document that triggered it. This can cause the rule to trigger itself over and over. Use conditions to ensure the update only happens once.
- **Return Variables**: When you create a new document, you can save it into a variable (like `vars.new_project`). You can then use this variable in later nodes, for example, to send an email with the new project's ID.

---

*Next: Learn how to retrieve data with the [Query Records]({{< relref "query-records.md" >}}) action.*
