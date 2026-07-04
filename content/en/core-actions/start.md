---
title: Start
description: The entry point of every business rule.
weight: 5
---

# Start

Every FlexiRule workflow begins with a **Start** block. This block represents the moment your rule is triggered and the document that started it.

## What does it do?
The Start block is the source of all your data. When a rule runs, it "carries" the document information (like a Sales Invoice or a Customer record) into the workflow. All the other blocks in your rule will use this information to do their jobs.

## Entry Conditions
Before a rule even gets to the Start block, you can set "Entry Conditions" on the main Rule page. These are like a filter that decides if the rule should run at all.

For example, you might have a rule that only starts if the "Status" of a document is "Open". If the status is "Draft", the rule won't even trigger.

## Tips for Success
- **One Start per Rule**: Every rule has exactly one Start block. You cannot delete it or add another one.
- **The First Connection**: Your very first logical step should always be connected directly to the Start block.
