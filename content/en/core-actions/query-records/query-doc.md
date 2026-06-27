---
title: Find One Record (Query Doc)
weight: 10
description: Retrieve a single, specific record.
---

# Find One Record

The **Find One Record** block (internally called Query Doc) is used to fetch a single document from your system and make its data available to your rule.

## When to use it
- You need the details of the **Customer** linked to a Sales Invoice.
- You want to read a value from a **Global Settings** document.
- You need to check the status of a specific **Project**.

## Configuration

### 1. Select the Type of Record
Choose the **DocType** you want to look up (e.g., "Customer", "Project", "User").

### 2. Define the Search Criteria
How should FlexiRule find the record?
- **By ID**: Usually the easiest. You can use a value from your current document, like `{{ doc.customer }}`.
- **By Filter**: Find the record where a certain field matches a value (e.g., where `Email` equals `{{ doc.contact_email }}`).

### 3. Give it a Name (Alias)
This is important! The data you find will be stored under this name so you can use it in later blocks. If you name it `target_customer`, you can later access its fields using `{{ target_customer.credit_limit }}`.

## Performance Tip
If you only need one or two simple fields, this is the most efficient way to get them. If you need to perform calculations over many records, use the "Find Many Records" block instead.
