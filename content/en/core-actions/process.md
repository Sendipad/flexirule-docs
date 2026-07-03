---
title: Process
description: Execute advanced business operations or custom logic.
weight: 110
---

# Process (Business Operations)

The **Process** block is used for advanced tasks that go beyond simple data updates. It allows you to run predefined business operations, complex calculations, or custom scripts.

## When to Use

-   **Complex Calculations**: Running a math-heavy process that would be too difficult for a simple formula.
-   **System Operations**: Triggering built-in system tasks (e.g., "Regenerate PDF" or "Sync with External Service").
-   **Custom Logic**: If your developer has written a specialized script for your business, you can trigger it here.

## How to Configure

1.  **Select the Process**: Pick the operation you want to run from the dropdown menu.
2.  **Input Parameters**: Provide the data the process needs to work. This might include fields from your document or variables you've set.
3.  **Use the Result**: Many processes return a result (like a calculation or a status). You can save this result into a variable to use in later blocks of your rule.

## Why use a Process?

Processes keep your rule canvas clean. Instead of having dozens of blocks to handle a complex task, you can encapsulate that logic into a single **Process** block. This makes your automation easier to read and maintain.
