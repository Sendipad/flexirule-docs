---
title: Query Records
weight: 40
description: Fetch data from other documents in your system.
---

# Query Records

The **Query Records** block allows your automation to look up information from other DocTypes. This is essential when your logic depends on data that isn't on the current document.

## How to Use

1. Add a **Query Records** block.
2. Select the **Document Type** you want to search (e.g., `Customer`, `Project`, or `Stock Entry`).
3. Define the **Filters** to find the specific records you need.

## Search Modes

-   **Find One**: Retrieves a single record. If multiple records match your filters, it typically returns the most recent one.
-   **Find Many**: Retrieves a list of all matching records. This is useful when you want to use a **Repeat** block to process multiple documents.

## Using the Results

Once the query is successful, the data from the found record(s) becomes available to the rest of your automation. You can use it in:
-   **Checks**: To see if a related document exists or has a specific status.
-   **Set Value**: To copy information from the found document to your current document.
-   **Notifications**: To include details from the found record in an email or alert.

## Filters

Filters work just like the standard search in ERPNext. You can match fields exactly, use "contains", or check if a value is greater/less than a specific amount. You can also use values from your current document as part of the filter (e.g., "Find the Customer where Name equals the Customer on this Invoice").
