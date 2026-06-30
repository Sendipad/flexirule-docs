---
title: Repeat
description: Perform actions multiple times for a list of items.
weight: 60
---

# Repeat

The **Repeat** block (previously called Loop) allows you to perform the same set of actions for every item in a list.

For example, if you find all "Overdue Invoices" for a customer, you can use a **Repeat** block to send a separate email for each one.

## How it Works

1. **Input List**: You provide a list of items (usually found using a **Query Records** block).
2. **The Loop Path**: You connect the "Loop" output to the sequence of blocks you want to repeat.
3. **The Current Item**: Inside the loop, you can access the specific item currently being processed using `{{ item }}`.
4. **Completion**: Once every item in the list has been processed, the rule continues from the "Finished" output.

## How to use Repeat

1. **Select the List**: Choose the variable that contains your list (e.g., `vars.overdue_invoices`).
2. **Design the Loop**: Connect blocks to the loop port. These are the steps that will happen for every item.
3. **Define the End**: Connect a block to the "Finished" port to define what happens after the repetition is done.

## Example: Batch Task Update

If you want to set every Task in a Project to "Closed":
1. **Query Records**: Find all Tasks where `Project` is the current record. Save as `project_tasks`.
2. **Repeat**: Select `vars.project_tasks`.
3. **Update Record (Inside Loop)**: Set `Status` to `Closed` for the `item`.
4. **Notify (On Finished)**: Send a pop-up saying "All project tasks have been closed."
