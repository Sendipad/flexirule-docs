---
title: Switch
description: Route execution down different paths based on a specific value.
weight: 70
aliases:
  - /docs/actions/switch/
---

# Switch

The **Switch** block is for choosing between many different paths. It's like a multi-way junction: you check a specific value, and then follow the path that matches.

## How to Set It Up

1. **Pick the Field**: Choose the field you want to check (e.g., "Ticket Priority").
2. **Add Your Cases**: Create a "Case" for every value you want to handle.
   - **Case: High**: The path for high-priority items.
   - **Case: Medium**: The path for medium-priority items.
3. **The Default Path**: Decide what happens if the value doesn't match any of your specific cases.

## Simple Example
**Goal**: Send support tickets to the right team based on their category.
- **Switch** on the `Category` field.
- **Path "Billing"**: Send a message to the Finance team.
- **Path "Technical"**: Send a message to the Engineering team.
- **Path "Everything Else"**: Use the Default path to send to general support.
