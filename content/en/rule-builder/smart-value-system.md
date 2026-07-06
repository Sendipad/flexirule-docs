---
title: Smart Value System
description: Learn how FlexiRule handles inputs using static values, variables, and resolvers.
weight: 45
---

# Smart Value System

The **Smart Value System** is the unified way FlexiRule handles data across the entire platform. Whether you are setting a field value, defining a condition, or configuring a notification, you use the same consistent interface to provide data.

> **The Core Principle**: Every input field in FlexiRule is a "Smart" field that can be a static value, a variable reference, or a dynamically calculated result.

---

## The Three Input Modes

Every input field in FlexiRule supports three distinct modes of operation. You can switch between these modes seamlessly within the same field.

### 1. Static Value
This is the simplest mode. You directly type the value you want to use.
- **Text**: `Open`, `High Priority`, `Welcome to FlexiRule`
- **Numbers**: `100`, `0.05`, `-10`
- **Dates**: Picked from a calendar or typed in a standard format.

### 2. Variable Reference (`@`)
Variables allow you to access live data from your system or values calculated earlier in your rule. You trigger this mode by typing the `@` symbol or clicking the **Variable (@)** icon.

- **`@doc.*` (Document Variables)**: Access fields from the record that triggered the rule.
    - *Example*: `@doc.customer_name`, `@doc.grand_total`
- **`@rule.*` (Rule Variables)**: Access values you have created using "Set Value" or "Query" blocks earlier in the flow.
    - *Example*: `@rule.discounted_price`, `@rule.is_valid_customer`
- **`@system.*` (System Variables)**: Access global information.
    - *Example*: `@system.current_date`, `@system.current_user`

### 3. Resolver Functions (`/`)
Resolvers are dynamic functions that transform data or perform calculations on the fly. You trigger this mode by typing the `/` symbol or clicking the **Magic Wand (/)** icon.

- **Calculations**: `/math.sum`, `/math.multiply`
- **Formatting**: `/date.format`, `/text.upper`
- **Logic**: `/logic.if_else` (Choose a value based on a condition)
- **Combinations**: `/text.concat` (Merge multiple pieces of text and variables)

---

## UI Interactions

FlexiRule provides visual cues in every input field to help you use the Smart Value System.

- **Default State**: Just start typing to enter a **Static Value**.
- **The `@` Icon**: Clicking this opens a searchable list of all available variables in the current context.
- **The `/` Icon**: Clicking this opens a menu of available resolver functions.

When you select a variable or a resolver, the system automatically inserts the correct syntax into the field for you.

---

## Understanding Variables & Scope

Variables in FlexiRule are designed to be safe and predictable.

### Execution Lifecycle
Variables created during a rule execution (using `@rule.*`) exist only for that specific run. They are not saved to the database unless you explicitly use an **Update Record** block.

### Branch Isolation
If your rule splits into a "True" and "False" path, variables created on the "True" path are not available if the logic follows the "False" path. This prevents errors caused by using data that was never actually calculated.

### Loop Iteration Isolation
When using a **Repeat (Loop)** block, the variables representing the "Current Item" change with every iteration. FlexiRule ensures that the logic inside the loop always uses the correct data for the item being processed.

---

## Where the Smart Value System is Used

You will find the Smart Value System everywhere you provide input:

- **Condition Builder**: Comparing fields to variables or calculated values.
- **Action Settings**: Setting email subjects, calculating totals, or mapping fields.
- **Query Records**: Defining filters to find specific data.
- **Notify / Messaging**: Inserting customer names or order IDs into messages.
- **Filters**: Fine-tuning which records a rule should apply to.

---

## Summary
By combining **Static Values**, **@ Variables**, and **/ Resolvers**, you can build incredibly powerful logic without ever leaving the visual interface. It is the single language of data in FlexiRule.
