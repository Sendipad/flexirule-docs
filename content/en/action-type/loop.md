---
title: Repeat (Loop)
description: Iterate over child table rows or query collections to run actions for each item.
weight: 60
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
aliases:
  - /docs/actions/loop/
---

# Repeat (Loop) Action

The **Repeat** action (internal handler: `Loop`) iterates over a collection of items—such as child table rows (`@doc.items`) or query results (`@vars.query_results`)—executing a sub-flow for each item before exiting.

---

## 1. When to Use

Use the Repeat action when you need to:
- Process every row in a child table (e.g., validate warehouse stock for each item row).
- Perform batch field calculations across multiple child records.
- Iterate over records returned by a **Query Records** block.
- Create external records or send notifications for each record in a collection.

---

## 2. Configuration

### Configuration Fields
- **Collection Source**: Target array to iterate over (e.g., `doc.items` or `vars.open_invoices`).
- **Item Alias**: Variable name assigned to the active row during iteration (default: `item`, accessible via `@vars.item`).
- **Loop Metadata (`vars.loop`)**:
  - `vars.loop.index`: 0-based iteration index.
  - `vars.loop.length`: Total row count.
  - `vars.loop.first`: `true` if processing the first row.
  - `vars.loop.last`: `true` if processing the final row.

### Ports & Branching
- **Loop Port (True / Body)**: Connects to the action flow executed for each item.
- **Exit Port (False / Completed)**: Connects to the action flow executed after all rows have been processed.

---

## 3. Output

- **Context Variable`: Assigns `@vars.item` (or custom alias) and `@vars.loop` metadata during each iteration.
- **Branching`:
  - For each row: Follows the **Loop** branch.
  - After all rows finish: Follows the **Exit** branch.
- **Return Contract**: Returns `{"processed_count": N, "completed": true}`.

---

## 4. Example

### Scenario: Calculate Line Item Discount for Sales Order Items

1. **Repeat Block Configuration**:
   - **Collection**: `doc.items`
   - **Item Alias**: `row`
   - **Loop Branch**: Connect to **Set Value** block.
   - **Exit Branch**: Connect to **Set Value** (`doc.total_discount_calculated = true`).

2. **Set Value Block Inside Loop**:
   - **Target**: `vars.row.discount_amount`
   - **Value**: `/math_formula` (`vars.row.rate * 0.10`)
   - **Outbound Edge**: Connect back to **Repeat** node to continue next iteration.

---

## 5. Performance Notes

- **Max Safety Iteration Limit**: FlexiRule enforces a safety ceiling of **1,000 iterations** per loop node execution to catch infinite recursion.
- **In-Memory Iteration**: Iterating over local list variables adds minimal overhead compared to executing database queries inside a loop body.

---

## 6. Common Mistakes

- **Forgetting Loop Back**: Omitting the return connection from the last action in the loop body back to the Repeat block (causing the loop to execute only once).
- **Nested Alias Collisions**: Reusing the same Item Alias name (`item`) across nested loops, overwriting outer loop context.
- **Database Reads Inside Loop**: Running single `frappe.db.get_value` queries inside a loop instead of performing a single **Query Records** action before the loop.
