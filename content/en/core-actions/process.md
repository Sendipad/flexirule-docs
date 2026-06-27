---
title: Advanced Process
weight: 60
description: Run custom logic or complex system operations.
---

# Advanced Process

The **Advanced Process** block (internally called Process) is a powerful tool for executing predefined system operations or custom scripts.

## Common Uses
- **Submit Document**: Automatically submit the current document after a rule passes.
- **Cancel Document**: Cancel a related document.
- **Run Custom Script**: Execute a specific Python function or Server Script.

## Configuration
1. **Process Type**: Select the type of operation you want to perform.
2. **Settings**: Each process type will have its own specific settings (e.g., which document to submit).

## Caution
Processes can significantly change your system state. Always test rules containing Advanced Processes in a safe environment (like a "Test Run") before enabling them for live use.
