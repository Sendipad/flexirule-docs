---
title: Process Action
description: Run custom Python logic or complex business integrations.
weight: 70
---

# Process Action

The **Process** action is the most powerful tool in the FlexiRule library. It allows you to run custom Python code or complex, pre-defined business tasks that are too advanced for simple nodes like Assignments or Conditions.

## Why Use It?

While most logic can be built visually, sometimes you need something more technical:
- **Complex Math**: Calculating values using advanced algorithms.
- **External APIs**: Talking to other systems (like a payment gateway or a shipping provider).
- **Custom Business Logic**: Running specialized code that your developers have written for your specific industry.

## How it Works

A Process is like a "black box" that takes in some information from your rule, performs a task, and then gives back a result.

1. **Input**: You pass data from your document (like an amount or a customer ID) to the process.
2. **Execute**: The process runs its code.
3. **Output**: The process returns a result (like a success message or a calculated value) that you can then use in the next steps of your rule.

## Configuration

| Field | Description |
| :--- | :--- |
| **Process** | Select the pre-defined process you want to run (e.g., `PaymentProcessor`). |
| **Operation** | Choose the specific task within that process (e.g., `ChargeCreditCard`). |
| **Config** | Map your document data to the process's requirements. |
| **Result Target** | Where should the answer be stored? Usually a variable like `vars.payment_status`. |

## Example: Tax Calculation
**Goal**: Use a custom tax engine to calculate taxes for a complex order.

1. **Action**: Add a **Process** node.
2. **Configure**:
   - Process: `TaxService`
   - Operation: `CalculateVAT`
   - Config: Pass `doc.items` and `doc.shipping_address`.
   - Result Target: `vars.calculated_tax`.
3. **Action**: Use an **Assignment** node to set `doc.total_tax = vars.calculated_tax`.
4. **Result**: Your complex taxes are calculated by a specialized engine and saved back to your document automatically.

## Tips for Success

- **Developer Friendly**: Processes are usually set up by developers, while the rules that use them are designed by business users. This keeps the complex code isolated and reusable.
- **Error Handling**: Since processes often deal with external systems, make sure you have a plan for what happens if a process fails (e.g., the internet is down).
- **Keep it Focused**: A process should do one thing well. If a process starts doing too many things, it's harder to reuse in other rules.

---

*Next: Learn how to repeat tasks with the [Loop Action]({{< relref "loop.md" >}}).*
