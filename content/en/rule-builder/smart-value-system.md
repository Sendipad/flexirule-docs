---
title: Choose the Right Value for Your Rule
description: Learn how to use fixed values, information available when a rule runs, calculations, lookups, and collections in FlexiRule—without writing code.
weight: 70
---

# Choose the Right Value for Your Rule

When you build a rule, you often need to answer two questions:

- **Where will this information come from?**
- **Will I know its value now, or only when the rule runs?**

For example, you may know that a discount is always 10%, but you may not know the customer's credit limit, the invoice's final total, or how many order items there will be until a rule runs. FlexiRule lets you configure values visually so the rule can use the information available at that time—without writing expressions or code.

You will find the value controls in actions such as **Assignment**, in the conditions configured for a **Condition** action, and in other settings that accept values.

## Three ways to provide a value

### 1. Enter a fixed value

Use a fixed value when you already know what the rule should use and it should stay the same each time the rule runs.

Examples:

- Set a priority to **High**.
- Apply a fixed discount rate of **10%**.
- Use the message **Please review this request**.

Choose or type the value in the field. FlexiRule offers suitable controls for the kind of information expected, such as text fields, number inputs, date pickers, and choice lists.

### 2. Use information that will be available when the rule runs

Use a dynamic value when the correct answer depends on the document being processed, the person using the system, or the result of an earlier step. You do not need to know the actual value while building the rule. Instead, you choose which information FlexiRule should read when the rule runs.

Click the **Variable (@)** control, or type `@` where supported, to browse the available information. Choose an item from the picker rather than trying to remember its internal reference.

| Choose information from | Example |
| --- | --- |
| **The current document** | Use the customer, posting date, or total from the invoice currently being processed. |
| **The previous value** | Compare a field's earlier value with its new value. |
| **A value created by an earlier step** | Use a calculated amount or a result saved by another action. |
| **The current item in a Loop** | Use the quantity, item code, or rate for the order line currently being processed. |
| **The signed-in user or company** | Use available information about the current session. |

For example, you can build a rule that checks whether an invoice exceeds a credit limit without knowing either amount in advance. The rule reads the invoice total and customer credit limit when it runs, then evaluates the configured condition.

The choices shown depend on where you are in the rule. Information about the current item, for example, is available within the relevant **Loop** path—not everywhere in the rule.

### 3. Calculate, look up, or prepare a value

Use **Resolver (⚡)** when the value needs to be calculated, retrieved, combined, or transformed instead of entered directly. Select an available operation and fill in its visual settings.

![Smart Value Selector showing Date & Time Formula options](/images/smart-value-resolver-date-formula.png)

#### Date and time

Calculate a date, find the time between two dates, use the current date and time, or format a date.

**Example:** Set an invoice's due date to 30 days after its posting date. Choose the posting date as the starting point and configure the 30-day adjustment. The resulting date is calculated when the rule runs.

#### Math

Calculate using numbers that come from the current document or earlier steps.

**Example:** Calculate a 15% charge from the invoice's net total and round the result to two decimal places. The calculation uses the invoice's actual total when the rule runs.

#### Look up information

Retrieve a field from a related record instead of asking someone to enter the same information again.

**Example:** Use the customer linked to an invoice to retrieve that customer's credit limit. Choose the record type, how to identify the record, and the field to return. If the selected record depends on information in the invoice, FlexiRule can use that information when the rule runs.

#### Text

Combine or prepare text for a field or message.

**Example:** Create a message that includes the invoice number and customer name. Those details can differ for every invoice, while the message structure stays the same.

#### Collections and lists

A **collection** is a group of values or items—for example, all the lines on an order or a list of records returned by an earlier action. You may not know how many items the collection will contain until the rule runs.

Use the available collection operations to work with that group, such as counting items, totaling a numeric field, finding an average or a minimum/maximum, filtering items, or collecting values from a field.

**Examples:**

- Total the quantities of all items on an order, regardless of how many lines it contains.
- Count the records returned by a previous step.
- Filter a list to keep only items that meet a business requirement.

If you need to run the same steps for every item in a collection, use the **Loop** action. Loop processes one item at a time and makes the current item available to the actions inside its loop path. Loop does not fetch database records by itself; if the collection must come from a query, use **Query Records** first.

#### System information

Use supported information about the current session or system settings when it is relevant to your rule.

The available operations depend on the field and the context where you are configuring the value. If an option is not offered, it may not be supported for that input.

## Example: calculate a payment due date

Imagine your team wants each new invoice to receive a due date 30 days after its posting date.

1. Add an **Assignment** action and choose the invoice's due-date field as the target.
2. Open the value control and choose **Resolver (⚡)**.
3. Choose the date calculation operation.
4. Select the invoice's posting date as the starting date.
5. Configure the adjustment as **30 days after** the posting date.
6. Save the rule and test it with an example invoice before activating it.

You do not enter a specific calendar date. You configure the rule once, and FlexiRule calculates the appropriate due date from each invoice's posting date when the rule runs.

## Example: work with a collection whose size can change

Imagine a sales order can contain one item, five items, or many items. You do not need to know the number of lines when you build the rule.

- To calculate a total across the lines, use an available collection operation.
- To apply steps to each line separately, configure a **Loop** over the order's items.
- Inside the Loop, choose the current item from the value picker to use that line's quantity, rate, or other available fields.
- Use a **Condition** action when the rule must choose a path based on whether a requirement is met—for example, whether the current item's quantity exceeds a threshold.

These actions have different jobs: **Assignment** sets or transforms values, **Condition** chooses a True or False path, and **Loop** repeats a connected path for each item in a collection.

## How values from earlier steps are used

A value created during a rule run can be used by later steps in that same run, provided the execution path makes it available. For example, if an **Assignment** stores a calculation in a rule variable, a later action can select that variable as its input.

A value created only on one branch may not exist on another branch. Likewise, the current item selected by a **Loop** is relevant inside the loop body. Use the value picker at the step where you need the information, and test the rule with realistic examples to confirm that the expected value is available.

## Tips for choosing the right approach

- **Use a fixed value** when the same answer should be used every time.
- **Use a dynamic value** when the answer depends on the current document, current user, earlier action, or information available only when the rule runs.
- **Use Resolver (⚡)** when you need to calculate, look up, combine, or transform information.
- **Use a collection operation** when you need to work with a group of values or items whose contents or size may vary.
- **Use Loop** when the same action path must run for each item in a collection.
- **Use Condition** when the rule must choose between True and False paths.
- **Choose from the picker whenever possible.** It helps you select available information without memorizing internal names.
- **Test with realistic examples**, including empty and multi-item collections where relevant, before activating the rule.

## Related guides

- [Build your first rule]({{< relref "getting-started/" >}})
- [Add and configure actions]({{< relref "add-action.md" >}})
- [Assignment: set or transform values]({{< relref "../action-type/assignment.md" >}})
- [Condition: choose a path]({{< relref "../action-type/condition.md" >}})
- [Loop: repeat actions for a list]({{< relref "../action-type/loop.md" >}})
- [Query Records: retrieve records]({{< relref "../action-type/query-records/" >}})
