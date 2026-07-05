---
title: Query Doc
description: Find one specific item and retrieve its details.
weight: 10
---

# Query Doc

The **Query Doc** mode is used to retrieve a single record and its associated details. It is primarily used for "data enrichment"—gathering more information about a specific entity (like a Customer or Item) to support complex logic later in the rule.

---

## 1. When to Use

*   **Detail Retrieval:** "Fetch the credit limit and territory for the customer on this Sales Order."
*   **Settings Access:** "Get the global 'Default Tax Account' from the Company settings."
*   **Context Enrichment:** "Find the parent Project details for a specific Task."

---

## 2. Configuration

*   **Table (DocType):** Choose the source of the data (e.g., *Customer*, *Project*, *Item*).
*   **Strategy:** Select how the record is found:
    *   **Standard (Get doc):** Fetches the record normally.
    *   **Cached (Get Doc from Cache):** Retrieves the record from system memory if available. **Recommended for performance** on frequently accessed master data.
    *   **Latest (Get latest Doc):** Automatically finds the most recently created record matching your filters.
    *   **Single (Get Single DocType):** Used specifically for "Single" type records like Global Settings.
*   **Filters:** Define criteria to identify the record (e.g., `ID` equals `doc.customer`).
*   **Fields:** Select the specific fields you need to fetch.

---

## 3. Output

This mode returns a **Single Record (Object)**.

The record's fields can be accessed in subsequent blocks using the output variable (e.g., `vars.customer_info.credit_limit`).

---

## 4. Example

**Scenario:** When a Sales Order is saved, the rule fetches the Customer's credit limit to verify if the order amount is acceptable.

*   **Table:** `Customer`
*   **Strategy:** `Cached`
*   **Filters:** `ID` equals `doc.customer`
*   **Output Variable:** `cust_data`
*   **Logic:** A subsequent "Check" block compares `doc.grand_total` with `vars.cust_data.credit_limit`.

---

## 5. Performance Notes

*   **Use Caching:** The "Cached" strategy is an optimized path that avoids unnecessary database lookups.
*   **Field Selection:** Fetching only the required fields reduces the data load on the rule engine.
*   **Stale Data Warning:** When using the **Cached** strategy, be aware it may return slightly stale data depending on the system's cache policy. For strict financial consistency, use the "Standard" strategy.

---

## 6. Common Mistakes

*   **Ambiguous Filters:** If your filters match multiple records, the system will only return the first one it finds. Ensure filters are unique when possible.
*   **Missing Fields:** If you select specific fields but then try to use a field you didn't fetch in a later block, the rule will fail.
