---
title: Switch
description: Route execution down different paths based on a specific value.
weight: 70
aliases:
  - /docs/actions/switch/
---

# Switch Action

The **Switch** action is like a multi-way branch. Instead of a simple "True/False" condition, it allows you to choose from many different paths based on the value of a field.

## How to Configure

1. **Select Field**: Choose the field or variable you want to check (e.g., `doc.priority`).
2. **Define Cases**: Create a "Case" for each possible value you want to handle.
   - **Case: High**: Path for high-priority items.
   - **Case: Medium**: Path for medium-priority items.
3. **Default Path**: Define what happens if the value doesn't match any of your cases.

## Example
**Scenario**: Route a support ticket based on its category.
- **Switch** on `category`.
- **Path "Billing"**: Connect to a node that notifies the finance team.
- **Path "Technical"**: Connect to a node that notifies the support engineering team.
- **Path "General"**: Connect to the default path.
