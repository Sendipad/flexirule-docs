---
title: Advanced Process
description: Run reusable, system-registered business processes and custom operations directly from your rules.
weight: 110
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType", "Context Variable"]
aliases:
  - /docs/actions/process/
---

# Advanced Process Action

The **Advanced Process** action allows you to execute complex, pre-built business operations—such as record deduplication, tax calculations, credit scoring, or external integrations—directly within a visual rule.

---

## 1. What is it?

An Advanced Process block lets you call modular, reusable operations configured in your system without having to build complex logic steps manually on the visual canvas. It passes inputs from your rule into the process and saves the output into a rule variable (`@vars`).

---

## 2. When to Use

Use the Advanced Process action when you need to:
- **Run pre-built business algorithms** (e.g., customer deduplication checks, risk score calculations).
- **Perform integrations or system tasks** (e.g., generating documents, sending webhooks, invoking tax services).
- **Reuse standard operations** across multiple rules without duplicating canvas nodes.
- **Run heavy background operations** asynchronously using background worker queues.

---

## 3. How to Configure

1. **Add the Action**: Add an **Advanced Process** block to your visual canvas.
2. **Select Process & Operation**:
   - Select the registered **Process** (e.g., `Deduplication`, `Tax Calculation`).
   - Select the specific **Operation** (e.g., `Find Duplicates`, `Calculate Line Item Tax`).
3. **Map Inputs**:
   - Fill in the required input parameters using the **Smart Value Selector** (`@doc`, `@vars`, or static values).
4. **Set Output Variable**:
   - Enter a variable name in **Output Variable** where process outputs will be saved (e.g., `dedup_result`).
5. **Configure Failure Handling**:
   - Select how the rule should respond if the process fails (`Stop Rule`, `Continue`, or `Branch on Error`).

---

## 4. UI Configuration Options

| Option | Description |
| :--- | :--- |
| **Process** | Select the registered business process group from the dropdown list. |
| **Operation** | Choose the specific action operation provided by the selected process. |
| **Input Mapping** | Map required operation parameters to document fields (`@doc`) or variables (`@vars`) using the Smart Value Selector. |
| **Output Variable** | Variable name in `@vars` where the output dictionary will be stored for downstream actions. |
| **Error Handling** | Configure rule behavior on failure: **Stop Rule**, **Continue**, or **Branch on Error**. |

---

## 5. Practical Example

### Scenario: Deduplicate Customer Records on Create

1. Add an **Advanced Process** block to the canvas.
2. **Process**: Select `Deduplication`.
3. **Operation**: Select `Find Duplicates`.
4. **Input Mapping**:
   - Map `Email` → Select `@doc.email_id` using Smart Value Selector.
   - Map `Tax ID` → Select `@doc.tax_id` using Smart Value Selector.
5. **Output Variable**: Enter `duplicate_check`.
6. **Next Node (Check)**:
   - Add a **Check** action following the process.
   - Condition: `@vars.duplicate_check.is_duplicate == true`
   - **True Branch**: Connect to **Stop / Error** ("Duplicate customer detected!").

---

## 6. Common Mistakes

- **Unmapped Required Inputs**: Leaving mandatory operation parameters empty.
- **Ignoring Process Failure**: Setting Error Strategy to `Continue` without checking the error output in downstream actions.
- **Overusing Custom Processes for Simple Logic**: Creating custom code processes for simple field updates that can be built directly using [Set Value]({{< relref "core-actions/assignment.md" >}}) blocks.

---

## 7. Related Features

- [Set Value]({{< relref "core-actions/assignment.md" >}}): For standard field updates and simple variable calculations.
- [Sub-Rule]({{< relref "core-actions/sub-rule.md" >}}): To execute another visual rule rather than a code process.

---

## 8. Developer & Technical Details

For process registration, adapter class structures, and schema validation mechanics:
- [Advanced Process Architecture Reference]({{< relref "advanced-reference/architecture/actions/advanced-process.md" >}})
