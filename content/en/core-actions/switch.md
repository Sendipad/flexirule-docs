---
title: Switch
description: Route your process down different paths based on a choice.
weight: 70
---

# Switch

The **Switch** block is used when you have multiple different paths your process could take. It's like a more powerful version of the **Check** block.

While a **Check** block only gives you two options (Yes or No), a **Switch** block can handle as many options as you need.

## How to use Switch

1. **Pick the Field**: Choose the field you want to base the decision on (e.g., "Priority", "Region", or "Product Category").
2. **Define the Options**: Create a "Path" for each possible value.
3. **Set a Default**: Decide what happens if the value doesn't match any of your specific paths.

## Example: Routing Support Tickets

You can use a **Switch** block to route support tickets to different departments based on their category:

- **Switch on**: `Category`
- **Path "Billing"**: Leads to a block that notifies the Finance Team.
- **Path "Technical"**: Leads to a block that notifies the Support Engineers.
- **Path "Sales"**: Leads to a block that notifies the Sales Team.
- **Default Path**: Leads to a general notification for the front desk.

This keeps your rule clean and easy to read, compared to having many separate **Check** blocks.
