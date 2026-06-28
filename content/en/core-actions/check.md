---
title: Check
weight: 20
description: Create branching logic by checking specific conditions.
---

# Check

The **Check** block (internally known as Condition) allows your automation to make decisions. It evaluates one or more conditions and directs the flow down different paths based on the result.

## How to Use

1. Add a **Check** block to your canvas.
2. In the configuration panel, define the conditions that must be met.
3. Connect other blocks to the **True** (Green) and **False** (Red) ports.

## Defining Conditions

A condition consists of three parts:
-   **Field**: The data point you want to inspect (e.g., `Total Amount`, `Customer`, or `Status`).
-   **Operator**: The comparison you want to make (e.g., `is greater than`, `equals`, `contains`, `is set`).
-   **Value**: The value you are comparing against.

## Multiple Conditions

You can add multiple rows to a single Check block. You can choose how they are evaluated:
-   **All (AND)**: Every condition must be true for the flow to take the "True" path.
-   **Any (OR)**: If at least one condition is true, the flow takes the "True" path.

## Branching Paths

The power of the Check block lies in its two output ports:
-   **True (Green)**: The automation follows this path if the conditions are met.
-   **False (Red)**: The automation follows this path if the conditions are **not** met.

If you don't connect anything to a port, the automation will simply stop if the flow reaches that port.
