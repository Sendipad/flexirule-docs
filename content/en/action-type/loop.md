---
title: Repeat (Loop)
description: Iterate over child table rows or query result collections to run actions for each item in the UI.
weight: 40
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
aliases:
  - /docs/actions/loop/
---

# Repeat (Loop) Action

The **Repeat** action iterates over a list of items—such as child table rows (`Items`) or records returned by a **Query Records** block—running a set of actions for each item before continuing through the rest of the rule.

---

## 1. What is it?

The Repeat block lets you automate actions on lists of records. It loops through a collection item by item, making the current row available to downstream actions through a item alias (like `@vars.item` or `@vars.row`).

```
                ┌── Loop Body ──→ Action (Set Value / Check)
                │                      │
Repeat ─────────┼←─────────────────────┘
 (Collection)   │
                └── Exit ───────→ Downstream Action
```

---

## 2. When to Use

Use the Repeat action when you need to:
- **Process every row in a child table** (e.g., check stock or update prices on every item line in an invoice).
- **Iterate over retrieved records** returned by a Query Records block.
- **Perform calculations or validations across collections** row by row.
- **Send notifications or create records** for each item in a list.

---

![Repeat action showing nested sub-nodes](/images/action-card-sub-nodes.png)

## 3. How to Configure

1. **Add the Action**: Add a **Repeat** block to your visual canvas.
2. **Select Collection Source**:
   - Click the **Collection** field.
   - Use the **Smart Value Selector** to select a child table (e.g., `Items` or `doc.items`) or a query result (e.g., `vars.open_invoices`).
3. **Set Item Alias**:
   - Enter a variable name to represent the active row during iteration (default is `item`, accessed as `@vars.item` or `@vars.row`).
4. **Connect Outbound Branches**:
   - **Loop Branch (Loop Body)**: Connect to the first action you want to run for each row.
   - **Loop Back Connection**: Connect the final action inside the loop back to the Repeat block so it can advance to the next item.
   - **Exit Branch (Completed)**: Connect to the action that should run after all rows have been processed.

---

## 4. UI Configuration Options

| Option | Description |
| :--- | :--- |
| **Collection Source** | Select the child table or array variable to iterate over using the **Smart Value Selector**. |
| **Item Alias** | Set the name used to reference the active row in downstream actions (e.g., `row` gives `@vars.row`). |
| **Loop Metadata** | Automatically provides iteration info during each loop cycle: |
| | - `vars.loop.index`: Current row index (0, 1, 2...). |
| | - `vars.loop.length`: Total number of rows in collection. |
| | - `vars.loop.first`: `true` on the first row. |
| | - `vars.loop.last`: `true` on the final row. |

---

## 5. Practical Example

### Scenario: Calculate Line Item Discounts

To calculate a 10% discount on every row in a Sales Order:

1. **Repeat Block Configuration**:
   - **Collection**: Select `Items` (`doc.items`) using Smart Value Selector.
   - **Item Alias**: Enter `row`.
2. **Inside Loop Body (Set Value Block)**:
   - **Target**: `vars.row.discount_amount`
   - **Value**: Open Smart Value Selector → Choose Formula → `vars.row.rate * 0.10`
   - **Outbound Edge**: Connect back to the **Repeat** block.
3. **Exit Branch**:
   - Connect the **Exit** branch of Repeat to a **Set Value** block (`doc.discount_calculated = true`).

---

## 6. Common Mistakes

- **Forgetting the Loop-Back Edge**: Omitting the return arrow from the last action in the loop body back to the Repeat block. Without it, the loop only processes the first row.
- **Nested Item Alias Collisions**: Reusing the same Item Alias name (e.g. `item`) in nested loops, which overwrites the outer loop's active item.
- **Running Unnecessary Queries Inside Loops**: Placing single database queries inside a loop body instead of running a single **Query Records** action before entering the loop.

---

## 7. Related Features

- [Query Records]({{< relref "action-type/query-records/" >}}): Fetch collections of database records to process in a Repeat loop.
- [Check]({{< relref "action-type/condition.md" >}}): Check conditions on individual items within a loop.

---

## 8. Developer & Technical Details

For information on loop state storage, context pointers, and iteration safety ceilings:
- [Loop Architecture Reference]({{< relref "advanced-concepts/architecture/actions/loop.md" >}})
