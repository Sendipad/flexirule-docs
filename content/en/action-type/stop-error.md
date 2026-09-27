---
title: Stop / Error
description: Terminate rule execution silently or block document saving with a custom validation error message.
weight: 100
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Rule Execution", "Validation Error"]
---

# Stop / Error Action

The **Stop / Error** action (internal handler: `simple_actions.StopActionHandler`) serves as a terminal node in the visual rule graph, controlling how rule execution terminates.

---

## 1. When to Use

Use the Stop / Error action when you need to:
- **Block Document Save/Submit**: Prevent users from saving invalid data by throwing a user-facing `frappe.ValidationError`.
- **Early Exit (Silent Stop)**: Terminate rule execution cleanly when pre-conditions fail without raising errors.
- **Rollback Changes**: Cancel pending database mutations made during the current transaction.

---

## 2. Configuration

### Configuration Options
- **Mode**:
  - `Error` (Raise Validation Error): Displays error popup and aborts transaction.
  - `Stop / Exit` (Silent Exit): Terminates rule execution cleanly without error popup.
- **Message Template**: Configured via the **Smart Value Selector** (`Static Text`, `@ Variables`, or `/ Resolvers`). Supports formatted error messages.
- **Title**: (Optional) Title header displayed on Frappe error dialogs.

---

## 3. Output

- **Terminal Node**: No outbound edges are allowed; execution halts immediately.
- **Transaction Impact**:
  - `Error Mode`: Raises `frappe.ValidationError`, causing Frappe to rollback database transaction.
  - `Stop Mode`: Completes cleanly, committing preceding in-memory `@doc` mutations.

---

## 4. Example

### Scenario: Prevent Sales Order Submission without Valid Customer Tax ID

1. **Check Node**: Is `@doc.tax_id` `is not set` AND `@doc.grand_total > 10000`?
2. **True Branch**: Connect to **Stop / Error** node.
3. **Stop / Error Configuration**:
   - **Mode**: `Error`
   - **Message**: `"Sales Order {doc.name} cannot be submitted without a valid Tax ID for orders above 10,000."`

---

## 5. Performance Notes

- **Zero DB Overhead**: Terminal checks execute immediately in memory without additional database operations.
- **Fast Exit**: Placing a **Stop (Silent Exit)** early in the flow saves CPU cycles by bypassing unnecessary downstream nodes.

---

## 6. Common Mistakes

- **Confusing Silent Stop with Error**: Using `Stop (Exit)` when you intended to prevent a document save (Silent Stop allows save to complete).
- **Generic Error Messages**: Raising unhelpful errors like `"Error occurred"` instead of providing actionable feedback to the user.
- **Redundant Stop Nodes**: Adding a Stop node at the end of every branch (FlexiRule automatically finishes execution when an outbound branch ends naturally).
