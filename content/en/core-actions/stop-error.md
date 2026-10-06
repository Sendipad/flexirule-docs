---
title: Stop / Error
description: Terminate rule execution cleanly or display a validation error message to block document saving.
weight: 100
entity_kind: action_operation
category: logic-control
mutation: false
targets: ["Rule Execution", "Validation Error"]
---

# Stop / Error Action

The **Stop / Error** action is a terminal block in a rule flow that controls how rule execution finishes—either exiting quietly or throwing a validation error to prevent a document save.

---

## 1. What is it?

A Stop / Error block ends rule processing. Depending on how you configure its mode, it can either:
- **Stop (Exit)**: End rule execution quietly when conditions fail, allowing normal processing to continue.
- **Error (Validation Error)**: Display an error dialog to the user and prevent the document from saving or submitting.

```
Check (Valid Tax ID?) ─── False ───→ Stop / Error (Error Mode: "Tax ID is required!")
```

---

## 2. When to Use

Use the Stop / Error action when you need to:
- **Block invalid document saves** (e.g., prevent submitting an invoice without a required purchase order number).
- **Exit early from a rule flow** when preconditions fail (e.g., exit cleanly if the document is not in Draft state).
- **Provide clear validation feedback** to users directly on their screen.

---

## 3. How to Configure

1. **Add the Action**: Add a **Stop / Error** block at the end of a rule branch.
2. **Select Mode**:
   - **Error Mode**: Displays an error popup and cancels the document save/submit.
   - **Stop Mode**: Exits rule execution cleanly with no error popup.
3. **Configure Error Message (for Error Mode)**:
   - Click the **Message** field.
   - Use the **Smart Value Selector** to compose a dynamic message including document fields (e.g., `"Sales Order {doc.name} requires a Tax ID for totals above 10,000."`).
4. **Set Error Title (Optional)**:
   - Enter a title header displayed on the error popup dialog (e.g., `"Validation Error"`).

---

## 4. UI Configuration Options

| Option | Description |
| :--- | :--- |
| **Mode** | Select **Error** (blocks save with error dialog) or **Stop** (silent early exit). |
| **Message** | Error message template constructed using the **Smart Value Selector**. |
| **Title** | Optional dialog header title displayed to the user. |

---

## 5. Practical Example

### Scenario: Prevent Sales Order Submission Without Tax ID

1. **Check Block**: Is `Tax ID` (`@doc.tax_id`) empty **AND** `Grand Total` (`@doc.grand_total`) greater than `10,000`?
2. **True Branch**: Connect to **Stop / Error** block.
3. **Stop / Error Configuration**:
   - **Mode**: `Error`
   - **Title**: `"Tax ID Required"`
   - **Message**: `"Sales Order {doc.name} cannot be saved without a valid Tax ID for orders above 10,000."`

---

## 6. Common Mistakes

- **Confusing Silent Stop with Error**: Using *Stop* mode when you intended to prevent a document save (Silent Stop allows the document to save normally).
- **Generic Error Messages**: Showing generic text like `"Invalid data"` instead of telling the user specifically what field needs fixing.
- **Adding Unnecessary Stop Nodes**: Placing a Stop node at the end of every branch. Rules automatically finish when an outbound branch reaches its end naturally.

---

## 7. Related Features

- [Check (Condition)]({{< relref "core-actions/condition.md" >}}): Use Check blocks before Stop / Error actions to evaluate validation conditions.
- [Smart Value System]({{< relref "using-the-builder/smart-value-system.md" >}}): How to insert document values into error message templates.

---

## 8. Developer & Technical Details

For exception handling mechanisms and template rendering mechanics:
- [Stop Architecture Reference]({{< relref "advanced-reference/architecture/actions/stop.md" >}})
