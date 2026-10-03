---
title: Quick Start Guide
description: Build your first visual automation in under 5 minutes starting from the RuleFlow Workspace.
weight: 100
---

# Quick Start Guide

Build a visual rule in under 5 minutes that alerts you whenever a high-value **Sales Invoice** is created in ERPNext.

---

## 1. Navigate to the RuleFlow Workspace
In Frappe / ERPNext, access FlexiRule using either method:
- **Sidebar**: Click **RuleFlow** in the main application navigation bar.
- **Awesomebar**: Type `RuleFlow` in the top search bar (`Ctrl K` or `Cmd K`) and press **Enter**.

The **RuleFlow Workspace** is your central control center. It provides quick access shortcuts:
- **New Rule**: Immediately creates a new rule document.
- **Rule List**: View and manage all existing rules.
- **Rule Builder**: Open the full-screen visual canvas engine.
- **Execution Logs**: Inspect historical rule execution activity.

---

## 2. Create Your First Rule
1. On the **RuleFlow Workspace**, click the **New Rule** shortcut button (or type `New Rule` in the Awesomebar).
2. On the Rule form, fill in the basic configuration:
   - **Rule Name**: `High Value Invoice Alert`
   - **Target DocType**: `Sales Invoice`
   - **Trigger Event**: `Before Save` (runs automatically when a Sales Invoice is saved)
3. Click **Save** in the top right corner.

---

## 3. Open the Visual Rule Builder
1. With your rule saved, click the **Rule Builder** button in the document action bar (or click **Rule Builder** from the workspace).
2. The visual Rule Builder canvas opens, displaying the mandatory **Start (Entry Action)** node with a green play icon <i class="fa fa-play"></i>.

---

## 4. Add a Check (Condition) Action
1. Hover over the connector line below the **Start** node and click the **+ Add Action** button (or press `Ctrl K` to open the Command Palette).
2. In the Action Palette drawer, under **Logic & Flow**, select **Check** <i class="fa fa-code-fork"></i>.
3. The **Check Settings** panel opens on the right (or via modal dialog depending on your preference):
   - Set **Match Logic** to **ALL (AND)**.
   - Click **Add Condition**.
   - Click the left value input field and press `@` to open the **Smart Value Selector**.
   - Search for `Grand Total` and select **Sales Invoice → Grand Total** (`@doc.grand_total`).
   - Set the operator dropdown to **Is Greater Than**.
   - In the right value field, enter `10000`.

---

## 5. Add a Notify Action
1. On the canvas, find the **True** (Green) output connector port coming out of the **Check** node.
2. Click and drag from the **True** port, or click the **+ Add Action** icon on the True branch.
3. In the Action Palette drawer, select **Notify** <i class="fa fa-bell"></i> under **Communication & Notifications**.
4. In the Notify configuration panel:
   - Set **Notification Channel** to `UI Message (Toast)`.
   - In the **Message** content box, type:
     `💰 High value invoice detected! Invoice ID: `
   - Press `@` to trigger the **Smart Value Selector**, search for `Name`, and pick **Sales Invoice → Name** (`@doc.name`).

---

## 6. Test & Debug Your Rule Visually
1. In the top action bar of the Rule Builder, click **Debug** <i class="fa fa-bug"></i> (or press `Alt D`).
2. In the **Debug Panel**, select an existing test **Sales Invoice** document with a Grand Total over 10,000.
3. Click **Run Test**.
4. Watch the canvas highlight the execution path in green, showing each step's status, duration, and output variables!

---

## 7. Activate Your Rule
1. Return to the Rule document form by closing the Rule Builder or using the breadcrumbs.
2. Check the **Is Active** checkbox.
3. Click **Save**.

Your visual rule is now live! Whenever a Sales Invoice with a Grand Total over 10,000 is saved, FlexiRule will automatically evaluate the condition and display the high-value toast notification.

---

## Visual Design Tips
- **Smart Value Selector (`@`)**: Always use `@` or click the variable button to reference fields dynamically rather than typing string text manually.
- **Action Config Modes**: You can switch between **Workspace 3-Panel View** (Schema / Canvas / Configuration side-by-side) and **Dialog View** via **Preferences** <i class="fa fa-sliders"></i> in the top menu bar.
