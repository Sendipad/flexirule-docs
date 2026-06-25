---
title: Multi-Path (Switch)
description: Choose from several different paths based on a value.
weight: 70
aliases:
  - /docs/actions/switch/
---

# Multi-Path (Switch)

The **Multi-Path** block is like a traffic intersection. Instead of a simple "Yes/No" check, it lets you choose from many different directions based on a specific piece of information.

## How to Set it Up

1. **Pick the Info**: Choose the field you want to check (like `Priority` or `Category`).
2. **Set the Paths**: Create a "Path" for each specific value.
   - **Path 1**: "High"
   - **Path 2**: "Medium"
   - **Path 3**: "Low"
3. **Default Path**: Tell the system which way to go if the information doesn't match any of your specific paths.

## Example
**Scenario**: Route a support request to the right team based on its category.
- **Check** the `Category` field.
- **Path "Billing"**: Leads to an email for the Finance team.
- **Path "Technical"**: Leads to an email for the Engineering team.
- **Path "General"**: Leads to the "Default" path for the Support team.
