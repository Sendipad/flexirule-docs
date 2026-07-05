---
title: Rule Configuration
description: Learn how to set up the global settings for your rule.
weight: 30
---

# Rule Configuration

Before you start drawing logic on the canvas, you need to define the "Who, When, and How" of your rule. This is handled in the **Rule Configuration** section, which you can access via the **Configure** button or when creating a new rule.

## Setup Flow

Configuring a rule typically follows these steps in the UI:

### 1. Basic Information
-   **Rule Name**: Give your rule a clear, descriptive name (e.g., "Auto-Approve Low Value Orders").
-   **Document Type**: Select the type of record this rule applies to (e.g., "Sales Order" or "Support Ticket").

### 2. The Trigger (When)
The **Trigger** defines the specific event that wakes up the rule.
-   **Events**: Common triggers include `Before Save`, `After Save`, `On Submit`, or `On Cancel`.
-   **Trigger Condition**: You can define a high-level "gatekeeper" condition. If this condition isn't met, the rule won't even start, saving system resources.
    -   *Example*: `Total Amount > 500`

### 3. Execution Order (Priority)
If you have multiple rules running on the same event (e.g., three different rules that all run "Before Save" on a Sales Order), you can control which one runs first using **Priority**.
-   Rules with a **higher number** run first.
-   *Tip*: Use this if Rule B depends on a value calculated by Rule A.

## The Configuration Modal

When you click **Configure** on an existing rule, a modal appears allowing you to adjust these settings without leaving the canvas.

### Dynamic Setup
As you select different Document Types, the available fields for your **Trigger Condition** will automatically update to match. The **Smart Value Selector** is used here to help you pick fields and define logic easily.

## Advanced Setup (Optional)

### Order of Operations
In the configuration UI, you can also see a summary of how the rule is positioned relative to other rules in your system. This "execution stack" view helps you ensure that your automation doesn't conflict with other active rules.

### Performance Settings
For advanced users, the configuration may include toggles for:
-   **Asynchronous Execution**: Allowing the rule to run in the background so the user doesn't have to wait for it to finish.
-   **Logging Level**: Controlling how much detail is saved in the execution logs for this specific rule.

## Transitioning to the Canvas
Once your configuration is saved, the **Start** block on the canvas is automatically updated with your document context. Any variables or fields related to your chosen Document Type will now be available in the **Smart Value Selector** throughout your rule.
