---
title: Entry Action
description: The starting node that passes execution into the rule flow.
weight: 10
---

# Entry Action

**Entry Action** is the start node for a visual rule flow.

It does not perform a business operation. It passes execution to its configured next step.

## Contract

- Required configuration: none
- Category: Control Flow
- Node type: start
- Normal next path: yes
- False path: no
- Terminal: no
- Stored result: no

## Use

Connect Entry Action to the first business or control step.

For example:

**Entry Action → Condition → Assignment**

The rule trigger determines when the rule starts; Entry Action determines where the visual flow begins.
