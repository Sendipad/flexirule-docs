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

**Query Records** is a rule execution block that retrieves data from the system’s database or reporting layer. It acts as a read-only data access layer, enabling rules to read external context beyond the triggering document and use that data for decisions, calculations, and automation.

---

## Core Principles

*   **Read-Only:** Query Records never mutates (changes) data. It is dedicated exclusively to finding and retrieving information.
*   **Downstream Consumption:** It produces structured outputs that are designed to be consumed by downstream rule blocks, including:
    *   **Conditions (Check):** To drive branching logic.
    *   **Loops:** To process multiple records in bulk.
    *   **Calculations:** To enrich data for mathematical operations.
    *   **Assignments (Set Value):** To update the current document with retrieved information.

---

## When to Use

You should use a **Query Records** block whenever a rule needs context from the rest of your system:

*   **Validation:** "Does a record with this reference number already exist?"
*   **Enrichment:** "What is the credit limit for this customer?"
*   **Calculations:** "What is the total value of all open invoices for this supplier?"
*   **Batch Processing:** "Find all overdue tasks to trigger follow-up actions."

---

## Available Query Modes

FlexiRule supports several retrieval modes, allowing for flexible data access depending on your needs.

| Mode | Operation Type | Primary Use Case |
| :--- | :--- | :--- |
| **[Exist Record]({{< relref "exist-record.md" >}})** | Existence Check | Quickly check if a record exists. |
| **[Query Doc]({{< relref "query-doc.md" >}})** | Single-Record Retrieval | Retrieve a single record with its full details. |
| **[Query List]({{< relref "query-list.md" >}})** | Multi-Record Retrieval | Retrieve multiple records matching criteria. |
| **[Count]({{< relref "count.md" >}})** | Aggregation | Get the total number of matching records. |
| **[Sum]({{< relref "sum.md" >}})** | Aggregation | Calculate the total of a numeric field. |
| **[Average]({{< relref "average.md" >}})** | Aggregation | Calculate the average of a numeric field. |
| **[Min / Max]({{< relref "min-max.md" >}})** | Aggregation | Find the lowest or highest value in a group. |
| **[Group By]({{< relref "group-by.md" >}})** | Aggregation | Summarize data organized by category. |
| **[Query Report]({{< relref "query-report.md" >}})** | Report Reuse | Reuse results from an existing system report. |

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
