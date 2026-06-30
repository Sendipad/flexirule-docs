---
title: Advanced Process
description: Run complex business operations and custom background tasks.
weight: 110
---

# Advanced Process

The **Advanced Process** block is used for specialized tasks that go beyond simple updates or notifications. It allows you to trigger complex business operations that have been pre-configured in your system.

## When to use Advanced Process

- **Run specialized tasks**: Trigger actions like "Calculate Payroll", "Generate Month-end Reports", or "Sync with External Warehouse".
- **Handle heavy lifting**: Offload complex processing to the background so it doesn't slow down your current task.
- **Custom Integrations**: Trigger workflows that interact with other software or services.

## How to use Advanced Process

1. **Select the Process**: Choose from a list of available business processes defined in your system.
2. **Input Information**: Provide any specific data the process needs to run (e.g., "Start Date", "Department").
3. **Handle the Result**: Some processes will give you information back (like a "Success" message or a "Report ID"). You can save this to use in later blocks.

## Example: Generate PDF Report

If you want to automatically create a customer summary PDF when a project finishes:
- **Process**: `Generate Customer Summary PDF`
- **Inputs**: `Customer` = `doc.customer`, `Include Invoices` = `Yes`
- **Save Result**: `report_file`

You could then add a **Notify** block to email the `report_file` to the account manager.
