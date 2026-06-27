---
title: Repeat (Loop)
description: Iterate over a list of items and execute a sequence of actions for each.
weight: 60
aliases:
  - /docs/actions/loop/
---

# Repeat Action (Loop)

The **Repeat** action (internally called **Loop**) allows you to iterate over a collection of items—such as rows in a child table or results from a **Query Records** block—and execute a specific execution path for each item.

## How it Works

1.  **Iterator**: You define which list to iterate over (e.g., `doc.items` or `vars.query_results`).
2.  **Item Alias**: You define a name for the current item (e.g., `item` or `row`). This variable is updated in every iteration.
3.  **The Loop Path**: The engine follows the **True** branch for every item in the list.
4.  **The Exit Path**: Once all items have been processed, the engine follows the **False** branch to continue the rest of the rule.

## Configuration

### 1. Iterator
An expression that resolves to a list or tuple.
- Example: `doc.items` (standard Frappe child table).
- Example: `vars.matching_invoices` (result from a previous Query Records block).

### 2. Item Alias (Return Variable)
The name of the variable that will hold the current item during each iteration.
- Default: `item`.
- Accessible as: `vars.item` (or your custom name).

### 3. Loop Metadata
Inside the loop, FlexiRule providing a special `vars.loop` object with useful metadata:
- `vars.loop.index`: The current iteration index (starting from 0).
- `vars.loop.length`: The total number of items in the list.
- `vars.loop.first`: Boolean, `true` if this is the first iteration.
- `vars.loop.last`: Boolean, `true` if this is the last iteration.

## Execution Semantics

- **Top-to-Bottom Iteration**: The loop processes items in the order they appear in the input list.
- **State Preservation**: Variables modified inside the loop persist across iterations and after the loop completes.
- **Safety**: FlexiRule's global iteration limit (1000 steps) applies to loops to prevent accidental infinite recursion.

## Example: Apply Discount to All Items

**Scenario**: You want to set a 10% discount on every row in a Sales Order items table.

1.  **Repeat Block**:
    - **Iterator**: `doc.items`
    - **Alias**: `row`
    - **Next (True)**: Connect to an **Assignment** block.
    - **Next (False)**: Connect to the rest of your rule (e.g., a "Notify" block).
2.  **Assignment Block**:
    - **Target**: `vars.row.discount_percentage`
    - **Value**: `10`
    - **Next**: Connect back to the **Repeat** block to continue iteration.

## Best Practices

- **Connect Back**: Ensure the last node in your loop path connects back to the **Repeat** block to trigger the next iteration.
- **Use Sub-rules for Complexity**: If the logic inside your loop is more than 3-4 nodes, move it into a **Sub-rule** for better readability and maintainability.
- **Filtering**: Instead of looping over a large list and using a **Condition** block inside to skip items, try to filter the list *before* it reaches the loop (e.g., using a Query Records with specific filters).

## Common Mistakes

- **Wrong Path**: Forgetting to connect the final step of the loop back to the Repeat node. If you don't connect back, the loop will only run for the first item.
- **Variable Overlap**: If you have nested loops, ensure they use different **Item Aliases** to avoid one loop overwriting the data of another.
