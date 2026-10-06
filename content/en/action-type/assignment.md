---
title: Set Value (Assignment)
description: Update document fields or store values in rule variables using a visual configuration grid.
weight: 80
entity_kind: action_operation
category: data-operations
mutation: true
targets: ["Frappe DocType", "Context Variable"]
---

# Set Value (Assignment) Action

The **Set Value** action is the primary way to update document fields or store calculations in rule variables as execution flows through your rule.

---

## 1. What is it?

A Set Value block allows you to make one or more changes in sequence. You can set a document field (like setting Status to "Approved"), update temporary rule variables, or perform numeric calculations like incrementing a total.

---

## 2. When to Use

Use the Set Value action when you need to:
- **Update fields on the triggering document** (e.g., set `Workflow State` to `"Approved"` or `Posting Date` to today).
- **Store temporary values** in rule variables (`@vars`) to use in downstream steps or calculations.
- **Perform numeric operations** such as adding to or subtracting from existing totals.
- **Manage collections** by appending items to list variables.

---

## 3. How to Configure

1. **Add the Action**: Add a **Set Value** block to your visual canvas.
2. **Add an Assignment Row**: Click **Add Row** in the configuration grid.
3. **Select Target**:
   - Click the **Target** field.
   - Use the picker or search to choose whether you are updating a **Document Field** (e.g., `Status`) or a **Rule Variable** (e.g., `vars.discount_rate`).
4. **Choose an Operator**:
   - **Set**: Replaces the target with a new value.
   - **Clear**: Resets the target to empty.
   - **Increment / Decrement**: Adds or subtracts a number from the current target value.
   - **Append**: Adds an item to a list variable.
   - **Toggle**: Inverts a true/false boolean.
5. **Set Value using Smart Value Selector**:
   - Click the **Value** field.
   - Type `@` or `/` or click the picker icon to open the **Smart Value Selector**.
   - Pick a document field, variable, system value, or formula.
6. **Optional Row Condition ("When")**:
   - Click **Add Condition** on a row if this specific update should only run under certain conditions.

---

## 4. UI Configuration Options

| Option | Description |
| :--- | :--- |
| **Target Field** | Select a document field (`doc.field`) or temporary variable (`vars.name`). |
| **Operator** | `Set`, `Clear`, `Increment`, `Decrement`, `Append`, `Merge`, or `Toggle`. |
| **Value Input** | Enter values using the **Smart Value Selector** (Static value, `@ Variable`, or `/ Resolver`). |
| **When Condition** | Optional boolean check evaluated before applying this specific row update. |

---

## 5. Practical Example

### Scenario: Calculate Discount and Update Workflow State

To calculate a customer discount and set the workflow status:

1. Add a **Set Value** action and add three configuration rows:
2. **Row 1 (Rule Variable Calculation)**:
   - **Target**: `vars.discount_rate`
   - **Operator**: `Set`
   - **Value**: Open Smart Value Selector → Choose Formula → `doc.loyalty_points * 0.01`
   - **When Condition**: `doc.loyalty_points > 100`
3. **Row 2 (Document Field Update)**:
   - **Target**: `doc.discount_amount`
   - **Operator**: `Set`
   - **Value**: Open Smart Value Selector → Choose Formula → `doc.grand_total * vars.discount_rate`
4. **Row 3 (Status Update)**:
   - **Target**: `doc.workflow_state`
   - **Operator**: `Set`
   - **Value**: `"Discount Applied"`

---

## 6. Common Mistakes

- **Incorrect Field Target**: Choosing `status` instead of selecting `doc.status` from the target picker.
- **Updating Read-Only Fields After Save**: Trying to update `@doc` fields during `After Save` or `On Submit` events. Use an [Update Record]({{< relref "action-type/update-record/" >}}) action when updating existing database records outside the initial save.
- **Using Uninitialized Variables**: Referencing `@vars.discount_rate` in a downstream action when the row that creates it was skipped due to a false row condition.

---

## 7. Related Features

- [Smart Value System]({{< relref "rule-builder/smart-value-system.md" >}}): Learn how to discover and input values visually.
- [Update Record]({{< relref "action-type/update-record/" >}}): Use Update Record when modifying other database documents or changing submitted records.

---

## 8. Developer & Technical Details

For information on path resolution, sequential mutation mechanics, and value normalization pipelines:
- [Assignment Architecture Reference]({{< relref "advanced-concepts/architecture/actions/assignment.md" >}})
