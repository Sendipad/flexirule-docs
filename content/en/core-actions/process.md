---
title: Process
description: Trigger complex system operations or other rules.
weight: 110
---

# Process

The **Process** action is for more advanced tasks that involve running specialized system operations or connecting to other parts of your business logic.

## When to Use It
- **Run Custom Logic**: Trigger a specialized process that your development team has built for your system.
- **Connect to Other Rules**: Use one rule to start another complex workflow.
- **Complex Operations**: Perform tasks like "Closing a Fiscal Year" or "Running a Payroll Batch" that involve many moving parts.

## How to Configure It

1. **Select the Operation**: Pick from a list of available processes in your system.
2. **Provide Information (Inputs)**: Some processes need specific details to run (like a "Start Date" or a "User ID"). You can pick these fields from your document.
3. **Get Results (Outputs)**: If the process returns any information when it's done, you can save that information and use it in later steps of your rule.

## Tips for Success
- **Consult Your Admin**: Since Processes are often custom-built, it's a good idea to check with your system administrator or developer to understand exactly what a specific process does.
- **Test Thoroughly**: Because Processes can do many things at once, always use a **Test Run** to make sure the process behaves exactly as you expect before going live.
