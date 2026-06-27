---
title: Switch
weight: 6
description: Branch your logic into multiple paths based on a single value.
---

# Switch

The **Switch** block is like a more advanced "Check" block. Instead of just True/False, it allows you to have many different paths based on the value of a field.

## When to use it
If you have a field with many options, like `Status` (Draft, Open, Paid, Cancelled), a Switch block is much cleaner than using four separate Check blocks.

## Configuration

1. **Select Field**: Choose the field you want to examine (e.g., `Priority`).
2. **Add Cases**: Define the values you want to handle.
   - Case: `High` -> Port 1
   - Case: `Medium` -> Port 2
   - Case: `Low` -> Port 3
3. **Default Path**: A final port for any value that doesn't match your cases.

## On the Canvas
Each "Case" you add will create a new output port on the block. You can then connect each port to the specific logic for that case.
