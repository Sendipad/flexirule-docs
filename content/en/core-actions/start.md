---
title: Start
description: The entry point for every rule.
weight: 1
---

# Start

Every rule begins with a **Start** block (previously called Entry Action). This block represents the moment your rule is triggered.

## How it works

The **Start** block is automatically added to every new rule. It cannot be deleted. It serves as the anchor point for your entire logic flow.

- **Data Access**: Everything starting from this block has access to the record that triggered the rule (referred to as `doc`).
- **Trigger Info**: It also knows *why* the rule started (e.g., a "Before Save" event).

## Configuration

In most cases, you don't need to configure the **Start** block itself. Its properties are determined by the settings you chose when creating the Rule (the Document Type and the Trigger Event).

However, you can use the settings panel to:
- **Set initial variables**: Define values that should be available from the very beginning of the rule.
- **Add documentation**: Describe what this specific rule is intended to do.
