---
title: Rule Lifecycle
description: Learn how to manage rules from creation to activation and update.
weight: 70
---

# Rule Lifecycle

Every automation you build in FlexiRule follows a clear path from a simple idea to a live business process. Understanding this lifecycle ensures you can safely build, test, and update your logic without interrupting your daily operations.

## The Six Stages of a Rule

### 1. Creation
Start by giving your rule a name and choosing the Document Type it applies to. This creates a new **Draft** rule and opens the visual canvas.

### 2. Configuration
Define **When** the rule should run (the Trigger) and **What** it should do (the Logic).
- Use the **Rule Configuration** modal for global settings.
- Use the **Canvas** to draw your business flow.
- Use **Action Settings** to fine-tune each step.

### 3. Activation
When your logic is complete and tested, click the **Activate** button.
- **Validation**: FlexiRule checks for missing connections or incomplete settings.
- **Locking**: Once active, the rule is locked. You cannot edit a live rule directly, ensuring that no "work-in-progress" changes affect your business data.

### 4. Execution
The rule is now "Live." Whenever the trigger event occurs (e.g., a Sales Order is saved), FlexiRule automatically runs your logic. You can monitor this in the **Execution Logs**.

### 5. Update (Amending)
To change a live rule, use the **Amend Rule** button.
- FlexiRule creates a new **Draft** version of your rule.
- The original version stays **Active** and continues to run.
- You can work on the new version safely in the background. When you activate the new version, it will replace the old one.

### 6. Deactivation
If a rule is no longer needed, you can set it to **Disabled** or **Archived**.
- **Disabled**: The rule stops running but can be easily re-activated later.
- **Archived**: The rule is retired and kept only for historical reference.

---

## Rule States at a Glance

You can see the current state of a rule in the **Status Badge** at the top of the page.

| State | Runs on Events? | Can be Edited? | Purpose |
| :--- | :---: | :---: | :--- |
| **Draft** | No | **Yes** | Building and testing new logic. |
| **Active** | **Yes** | No | Live automation. Locked for safety. |
| **Disabled** | No | **Yes** | Temporarily paused logic. |
| **Archived** | No | No | Retired logic for historical records. |

---

## Best Practices for Lifecycle Management

-   **Always Test First**: Use the **Debug Rule** tool while in the **Draft** stage. It allows you to simulate execution with real data without actually changing any records.
-   **Clear Naming**: When amending rules, the version history can grow. Use clear names and descriptions to help your team understand why changes were made.
-   **Monitor New Rules**: After activating a new or updated rule, keep an eye on the **Execution Logs** for the first few hours to ensure it's behaving exactly as expected in the "real world."
