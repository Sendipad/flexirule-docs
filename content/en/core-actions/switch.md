---
title: Switch
description: Create multi-path logic based on a specific value.
weight: 70
aliases:
  - /docs/actions/switch/
---

# Switch Action

The **Switch** action is like a "multi-choice" version of the Condition node. Instead of just True or False, it allows you to create many different paths based on the value of a specific field.

## When to Use
- **Status Routing**: "If Status is 'New', do A; if 'Pending', do B; if 'Approved', do C."
- **Regional Logic**: "Route orders based on the Territory (e.g., North, South, East, West)."
- **Priority Handling**: "Handle 'High', 'Medium', and 'Low' priority tickets differently."

## Configuration

1.  **Field to Check**: Select the field or variable you want to evaluate (e.g., `doc.status`).
2.  **Add Cases**: For every value you want to handle, add a "Case".
    - **Value**: The specific value to match (e.g., `Draft`).
    - **Path**: A new connection point will appear on the node for this value.
3.  **The Default Path**: This is the "Fallback" path. If the value doesn't match any of your cases, the rule will follow this path.

## Switch vs. Condition
- Use a **Condition** for simple "Yes/No" or "True/False" checks.
- Use a **Switch** when you have 3 or more distinct options. It keeps your canvas much cleaner than chaining multiple Condition nodes together.

---
**Tip**: Always configure the **Default** path to handle unexpected values and prevent your rule from getting "stuck".
