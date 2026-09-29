---
title: Quick Start
description: Build your first automation visually in under 5 minutes.
weight: 100
---

# Quick Start Guide

Build a visual rule in under 5 minutes that alerts you whenever a high-value Sales Invoice is created.

---

## 1. Create your First Rule
1. Go to **FlexiRule -> Rule List** and click **New**.
2. Set **Rule Name** to `High Value Alert`.
3. Set **Document Type** to `Sales Invoice`.
4. Set **Trigger Event** to `Before Save`.
5. Click **Save**.

---

## 2. Open the Visual Rule Builder
1. Click **Open Rule Builder** at the top of the form.
2. You will see the visual canvas containing the mandatory **Start (Entry Action)** node.

---

## 3. Add a Check (Condition) Node
1. Hover over the **Start** node's connection port and click the **+ Add Action** button.
2. Select **Check** (Condition) from the action list.
3. In the configuration panel on the right:
   - Ensure Group Logic is set to **ALL**.
   - Click **Add Condition**.
   - Click the left value field and type `@` to open the **Smart Value Selector**.
   - In the search popup, search for `Grand Total`.
   - Select **Sales Invoice → Grand Total**.
   - Set the comparison operator dropdown to **Is Greater Than**.
   - In the right value field, enter `10000`.

---

## 4. Add a Notification Node
1. Click and drag a connection line from the **True** (Green) outbound port of the Check node.
2. Select **Notify** from the action picker.
3. In the Notify configuration panel:
   - Set **Channel / Mode** to `UI Message (Toast)`.
   - Click inside the **Message** editor field.
   - Enter `💰 High value invoice detected! Invoice ID: `.
   - Type `@` to open the **Smart Value Selector**.
   - Search for `Name` and select **Sales Invoice → Name** to dynamically insert the document ID token.

---

## 5. Test Your Rule Visually
1. Click **Test Run** in the top action bar.
2. Select an existing Sales Invoice record with a Grand Total above 10,000.
3. Click **Run Test**.
4. Observe the green execution path highlighted on your canvas leading to the Notify block, along with the live toast notification preview!

---

## 6. Go Live
1. Close the Rule Builder using the **Close** button.
2. On the main Rule document, check the **Enabled** box.
3. Click **Save**. Your rule is now active!

---

## Visual Design Best Practices
- **Use the Smart Value Selector**: Always use `@` or click the **Variable (@)** button to pick document fields rather than typing field names manually.
- **Connect Every Node**: Ensure outbound ports are connected to downstream actions so the execution flow completes seamlessly.
