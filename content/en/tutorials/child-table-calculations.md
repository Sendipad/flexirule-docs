---
title: "Recipe: Work with Child Tables and Item Calculations"
description: "Learn how to visually iterate over child table items, evaluate row attributes using the Smart Value Selector, and calculate discounts."
weight: 30
---

# Recipe: Work with Child Tables and Item Calculations

Child tables (such as Sales Order Items, Purchase Invoice Items, or Quotation Items) contain multi-row details. Automating line item calculations requires looping through rows and applying transformations visually.

In this recipe, you will build a rule that iterates through **Sales Order Items**, checks line item properties, and applies discounts.

---

## Scenario Overview

**Business Goal**: Apply a **10% promotional discount** to all line items belonging to the `"Electronics"` item group in a Sales Order before saving.

- **Target DocType**: `Sales Order`
- **Trigger Event**: `DocType Event` -> `Before Save`
- **Visual Nodes**: `Start` -> `Repeat (Loop)` -> `Check` -> `Set Value`

---

## Step-by-Step UI Instructions

### Step 1: Create the Rule
1. Navigate to **FlexiRule -> Rule List -> New**.
2. Set **Rule Name** to `SO - Electronics Item Discount`.
3. Set **Document Type** to `Sales Order`.
4. Set **Trigger Event** to `Before Save`.
5. Click **Save** and open the **Rule Builder**.

---

### Step 2: Add and Configure the Repeat (Loop) Node
1. Connect a **Repeat (Loop)** node from the **Start** node's outbound port.
2. In the Repeat configuration panel:
   - Click the **Collection Source** field and type `@` to open the **Smart Value Selector**.
   - Search for `Items` and select **Sales Order → Items (Child Table)**.
   - Set **Item Alias** to `item` (this creates a temporary loop variable for the active row).

---

### Step 3: Add Check Node Inside the Loop Body
1. From the **Loop** (True/Body) outbound port of the Repeat node, connect a **Check** node.
2. In the Check configuration panel:
   - Click the left value field and type `@` to open the **Smart Value Selector**.
   - Navigate to **Loop Context (item)** and select **item → Item Group**.
   - Set the Operator dropdown to **Equals**.
   - In the right value field, enter `Electronics`.

---

### Step 4: Calculate Line Discount using Set Value
1. From the **True** outbound port of the Check node, connect a **Set Value** node.
2. In the Set Value configuration panel:
   - Click **Add Assignment**.
   - Click the **Target Path** field, type `@`, navigate to **Loop Context (item)**, and select **item → Discount Percentage**.
   - Set **Operator** to `Set`.
   - In the **Value** field, enter `10`.
3. Drag a connection from the outbound port of the Set Value node **back to the Repeat node** to continue the loop for remaining items.

---

### Step 5: Test and Save
1. Click **Test Run** in the action bar and select a Sales Order containing Electronics items.
2. Click **Run Test** and observe the visual execution path looping through line items.
3. Enable the rule and save.

---

## Key Takeaways

- **Loop Connections**: Always connect the final node in a loop body back to the **Repeat** node to continue processing remaining rows.
- **Loop Variables**: Use the Smart Value Selector to pick fields on the current loop row under **Loop Context (<alias>)**.
