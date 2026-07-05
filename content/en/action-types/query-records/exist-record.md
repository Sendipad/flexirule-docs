---
title: Exist Record
description: The fastest way to check if a record exists without loading data.
weight: 30
---

# Exist Record

The **Exist Record** mode is the fastest and most efficient way to check for something in your system. Instead of loading a whole document or a long list, it simply asks the system: "Is there anything that matches these criteria?" and gets a simple **Yes** or **No** answer.

---

## When to use it?

*   **To prevent duplicates:** "Does a Sales Order with this Reference Number already exist?"
*   **For simple validations:** "Has this customer already submitted their tax documents?"
*   **As a prerequisite check:** "Is there an active Project for this Customer before I allow a new Task to be created?"

---

## How to Configure

1.  **Select the Table (DocType):** Choose which part of the system to check (e.g., *User*, *Supplier*, *Asset*).
2.  **Define Filters:** Add the conditions that must be met.
    *   *Example:* `Email` equals `doc.email_address` AND `Status` equals `Active`.

---

## What you get (The Output)

This mode returns a simple **True** (Yes) or **False** (No).

You will almost always follow this block with a **Check** block to decide what to do based on the answer. For example: "If Exist is **True**, stop the rule and show an error message."

---

## Real-World Example

**Scenario:** You want to make sure a lead isn't added to the system if their email address is already in use by another lead.

*   **Table:** `Lead`
*   **Mode:** `Exist Record`
*   **Filters:** `Email Address` equals the email on the new lead.
*   **Next Step:** A "Check" block. If the result is **True**, the rule stops the save and tells the user "This lead already exists."

---

## Performance Guidance

*   **Top Performance Choice:** This is the **recommended mode for performance** whenever you don't need to actually *read* the data inside the record.
*   **Lightweight:** Because it doesn't load any fields or document data, it uses almost no system resources. It is much faster than using **Query Doc** or **Query List**.
*   **Automatic Optimization:** FlexiRule performs this check at the database level without "waking up" the full document, making it nearly instantaneous.

---

## Common Mistakes

*   **Using Query Doc instead:** Don't use **Query Doc** just to see if something is there. Loading the whole document is much slower than a simple "Exist" check.
*   **Broad Filters:** If your filters are too vague (like just checking if *any* Lead exists), you might get a "Yes" when you really meant "Yes, for this specific email."
