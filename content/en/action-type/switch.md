---
title: Switch
description: Route rule execution down multiple matching branches based on key value comparisons.
weight: 70
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Frappe DocType", "Context Variable"]
aliases:
  - /docs/actions/switch/
---

# Switch Action

The **Switch** action (internal handler: `SwitchHandler`) provides multi-way value branching, routing execution down matching case branches based on an evaluated target expression.

---

## 1. When to Use

Use the Switch action when you need to:
- Route logic based on categorical fields with more than two outcomes (e.g., `doc.status`, `doc.territory`, `doc.customer_group`).
- Replace multiple nested **Check (Condition)** nodes with a single clean multi-port branching block.
- Fallback safely to a Default branch when no explicit cases match.

---

## 2. Configuration

### Configuration Fields
- **Target Value**: Field or variable evaluated by the switch (e.g., `@doc.status` or `@vars.category`).
- **Cases List**: Define case key values (e.g., `"Pending"`, `"Approved"`, `"Rejected"`).
- **Default Branch**: Fallback outbound edge executed when no defined cases match.

---

## 3. Output

- **Multi-Port Branching**: Execution proceeds down the outbound port corresponding to the matching case key.
- **Return Contract**: Returns `{"matched_case": "Approved", "target_value": "Approved"}`.

---

## 4. Example

### Scenario: Route Support Tickets by Priority

1. **Switch Configuration**:
   - **Target**: `@doc.priority`
   - **Cases**: `"High"`, `"Medium"`, `"Low"`
2. **Branch Outputs**:
   - **Case "High"**: Connect to **Notify** (SMS alert to On-Call Engineer).
   - **Case "Medium"**: Connect to **Notify** (Email to Support Queue).
   - **Case "Low"**: Connect to **Set Value** (`doc.sla_days = 5`).
   - **Default**: Connect to **Set Value** (`doc.sla_days = 3`).

---

## 5. Performance Notes

- **O(1) Hash Lookup**: Case evaluation matches keys in constant time $O(1)$, making it significantly faster than chaining 5+ Check nodes.

---

## 6. Common Mistakes

- **Case-Sensitivity Mismatches**: Matching `"high"` against `"High"` without normalizing string casing first.
- **Unconnected Default Branch**: Leaving the Default port empty, causing execution to halt unexpectedly when an unhandled value is encountered.
