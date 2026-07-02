---
title: High Performance Optimization
description: Techniques and best practices for ensuring FlexiRule runs efficiently at scale.
weight: 20
---

# Optimization Strategies

While FlexiRule is fast out-of-the-box, follow these strategies to ensure optimal performance as your rule library grows.

## 1. Selective Triggers
Use the **Rule Condition** field on the main Rule document to filter out documents before the engine even starts.
- **Good**: `doc.grand_total > 5000` (Fast, happens at the registry level).
- **Avoid**: Loading a 50-node graph only to have the first node be a condition that checks the total.

## 2. Limit Watched Fields
FlexiRule automatically watches fields used in your conditions. If you have a very complex rule that shouldn't run on every small change, you can manually specify **Watched Fields**.
- The rule will only trigger if one of those specific fields is modified.

## 3. Efficient Assignments
When using the **Assignment** action, try to group related updates into a single node.
- Each node has a small overhead. 1 node with 5 set-value rows is slightly faster than 5 nodes with 1 row each.

## 4. Query Records Best Practices
The **Query Records** action can be the most expensive node in a rule.
- **Use Filters**: Never query without filters if you expect many records.
- **Limit Results**: If you only need to know if *any* record exists, use `Limit: 1`.
- **Select Specific Fields**: Only fetch the fields you actually need instead of the whole document.

## 5. Async for External Calls
If your rule calls an external API or performs a heavy calculation that doesn't need to be immediate, always use the **Run Asynchronously** option. This prevents the user's "Save" action from hanging while waiting for the external process.
