---
title: "Recipe: Work with Child Tables and Item Calculations"
description: "Learn how to iterate over child table rows, calculate line item discounts, and aggregate row totals."
weight: 30
---

# Recipe: Work with Child Tables and Item Calculations

Child tables (such as Sales Order Items, Purchase Invoice Items, or Quotation Items) represent line-item details in Frappe documents. Automating child tables requires iterating through individual rows or aggregating row values.

In this recipe, you will build a rule that loops through **Sales Order Items**, applies line discounts based on item group, and updates line item totals.

---

## Scenario Overview

**Business Need**: Automatically apply a **10% promotional discount** to all line items belonging to the `"Electronics"` item group in a Sales Order before saving.

- **Target DocType**: `Sales Order`
- **Trigger Event**: `DocType Event` -> `Before Save`
- **Actions Used**: `Repeat` (Loop) -> `Check` -> `Set Value`

---

## Step-by-Step Configuration

### Step 1: Create the Rule
1. Go to **Rule List -> New**.
2. Set **Rule Name**: `"SO - Electronics Item Discount"`.
3. Set **Document Type**: `"Sales Order"`.
4. Set **Trigger Event**: `"Before Save"`.
5. Open the **Rule Builder**.

### Step 2: Add the Repeat (Loop) Node
1. Connect a **Repeat** node from **Start**.
2. Set **Collection Source**: `@doc.items`
3. Set **Item Alias**: `item` (accessible via `@vars.item`).

### Step 3: Add Check Node Inside Loop
1. From the **Loop** port (True/Body) of the Repeat node, connect a **Check** node.
2. Configure condition:
   - `@vars.item.item_group` `equals` `"Electronics"`

### Step 4: Calculate Line Discount using Set Value
1. From the **True** port of the Check node, connect a **Set Value** node.
2. Add assignment row:
   - **Target**: `vars.item.discount_percentage`
   - **Operator**: `Set`
   - **Value**: `10`
3. Connect the output of the Set Value node **back to the Repeat node** to continue the loop for the next item.

### Step 5: Connect Exit Branch
1. From the **Exit** port (False/Completed) of the Repeat node, connect a final **Set Value** node (or leave open if no further actions are needed).
2. Save and activate the rule.

---

## Key Takeaways

- **Loop Connections**: Always ensure the final node in a loop body connects back to the **Repeat** node.
- **Child Row Targets**: Reference active loop row fields using `vars.<alias>.<fieldname>` (e.g., `vars.item.discount_percentage`).
