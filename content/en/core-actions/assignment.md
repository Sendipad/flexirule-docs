---
title: Assignment
description: Set variables and modify document fields within the rule flow.
weight: 50
aliases:
  - /docs/actions/assignment/
---

# Assignment

Use the **Assignment** block to set or change values while your rule is running. It's like taking a note or updating a field on your record.

## Common Uses

### 1. Update the Current Record
Change a field on the record that started the rule.
- **Example**: Automatically set the `Status` of a new ticket to "In Progress".

### 2. Save a Temporary Note (Variables) {#context-variables-vars}
Create a "Variable" to store a piece of information for later. This information isn't saved to your database; it's only used while the rule is running.
- **Example**: Calculate the tax for an order and save it as `Tax Amount` so you can use it in an email later.

## Do Multiple at Once
You can list as many assignments as you want in a single block. FlexiRule will process them one by one from top to bottom.

## Clean Your Data
You can also use assignments to "clean" information before it's saved.
- **Example**: Automatically capitalize a customer's name or remove extra spaces from an email address.
