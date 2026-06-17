---
title: Query Records
description: Fetch data from other parts of your system to use in your rule.
weight: 40
---

# Query Records Action

The **Query Records** action allows your rule to "look up" information from anywhere in your Frappe system. This is essential when the data you need isn't on the document that triggered the rule.

## Why Use It?

Imagine you have a rule that triggers when a **Sales Order** is saved. You might need to check:
- "Does this **Customer** have any overdue invoices?"
- "Is there enough **Stock** in the main warehouse for these items?"
- "Has this **User** already reached their daily limit for creating orders?"

Query Records lets you find this information and bring it into your rule flow.

## Common Modes

Depending on what you need, you can choose from several modes:

### 1. Exist Record (Check)
Returns a simple "Yes" or "No".
- **Use case**: "Does a record with this name already exist?"

### 2. Query Doc (Single Record)
Fetches all details for one specific record.
- **Use case**: "Get the full details of the Customer linked to this order."

### 3. Query List (Multiple Records)
Finds a list of records that match your criteria.
- **Use case**: "Find all open Tasks assigned to John Doe."

### 4. Aggregations (Summary)
Calculates a single number based on multiple records.
- **Use case**: "What is the **Total Sum** of all unpaid invoices for this customer?"

## Configuration

| Field | Description |
| :--- | :--- |
| **Mode** | Choose how you want to find data (Check, Single, List, etc.). |
| **DocType** | Select the type of record you are looking for (e.g., `Invoice`, `Item`). |
| **Filters** | Define your search criteria. For example: `Status is "Open"` and `Customer is {{ doc.customer }}`. |
| **Return Variable** | Give your result a name, like `overdue_invoices`. You can then use `vars.overdue_invoices` in later nodes. |

## Important: Refresh Schema

After you set up your query, you **must** click the **Refresh Schema (Test Query)** button.

This button runs a quick test of your query so the builder can "see" what data it returns. Once you click it, all the fields from the records you're querying will become available in the dropdown menus of your next nodes.

## Example: Checking Credit Limit
**Goal**: Block a Sales Order if the customer has more than $5,000 in unpaid invoices.

1. **Trigger**: Rule on `Sales Order` / `Before Save`.
2. **Action**: Add **Query Records**.
   - Mode: **Aggregations**.
   - DocType: **Sales Invoice**.
   - Filter: `Customer == {{ doc.customer }}` AND `Status == "Unpaid"`.
   - Function: **SUM** of `Grand Total`.
   - Variable Name: `unpaid_total`.
3. **Action**: Add a **Condition**.
   - Check: `vars.unpaid_total > 5000`.
4. **Result**: If the total is too high, you can then add a node to show an error and stop the save.

---

*Next: Learn how to update variables and fields with the [Assignment]({{< relref "assignment.md" >}}) action.*
