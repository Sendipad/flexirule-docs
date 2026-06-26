---
title: Multi-Path
description: Route execution down different paths based on a specific value.
weight: 70
aliases:
  - /docs/actions/switch/
---

# Multi-Path

The **Multi-Path** block (internally called Switch) works like a multi-way junction. It allows you to choose from many different paths based on the value of a specific field.

## How to Configure

1. **Pick a Field**: Choose the field or variable you want to check (e.g., "Priority").
2. **Create Paths**: Define a "Path" for each value you want to handle.
   - **Path: High**: Steps for high-priority items.
   - **Path: Medium**: Steps for medium-priority items.
3. **Default Path**: Define what happens if the value doesn't match any of your specific paths.

## Example
**Scenario**: Route a support ticket based on its category.
- **Multi-Path** on the "Category" field.
- **Path "Billing"**: Connect to a block that notifies the finance team.
- **Path "Technical"**: Connect to a block that notifies engineering.
- **Default Path**: Connect to a general support notification.
