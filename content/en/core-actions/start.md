---
title: Start
description: The starting point of every business rule.
weight: 5
---

# Start

Every business rule begins with a **Start** block. This block represents the moment the rule is triggered and provides the initial information (the document) to the rest of the flow.

## What is the Start Block?

The Start block is the entry point for your logic. When a rule is triggered—for example, when a Sales Order is saved—FlexiRule creates a Start block that holds all the information from that Sales Order.

## How it Works

- **The Trigger**: The rule starts based on the event you defined in the Rule Settings (like "Before Save" or "On Submit").
- **Available Data**: Everything inside the document that triggered the rule (referred to as `doc`) is available to every other block connected after the Start block.
- **Entry Conditions**: You can set "Entry Conditions" on the rule itself. If these conditions aren't met, the rule won't start at all, saving system resources.

## Example

Imagine a rule that runs when a **Customer** is created.
1. The **Start** block captures the new Customer record.
2. You connect a **Check** block to see if the customer is from a specific region.
3. You then connect a **Notify** block to alert the regional sales manager.

## Tips for Success

- **One Start per Rule**: Every rule has exactly one Start block. You cannot delete it or add a second one.
- **Filter Early**: Use Entry Conditions on the rule to make sure it only runs when necessary. For example, if your rule only applies to "International" customers, set that as an Entry Condition so the rule doesn't run for local ones.
