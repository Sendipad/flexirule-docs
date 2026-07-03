---
title: Switch
description: Route your automation down different paths based on a value.
weight: 70
---

# Switch (Multi-Branch)

The **Switch** block is like a "Check" block, but with more than two options. It's the best way to route your automation when you have many different categories or statuses to handle.

## How it Works

1.  **Pick a Field**: Select the field you want to look at (e.g., `Priority` or `Category`).
2.  **Define Your Cases**: Create a "Case" for each possible value.
    -   **Case: High** -> Leads to a path for high priority.
    -   **Case: Medium** -> Leads to a path for medium priority.
    -   **Case: Low** -> Leads to a path for low priority.
3.  **Default Path**: The block also has a **Default** output for any value that doesn't match your cases.

## Example: Routing Support Tickets
If you have a support ticket system, you can use a Switch block on the "Category" field:
-   **Billing**: Route to the finance notification.
-   **Technical**: Route to the engineering team.
-   **General**: Route to the standard support queue.

## Why use Switch?
While you could use several "Check" blocks in a row to achieve the same result, a **Switch** block is much cleaner and easier to read on your canvas.
