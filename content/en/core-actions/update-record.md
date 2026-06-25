---
title: Update Record
description: Change fields, create new items, or delete records.
weight: 30
aliases:
  - /docs/actions/document-action/
---

# Update Record

The **Update Record** block is how your rule makes changes to documents in your system.

## What it Can Do

### 1. Update Existing
Change information on a record that already exists.
- **How it works**: You tell the system which record to change (usually by using information found in a previous **Query Records** step).
- **Example**: Change a Sales Invoice's `Status` to "Paid".

### 2. Create New
Build a brand new record from scratch.
- **How it works**: Pick the type of record you want to create and fill in the initial information.
- **Example**: Automatically create a "Task" for a manager when a new "Lead" is created.

### 3. Delete Record
Permanently remove a record.
- **Caution**: This cannot be undone. Always use a **Check** (Condition) before this step to make sure you are deleting the correct item.

## Simple Tips
- **Be Precise**: When updating an existing record, make sure you've used a **Query Records** block first to find exactly the right one.
- **Check First**: It's often a good idea to use a **Check** (Condition) block before an update to make sure the change is actually needed.
