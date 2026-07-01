---
title: Core Concepts
weight: 70
description: The fundamental building blocks of the FlexiRule ecosystem.
---

# Core Concepts

FlexiRule is built from a small set of reusable concepts. A rule is not a single script; it is a flow of blocks that read data, make decisions, and perform actions. Understanding these building blocks will help you design, read, and troubleshoot rules, and each concept will later have its own dedicated page for deeper explanation.

## How a rule runs

```text
Business Event
      │
      ▼
   Trigger
      │
      ▼
     Rule
      │
      ▼
Execution Context
      │
      ▼
   Blocks
      │
      ▼
Queries, Value Resolvers, and Logical Commands
      │
      ▼
Execution Result
```

In practice, a business event starts the process, a trigger decides whether the rule should run, the rule creates an execution context, and the blocks inside the rule use queries, values, and logic to produce the final result.

---

## 1. Rule

A **Rule** is the top-level automation definition in FlexiRule, and it exists so business behavior can be modeled in one place instead of being scattered across hard-coded application logic; it interacts with the trigger that starts execution, the execution context that carries runtime data, and the blocks that perform the actual work, and for example a rule can automatically approve a Sales Order when the total amount is below a configured limit and the customer is in good standing.

---

## 2. Trigger

A **Trigger** is the entry point that starts a rule, and it exists so FlexiRule only evaluates automation when the correct business event happens instead of running continuously; it interacts with the rule by deciding whether execution should begin, and if the trigger matches then the execution context is created and the rule continues, for example a trigger can run when a Purchase Invoice is submitted or on a nightly schedule to check overdue documents.

---

## 3. Execution Context

The **Execution Context** is the runtime memory available while a rule is running, and it exists so blocks can share data and reuse values during execution without losing state between steps; it interacts with the rule, blocks, value resolvers, and logical commands by holding the current document as `doc`, the previous state as `old_doc` when available, and custom runtime values in `vars`, and for example a customer credit check rule can store the calculated credit limit in `vars.credit_limit` and use it later in the same flow.

---

## 4. Block (Rule Action)

A **Block** is one node in the visual rule canvas, and it exists so automation can be built as a sequence of small, understandable steps instead of one large script; it interacts with the rule as a contained step, uses an action type to determine what it does, reads from and writes to the execution context, and may branch the flow based on a condition, for example one block may fetch related records, another may check whether a condition is true, and a third may send a notification.

---

## 5. Action Type

An **Action Type** defines what a block actually does, and it exists so different automation steps can perform different kinds of work while still fitting into the same visual rule structure; it interacts with the block as the behavior behind it and often uses value resolvers, queries, and logical commands to complete its task, and for example action types may retrieve data, set values, send notifications, run reusable logic, or evaluate decisions.

---

## 6. Query Records

**Query Records** is an action type used to fetch full records from a DocType, and it exists so a rule can inspect related documents before deciding what to do next; it interacts with the execution context by reading filter values from it and returning matching documents that can be stored in `vars` or used by later blocks, and for example before approving a Sales Order the rule can query all open invoices for the same customer to check whether there are overdue payments.

---

## 7. Query List

**Query List** is an action type used to fetch a lightweight list of values, and it exists so a rule can work with only the small amount of data it needs instead of loading full records; it interacts with the execution context by reading filters and field selections from it and returning a compact result that can be used in conditions, notifications, or assignments, and for example a rule can get the list of item codes from a Purchase Order to check whether any restricted items are included.

---

## 8. Set Value

**Set Value** is an action type used to assign a value to a field or variable, and it exists so rules can calculate, update, or overwrite values as part of automation; it interacts with the execution context by usually using a value resolver to calculate the final value and then writing the result into `doc` or `vars`, and for example a rule can set `doc.approval_status` to `Approved` when the rule conditions are satisfied.

---

## 9. Notify

**Notify** is an action type used to send messages or alerts, and it exists so automation can inform the right people at the right time instead of only changing data; it interacts with the execution context by using values from it and often combining them with resolved values from value resolvers, and for example a rule can send an email to the finance team when a Purchase Invoice exceeds the approval threshold.

---

## 10. Process

**Process** is an action type used to run reusable logic, and it exists so business logic that is needed in multiple rules can be centralized instead of duplicated; it interacts with the execution context by receiving data from it, calling internal logic or a reusable module, and returning results that later blocks can use, and for example a rule can run a reusable stock validation process before confirming a Sales Order.

---

## 11. Value Resolver

A **Value Resolver** is the mechanism that turns a dynamic expression into a real value at runtime, and it exists so rules can work with values that are not known until execution time; it interacts with the execution context by reading from `doc`, `old_doc`, `vars`, or query results and is used by Set Value, Notify, Query Records, Query List, and Condition blocks, and for example it can resolve `doc.grand_total`, `vars.credit_limit`, or a calculated discount before comparing values or updating a field.

