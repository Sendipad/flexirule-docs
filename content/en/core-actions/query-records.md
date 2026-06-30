---
title: Query Records
description: Find information from other parts of the system to use in your rule.
weight: 10
---

# Query Records

The **Query Records** block allows you to look up information from anywhere in your system. This is useful when your rule needs data that isn't on the record currently being processed.

For example, if you are running a rule on a **Sales Order**, you might want to check the **Customer's** credit limit or find all previous **Invoices** for that customer.

## How to use Query Records

1. **Select the record type**: Choose what kind of information you are looking for (e.g., "Customer", "Task", "Item").
2. **Set your filters**: Define criteria to find the right records. For example, "Customer is equal to the customer on this Sales Order".
3. **Choose the mode**:
   - **Single Record**: Use this when you only need one specific record (e.g., a specific Customer).
   - **List of Records**: Use this when you want to find multiple records (e.g., all open Tasks for a Project).
4. **Save the result**: Give the result a name (like `found_customer` or `open_tasks`) so you can use it in later blocks.

## Example: Check Customer Credit

- **What to find**: `Customer`
- **Filters**: `Name` equals `{{ doc.customer }}`
- **Mode**: `Single Record`
- **Save as**: `customer_info`

Later in your rule, you can use `{{ vars.customer_info.credit_limit }}` to check if they have enough credit for the current order.

## Using the Results

- If you found a **Single Record**, you can access its fields directly in later blocks.
- If you found a **List of Records**, you will typically use a **Repeat (Loop)** block next to process each record in that list one by one.
