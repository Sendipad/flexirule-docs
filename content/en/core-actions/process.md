---
title: Process
description: Execute complex custom logic or background tasks.
weight: 110
aliases:
  - /docs/actions/process/
---

# Process Action

The **Process** action is the most powerful tool in the FlexiRule library. It allows you to run custom-built logic or scripts that go beyond standard record updates or notifications.

## When to Use
- **External API Calls**: Sync data with a third-party CRM, ERP, or shipping provider.
- **Heavy Math**: Perform complex financial calculations or data analysis.
- **Custom Scripts**: Run a predefined Python script that follows your specific business rules.
- **Legacy Integration**: Connect to older systems that require custom connection logic.

## Configuration

1.  **Select Process**: Choose the specific process you want to run (these are managed in the **Process** list).
2.  **Input Parameters**: Provide the data the process needs (e.g., "Customer ID" or "Order Total"). You can use fields from the current document or variables from previous steps.
3.  **Result Handling**: If the process returns a result (like a "Tracking Number"), you can save it to a variable to use in later steps of your rule.

## Why use a Process?
Standard nodes (like Query or Update) handle 90% of business automation needs. The **Process** node exists for the final 10% where your business requires something completely unique.

---
**Advanced**: For developers looking to create their own custom processes or understand the execution engine, see the [Process Action Architecture]({{< relref "advanced-reference/architecture/actions/process.md" >}}).
