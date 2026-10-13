---
title: Choose the Right Value for Your Rule
description: Learn how to enter a value, reuse information from a record, or calculate it visually in FlexiRule—without writing expressions or code.
weight: 70
---

# Choose the Right Value for Your Rule

When you build a rule, you often need to answer a simple question: **Where should this value come from?**

For example, you might want to set a payment due date, use a customer's credit limit, calculate a discount, or include a document number in a message. FlexiRule gives you visual controls to choose the value you need. You do not have to write code or remember special expressions.

You will find these controls in many places, including **Set Value**, **Check**, record filters, and message content.

## Three ways to provide a value

Depending on the field you are configuring, choose one of these approaches.

### 1. Enter a value yourself

Use this when the answer should stay the same whenever the rule runs.

Examples:
- Set a priority to **High**.
- Set a discount rate to **10**.
- Add the message **Please review this request**.

Choose or type the value in the field. FlexiRule provides suitable controls for the kind of information expected, such as text fields, number inputs, date pickers, and choice lists.

### 2. Use information that already exists

Use this when the rule should take its value from a document or from an earlier step in the same rule.

Click the **Variable (@)** control, or type `@` where supported, to browse the information available to you. Choose an item from the picker rather than typing its reference from memory.

Common choices include:

| Choose information from | When it is useful |
| --- | --- |
| **The current document** | Use the customer's name, invoice total, posting date, or another field on the document being processed. |
| **The previous value** | Compare a field's earlier value with its new value when checking what changed. |
| **A value created earlier in the rule** | Reuse a result calculated or saved by a previous step. |
| **The current row in a Repeat step** | Work with the item currently being processed in a repeating list. |
| **The signed-in user or company** | Use available session information when a rule needs it. |

The choices shown depend on where you are in the rule. For example, information about the current row is only relevant inside a repeating step.

## 3. Calculate, find, or prepare a value

Use the **Resolver (⚡)** control when you need FlexiRule to work something out or retrieve information for you. Choose an available operation and complete its visual settings.

![Smart Value Selector showing Date & Time Formula options](/images/smart-value-resolver-date-formula.png)

### Date and time

Use date tools to calculate a date, find the time between two dates, format a date, or use the current date and time.

**Example:** Set a payment due date to 30 days after an invoice's posting date. Select the invoice date, choose the date calculation, and set the offset to 30 days.

### Math

Use math tools for calculations based on numbers from the document or earlier steps.

**Example:** Calculate a 15% charge from the document's net total, with the result rounded to two decimal places.

### Look up information

Find a field on a related record instead of asking someone to enter the same information again.

**Example:** Use the customer linked to an invoice to retrieve that customer's credit limit. Select the record type, choose how to identify the record, and select the field to return.

### Text

Combine or tidy up text for a field or message.

**Example:** Prepare a message that includes an invoice number and customer name. Choose the pieces of text and arrange them in the required order.

### Lists and table rows

Work with a list or the rows in a document's table. Depending on the available operation, you can count rows, total a numeric column, find an average or minimum/maximum, filter rows, or collect field values.

**Example:** Calculate the total quantity across all items on an order.

### System information

Use supported information about the current session or system settings when it is relevant to your rule.

> The available operations depend on the field and the context where you are building the rule. If an option is not offered, it may not be supported for that input.

## A practical example: set a payment due date

Imagine your team wants every new invoice to receive a due date 30 days after its posting date.

1. Add a **Set Value** step and choose the invoice's due-date field.
2. Open the value control and choose **Resolver (⚡)**.
3. Choose the date calculation operation.
4. Select the invoice's posting date as the starting date.
5. Set the adjustment to **30 days after** the posting date.
6. Save the rule and test it with an example invoice before activating it.

The rule now calculates the due date when it runs, rather than using a date that someone must update manually.

## Tips for choosing the right approach

- **Use a fixed value** when the same answer should be used every time.
- **Choose existing information** when the value should come from the current document, the user, or an earlier step.
- **Use a resolver** when you need to calculate, look up, combine, or transform information.
- **Choose from the picker whenever possible.** It helps you select available information without memorizing internal names.
- **Test the rule with realistic examples.** Check that the resulting value is what your business process expects before activating the rule.

## What happens to values created by earlier steps?

A value created during a rule run is available for later steps in that run, subject to the path the rule follows. For example, a value created inside one branch may not be available when a different branch runs. Values for the current row are relevant within the repeating step.

You usually do not need to manage these details yourself: use the value picker in the step where you need the information and choose from the options it offers.

## Related guides

- [Build your first rule]({{< relref "getting-started/" >}})
- [Add and configure actions]({{< relref "add-action.md" >}})
- [Set values on a document]({{< relref "../action-type/assignment.md" >}})
- [Check conditions]({{< relref "../action-type/condition.md" >}})
- [Repeat actions for a list of items]({{< relref "../action-type/loop.md" >}})
