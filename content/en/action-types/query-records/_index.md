---
title: Query Records
description: Find and use information from your system to support business logic.
weight: 10
entity_kind: action_operation
category: data-operations
mutation: false
targets: ["Frappe DocType"]
---

# Query Records

The **Query Records** block allows your rules to retrieve information from across the system. It enables a rule to look up data that isn't part of the current execution context—such as verifying a customer's balance, checking stock levels, or counting transactions from a specific period.

This action acts as a retrieval engine, allowing rules to make decisions based on existing system data rather than only the document currently being processed.

---

## When to Use

You should use a **Query Records** block whenever a rule needs context from the rest of your system:

*   **Validation:** "Does a record with this reference number already exist?"
*   **Enrichment:** "What is the credit limit for this customer?"
*   **Calculations:** "What is the total value of all open invoices for this supplier?"
*   **Batch Processing:** "Find all overdue tasks to trigger follow-up actions."

---

## Available Query Modes

FlexiRule provides several modes for data retrieval, each optimized for specific use cases. Choosing the correct mode ensures rules remain efficient and responsive.

| Mode | Primary Use Case | Output Type |
| :--- | :--- | :--- |
| **[Exist Record]({{< relref "exist-record.md" >}})** | Quickly check if a record exists. | Boolean (Yes/No) |
| **[Query Doc]({{< relref "query-doc.md" >}})** | Retrieve a single record with its full details. | Single Record (Object) |
| **[Query List]({{< relref "query-list.md" >}})** | Retrieve multiple records matching criteria. | List of Records |
| **[Count]({{< relref "count.md" >}})** | Get the total number of matching records. | Number |
| **[Sum]({{< relref "sum.md" >}})** | Calculate the total of a numeric field. | Number |
| **[Average]({{< relref "average.md" >}})** | Calculate the average of a numeric field. | Number |
| **[Min / Max]({{< relref "min-max.md" >}})** | Find the lowest or highest value in a group. | Number / Date |
| **[Group By]({{< relref "group-by.md" >}})** | Summarize data organized by category. | List of Summaries |
| **[Query Report]({{< relref "query-report.md" >}})** | Reuse results from an existing system report. | List of Records |

---

## Performance & Execution Model

To maintain system responsiveness, FlexiRule utilizes several execution strategies. Understanding these helps in building high-performance rules.

### 1. Database-Level Aggregation
Modes like **Count**, **Sum**, **Average**, and **Min/Max** use "pushdown" optimization. Instead of loading every record into the rule engine, the system performs the calculation directly at the database level. This reduces data transfer and memory usage.

### 2. Intelligent Caching
The **Query Doc** mode supports a cached retrieval strategy. When enabled, the system attempts to fetch the record from memory rather than the database. This is efficient for master data (like Customers or Items) that is frequently read but rarely changed.

### 3. Lightweight Existence Checks
**Exist Record** is the most efficient check. It stops searching as soon as it finds a single match and does not load any field data. Use this mode whenever you only need a Yes/No answer.

### 4. Data Volume Control
Rules should always use **Filters** to narrow the search scope. For list-based queries, always define a **Result Limit** to prevent the rule from attempting to process unexpectedly large datasets.

---

## Best Practices

*   **Filter Early:** Be as specific as possible in your filter criteria.
*   **Minimize Field Fetching:** Only select the specific fields required for your logic.
*   **Use Aggregations:** Prefer **Count** or **Sum** over fetching a list and looping to calculate totals.
*   **Monitor Reports:** When using **Query Report**, remember that the rule performance depends entirely on the report's efficiency.
