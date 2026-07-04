---
title: Stop / Error
description: End your rule or show an error message to the user.
weight: 100
---

# Stop / Error

The **Stop / Error** action allows you to end a rule's execution. You can choose to stop quietly or stop with a message that tells the user something went wrong.

## When to Use It
- **Stop Quietly**: End the rule if certain conditions are met and no more steps are needed.
- **Show an Error**: Prevent a user from saving a document if it doesn't meet your business rules (e.g., "You cannot save this order without a delivery date").
- **Cancel Changes**: If your rule hits an Error block, it will automatically cancel (rollback) any changes it made during that run to keep your data safe.

## Action Modes

### 1. Stop (Success)
The rule ends immediately and all changes made so far are saved.
- **Use case**: "If the customer is a VIP, do all these extra steps; if not, just Stop."

### 2. Raise Error
The rule stops and a popup message appears for the user.
- **Use case**: "Stop! You cannot submit a Sales Order for this customer because they have exceeded their credit limit."
- **Helpful Messages**: You can include document details in your message to help the user, like "Error: The quantity for {{ doc.item_code }} must be at least 1."

## Tips for Success
- **Be Helpful**: When using "Raise Error", always provide a clear message so the user knows exactly what they need to fix.
- **Early Exits**: Use a Check block followed by a Stop block at the very beginning of your rule to exit quickly if the document doesn't need to be processed. This keeps your system running fast.
- **Automatic Ending**: You don't always need a Stop block. If a path in your rule just ends, the system will finish the rule successfully by itself.
