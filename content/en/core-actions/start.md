---
title: Start
description: The entry point of every automation rule.
weight: 5
---

# Start (Entry Action)

Every automation rule begins with the **Start** block. This block represents the moment your rule is triggered and the data it begins with.

## How it Works

When a rule is triggered (for example, when a Sales Order is saved), the **Start** block is the first thing to execute. It brings all the data from that record (referred to as `doc`) into the rule so that other blocks can use it.

## Entry Conditions

While the **Start** block itself doesn't have many settings, you can control *if* it should run by using **Rule Entry Conditions** on the main Rule document.

-   **Entry Conditions**: These act as a gatekeeper. If the conditions aren't met (e.g., "Only run if the customer is in the VIP group"), the rule won't even start.
-   **Why use them?** Using entry conditions is more efficient than starting a rule and immediately using a "Check" block, as it saves system resources.

## Moving Forward

Once the rule starts, data flows from the **Start** block into whatever blocks you have connected next. All subsequent blocks will have access to the document fields that were loaded at the start.