---

## 12. Logical Command for Frontend FlexValue Control

A **Logical Command** is a decision or comparison primitive used inside rule logic, and it exists so rules have a structured way to evaluate business decisions such as equals, not equals, greater than, less than, contains, AND, OR, and NOT; it interacts with value resolvers and condition blocks by determining whether the rule continues down one path or another, and for example it can check whether `doc.grand_total > vars.credit_limit AND doc.customer_status == "Active"` before allowing the rule to continue.

---

## 13. Trigger Condition

A **Trigger Condition** is a pre-check attached to the trigger itself, and it exists so FlexiRule can decide very early whether a rule is worth loading and executing at all; it interacts with the trigger rather than the main rule flow, but it still uses the same Condition Builder and the same logical building blocks to evaluate data, and for example a trigger condition can prevent a Sales Order rule from running unless the document belongs to a specific company, a specific customer group, or a specific workflow state.

This concept is different from a normal **Condition** block inside the rule flow:

* A **Trigger Condition** decides whether the rule should start.
* A **Condition** block decides what should happen after the rule has already started.

They may look similar because both use the Condition Builder, but they serve different purposes. The trigger condition is a fast gate at the entry point, while the condition block is part of the actual execution path inside the rule.

---

## 14. Condition and Branching

A **Condition** block uses logical commands to choose the next path in the rule, and it exists so business processes can follow different outcomes depending on the data; it interacts with logical commands, the execution context, and the next block in the flow by evaluating to true or false and deciding which branch should execute, and for example if a Sales Order total is below the approval limit the rule can continue to approval, otherwise it can send the document for manager review.

---

## 15. Variables

**Variables** are custom values stored during rule execution, and they exist so blocks can share intermediate results without changing the document immediately; they interact with the execution context through `vars`, can be created or updated by one block, and can then be read by later blocks together with value resolvers and logical commands, and for example a rule can store `vars.discount_rate = 10` after a pricing check and reuse it in a notification and a field update.

---

## 16. Lifecycle States

Rules move through lifecycle states to control how they are used, and these states exist so live business logic can be managed safely without accidental changes; they interact with the rule by controlling whether it can be edited or executed, where Draft means the rule can be edited and tested but does not run automatically, Active means it is live and can be triggered by the system, Disabled means it is temporarily turned off without being deleted, and Archived means it is retired and kept for historical reference.

---

## 17. Versioning (Amending)

**Versioning**, also called **Amending**, is the safe way to update a live rule, and it exists so active business logic is never edited directly while it is running in production; it interacts with lifecycle states by creating a new Draft version from an Active rule, allowing the current live version to continue running while the new version is edited and tested, and for example if the approval threshold for a Purchase Invoice changes you can amend the active rule, update the draft, test it, and then activate the new version.

---

## Summary Table

| Concept               | Purpose                                 | Typical Questions                                           |
| --------------------- | --------------------------------------- | ----------------------------------------------------------- |
| Rule                  | Defines a complete automation           | What should happen?                                         |
| Trigger               | Starts rule execution                   | When should it run?                                         |
| Execution Context     | Holds runtime data                      | What data is available now?                                 |
| Block (Rule Action)   | Represents one step in the flow         | What should happen next?                                    |
| Action Type           | Defines the behavior of a block         | Is this a query, value update, notification, or process?    |
| Query Records         | Fetches full documents                  | Which records match these filters?                          |
| Query List            | Fetches a lightweight list of values    | Which values do I need?                                     |
| Set Value             | Updates a field or variable             | What value should be written?                               |
| Notify                | Sends alerts or messages                | Who should be informed?                                     |
| Process               | Runs reusable logic                     | Which shared logic should be executed?                      |
| Value Resolver        | Resolves dynamic values at runtime      | What is the actual value right now?                         |
| Logical Command       | Evaluates comparisons and boolean logic | Is this condition true or false?                            |
| Trigger Condition     | Decides whether the rule should start   | Should this trigger load the rule at all?                   |
| Condition             | Chooses the next branch                 | Which path should run?                                      |
| Variables             | Stores temporary runtime values         | What data should be reused later?                           |
| Lifecycle States      | Controls rule availability              | Is the rule draft, active, disabled, or archived?           |
| Versioning (Amending) | Safely updates live rules               | How do I change a running rule without breaking production? |

---

Understanding these concepts gives you the foundation for everything else in FlexiRule. Once you know how rules, triggers, blocks, queries, values, and logic work together, the rest of the documentation becomes much easier to follow.
