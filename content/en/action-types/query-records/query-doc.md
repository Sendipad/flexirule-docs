---
title: Query Doc
description: Find one specific item to get all its details.
weight: 10
---

# Query Doc

The **Query Doc** mode is used when you want to find one specific record and look at its details. It is the perfect choice for "enriching" your rule with more information—for example, looking up a customer's specific credit limit or a supplier's contact person.

---

## When to use it?

*   **To get details for a specific item:** "Look up the details of the Customer who placed this order."
*   **To fetch settings:** "Find the global 'Tax Rate' from the System Settings."
*   **To find the most recent item:** "Find the last Sales Invoice created for this client."

---

## How to Configure

1.  **Select the Table (DocType):** Choose where to look (e.g., *Customer*, *Project*, *Stock Item*).
2.  **Choose a Fetch Strategy:**
    *   **Get doc:** The standard way to find a record.
    *   **Get Doc from Cache:** **Recommended for Performance.** If the record hasn't changed recently, the system retrieves it instantly from memory, making your rule run faster.
    *   **Get latest Doc:** Automatically finds the most recently created record that matches your filters.
3.  **Define Filters:** Tell the system *which* record you want.
    *   *Example:* `Name` equals `doc.customer`.
4.  **Pick Fields (Optional):** You can choose to get only specific fields (like just the *Email*) or the entire record.
    *   **Performance Tip:** If you only need one or two pieces of info, selecting only those fields makes the rule "lighter."

---

## What you get (The Output)

This mode returns a **Single Record** (an Object).

All the details of that record become available to use in the very next block of your rule. For example, if you saved the result as `customer_info`, you can then use `vars.customer_info.credit_limit` in a "Check" block.

---

## Real-World Example

**Scenario:** When a Sales Order is created, the rule needs to check the customer's Credit Limit to see if it's too high.

*   **Table:** `Customer`
*   **Mode:** `Query Doc`
*   **Strategy:** `Get Doc from Cache` (to keep the rule fast)
*   **Filters:** `Name` equals the customer on the Sales Order.
*   **Next Step:** A "Check" block uses the fetched `credit_limit` to decide whether to approve or block the order.

---

## Performance Guidance

*   **Use Caching:** Whenever possible, use the **Get Doc from Cache** strategy. This is an **automatic optimization** that avoids unnecessary database searches, keeping your system responsive.
*   **Be Specific:** Ensure your filters only point to one record. If multiple records match, the system will just grab the first one it finds.
*   **Fetch Only What You Need:** Loading 50 fields when you only need 1 is like bringing an entire library home when you just wanted to read one page. It’s faster to just fetch the fields you need.

---

## Common Mistakes

*   **Fetching the Whole Doc Unnecessarily:** If you only need to know if a customer *exists*, use the **Exist Record** mode instead—it's much faster.
*   **Wrong Filters:** If your filter is too broad (like `Status` equals `Open`), you might get a random "Open" record instead of the specific one you intended.
